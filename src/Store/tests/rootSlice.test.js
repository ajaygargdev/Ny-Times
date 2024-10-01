import rootReducer, { changePage, fetchArticles } from "../rootSlice";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import axiosClient from "../../config/Axios.config";
import { mockData } from "./rootSlice.mock";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock("../../config/Axios.config");

describe("root slice", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      root: {
        articles: { 1: mockData.results },
        currentPage: "1",
      },
    });
  });

  test("should return the initial state", () => {
    expect(rootReducer(undefined, {})).toEqual({
      articles: [],
      copyright: "",
      isLoading: false,
      error: null,
      currentPage: "1",
    });
  });

  test("should change currentPage", () => {
    expect(rootReducer(undefined, changePage(2))).toEqual({
      articles: [],
      copyright: "",
      isLoading: false,
      error: null,
      currentPage: "2",
    });
  });

  test("test fetch articals", async () => {
    axiosClient.get.mockResolvedValue({ status: 200, data: mockData });

    await store.dispatch(fetchArticles());

    const actions = store.getActions();
    expect(actions[0].type).toBe(fetchArticles.pending.type);
    expect(actions[1].type).toBe(fetchArticles.fulfilled.type);

    expect(
      rootReducer(undefined, {
        type: "root/fetchArticles/fulfilled",
        payload: { results: mockData.results, copyright: "copyright", page: 1 },
      }),
    ).toEqual({
      articles: { 1: mockData.results },
      copyright: "copyright",
      isLoading: false,
      error: null,
      currentPage: "1",
    });
  });

  test("test fetch articals withoutArticals", async () => {
    axiosClient.get.mockResolvedValue({ status: 200, data: mockData });

    await store.dispatch(fetchArticles());

    const actions = store.getActions();
    expect(actions[0].type).toBe(fetchArticles.pending.type);
    expect(actions[1].type).toBe(fetchArticles.fulfilled.type);

    expect(
      rootReducer(undefined, {
        type: "root/fetchArticles/fulfilled",
        payload: { copyright: "copyright", page: 1 },
      }),
    ).toEqual({
      articles: { 1: [] },
      copyright: "copyright",
      isLoading: false,
      error: null,
      currentPage: "1",
    });
  });

  test("test fetch articals with error", async () => {
    axiosClient.get.mockResolvedValue({});

    await store.dispatch(fetchArticles());

    const actions = store.getActions();
    expect(actions[0].type).toBe(fetchArticles.pending.type);
    expect(actions[1].type).toBe(fetchArticles.rejected.type);
    expect(
      rootReducer(undefined, {
        type: "root/fetchArticles/rejected",
        payload: { error: "error" },
      }),
    ).toEqual({
      articles: [],
      copyright: "",
      isLoading: false,
      error: "error",
      currentPage: "1",
    });
  });
});

/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ArticleList from "../ArticleList";
import { mockData } from "./ArticalList.mock";
import { Provider } from "react-redux";
import { store } from "../../../Store/Store";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middleware = [thunk];
const mockStore = configureStore({ middleware });

// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useSelector: jest.fn(),
//   useDispatch: jest.fn(),
// }));

// require("react-redux").useSelector.mockImplementation((callback) =>
//   callback({
//     root: {
//       articles: { "1": mockData.results[0] },
//       currentPage: "1",
//     },
//   }),
// );

describe("ArticalList Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      root: {
        articles: { "1": mockData.results[0] },
        currentPage: "1",
      },
    });
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("renders without crashing", () => {

    const { container } = render(
      <Provider store={store}>
        <ArticleList />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  test("fire click on component", async () => {
    // require("react-redux").useSelector.mockImplementation((callback) =>
    //   callback({
    //     root: {
    //       articles: { "1": mockData.results[0] },
    //       currentPage: "1",
    //     },
    //   }),
    // );
    const {container,getByText} = await render(
      <Provider store={store}>
        <ArticleList />
      </Provider>,
    );
    await waitFor(async ()=>{
      const node =getByText(/The Heart-Healthy/i);
      await fireEvent.click(node);
      expect(container).toMatchSnapshot();  
    })
    // await new Promise((resolve) => setTimeout(resolve, 500));
    // console.log(screen.debug());
    // const node =await getByText(/The Heart-Healthy/i);
    // fireEvent.click(node);
    // expect(container).toMatchSnapshot();
  });
});

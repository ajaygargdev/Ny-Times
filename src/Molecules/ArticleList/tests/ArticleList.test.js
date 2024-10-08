/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ArticleList from "../ArticleList";
import { mockData } from "../../../mock";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middleware = [thunk];
const mockStore = configureStore({ middleware });

describe("ArticalList Component", () => {
  let store;
  beforeAll(() => {
    jest
      .spyOn(Date.prototype, "toLocaleDateString")
      .mockImplementation(() => "October 1, 2024");
  });

  beforeEach(() => {
    store = mockStore({
      root: {
        articles: { 1: mockData.results },
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

  test("Model Popup should open", async () => {
    await render(
      <Provider store={store}>
        <ArticleList />
      </Provider>,
    );

    const node = await screen.getByText(/The Heart-Healthy/i);
    await fireEvent.click(node);
    const modelButton = await screen.getByText(/close/i);
    expect(modelButton).not.toBeNull();
  });

  test("Model Popup should close after open", async () => {
    await render(
      <Provider store={store}>
        <ArticleList />
      </Provider>,
    );

    const node = await screen.getByText(/The Heart-Healthy/i);
    await fireEvent.click(node);
    const modelButton = await screen.getByText(/close/i);
    expect(modelButton).not.toBeNull();
    await fireEvent.click(modelButton);
    const modelButtonaAfter = await screen.queryByText(/close/i);
    expect(modelButtonaAfter).toBeNull();
  });
});

/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import NyView from "../Ny.view";
import { store } from "../../../Store/Store";
import axiosClient from "../../../config/Axios.config";
import { Provider } from "react-redux";
import { mockData } from "../../../mock";

const storeWrapper = (Comp) => {
  return (
    <Provider store={store}>
      <Comp />
    </Provider>
  );
};

jest.mock("../../../config/Axios.config");

describe("Container Component", () => {
  test("renders without crashing", async () => {
    const { container } = render(storeWrapper(NyView));
    expect(container).toMatchSnapshot();
  });

  test("renders with loading state", async () => {
    render(storeWrapper(NyView));
    const loader = screen.getByText(/Loading/i);
    expect(loader).not.toBeNull();
  });

  test("renders without  footer", async () => {
    axiosClient.get.mockRejectedValue();
    await render(storeWrapper(NyView));
    await new Promise((resolve) => setTimeout(resolve, 500));
    store.dispatch({
      type: "root/fetchArticles/rejected",
      payload: { error: "error" },
    });
    const footer = await screen.queryByText(/copyright/i);
    expect(footer).toBeNull();
  });

  test("renders with footer", async () => {
    axiosClient.get.mockResolvedValue({ status: 200, data: mockData });
    await render(storeWrapper(NyView));
    await new Promise((resolve) => setTimeout(resolve, 500));
    const footer = await screen.getByText(/copyright/i);
    expect(footer).not.toBeNull();
  });
});

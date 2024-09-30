/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import NyView from "../Ny.view";
import { store } from "../../../Store/Store";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Provider } from "react-redux";
import { mockData } from "./Ny.view.mock";

const storeWrapper = (Comp) => {
  return (
    <Provider store={store}>
      <Comp />
    </Provider>
  );
};

describe("Container Component", () => {
  let mockAxios;

  beforeAll(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterAll(() => {
    mockAxios.restore();
  });

  test("renders without crashing", async () => {
    const { container } = render(storeWrapper(NyView));
    expect(container).toMatchSnapshot();
  });

  test("renders with loading state", async () => {
    render(storeWrapper(NyView));
    const loader = screen.getByText(/Loading/i);
    expect(loader).not.toBeNull();
  });

  //   test("renders with footer", async () => {
  //     const responseData = { status: 200, data: mockData };
  //     mockAxios.onGet().reply(200, responseData);
  //     await render(storeWrapper(NyView));
  //     await new Promise((resolve) => setTimeout(resolve, 500));
  //     const footer = await screen.getByText(/copyright/i);
  //     console.log(footer);
  //     expect(footer).not.toBeNull();
  //   });
});

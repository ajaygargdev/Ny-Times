/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders without crashing", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});

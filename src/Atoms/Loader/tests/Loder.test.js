/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import Loader from "../Loader";

describe("Loader Component", () => {
  test("renders without crashing", () => {
    const { container } = render(<Loader />);
    expect(container).toMatchSnapshot();
  });
});

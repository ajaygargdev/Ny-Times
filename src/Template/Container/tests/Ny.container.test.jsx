/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import NyContainer from "../Ny.container";

const storeWrapper = (Comp) => () => {
  return (
    <Provider store={{}}>
      <Comp />
    </Provider>
  );
};

describe("Container Component", () => {
  test("renders without crashing", () => {
    const { container } = render(storeWrapper(NyContainer));
    expect(container).toMatchSnapshot();
  });
});

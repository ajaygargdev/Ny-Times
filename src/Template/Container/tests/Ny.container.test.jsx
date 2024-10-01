/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import NyContainer from "../Ny.container";
import { Provider } from "react-redux";

const storeWrapper = (Comp) => {
  const NewComp = () => {
    return (
      <Provider store={{}}>
        <Comp />
      </Provider>
    );
  };
  NewComp.displayName = "Container";
  return NewComp;
};

describe("Container Component", () => {
  test("renders without crashing", () => {
    const { container } = render(storeWrapper(NyContainer));
    expect(container).toMatchSnapshot();
  });
});

/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ArticleCard from "../ArticleCard";
import { mockData } from "../../../mock";

describe("Artical Component", () => {
  test("renders without crashing", () => {
    const { container } = render(<ArticleCard article={mockData.results[0]} />);
    expect(container).toMatchSnapshot();
  });

  test("fire click on component", () => {
    const { container } = render(<ArticleCard article={mockData.results[0]} />);
    fireEvent.click(screen.getByText(/The Heart-Healthy/i));
    expect(container).toMatchSnapshot();
  });
});

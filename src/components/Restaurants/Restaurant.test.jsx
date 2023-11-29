import { describe, it, expect } from "vitest";

import { render, screen } from "@testing-library/react";

import Restaurants from "./Restaurants";

describe("Restaurants", () => {
  it("renders Restaurants component", () => {
    render(<Restaurants />);
    expect(screen.getByText("Bars")).toBeInTheDocument();
  });
});

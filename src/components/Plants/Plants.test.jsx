import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Plants from "./Plants";
import store from "../../store";


describe("Plants component", () => {
  it("renders with mock data", () => {
    render(
      <Provider store={store}>
        <Plants setFocusFromOutside={() => {}} />
      </Provider>
    );

    expect(screen.getByText("Geöffnete Anlagen")).toBeInTheDocument();
    expect(screen.getByText("Bergbahnen")).toBeInTheDocument();
  });
});

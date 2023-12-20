import { describe, it, expect } from "vitest";

import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux'
import Audio from "./Audio";
import store from '../../store'

describe("Audio", () => {
  it("renders Audio component", () => {
    render(
      <Provider store={store}>
        <Audio />
      </Provider>
    );
    expect(screen.getByText("Musik")).toBeInTheDocument();
  });
});

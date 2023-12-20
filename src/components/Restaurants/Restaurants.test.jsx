import { describe, it, expect } from "vitest";

import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux'
import store from '../../store'
import Restaurants from "./Restaurants";

describe("Resturants", () => {
  it("renders Restaurant component", () => {
    render(
      <Provider store={store}>
        <Restaurants />
      </Provider>
    );
    expect(screen.getByText("Winteregg")).toBeInTheDocument();
    expect(screen.getByText("Suppenalp")).toBeInTheDocument();
    expect(screen.getByText("Sonnenberg")).toBeInTheDocument();
    expect(screen.getByText("Schiltgrathüsi")).toBeInTheDocument();
    expect(screen.getByText("Schilthornhütte")).toBeInTheDocument();
    expect(screen.getByText("Schilthorn - Piz Gloria")).toBeInTheDocument();
    expect(screen.getByText("Gimmeln")).toBeInTheDocument();
    expect(screen.getByText("Girg Selfservice")).toBeInTheDocument();
    expect(screen.getByText("Allmendhibel")).toBeInTheDocument();

  });
});

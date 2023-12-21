import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux'
import Restaurants from "./Restaurants";
import store from '../../store'

describe("Resturants", () => {
  it("renders Restaurant component", () => {
    render(
      <Provider store={store}>
        <Restaurants />
      </Provider>
    );
    expect(screen.getByText("Unsere Bergrestaurants")).toBeInTheDocument();
    

  });
});

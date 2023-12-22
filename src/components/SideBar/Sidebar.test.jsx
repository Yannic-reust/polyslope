import { render, screen, fireEvent } from "@testing-library/react";
import SideBar from "./SideBar";

describe("SideBar", () => {
  it("renders SideBar component", () => {
    render(<SideBar setFocusFromOutside={() => {}} />);

    //check if the sidebar is rendered
    expect(screen.getByText("Anlagen")).toBeInTheDocument();
    expect(screen.getByText("Restaurants")).toBeInTheDocument();
    expect(screen.getByText("Wetter")).toBeInTheDocument();
    expect(screen.getByText("Einstellungen")).toBeInTheDocument();
    expect(screen.getByText("Info")).toBeInTheDocument();
  });

  it("toggles pages correctly", () => {
    render(<SideBar setFocusFromOutside={() => {}} />);

  
    fireEvent.click(screen.getByText("Info"));

 
    expect(screen.getByText("Das Projekt")).toBeInTheDocument();
  });

  it("closes SideBar correctly", () => {
    render(<SideBar setFocusFromOutside={() => {}} />);

    
    fireEvent.click(screen.getByTestId("close-icon"));

    // You may need to add additional assertions based on your component behavior
    expect(screen.queryByText("About")).toBeNull();
  });
});

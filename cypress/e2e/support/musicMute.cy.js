// cypress/integration/app_spec.js

describe("App Component", () => {
  beforeEach(() => {
    cy.visit("localhost:5173");
  });

  it("should render the App component with SideBar, TabBar, Canvas, and Tutorial", () => {
    cy.get("#Anlagen").should("exist");
    cy.get("#Restaurants").should("exist");
    cy.get("#Wetter").should("exist");
    cy.get("#Einstellungen").should("exist");
    cy.get("#Info").should("exist");
  });
  it("should skip the Tutorial & click mute button", () => {
    cy.get("#tutorial").should("contain.text", "Überspringen").click();
    cy.get("#MusicBadge").should("exist").click();
  });
});

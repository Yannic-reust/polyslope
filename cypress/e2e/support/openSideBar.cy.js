// cypress/integration/app_spec.js

describe("App Component", () => {
    beforeEach(() => {
      cy.visit("localhost:5173");
    });
  
   
    it("should skip the Tutorial & open Anlagen after open Anlagen, should have list of Bergbahnen", () => {
      cy.get("#tutorial").should("contain.text", "Überspringen").click();
      
      cy.get("#Anlagen").should("contain.text", "Anlagen").click();
      cy.wait(800);
      cy.get("#Anlagen-Detail").should("contain.text", "Anlagen").click();
      //cy.get("#Bergbahnen").should("exist").click();

    });
  });
  
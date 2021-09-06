/// <reference types="Cypress" />

describe("My First Test", () => {
  it("Write our first passing test.", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");

    cy.get('[id="email1"]')
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });

  it("Write our first failing test.", () => {
    expect(true).to.equal(falses);
  });
});

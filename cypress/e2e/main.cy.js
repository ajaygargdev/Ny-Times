describe("Main Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display initial count", () => {
    cy.get('[data-testid="main"]').should("be.visible");
  });

  it("should display artical list", () => {
    cy.get('[data-testid="artical-list"]').should("be.visible");
  });

  it("should display artical detail", () => {
    cy.get('[data-testid="artical"]').should("be.visible");
    cy.get('[data-testid="artical"]').first().click();
    cy.get('[data-testid="model"]').should("be.visible");
  });

  it("should display artical detail and close", () => {
    cy.get('[data-testid="artical"]').should("be.visible");
    cy.get('[data-testid="artical"]').first().click();
    cy.get('[data-testid="model"]').should("be.visible");
    cy.get('[data-testid="model-close"]').should("be.visible");
    cy.get('[data-testid="model-close"]').click().should("not.exist");
  });
});

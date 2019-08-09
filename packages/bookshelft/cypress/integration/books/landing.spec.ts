describe("Landing", () => {
  it("should load landing page", () => {
    cy.visit("/");

    cy.tid("landing").should("exist");
  });
});

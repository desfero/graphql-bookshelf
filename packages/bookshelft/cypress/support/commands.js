Cypress.Commands.add("tid", (value, options) =>
  cy.get(`[data-test-id~="${value}"]`, options),
);

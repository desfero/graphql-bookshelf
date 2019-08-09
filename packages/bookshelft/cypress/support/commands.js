Cypress.Commands.add("tid", value => cy.get(`[data-test-id=${value}]`));

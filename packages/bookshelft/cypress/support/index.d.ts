/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Select DOM element by data-test-id attribute.
     * @example cy.tid('landing.books')
     */
    tid(value: string): Chainable<Element>;
  }
}

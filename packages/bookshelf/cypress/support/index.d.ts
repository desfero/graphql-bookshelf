/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Select DOM element by data-test-id attribute.
     * @example cy.tid('landing.books')
     */
    tid<E extends Node = HTMLElement>(
      tid: string,
      options?: Partial<Loggable & Timeoutable & Withinable>,
    ): Chainable<JQuery<E>>;
  }
}

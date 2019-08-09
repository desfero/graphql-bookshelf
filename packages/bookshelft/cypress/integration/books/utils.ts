import Chainable = Cypress.Chainable;

export const visitBooksList = () => {
  cy.visit("/");

  assertBooksList();
};

export const visitBookCreate = () => {
  visitBooksList();

  cy.tid("books-list.create-book").click();
};

export const visitBookEdit = (id: number) => {
  visitBooksList();

  cy.tid(`books-list.book.${id}`).within(() => {
    cy.tid("books-list.book.edit").click();
  });
};

export const assertBooksList = () => {
  cy.tid("books-list").should("exist");
};

export const assertBookCardValues = (
  element: Chainable<JQuery<Element>>,
  values: { title: string; price: string; author: string },
) => {
  element.within(() => {
    cy.tid("books-list.book.title").contains(values.title);
    cy.tid("books-list.book.price").contains(values.price);
    cy.tid("books-list.book.author").contains(values.author);
  });
};

export const fillAndSubmitBook = (
  bookTitle: string,
  bookPrice: string,
  bookAuthor: string,
) => {
  cy.tid("book-form.title")
    .clear()
    .type(bookTitle);
  cy.tid("book-form.price")
    .clear()
    .type(bookPrice);
  cy.tid("book-form.author")
    .clear()
    .type(bookAuthor);

  cy.tid("book-form.submit").click();
};

export const selectBookById = (id: number) => {
  cy.tid(`books-list.book.${id}`).within(() => {
    cy.tid("books-list.book.price").invoke("text");

    cy.tid("books-list.book.select").click();
  });
};

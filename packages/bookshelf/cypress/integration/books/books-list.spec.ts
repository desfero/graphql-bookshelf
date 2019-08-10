import { selectBookById, visitBooksList } from "./utils";

describe("Books list", () => {
  it("should load books with title, price, author checkbox and edit icon", () => {
    visitBooksList();

    cy.tid("books-list.book.1").within(() => {
      cy.tid("books-list.book.title").should("exist");
      cy.tid("books-list.book.price").should("exist");
      cy.tid("books-list.book.author").should("exist");
      cy.tid("books-list.book.select").should("exist");
      cy.tid("books-list.book.edit").should("exist");
    });
  });

  it("should calculate total price for selected books", () => {
    visitBooksList();

    selectBookById(1);

    selectBookById(2);

    cy.tid("books-list.selected.total-price").contains(23.56);
    cy.tid("books-list.selected.total-selected").contains(2);
  });
});

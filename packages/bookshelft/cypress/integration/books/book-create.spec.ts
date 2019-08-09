import {
  assertBooksList,
  fillAndSubmitBook,
  visitBookCreate,
  visitBookEdit,
} from "./utils";

describe("Book Create", () => {
  it("should create new book", () => {
    visitBookCreate();

    const bookTitle = "My new Book";
    const bookPrice = "12.45";
    const bookAuthor = "John Wast";

    fillAndSubmitBook(bookTitle, bookPrice, bookAuthor);

    cy.tid("books-list.book")
      .last()
      .within(() => {
        cy.tid("books-list.book.title").contains(bookTitle);
        cy.tid("books-list.book.price").contains(bookPrice);
        cy.tid("books-list.book.author").contains(bookAuthor);
      });
  });

  it("should allow to cancel", () => {
    visitBookEdit(5);

    cy.tid("book-form.cancel").click();

    assertBooksList();
  });
});

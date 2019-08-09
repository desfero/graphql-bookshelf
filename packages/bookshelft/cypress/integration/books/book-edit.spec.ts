import {
  assertBookCardValues,
  assertBooksList,
  fillAndSubmitBook,
  visitBookEdit,
} from "./utils";

describe("Book Edit", () => {
  it("should create new book", () => {
    const id = 10;

    visitBookEdit(id);

    const title = "My edited Book";
    const price = "1.00";
    const author = "Eric Lorcan";

    fillAndSubmitBook(title, price, author);

    assertBookCardValues(cy.tid(`books-list.book.${id}`), {
      title,
      price,
      author,
    });
  });

  it("should allow to cancel", () => {
    visitBookEdit(5);

    cy.tid("book-form.cancel").click();

    assertBooksList();
  });
});

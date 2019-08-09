import { selectBook, visitBooksList } from "./utils";

describe("Books list", () => {
  it("should load books with title, price, author checkbox and edit icon", () => {
    visitBooksList();

    cy.tid("books-list.book")
      .eq(0)
      .within(() => {
        cy.tid("books-list.book.title").should("exist");
        cy.tid("books-list.book.price").should("exist");
        cy.tid("books-list.book.author").should("exist");
        cy.tid("books-list.book.select").should("exist");
        cy.tid("books-list.book.edit").should("exist");
      });
  });

  it.only("should calculate total price for selected books", () => {
    visitBooksList();

    selectBook({ eq: 0, savePriceAs: "firstBookPrice" });

    selectBook({ eq: 1, savePriceAs: "secondBookPrice" });

    cy.get<string>("@firstBookPrice").then(firstBookPrice => {
      cy.get<string>("@secondBookPrice").then(secondBookPrice => {
        const totalPrice =
          parseFloat(firstBookPrice) + parseFloat(secondBookPrice);
        const totalPriceFixed = totalPrice.toFixed(2);

        cy.tid("books-list.selected.total-price").contains(totalPriceFixed);
        cy.tid("books-list.selected.total-selected").contains(2);
      });
    });
  });
});

export const visitBooksList = () => {
  cy.visit("/");
};

export const selectBook = ({
  eq,
  savePriceAs,
}: {
  eq: number;
  savePriceAs: string;
}) => {
  cy.tid("books-list.book")
    .eq(eq)
    .within(() => {
      cy.tid("books-list.book.price")
        .invoke("text")
        .as(savePriceAs);
      cy.tid("books-list.book.select").click();
    });
};

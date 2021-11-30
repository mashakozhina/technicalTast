///<reference types='Cypress' />

import dataTestIds from "../../fixtures/dataTestIds.js";
import paths from "../../fixtures/paths.js";
import user from "../../helpers/user.js";

describe("User login", () => {
  beforeEach(() => {
    user.userLogin();
  });

  it("Add/remove item from wishlist", () => {
    cy.get(".icon-heart")
      .click()
      .get(dataTestIds.logo)
      .click()
      .get(dataTestIds.productImage)
      .eq(1)
      .scrollIntoView()
      .click({ force: true })
      .get(".quick-view")
      .eq(1)
      .click({ force: true })
      .get(dataTestIds.mainContainerProduct)
      .should("be.visible")
      .get(dataTestIds.productWishlistButton)
      .click()
      .get(".fancybox-error")
      .should("be.visible");
    cy.visit(paths.wishlistPage()).get(".wishlist_delete").should("be.visible")
      .get('.icon-remove').click({force:true});
  });
});

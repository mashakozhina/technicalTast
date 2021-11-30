///<reference types='Cypress' />

import dataTestIds from "../../fixtures/dataTestIds.js";
import paths from "../../fixtures/paths.js";
import user from "../../helpers/user.js";

describe("User login/logout", () => {
  beforeEach(() => {
    cy.visit(paths.root()).get(dataTestIds.mainContainer).should("be.visible");
  });

  it("Login as existed user", () => {
    cy.get(dataTestIds.signInMenuLink)
      .click()
      .get(dataTestIds.mainContainerSignIn)
      .should("be.visible")
      .get(dataTestIds.email)
      .should("be.visible")
      .type(Cypress.config("email"))
      .get(dataTestIds.password)
      .should("be.visible")
      .type(Cypress.config("password"))
      .get(dataTestIds.submitLoginButton)
      .should("be.visible")
      .click()
      .get(dataTestIds.mainContainerAccount)
      .should("be.visible");
  });

  it("User logout", () => {
    user.userLogin();
    cy.get(dataTestIds.signOutMenuLink)
      .click()
      .get(dataTestIds.signInMenuLink)
      .should("be.visible");
  });
});

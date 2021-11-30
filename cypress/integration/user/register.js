///<reference types='Cypress' />

import dataTestIds from "../../fixtures/dataTestIds.js";
import paths from "../../fixtures/paths.js";
import user from "../../helpers/user.js";

describe("User register", () => {
  beforeEach(() => {
    cy.visit(paths.root()).get(dataTestIds.mainContainer).should("be.visible");
  });

  it("Register user with valid data", () => {
    const newUser = user.buildUser();
    cy.get(dataTestIds.signInMenuLink)
      .click()
      .get(dataTestIds.createEmailField)
      .should("be.visible")
      .type(newUser.email);
    cy.get(dataTestIds.submitCreateButton)
      .click()
      .wait(7000)
      .get(dataTestIds.mainContainerSignIn)
      .should("be.visible")
      .get(dataTestIds.firstNameField)
      .type(newUser.firstName)
      .get(dataTestIds.lastNameField)
      .type(newUser.lastName)
      .get(dataTestIds.passwordFieldCreatePage)
      .type(newUser.password)
      .get(dataTestIds.addressField)
      .type(newUser.address)
      .get(dataTestIds.cityField)
      .type(newUser.city)
      .get(dataTestIds.postcodeField)
      .type(newUser.postcode);
    cy.get("select")
      .eq(3)
      .select(newUser.stateOption)
      .get(dataTestIds.phoneMobileField)
      .type(newUser.mobileNumber)
      .get(dataTestIds.submitAccount)
      .click()
      .get(dataTestIds.mainContainerAccount)
      .should('be.visible')
  });
});

import paths from "../fixtures/paths.js";
import dataTestIds from "../fixtures/dataTestIds.js";

const buildUser = () => {
  return {
    email: `test_${Date.now()}@gmail.com`,
    password: 'test5',
    mobileNumber: '12345678',
    firstName: `test`,
    lastName: 'test',
    password: 'test5',
    postcode: '08012',
    stateOption: 'Alaska',
    city: 'test',
    address: 'Street'
  };
};

const userLogin = () => {
  cy.visit(paths.signInPage())
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
};

export default {
  userLogin,
  buildUser
};

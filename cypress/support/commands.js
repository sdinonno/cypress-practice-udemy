// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('search', (value) => {
    cy.fixture('selectors/index').then((index) => {
        cy.get(index.searchBox).type(value);
        cy.get(index.searchButton).click();
    })
})

Cypress.Commands.add('login', (email, password) => {
    cy.get('.login').click();
    cy.get('#email').type(email);
    cy.get('#passwd').type(password);
    cy.get('#SubmitLogin > span').click();
})

Cypress.Commands.add('sendMessage', (subject, email, message) => {
    cy.get('#contact-link').click();
    cy.get('#id_contact').select(subject);
    cy.get('#email').type(email);
    cy.get('#message').type(message);
    cy.get('#submitMessage').click();
  })
  



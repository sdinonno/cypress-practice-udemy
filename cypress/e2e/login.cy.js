describe('Login', () => {
    beforeEach(function () {
        cy.fixture('credentials').then((credentials) => {
            this.credentials = credentials;
        })
        cy.visit('/');
    })

    it('Login with incorrect email', function () {
        cy.login(this.credentials.invalidUser, this.credentials.validPassword)
        cy.get('.alert-danger li').should('contain','Invalid email address');
        
    })

    it('Login with incorrect password', function () {
        cy.login(this.credentials.validUser, this.credentials.invalidPassword)
        cy.get('.alert-danger li').should('contain','Authentication failed.');
    })
})
const testData = require('../fixtures/contactUsMessages.json');

testData.forEach((testData) => {
    describe('Contact Us', () => {
        beforeEach( () => {
            cy.visit('/');
        })
    
        it('Sends a new message and gets a successfully message', () => {
            cy.sendMessage(testData.subject, testData.email, testData.message);
            cy.get('.alert-success').should('contain', testData.alertMessage)
        })
    })
})

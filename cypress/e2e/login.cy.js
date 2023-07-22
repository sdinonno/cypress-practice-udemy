describe('Login', ()=>{
    before(()=>{
        cy.fixture('credentials').then(function(testdata){
            this.testdata = testdata;
        })
    })

    beforeEach(()=>{
        cy.visit('/')
    })

    it('Login with incorrect email', ()=>{
        cy.login(this.testdata.invalidUser, this.testdata.validPassword)
        cy.fixture('login').then((login)=>{
            cy.get(login.incorrectLoginBanner).should('contain','Invalid email address');
        })
        
    })

    it('Login with incorrect password', ()=>{
        cy.login(this.testdata.validUser, this.testdata.invalidPassword)
        cy.fixture('login').then((login)=>{
            cy.get(login.incorrectLoginBanner).should('contain','Authentication failed.');
        })
    })
})
describe('Login', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Login with incorrect email', ()=>{
        cy.login('something', 'other')
        cy.fixture('login').then((login)=>{
            cy.get(login.incorrectLoginBanner).should('contain','Invalid email address');
        })
        
    })

    it('Login with incorrect password', ()=>{
        cy.login('sofiaditest1@gmail.com', "abdc123")
        cy.fixture('login').then((login)=>{
            cy.get(login.incorrectLoginBanner).should('contain','Authentication failed.');
        })
    })
})
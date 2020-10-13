describe('Login imobiliare.ro', () => {
  it('Navigates through imobiliare.ro', () => {
    cy.visit('https://www.imobiliare.ro/contul-meu/autentificare')
	cy.get('.btn-actiune--principal').eq(1).click()

	cy.get('#sUsername').type('brindaadina@gmail.com')
	cy.get('#portal_login > button').click()

	cy.get('#sPassword').type('1234')
	cy.get('#portal_login > button').click()

	cy.get('h1 > a').should('contain', 'Contul meu')
  })
})
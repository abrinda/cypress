describe('My First Test', () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit('https://www.imobiliare.ro/')
	
	cy.wait(2000)
	
	cy.get('.btn-actiune--principal').eq(1).click()
  })
})
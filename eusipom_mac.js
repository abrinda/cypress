describe('Eu si Pom', () => {
	it('Logs In', () => {
		cy.visit('')

		cy.get('.mini-account').click()
		cy.contains('Logare').click()
		cy.get('input[name="login[username]"]').type("brindaadina@mailinator.com")
		cy.get('input[name="login[password]"]').type("Password123!")
		cy.get('button[title="Logare"]').click()
		
		cy.get('.hello-user').should('contain', 'Bună, Adina Brinda!')
	})
})
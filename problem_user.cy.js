describe('Problem User - Bugs de regresión', () => {
     it('BUG-PQ1-15: Botón Remove no responde con problem_user', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('problem_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist')

   
  })



    

})
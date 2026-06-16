describe('Checkout', () => {
     it('Checkout con datos válidos', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Erick')
    cy.get('[data-test="lastName"]').type('Reyes')
    cy.get('[data-test="postalCode"]').type('10408')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!')
  })

  it('Campos vacíos en Checkout', ()=>{

    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]').should('contain', 'Error: First Name is required')
  })

  it('Verificar cálculo del total y cierre de orden', ()=>{

   cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Erick')
    cy.get('[data-test="lastName"]').type('Reyes')
    cy.get('[data-test="postalCode"]').type('10408')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="subtotal-label"]').then(($subtotal) => {
        const subtotal = parseFloat($subtotal.text().replace('Item total: $', ''))

        cy.get('[data-test="tax-label"]').then(($tax) => {
            const tax = parseFloat($tax.text().replace('Tax: $', ''))

            cy.get('[data-test="total-label"]').then(($total) => {
                const total = parseFloat($total.text().replace('Total: $', ''))

                expect(total).to.eq(subtotal + tax)
            })
        })
    })

    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!')
})



    

})
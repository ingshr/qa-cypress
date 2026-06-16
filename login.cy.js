describe('Login - Saucedemo', () => {
  it('Login con credenciales válidas', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')
  })

    it('Login fallido - Contraseña incorrecta', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('contraseña_mala')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
  })

  it('Campos vacios en el formulario de login', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required')
  })

  it('Usuario bloqueado', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('locked_out_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.')
  })

  it('Cerrar sesion desde el menu lateral', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('#react-burger-menu-btn').click()
    cy.get('[data-test="logout-sidebar-link"]').click()
    
    
  })

})


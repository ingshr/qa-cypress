describe("Test suite - conjunto de pruebas", ()=>{
    
    it("validar pagigna de inicio", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('.orangehrm-login-branding > img').should("be.visible")
        cy.get('[name="username"]').should("be.visible")
        cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').contains("OrangeHRM")
        cy.get('.oxd-button').should("be.visible")
    })

    it("validacion 2", () => {
        
    })

    it("validacion 3", () => {
        
    })






})
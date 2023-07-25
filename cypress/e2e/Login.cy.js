describe('Verify Login Page',()=>{

    const url="http://localhost:8080/"

    it('Verify Username and password with valid inputs',()=>{

        cy.visit(url)

        //username
        cy.get("[placeholder='Enter Username']").type("tabassumkabir")


        //password 
        cy.get("[placeholder='password']").type("123@")

        //click on login
        cy.get(".sc-bZQynM.cGmBje").click()

    })

    it('Verify Username and password with invalid numbers',()=>{

        cy.visit(url)

        //invalid numbers username
        cy.get("[placeholder='Enter Username']").type("123456")

        //invalid password numbers 
        cy.get("[placeholder='password']").type("2345465")

         //click on login
         cy.get(".sc-bZQynM.cGmBje").click()




    })

    it('Verify Username and password with invalid characters',()=>{

        cy.visit(url)

        //invalid characters username
        cy.get("[placeholder='Enter Username']").type("!@#$")

        //invalid password characters 
        cy.get("[placeholder='password']").type("$%^&")

         //click on login
         cy.get(".sc-bZQynM.cGmBje").click()




    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })
  
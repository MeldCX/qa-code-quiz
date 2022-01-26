describe('Hit the Logout Button to logout from portal', () => {
    it('Visit the website', () => {
      
      cy.visit('http://localhost:8080');
      cy.title().should('eq','Document');
      cy.get('input[placeholder*="Enter Username"]').type("SomeUser_name");
      cy.get('Button').click();
      cy.get('Button').click();
      
      
    })

    
} )
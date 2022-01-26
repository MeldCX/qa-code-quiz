describe('Match the title', () => {
    it('Visit the website', () => {
      
      cy.visit('http://localhost:8080');
      cy.title().should('eq','Document');
      
      
    })

    
} )
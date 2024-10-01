describe('Main Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); 
    });
  
    it('should display initial count', () => {
      cy.get('[data-testid="main"]').should('be.visible');
    });
  });
  
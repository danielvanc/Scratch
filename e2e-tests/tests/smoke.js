describe('app', () => {
  it('works', () => {
    cy.visit('/');
    cy.checkAlly();
  });
});

it('test', () => {
    cy.visit('https://example.cypress.io')
    cy
        .contains('get').click()
        .get('.query-btn')
        .should('contain', 'Button')
})
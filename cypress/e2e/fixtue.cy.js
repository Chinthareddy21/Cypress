it('fixture', () => {
    cy.fixture('example.json').then((data) => {
        cy
            .log(data.name)
            .log(data.email)
    })
})
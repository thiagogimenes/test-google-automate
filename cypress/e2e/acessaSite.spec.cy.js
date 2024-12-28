describe('Pesquisa site', () => {
  it('Busca de um site acessando através do link', () => {
    // Arrange
    cy.visit('http://google.com.br')
    // Act
    cy.get('#APjFqb').type('cypress')
    cy.get('.gNO89b').should('be.visible').click()
    cy.get('[lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()
        // Assert
    cy.contains('Test. Automate.')
  })
})


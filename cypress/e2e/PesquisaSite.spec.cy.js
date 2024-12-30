describe('Pesquisa site', () => {
  it('Busca de um site com sucesso', () => {
    // Arrange
    cy.visit('http://google.com.br')
    // Act
    cy.get('#APjFqb').type('qazando')
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
    // Assert
    cy.contains('Entre no mercado de trabalho, evolua e ganhe mais como QA! · Estamos aqui para te ajudar em tudo que podemos! · Os melhores cursos sobre QA estão aqui!')
  })
  
  it('Busca de uma palavra com caracter especial', () => {
    // Arrange
    cy.visit('http://google.com.br')
    // Act
    cy.get('#APjFqb').type('Sucesso $')
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
    // Assert
    cy.contains('sucesso')
  })

  it('Busca de um texto com apenas números', () => {
    // Arrange
    cy.visit('http://google.com.br')
    // Act
    cy.get('#APjFqb').type('123456789')
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
    // Assert
    cy.get('.uODXEe')
  })

  it('Busca de um texto com apenas letras', () => {
    // Arrange
    cy.visit('http://google.com.br')
    // Act
    cy.get('#APjFqb').type('aeiou')
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
    // Assert
    cy.contains('Aeiou: Vogais')
  })

  it('Busca de uma frase completa', () => {
    // Arrange
    cy.visit('http://google.com.br')
    // Act
    cy.get('#APjFqb').type('Como fazer um bolo de cenoura')
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
    // Assert
    cy.contains('Bolo de cenoura')
  })

  
  it('Busca de uma informação que não exista', () => {
    // Arrange
    cy.visit('http://google.com.br')
    // Act
    cy.get('#APjFqb').type('13215646.654.9/asdfasd')
    cy.get('.FPdoLc > center > .gNO89b').click()
    // Assert
    cy.contains('Sua pesquisa não encontrou nenhum documento correspondente')
  })
  
  it('Busca de um site acessando através do link', () => {
    // Arrange
    cy.visit('http://google.com.br')
    // Act
    cy.get('#APjFqb').type('cypress')
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
    // Assert
    cy.contains('Cypress: Testing Frameworks for Javascript | Write, Run, Debug')
  })
})


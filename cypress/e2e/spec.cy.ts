describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.contains('Heroes List and Filter')
    cy.wait(1000)
    cy.get('button').contains("Insert mock heroes").click() // Click on button
    cy.wait(1000)
    cy.get('td').contains("Spiderman")// Checks if Spiderman is in the list
  })
})

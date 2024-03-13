
Cypress.Commands.add('login', (
  data = require('../fixtures/example.json')    
  ) => {
      const login = () => {
          cy.visit('http://avisos-h.maracanau.ifce.edu.br')
          cy.get('#mat-input-0').click().type(data.user)
          cy.get('mat-label.ng-tns-c1205077789-1').click().type(data.password)
          cy.get('app-button > button').click()
      }
     login();   
})

Cypress.Commands.add('loginErrado', (
  data = require('../fixtures/example.json')    
  ) => {
      const loginErrado = () => {
          cy.visit('http://avisos-h.maracanau.ifce.edu.br')
          cy.get('#mat-input-0').click().type(data.usererrado)
          cy.get('mat-label.ng-tns-c1205077789-1').click().type(data.passsworderrado)
          cy.get('app-button > button').click()
      }
     loginErrado();   
})

Cypress.Commands.add('crud', (
data = require('../fixtures/example.json')
) => {
  
    const crud = () => {
      cy.get('.ng-star-inserted > a').click()
      cy.get('.btn-add-user > button').click()
      cy.get('#mat-input-2').click().type('TESTE')
      cy.get('#mat-input-3').click().type('teste@gmail.com')
      cy.get('#mat-input-4').click().type('senha8748930845')
      cy.get('.save').click()

    }
    crud();
})
Cypress.Commands.add('crudExcluir', (
  data = require('../fixtures/example.json')
  ) => {
    
      const crudExcluir = () => {
      cy.get('.ng-star-inserted > a').click()
      cy.get(':nth-child(3) > .cdk-column-action > .actions > .trash').click()
      cy.wait(5000)

      }
      crudExcluir();
  })

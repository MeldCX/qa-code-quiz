/// <reference types="cypress" />
describe('Login Functionality', function(){
    it('Login test', function(){
      cy.visit('http://localhost:8080/',{failOnStatusCode:false})
      cy.get('[placeholder="Enter Username"]',{failOnStatusCode:false}).type('SomeName')
      cy.get('[placeholder="password"]',{failOnStatusCode:false}).type('TopSecret1234!')
      cy.get('.sc-bZQynM',{failOnStatusCode:false}).click()
      //expect(true).to.equal(true)
    })
  })
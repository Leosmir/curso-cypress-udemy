import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('#login2').click()
    LoginMethods.login('username010101', 'password010101')
    cy.wait(10000)
  })
})
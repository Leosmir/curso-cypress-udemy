import { LoginMethods } from "./pages/login/login.methods"
import { SignupMethods } from "./pages/signup/signup.methods"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('#login2').click()
    LoginMethods.login('username010101', 'password010101')
    cy.wait(10000)
  })

  it('signup', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('#signin2').click()
    SignupMethods.signup('Leitotest', 'Leitotest')
    cy.wait(10000)
  })
})
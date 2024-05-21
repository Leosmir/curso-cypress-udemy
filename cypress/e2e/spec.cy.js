import { HomeMethods } from "./pages/Home/home.methods"
import { CartMethods } from "./pages/cart/cart.methods"
import { LoginMethods } from "./pages/login/login.methods"
import { SignupMethods } from "./pages/signup/signup.methods"

describe('template spec', () => {
  it('Login', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('#login2').click()
    LoginMethods.login('username010101', 'password010101')
    cy.wait(5000)
  })

  it('signup', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('#signin2').click()
    SignupMethods.signup('Leitotest', 'Leitotest')
    cy.wait(5000)
  })

  it('Home', () => {
    cy.visit('https://www.demoblaze.com/')
    HomeMethods.clickOnProductLink('Iphone 6 32gb')
    cy.wait(5000)
  })

  it('Cart', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.wait(30000)
    CartMethods.clickOnDeleteLink('Nexus 6')
  })

})
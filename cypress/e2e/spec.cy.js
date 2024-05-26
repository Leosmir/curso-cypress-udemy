import { HomeMethods } from "./pages/Home/home.methods"
import { CartMethods } from "./pages/cart/cart.methods"
import { LoginMethods } from "./pages/login/login.methods"
import { SignupMethods } from "./pages/signup/signup.methods"
import { Logger } from "./util/logger"

describe('template spec', () => {
  it('Login', () => {
    const usuario = 'leito const';
    const contrasena = 'leitoconst';

    Logger.stepNumber(1)
    Logger.step('Navigate to Demoblaze')
    cy.visit('https://www.demoblaze.com/')

    Logger.stepNumber(2)
    Logger.step('Click on Login link')
    cy.get('#login2').click()

    Logger.stepNumber(3)
    Logger.step(`Login with this credentials "${usuario}/${contrasena}"`)
    LoginMethods.login(usuario, contrasena)

    Logger.verification(`Log in Sussesful. The Home should have "Welcome ${usuario} text"`)
    cy.get('a#nameofuser').should('contain.text', usuario)
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
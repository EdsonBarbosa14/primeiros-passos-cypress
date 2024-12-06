
import loginClass from '../helpers/loginPage.js'

describe('Orange HRM Tests', () => {
  const urlLogin = "/auth/login"
  
  const stepsLogin = new loginClass()

  const dataMyInfo = {
      MyInfoMenuButton: ":nth-child(6) > .oxd-main-menu-item",
      firstNamField: "[name='firstName']",
      middleNameField: "[name='middleName']",
      lastNameField: "[name='lastName']",
      employeeIdField:":nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
      otherIdField:":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
      driverLicenseNumberField: ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
      dateField: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
  }
  
  it.only('User Info Update - Sucess', () => {
    cy.visit(urlLogin)
    stepsLogin.makeLogin()
    cy.get(dataMyInfo.MyInfoMenuButton).click()
    cy.location('pathname').should('equal', '/web/index.php/pim/viewPersonalDetails/empNumber/7')
    cy.get(dataMyInfo.firstNamField).clear().type('Jorge')
    cy.get(dataMyInfo.middleNameField).clear().type('Carvalho')
    cy.get(dataMyInfo.lastNameField).clear().type('dos Santos')
    cy.get(dataMyInfo.employeeIdField).clear().type('1111')
    cy.get(dataMyInfo.otherIdField).clear().type('222')
    cy.get(dataMyInfo.driverLicenseNumberField).clear().type('40303034020202')
    cy.get(dataMyInfo.dateField).clear().type('2025-03-10')
  })
     
})
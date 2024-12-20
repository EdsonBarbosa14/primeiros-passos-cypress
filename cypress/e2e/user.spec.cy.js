
import loginClass from '../pages/loginPage.js'

const stepsLogin = new loginClass()

describe('Orange HRM Tests', () => {
  const urlLogin = "/auth/login"

  const dataMyInfo = {
      myInfoMenuButton: ":nth-child(6) > .oxd-main-menu-item",
      firstNamField: "[name='firstName']",
      middleNameField: "[name='middleName']",
      lastNameField: "[name='lastName']",
      employeeIdField:":nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
      otherIdField:":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
      driverLicenseNumberField: ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
      dateField: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
      maritalStatsComboBox: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
      maritalStats: '.oxd-select-dropdown > :nth-child(3)',
      saveInfoButton: ':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button',

  }
  
  it.only('User Info Update - Sucess', () => {
    cy.visit(urlLogin)
    stepsLogin.makeLogin()
    cy.get(dataMyInfo.myInfoMenuButton).click()
    cy.location('pathname').should('equal', '/web/index.php/pim/viewPersonalDetails/empNumber/7')
    cy.get(dataMyInfo.firstNamField).clear().type('Jorge')
    cy.get(dataMyInfo.middleNameField).clear().type('Carvalho')
    cy.get(dataMyInfo.lastNameField).clear().type('dos Santos')
    cy.get(dataMyInfo.employeeIdField).clear().type('1111')
    cy.get(dataMyInfo.otherIdField).clear().type('222')
    cy.get(dataMyInfo.driverLicenseNumberField).clear().type('40303034020202')
    cy.get(dataMyInfo.dateField).clear().type('2025-03-10')
    cy.get('.--close').click()
    cy.get(dataMyInfo.maritalStatsComboBox).click()
    cy.get(dataMyInfo.maritalStats).click()
    cy.get(dataMyInfo.saveInfoButton).click({ force: true })
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })
     
})
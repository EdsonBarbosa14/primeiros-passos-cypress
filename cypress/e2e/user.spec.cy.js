import userData from '../fixtures/user-data.json'


describe('Orange HRM Tests', () => {
    const selectorsList = {
      urlLogin: "/auth/login",
      usernameField: "[name='username']", 
      passwordField: "[name='password']",
      loginButton: "[type='submit']",
      sectionTittleTopBar: ".oxd-topbar-header-breadcrumb-module",
      dashboardGrid: ".orangehrm-dashboard-grid",
      wrongCredentialAlert: "[role='alert']",
      MyInfoMenuButton: ":nth-child(6) > .oxd-main-menu-item",
    }

    const dataMyInfo =
    {
        firstNamField: "[name='firstName']",
        middleNameField: "[name='middleName']",
        lastNameField: "[name='lastName']",
        employeeIdField:":nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
        otherIdField:":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
        driverLicenseNumberField: ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
    }
  
    it.only('User Info Update - Sucess', () => {
      cy.visit(selectorsList.urlLogin)
      cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
      cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
      cy.get(selectorsList.loginButton).click()
      cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
      cy.get(selectorsList.dashboardGrid)
      cy.get(selectorsList.MyInfoMenuButton).click()
      cy.location('pathname').should('equal', '/web/index.php/pim/viewPersonalDetails/empNumber/7')
      cy.get(dataMyInfo.firstNamField).type('ju')
      cy.get(dataMyInfo.middleNameField).type('ni')
      cy.get(dataMyInfo.lastNameField).type('nho')
      cy.get(dataMyInfo.employeeIdField).type('1111')
      cy.get(dataMyInfo.otherIdField).type('222')
      cy.get(dataMyInfo.driverLicenseNumberField).type('40303034020202')
    })
  
   
  })
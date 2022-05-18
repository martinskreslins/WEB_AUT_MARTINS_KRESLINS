import FormPage from "../pageObjects/FormPage";

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
    //There is an unexpected error and this is here to fix it
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })
  
  it.only('Homework final', () => {
    cy.get('form').then(form$ => {
      form$.on('submit', e => {
        e.preventDefault()
     })
    })
    cy.fixture('formData').then((data) => {
      cy.log(JSON.stringify(data));
    //enters name, last name, email
    FormPage.firstNameInput.type(data.fname);
    FormPage.lastNameInput.type(data.lname);
    FormPage.emailInput.type(data.email);
    //clicks on male option
    FormPage.selectMaleOption.click();
    //enter mobile number
    FormPage.mobNumInput.type(data.num);
    //open date menu
    FormPage.openDateOfBirthMenu.click();
    //select month Febuary
    FormPage.selectMonthMenu.select(data.monthID);
    //select year 1930
    FormPage.selectYearMenu.select(data.year);
    //select date 28th
    FormPage.selectDate.click();
    //select subject Economics
    FormPage.selectSubject.type(data.subject+"{enter}");
    //select hobby Music
    FormPage.selectHobby.click();
    //select image pepe.jpg
    FormPage.clickUploadPic.click();
    FormPage.addressInput.type(data.address);
    //select state NCR
    FormPage.selectState.type(data.state+"{enter}");
    //select city Delhi
    FormPage.selectCity.type(data.mycity+"{enter}");
    //submit form. have to force because it is hidden from view
    FormPage.submitForm.click({force: true});  
    //validating all submitted data.
    FormPage.findRow('Student Name').should('contain', data.fname + ' ' + data.lname);
    FormPage.findRow('Student Email').should('contain', data.email);
    FormPage.findRow('Gender').should('contain', data.gender);
    FormPage.findRow('Mobile').should('contain', data.num);
    FormPage.findRow('Date of Birth').should('contain', data.dateofbirth);
    FormPage.findRow('Subjects').should('contain', data.subject);
    FormPage.findRow('Hobbies').should('contain', data.hobby);
    FormPage.findRow('Picture').should('contain', data.pic);
    FormPage.findRow('Address').should('contain', data.address);
    FormPage.findRow('State and City').should('contain', data.state+' '+data.mycity);
    })
  })
})

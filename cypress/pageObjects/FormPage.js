class FormPage {
  static get url() {
    return "/automation-practice-form";
  }

  static get exampleElement() {
    return cy.get("exampleSelector");
  }
  static get firstNameInput() {
    return cy.get("#firstName");
  }
  static get lastNameInput() {
    return cy.get("#lastName");
  }
  static get emailInput() {
    return cy.get("#userEmail");
  }
  static get selectMaleOption() {
    return cy.get("[for='gender-radio-1']");
  }
  static get mobNumInput() {
    return cy.get("#userNumber");
  }
  static get openDateOfBirthMenu() {
    return cy.get("#dateOfBirthInput");
  }
  static get selectMonthMenu() {
    return cy.get(".react-datepicker__month-select");
  }
  static get selectYearMenu() {
    return cy.get(".react-datepicker__year-select");
  }
  static get selectDate() {
    return cy.get("[aria-label='Choose Friday, February 28th, 1930']");
  }
  static get selectSubject() {
    return cy.get("#subjectsContainer");
  }
  static get selectHobby() {
    return cy.get("[for='hobbies-checkbox-3']");
  }
  static get clickUploadPic() {
    return cy.get('input[type=file]').selectFile('cypress/files/pepe.jpg');
  }
  static get addressInput() {
    return cy.get("#currentAddress");
  }
  static get selectState() {
    return cy.get("#state");
  }
  static get selectCity() {
    return cy.get("#city");
  }
  static get submitForm() {
    return cy.get("#submit");
  }
  static get rows() {
    return cy.get(".table-responsive"); //gets all rows from table
  }
  static findRow(value){
      return this.rows.contains(value).parent();
  }
}

export default FormPage;
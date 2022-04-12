import {Given, Before, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import Everphone_Page from "../pageObjects/Pages/EverPhone_Page"

const everphonepage = new Everphone_Page();


Given('user launches the application', ()=>{
    cy.visit('https://everphone.com')
})

Then('verifies home page is getting displayed', ()=>{
    cy.title().should('eq', "everphone | Home")
})

Then('verify home page is displaying menu options as {string}', (options)=>{
    everphonepage.verifyHomeTabOptions(options);
})

Then('verify language selector is visible', ()=>{
    everphonepage.verifyLanguageSelectorPresent();
})

And('verify total count of the languages as {string}', (languagecount)=>{
    everphonepage.getTotalLanguagesCount(languagecount);
})

And('verify user is able to select the language as {string}', (languageselection)=>{
    everphonepage.SelectLanguageFromdrodwn(languageselection);
})

And('navigates to Get A Quote tab', ()=>{
    everphonepage.clickGetAQuotTab();
})

And('verify a form is getting displayed', ()=>{
})

And('user is able to fill the first name {string}', (firstname)=>{
    everphonepage.enterFirstName(firstname);
})

And('user is able to fill the last name {string}', (lastname)=>{
    everphonepage.enterLastName(lastname);
})

And('user is able to fill the company e-mail address {string}', (companyemail)=>{
    everphonepage.enterCompanyMailAddress(companyemail);
})

And('user is able to fill the company name {string}', (companyname)=>{
    everphonepage.enterCompanyName(companyname);
})

And('click on submit button', ()=>{
    everphonepage.clickSubmitBtn();
})


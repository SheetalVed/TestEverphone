import {Given, Before, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given('everphone: validate user', ()=>{
    cy.visit('https://example.cypress.io/commands/actions')
})
class Everphonea_Page{

constructor(){
this.languageSelector = 'div[class=langblock]'
this.languageSelector_drpdwnValues = 'ul[class="language-list lang-list-open"]>li>a'
this.firstName_txtBox = 'input[name="firstname"]';
this.lastName_txtBox = 'input[name="lastname"]';
this.companyEmail_txtBox = 'input[name="email"]';
this.companyName_txtBox = 'input[name="company"]';
this.submitBtn = 'input[value="Submit"]';
this.getAQuoteTab = '//*[@id="hs_menu_wrapper_my_menu"]/ul/li[4]/a/text()'
this.homeTab_list = 'div[class="header-right-column"]>div>div>ul>li'
    }

    verifyHomeTabOptions(options) {
        cy.wait(200)
        cy.get('#hs-eu-confirmation-button').click();
        cy.wait(500)
        cy.get(this.homeTab_list).each(($el, index, $list) =>{
            if($el.text().trim()===(options.trim())){
                cy.log("Tab exist " + options )
            }
            else{
                cy.log(options + "Not a valid value to select")
            }
        });
    }

    clickGetAQuotTab(){
        cy.wait(200)
        cy.get('#hs-eu-confirmation-button').click();
        cy.wait(500)
        cy.xpath('this.getAQuoteTab').click();
    }
    enterFirstName(firstname){
        cy.get('this.firstName_txtBox').text(firstname);
    }

    enterLastName(lastname){
        cy.get('this.lastName_txtBox').text(lastname);
    }

    enterCompanyMailAddress(companyemail){
        cy.get('this.companyEmail_txtBox').text(companyemail);
    }

    enterCompanyName(){
        cy.get('this.companyName_txtBox').text();
    }

    clickSubmitBtn(){
        cy.get('this.submitBtn').click();
    }
    verifyMenuOptions(){
       // cy.xpath("");
    }

    verifyLanguageSelectorPresent(){
        cy.get(this.languageSelector).should('be.visible')
    }

    getTotalLanguagesCount(languagecount){
        cy.get(this.languageSelector).click();
        cy.get(this.languageSelector_drpdwnValues).should('have.length',languagecount)

    }

    SelectLanguageFromdrodwn(languageselection) {
        cy.get(this.languageSelector_drpdwnValues).each(($el, index, $list) =>{
            if($el.text().trim()===(languageselection.trim())){
                cy.log("dropdown value to select" + languageselection )
                cy.wrap($el).click();
            }
            else{
                cy.log(languageselection + "Not a valid value to select")
            }
        });
    }
}

export default Everphonea_Page;
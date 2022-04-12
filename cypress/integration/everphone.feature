Feature: Everphone automation

#####TestCase:1

# Scenario: verify user is able to launch the application

# Given user launches the application
# Then verifies home page is getting displayed

# ####TestCase:2
# Scenario Outline: Verify the options on home page

# Given user launches the application
# Then verify home page is displaying menu options as "<options>" 

# Examples: 
# |options|
# |Phone as a Service |
# |About|
# |Career|
# |Get a Quote|

# ####TestCase:3

# Scenario Outline: Verify total 6 languages displays in the dropdown and user is able to select any one from them

# Given user launches the application
# Then verify language selector is visible
# And verify total count of the languages as "<languagecount>"
# And verify user is able to select the language as "<languageselection>"

#  Examples:
#  |languagecount  | languageselection|
#  |6              | English         |

 #####TestCase:4

 Scenario Outline: Verify user is able to submit the form to get quote 

 Given user launches the application
 And navigates to Get A Quote tab
 Then verify a form is getting displayed

 And user is able to fill the first name "<firstname>"
 And user is able to fill the last name "<lastname>"
 And user is able to fill the company e-mail address "<companyemail>"
 And user is able to fill the company name "<companyname>"
 And click on submit button

 Examples:
     | firstname | lastname | companyemail |companyname |
     |test       | test     | test@test.com         | test|







 




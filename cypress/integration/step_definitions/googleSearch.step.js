import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import {googleSearchPage } from "../pageobjects";

//test steps
Given('that User start a new google search journey', () => {
    cy.log('test started')
});

When(/^he provide the search keyword (.*)$/, (keyword) => {
    googleSearchPage.enterSearchKeyword(keyword);
});

Then(/^the search result should have (.*)$/, (searchResult) => {
    googleSearchPage.validateSearchResult(searchResult);
});

Then(/^he perform the accessibility check on given page$/, () => {
    // should be excuted after visit and before checkA11y()
    cy.injectAxe();

    // ----- Below is code for accessibility check

    cy.checkA11y(null, null, terminalLog)
    cy.checkA11y('.example-class', {
        runOnly: {
            type: 'tag',
            values: ['wcag2a']
        }
    })

    function terminalLog(violations) {
        cy.task(
          'log',
          `${violations.length} accessibility violation${
            violations.length === 1 ? '' : 's'
          } ${violations.length === 1 ? 'was' : 'were'} detected`
        )
        // pluck specific keys to keep the table readable
        const violationData = violations.map(
          ({ id, impact, description, nodes }) => ({
            id,
            impact,
            description,
            nodes: nodes.length
          })
        )

        cy.task('table', violationData)
      }

})

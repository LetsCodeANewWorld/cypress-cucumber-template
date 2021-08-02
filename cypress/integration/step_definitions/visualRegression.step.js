import { Given } from 'cypress-cucumber-preprocessor/steps';
import { googleLocators } from '../locators'
require('cypress-plugin-tab')

Given(/^User visit the Google ([^"]*) page$/, (pageName)=>{
    // cy.visit(Cypress.env("url"));
    cy.fixture("page_urls.json").then((pageUrl) => {
        cy.visit(pageUrl.home)
    })
});
When(/^Screen resolution is set to width (-?\d+) and height (-?\d+)$/, (width, height) => {
    cy.viewport(width, height);
});

Then(/^google search home page should match the baseline image$/, (screenName) => {
    if (cy.xpath('//div[text()="I agree"]').then($button => {
        if ($button.is(':visible')){
            cy.wrap($button).click()
        }
    }))
    //    Enter some text to create diff image
        cy.xpath(googleLocators.searchBox).type("Cypress")
        cy.xpath(googleLocators.searchBox).tab();

    cy.xpath('//input[@title="Search"]').matchImageSnapshot({
            "imageConfig": {
              "createDiffImage": true,                // Should a "diff image" be created, can be disabled for performance
              "threshold": 0.01,                      // Amount in pixels or percentage before snapshot image is invalid
              "thresholdType": "percent",             // Can be either "pixel" or "percent"
            },
            "customSnapshotsDir": '/cypress/integration/reports/vrt-image-snapshot',
            "name": "custom image name",            // Naming resulting image file with a custom name rather than concatenating test titles
            "separator": "#",  // Naming resulting image file with a custom separator rather than using the default ` #`
          });
})

import {googleLocators} from '../../locators/index';

class GoogleSearchPage {

    enterSearchKeyword(keyword){
        cy.get('button#L2AGLb').click({force:true})
        cy.xpath(googleLocators.searchBox).type(keyword);
        cy.xpath(googleLocators.searchButton).click({force:true});
    }

    validateSearchResult(searchResult){
        cy.xpath(googleLocators.cypressSearchResult.replace("<searchResultText>", searchResult)).then($button =>{
            expect($button.is(":visible")===true,
                `${searchResult} - search result is not displayed`)
        })
        cy.screenshot('Search keyword verification passed..!!')
    }
}
export const googleSearchPage = new GoogleSearchPage();

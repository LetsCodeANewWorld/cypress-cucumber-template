class GoogleLocators {
    constructor() {
        // Google home page locators
        this.searchBox =  '//input[@name="q" and @title="Search"]';
        this.searchButton = '//div[@class="FPdoLc lJ9FBc"]//input[@value="Google Search"]';
        this.cypressSearchResult = '//h3[contains(text(),"<searchResultText>")]';
    }
}

export const googleLocators = new GoogleLocators();

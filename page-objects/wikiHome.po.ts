import {$, browser, ElementFinder} from 'protractor';

class WikiHomePage {
    private searchBox: ElementFinder;
    private searchButton: ElementFinder;
    private searchThirdResult: ElementFinder;
    private verifyHeader: ElementFinder;

    constructor() {
        this.searchBox = $(`#searchInput`);
        this.searchButton = $('#searchButton');
        this.searchThirdResult = $('body > div.suggestions > div > a:nth-child(3)');
        this.verifyHeader = $('#firstHeading');
    }

    async navigate() {
        browser.get('https://en.wikipedia.org/wiki/Main_Page');
    }

    async typeSearch(q: string) {
        await this.searchBox.sendKeys(q);
    }

    async clickSearch() {
        await this.searchButton.click();
    }

    async clickOnThirdResult() {
        browser.pause()
        await this.searchThirdResult.click();
    }

    verifyTextHeader(value: string) {
        expect(this.verifyHeader.getText()).toContain(value);
    }
}

export const wikiHomePage = new WikiHomePage();
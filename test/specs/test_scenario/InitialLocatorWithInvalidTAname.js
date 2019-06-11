const ta = require('trueautomation-helper').ta;

describe('Verification of information output the locators errors.', () => {
    it('Initial locator with invalid TA name', () => {
    browser.setTimeout({ 'implicit': 5000 });

    browser.url('https://accounts.google.com');
    $(ta('InitialLocator:Not_!_Valid', "//span[@class='RveJvd snByac']")).click();
});
});
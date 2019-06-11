const ta = require('trueautomation-helper').ta;

describe('Verification of information output the locators errors.', () => {
    it('Smart locator is in the database, but taken from another page', () => {
    browser.setTimeout({ 'implicit': 5000 });

    browser.url('https://accounts.google.com');

    // This locator is made on another page
    $(ta('Translate:Rus1')).click()
});
});
const ta = require('trueautomation-helper').ta;

describe('Verification of information output the locators errors.', () => {
    it('Smart locator does not exist in the database', () => {
    browser.setTimeout({ 'implicit': 5000 });

    browser.url('https://accounts.google.com');

    // The locator name does not exist in the database
    $(ta('SmartLocator:Not_in_the_database')).click()
});
});
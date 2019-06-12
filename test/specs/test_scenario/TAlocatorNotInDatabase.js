var utils = require('./Utils');
const ta = require('trueautomation-helper').ta;

describe('Verification of information output the locators errors.', () => {
    it('Smart locator does not exist in the database', () => {
        browser.url('https://accounts.google.com');

        // The locator name does not exist in the database
        var withTALocator = ta('SmartLocator:Not_in_the_database');
        var Error = 'NOT_FOUND';

        utils.checkErrorMessage(withTALocator, Error);
    });
});

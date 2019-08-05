var utils = require('./Utils');
const ta = require('trueautomation-helper').ta;

describe('Verification of information output the locators errors.', () => {
    it('Smart locator is in the database, but taken from another page', () => {
        browser.url('https://accounts.google.com');

        // This locator is made on another page
        var withTALocator = ta('Translate:Rus1');
        var Error = 'Element was not found on the page. Element \'Translate:Rus1\' with such locator is not on this page and could not be detected by TrueAutomation.';

        utils.checkErrorMessage(withTALocator, Error);
    });
});
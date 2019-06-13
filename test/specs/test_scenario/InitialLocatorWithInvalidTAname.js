var utils = require('./Utils');
const ta = require('trueautomation-helper').ta;

describe('Verification of information output the locators errors.', () => {
    it('Initial locator with invalid TA name', () => {
        browser.url('https://accounts.google.com');

        var withTALocator = ta('ta-Name', '//span[@class=\'RveJvd snByac\']');
        var Error = 'TrueAutomation locator ta-Name contains unsupported characters. Please make sure to use only letters, numbers, colon and underscore symbols in locator names.';

        utils.checkErrorMessage(withTALocator, Error);
    });
});







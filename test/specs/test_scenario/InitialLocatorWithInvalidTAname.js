var utils = require('./Utils');
const ta = require('trueautomation-helper').ta;

describe('Verification of information output the locators errors.', () => {
    it('Initial locator with invalid TA name', () => {
        browser.url('https://accounts.google.com');

        var withTALocator = ta('ta-Name', '//span[@class=\'RveJvd snByac\']');
        var Error = 'Such TrueAutomation locator name ta-Name can not be used. Locator name may consist of several parts separated by a colon. English letters, numbers and single underscores that are not at the beginning or at the end may be used.';

        utils.checkErrorMessage(withTALocator, Error);
    });
});







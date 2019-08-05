var utils = require('./Utils');
const ta = require('trueautomation-helper').ta;

describe('Verification of information output the locators errors.', () => {
    it('Initial locator does not exist on used page', () => {
        browser.url('https://accounts.google.com');

        // Used locator taken from another page
        var withTALocator = ta('Practike:Frame:iframe', '#courses-iframe');
        var Error = 'Element was not found on the page. Element \'Practike:Frame:iframe\' with such locator is not on this page and could not be detected by TrueAutomation.';

        utils.checkErrorMessage(withTALocator, Error);
    });
});
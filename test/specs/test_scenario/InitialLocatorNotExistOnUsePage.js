var utils = require('./Utils');
const ta = require('trueautomation-helper').ta;

describe('Verification of information output the locators errors.', () => {
    it('Initial locator does not exist on used page', () => {
        browser.url('https://accounts.google.com');

        // Used locator taken from another page
        var withTALocator = ta('Zachet:Zachet_Div_Initial', '.logo.top-menu');
        var Error = 'NOT_FOUND';

        utils.checkErrorMessage(withTALocator, Error);
    });
});
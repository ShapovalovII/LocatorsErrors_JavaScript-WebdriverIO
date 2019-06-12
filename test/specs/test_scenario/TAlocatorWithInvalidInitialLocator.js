var utils = require('./Utils');
const ta = require('trueautomation-helper').ta;

describe('Verification of information output the locators errors.', () => {
    it('TA locator with invalid css Selector', () => {
        browser.url('https://accounts.google.com');

        // Missing dot "."
        var withTALocator = ta('taName', '.RveJvd snByac');
        var Error = 'Unable to locate element { using: "css selector", selector: ".RveJvd snByac" }';

        utils.checkErrorMessage(withTALocator, Error);
    });
});

describe('Verification of information output the locators errors.', () => {
    it('TA locator with invalid id', () => {
        browser.url('https://accounts.google.com');

        // Added exclamation mark "!"
        var withTALocator = ta('taName', '![id=\'identifierNext\']');
        var Error = 'Unable to locate element { using: "css selector", selector: "![id=\'identifierNext\']" }';

        utils.checkErrorMessage(withTALocator, Error);
    });
});

describe('Verification of information output the locators errors.', () => {
    it('TA locator with invalid xpath', () => {
        browser.url('https://accounts.google.com');

        // Missing two slashes "//"
        var withTALocator = ta('taName', 'span[@class=\'RveJvd snByac\']');
        var Error = 'Unable to locate element { using: "css selector", selector: "span[@class=\'RveJvd snByac\']" }';

        utils.checkErrorMessage(withTALocator, Error);
    });
});

describe('Verification of information output the locators errors.', () => {
    it('TA locator with invalid partial link text', () => {
        browser.url('https://accounts.google.com');

        // Added exclamation mark "!"
        var withTALocator = ta('taName', '!*=Справка');
        var Error = 'Unable to locate element { using: "css selector", selector: "!*=Справка" }';

        utils.checkErrorMessage(withTALocator, Error);
    });
});
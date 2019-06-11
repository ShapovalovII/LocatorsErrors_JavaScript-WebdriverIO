const ta = require('trueautomation-helper').ta;

describe('Verification of information output the locators errors.', () => {
    it('TA locator with invalid css Selector', () => {
    browser.setTimeout({ 'implicit': 5000 });

    browser.url('https://accounts.google.com');

    // Missing dot "."
    $(ta('TAname_Valid:Invalid_cssSelector', ".RveJvd snByac")).click();
});
});

describe('Verification of information output the locators errors.', () => {
    it('TA locator with invalid id', () => {
    browser.setTimeout({ 'implicit': 5000 });

    browser.url('https://accounts.google.com');

    // Added exclamation mark "!"
    $(ta('TAname_Valid:Invalid_Id', "![id='identifierNext']")).click();
});
});

describe('Verification of information output the locators errors.', () => {
    it('TA locator with invalid xpath', () => {
    browser.setTimeout({ 'implicit': 5000 });

    browser.url('https://accounts.google.com');

    // Missing two slashes "//"
    $(ta('TAname_Valid:Invalid_Xpath', "span[@class='RveJvd snByac']")).click();
});
});

describe('Verification of information output the locators errors.', () => {
    it('TA locator with invalid partial link text', () => {
    browser.setTimeout({ 'implicit': 5000 });

    browser.url('https://accounts.google.com');

    // Added exclamation mark "!"
    $(ta('TAname_Valid:Invalid_Partial_Link_Text', '!*=Справка')).click();
});
});
const ta = require('trueautomation-helper').ta;

describe('Verification of information output the locators errors.', () => {
    it('Initial locator does not exist on used page', () => {
    browser.setTimeout({ 'implicit': 5000 });

    browser.url('https://accounts.google.com');

    // Used locator taken from another page
    $(ta('Zachet:Zachet_Div_Initial', ".logo.top-menu")).click();
});
});
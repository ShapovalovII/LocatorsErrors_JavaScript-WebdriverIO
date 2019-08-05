var utils = require('./Utils');
const ta = require('trueautomation-helper').ta;

describe('Verification of information output the locators errors.', () => {
    it('Smart locator does not exist in the database', () => {
        browser.url('https://accounts.google.com');

        // The locator name does not exist in the database
        var withTALocator = ta('SmartLocator:Not_in_the_database');
        var Error = 'There is no such TA Locator in the objects repository. Element \'SmartLocator:Not_in_the_database\' was not found in the objects repository of \'TestTA\' project.';

        utils.checkErrorMessage(withTALocator, Error);
    });
});

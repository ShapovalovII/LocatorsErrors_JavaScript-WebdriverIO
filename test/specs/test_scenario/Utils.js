module.exports = {
    checkErrorMessage: function (withTa, expectedError) {
        var assert = require('assert');

        try {
            $(withTa).click();
        } catch (err) {
            var actualErrorMessageWithTA = err.message;

            console.log('\n**********************');
            console.log('Expected error: ' + expectedError);
            console.log('**********************');

            console.log('\n**********************');
            console.log('Actual error: ' + actualErrorMessageWithTA);
            console.log('**********************');

            assert(actualErrorMessageWithTA.includes(expectedError), 'Error messages not contains.');
        }
    },
};
* Install necessary packages, using the command `npm install`

* Run test with the command 
```bash
wdio wdio.conf.js --spec ./test/specs/test_scenario/InitialLocatorWithInvalidTAname.js
wdio wdio.conf.js --spec ./test/specs/test_scenario/InitialLocatorNotExistOnUsePage.js
wdio wdio.conf.js --spec test/specs/test_scenario/TAlocatorWithInvalidInitialLocator.js
wdio wdio.conf.js --spec test/specs/test_scenario/TAlocatorInDatabase.js
wdio wdio.conf.js --spec test/specs/test_scenario/TAlocatorNotInDatabase.js
```
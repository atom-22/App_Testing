'use strict';
exports.config = {
	framework: 'jasmine2',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs : ['loginPagePositiveTesting.js'],
	multiCapabilities: [{
	    browserName: 'firefox'
	  }, {
	    browserName: 'chrome'
	  }]
};

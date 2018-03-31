'use strict';

const test_data = require('./app.json');
const poTW = require('./pageObj.json');

describe('Sign Up: Email Validation ', () => {

	beforeAll(() => {
		browser.ignoreSynchronization = true;
		browser.get(poTW.loginField.signUpURL);
		browser.manage().window().maximize();
	});

	afterAll(() => {
		browser.ignoreSynchronization = false;
		browser.executeScript('window.sessionStorage.clear();');
		browser.executeScript('window.localStorage.clear();');
	});

	let emailValidation = (inputValue, error) => {
		beforeAll(() => {
			$(poTW.loginField.singUpEmail).clear().sendKeys(inputValue);
			browser.sleep(1000);
		});

		it ("should check error message visibility/invisibility", () => {
			if(error) {
				expect($(poTW.loginField.emailError).getText()).toBe(error);
				expect($(poTW.loginField.validEmail).isPresent()).toBeFalsy()
		}	else {
				expect($(poTW.loginField.validEmail).isDisplayed()).toBe(true);
				expect($(poTW.loginField.emailError).isPresent()).toBeFalsy();
			}
		})
	}

	for(let i = 0; i < test_data.testObj.length; i++) {
		let item = test_data.testObj[i];
		describe('', () => {
			emailValidation(item.inputValue, item.error);
		});
	}
});
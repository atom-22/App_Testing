'use strict';

const test_data = require('./app.json');
const poTW = require('./pageObj.json');

describe('Sign Up: Password Validation ', () => {

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

	let passwordValidation = (inputValue, error) => {
		beforeAll(() => {
			$(poTW.loginField.passwordInput).clear().sendKeys(inputValue);
			browser.sleep(3000);
		});

		it ("should check error message visibility/invisibility", () => {
			if(error) {
				expect($(poTW.loginField.passwordError).getText()).toBe(error);
				expect($(poTW.loginField.validPassword).isPresent()).toBeFalsy();
		}	else {
				expect($(poTW.loginField.validPassword).isDisplayed()).toBe(true);
				expect($(poTW.loginField.passwordError).isPresent()).toBeFalsy();
			}
		})
	}

	for(let i = 0; i < test_data.passwordObj.length; i++) {
		let item = test_data.passwordObj[i];
		describe('', () => {
			passwordValidation(item.inputValue, item.error);
		});
	}
});
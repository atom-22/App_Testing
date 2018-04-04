'use strict';

const test_data = require('./main.json');
const coTW = require('./constant.json');
const poTW = require('./pageObj.json');

describe('Sign Up Negative check ', () => {

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

	it("should check language", ()=> {
			expect($(poTW.loginField.languageTxt).getText()).toEqual("English");
			browser.sleep(500);
	});

	let signUpValidation = (name, email, password, errorElement, errorTxt, validElement) => {
		beforeAll(() => {
			$(poTW.loginField.fullNameInput).clear().sendKeys(name);
			$(poTW.loginField.singUpEmail).clear().sendKeys(email);
			$(poTW.loginField.passwordInput).clear().sendKeys(password);
			$(poTW.loginField.submitBtn).click();
			browser.sleep('1000')
		});

		it ("should check sign up negative validation", () => {
			expect(browser.getCurrentUrl()).toEqual(poTW.loginField.signUpURL, 'check URL');
			if (errorTxt) {
				expect($(poTW.loginField[errorElement]).getText()).toBe(coTW.errorMessages[errorTxt]);
				expect($(poTW.loginField[validElement]).isPresent()).toBeFalsy();
			};
		});
	};

	for(let i = 0; i < test_data.testObj.length; i++) {
		let item = test_data.testObj[i];
		describe('for ' + item.description, () => {
			signUpValidation(item.name, item.email, item.password, item.errorElement, item.errorTxt, item.validElement);
		});
	};
});




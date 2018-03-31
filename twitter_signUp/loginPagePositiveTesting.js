'use strict';

const poTW = require('./pageObj.json');
const test_data = require('./loginPagePositiveTesting.json');

describe('Twitter: Email validation ', ()=> {
	const validEmail = $(poTW.loginField.validEmail);
 	const emailError = $(poTW.loginField.error);

	beforeAll(()=> {
		browser.ignoreSynchronization = true;
		browser.get(poTW.loginField.signUpURL);
		browser.manage().window().maximize();	
	});

	afterAll(() => {
		browser.ignoreSynchronization = false;
		browser.executeScript('window.sessionStorage.clear();');
		browser.executeScript('window.localStorage.clear();');
	});

	const posCheck = ()=> {
		const posVal = test_data.emailPosValue; 
		for (var i = 0; i < posVal.length; ++i) {
			$(poTW.loginField.singUpEmail).clear().sendKeys(posVal[i]);
			browser.sleep(1000);
			expect(validEmail.isDisplayed()).toBe(true);
			//expect(element(By.xpath('//*[@id="phx-signup-form"]/div[1]/div[2]/div/div[1]/p[1]')).isDisplayed()).toBe(true);
			expect(emailError.isPresent()).toBeFalsy();
			//expect(element(By.xpath('//*[@id="phx-signup-form"]/div[1]/div[3]/div[1]/div/p[4]')).isPresent()).toBeFalsy();
		}	
	}

	xit('should check positive values ', ()=> {
		posCheck();
	});

	const negCheck = ()=> {
		const negVal = test_data.emailNegValues;
		for (var i = 0; i < negVal.length; ++i) {
			$(poTW.loginField.singUpEmail).clear().sendKeys(negVal[i]);
			browser.sleep(1000);
			expect(validEmail.isPresent()).toBeFalsy();
			expect(emailError.getText()).toBe(test_data.emailErrorMessage);
			//expect(element(By.xpath('//*[@id="phx-signup-form"]/div[1]/div[3]/div[1]/div/p[4]')).getText()).toBe(test_data.emailErrorMessage);
		}
	}

	it('should check negative values ', ()=> {
		negCheck();
	});
});


describe('Twitter: Password validation ', ()=> {

	beforeAll(()=> {
		browser.ignoreSynchronization = true;
		browser.get(poTW.loginField.signUpURL);
		browser.manage().window().maximize();	
	});

	afterAll(() => {
		browser.ignoreSynchronization = false;
		browser.executeScript('window.sessionStorage.clear();');
		browser.executeScript('window.localStorage.clear();');
	});

	const passwordPosCheck = ()=> {
		const posVal = test_data.passwordPosValues; 
		for (var i = 0; i < posVal.length; ++i) {
			$(poTW.loginField.passwordInput).clear().sendKeys(posVal[i]);
			browser.sleep(1000);
			expect( element(By.xpath('//*[@id="phx-signup-form"]/div[1]/div[3]/div[1]/div/p[1]')).isDisplayed()).toBe(true);
			expect($(poTW.loginField.error).isPresent()).toBeFalsy();
		}	
	}

	it('should check password positive values ', ()=> {
		passwordPosCheck();
	});

	const passwordNegCheck = ()=> {
		const negVal = test_data.passwordNegValues;
		for (var i = 0; i < negVal.length; ++i) {
			$(poTW.loginField.passwordInput).clear().sendKeys(negVal[i]);
			browser.sleep(1000);
			expect($(poTW.loginField.validPassword).isPresent()).toBeFalsy();
			expect($(poTW.loginField.error).getText()).toBe(test_data.passordErrorMessage);
		}
	}

	it('should check password negative values ', ()=> {
		passwordNegCheck();
	});

});

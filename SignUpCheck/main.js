'use strict';
const test_data = require('./main.json');
const poTW = require('./pageObj.json');

describe('Page validation check ', () => {
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

    let validationCheck = (val1, val2, val3) => {
		beforeAll(() => {	
			$(poTW.loginField.fullNameInput).clear().sendKeys(val1);
			$(poTW.loginField.singUpEmail).clear().sendKeys(val2);
			$(poTW.loginField.passwordInput).clear().sendKeys(val3);
			browser.sleep(2000);
			$(poTW.loginField.submitBtn).isDisplayed().click();
			
		});

		it ("should check sign on possibility", () => {
			expect(browser.getCurrentUrl()).toEqual(poTW.loginField.signUpURL);
		})
	}

	for(let i = 0; i < test_data.inputs.length; i++) {
		let item = test_data.inputs[i];
		describe('for ', () => {
			validationCheck(item.fullName,item.email,item.password);
		});
    }
    
});

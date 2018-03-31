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
    
	it ("should check error message visibility/invisibility", () => {
        let passwordValidation = (inputValue, error) => {
        beforeAll(() => {
            $(poTW.loginField.fullNameInput).clear().sendKeys("inputValue");
            $(poTW.loginField.singUpEmail).clear().sendKeys("inputValue");
            $(poTW.loginField.passwordInput).clear().sendKeys("inputValue");
			browser.sleep(3000);
		});
	})
	
        // let arr = poTW.loginField.fields;
        // for(let i = 0; i < arr.length; ++i){
        //     const item = arr[i];
            //$item.clear().sendKeys("value");
            //$(poTW.loginField.singUpEmail).clear().sendKeys("inputValue");
        //}

    //browser.sleep(5000);
   
	// 	it ("should check error message visibility/invisibility", () => {
	// 		if(error) {
	// 			expect($(poTW.loginField.emailError).getText()).toBe(error);
	// 			expect($(poTW.loginField.validEmail).isPresent()).toBeFalsy()
	// 	}	else {
	// 			expect($(poTW.loginField.validEmail).isDisplayed()).toBe(true);
	// 			expect($(poTW.loginField.emailError).isPresent()).toBeFalsy();
	// 		}
	// 	})
    // }
    

	for(let i = 0; i < test_data.testObj.length; i++) {
		let item = test_data.testObj[i];
		describe('for ', () => {
			validationCheck(item.inputValue, item.error);
		});
    }
    
});

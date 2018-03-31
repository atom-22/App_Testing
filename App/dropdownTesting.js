'use strict';

describe('protractorjs homepage', function() {
      it('should select option', async function() {
        debugger;
        await browser.get('https://www.protractortest.org/#/');
        await browser.manage().window().maximize();
        await element(by.id('drop3')).click();
        let tut = element(by.css('[tabindex="-1"]')).isPresent();
        browser.sleep(5000);
      });
    });

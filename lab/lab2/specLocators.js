describe('Learn different browser',function(){

    it('Should test salesforce app',function(){

        browser.waitForAngularEnabled(false);
        browser.get('https://login.salesforce.com/');
        browser.sleep(3000);
        element(by.id('username')).sendKeys('Mike');
        browser.sleep(3000);
        element(by.name('pw')).sendKeys('Mike123');
        browser.sleep(3000);
        element(by.id('Login')).click();
        browser.sleep(5000);
        

    });
});
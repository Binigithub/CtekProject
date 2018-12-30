describe('way2Automation',()=>{

    xit('should work',()=>{


        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        browser.sleep(2000);
        element(by.buttonText('Customer Login')).click();
        browser.sleep(2000);
        element(by.css('.form-group>label')).getText().then(function(text){
            if(text=="Your Name :"){
                console.log("Passed");
            }else{
                console.log("fail");
            }
        })
    })
   
    xit('should work',()=>{


        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        browser.sleep(2000);
        element(by.partialButtonText('Bank')).click();
    
    })
    it('should work',()=>{


        browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
        browser.sleep(2000);
        element(by.model('Auth.user.name')).sendKeys('angular');
        element(by.model('Auth.user.password')).sendKeys('password');
        element(by.model('model[options.key]')).sendKeys('angular123');
        browser.sleep(2000);
})

})
describe('isDisplayed and keyboardmouth',()=>{

    it('should display and clear',()=>{

        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login%E2%80%A2Check");
        element(by.css('body > div.jumbotron > div > div > div > form > div:nth-child(1) > label')).isDisplayed();
        element(by.xpath('/html/body/div[3]/div/div/div/form/div[2]/label')).isDisplayed();
        element(by.css('.control-label')).isDisplayed();
        $('#username').getCssValue('color').then(function(text1){
                     console.log(text1);
                 })
        element(by.css('#username')).sendKeys('a').sendKeys(protractor.Key.ENTER);
        element(by.css('#username')).sendKeys('aa').sendKeys(protractor.Key.ENTER);
        element(by.css('#username')).sendKeys('abc').sendKeys(protractor.Key.ENTER);
        element(by.css('#password')).sendKeys('abc123').sendKeys(protractor.Key.ENTER);
        element(by.xpath("body > div.jumbotron > div > div > div > form")).getCssValue('color').then(function(text){
            console.log(text);
        })
        if(text1!=text){
            console.log('Passed')
        }else{
            console.log('Failed');
        }
    element(by.css("body > div.jumbotron > div > div > div > form > div.form-actions > button")).enabled();
    })
})
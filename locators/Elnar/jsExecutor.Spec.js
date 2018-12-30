describe('Javascript Executor',()=>{

    beforeEach(function(){
        browser.ignoreSynchronization=true; 
        browser.executeScript('window.location="https://www.google.com/";') 
    })
    it('should get title/domain of the page',()=>{
        browser.executeScript("return document.title").then(function(title){
            console.log('Title is: ' + title);
        })
        browser.executeScript("return document.URL").then(function(URL){
            console.log('URL is: ' + URL);
        })
        browser.executeScript("return document.domain").then(function(domain){
            console.log('Domain is: '+domain);
        });

    });

    it('should type',()=>{
        browser.executeScript("document.getElementsByName('q')[0].value='kindel'");
        browser.sleep(2000);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(3000);
        browser.executeScript("window.scrollBy(0,600)");
        browser.sleep(3000);
    });
});

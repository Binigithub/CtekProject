// describe('Practicing iframe',()=>{
//     beforeAll(function(){
//         browser.ignoreSynchronization=true;  
//         browser.get('https://the-internet.herokuapp.com/iframe')
//     })
    
        
    
//     it('should switch to iframe',()=>{
//         browser.sleep(3000);
//         browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));

//         $('#tinymce').click();
//         $('#tinymce').clear();
//         $('#tinymce').sendKeys('Cyberstars');
//         browser.sleep(3000);

// })
// })
describe('Practicing iframe',()=>{
    beforeAll(function(){
        browser.ignoreSynchronization=true;  
        browser.get('http://www.qaclickacademy.com/practice.php')
    })

//  it('should switch to iframe',()=>{
//     browser.sleep(3000);
//     browser.switchTo().frame(browser.driver.findElement(by.id('courses-iframe')));
//     $("#homepage > header > div.tools > div > ul > li:nth-child(1) > a").getText().then(function(text){
//         console.log(text);
//     })

// })
it('should switch to Iframe', () => {

    browser.waitForAngularEnabled(false);
    browser.get('http://www.qaclickacademy.com/practice.php');
    browser.sleep(4000);
    browser.switchTo().frame(browser.driver.findElement(by.id('courses-iframe')));

        expect($$('.tools .container-fluid span').get(0).getText()).toEqual('(+1) 323-744-6780');
        expect($$('.tools .container-fluid span').get(1).getText()).toEqual('info@qaclickacademy.com');
        browser.sleep(1000); 

        browser.switchTo().defaultContent();
        $('.logoClass').click();
        browser.sleep(3000); 


});

})
describe('Testing Implicit wait',()=>{
    it('Should wait for a fixed amount of time when element not found',()=>{
        browser.ignoreSynchronization=true; 
        browser.get('https://www.target.com/');
        element(by.linkText('Categories2')).click();
    })
})
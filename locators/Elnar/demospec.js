describe('Demonstrating Jasmine Spec reporter',()=>{

    it('should check if element is displayed',()=>{
        browser.get("https://www.bhtp.com/");
        expect(element.all(by.linkText('GET A QUOTE')).get(0).isDisplayed()).toBe(true);

    });
});
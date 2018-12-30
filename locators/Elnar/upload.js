// describe('Name of the group',()=>{
//     var path=require('path');
// it('should upload file',()=>{
//     browser.get('http://nervgh.github.io/pages/angular-file-upload/examples/simple');
//     $$("input[type='file']").get(0).
//     sendKeys('C:/Users/binni/Desktop/CtekProject/locators/Elnar/docs/test.txt');
//     $('.btn-success').click();
//     browser.sleep(5000);
// })

// it('should upload file',()=>{
//     browser.ignoreSynchronization=true; 
//     browser.get('https://fineuploader.com/demos.html');
//     $$('input[type="file"]').get(0).
//     sendKeys('C:/Users/binni/Desktop/CtekProject/locators/Elnar/docs/images-png.png');
//     browser.sleep(5000);
//     expect($('.qq-thumbnail-selector').isDisplayed()).toBe(true);
// })
// })

describe('Name of the group', () => {

    var path = require('path');

    // xit('should upload file ', () => {

    //     browser.get('http://nervgh.github.io/pages/angular-file-upload/examples/simple');

    //     $$("input[type='file']").get(0).

    //     sendKeys('C:/Users/emirzayev/Desktop/CtekProject/Demo/Docs/TestDoc.txt'); 

    //     $('.btn-success.btn-s').click();

    //     browser.sleep(7000);

    // });

    it('upload temp', () => {

        browser.waitForAngularEnabled(false);

        browser.get('https://fineuploader.com/demos.html');

        $$('input[type="file"]').get(0).sendKeys(__dirname+'/Docs/images-png.png');

        browser.sleep(4000);

        expect($('.qq-thumbnail-selector').isDisplayed()).toBe(true);

    });

});
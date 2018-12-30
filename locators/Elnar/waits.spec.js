xdescribe('working with Explicit waits',()=>{

    var EC = protractor.ExpectedConditions;
    it('should wait for an element to be visible',()=>{
        browser.ignoreSynchronization=true;
        browser.get('http://automationpractice.com/index.php');
        browser.wait(EC.visibilityOf( $$('.homeslider-description .btn').get(2)),14000).then(function(){
            $$('.homeslider-description .btn').get(2).click();
        });
    });
});


describe('Working with Explicit Waits', () => {

    var EC = protractor.ExpectedConditions;
    it('should wait for an element to be visible', () => {

        browser.waitForAngularEnabled(false);

        browser.get('http://automationpractice.com/index.php');

        browser.wait(EC.visibilityOf( $$('.homeslider-description .btn').

        get(2)),14000).then(function(){

            $$('.homeslider-description .btn').get(2).click();

        });

    });

});
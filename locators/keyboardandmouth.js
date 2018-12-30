describe('Key board and mouth',()=>{

    // xit('clear method',()=>{
    //     browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
    //     element(by.id('username')).sendKeys('Cybertek');
    //     browser.sleep(3000);
    //     element(by.id('username')).clear();
    //     browser.sleep(3000);
    //     element(by.id('username')).sendKeys('Angular');
    //     browser.sleep(3000);
    // })
    // xit('Using keyword buttons',()=>{
    //     browser.get("https://flow.microsoft.com/en-us/");
    //     element(by.css(".c-search.homepage-search.ng-pristine.ng-valid>input")).sendKeys('dropbox');
    //     browser.sleep(3000);
    //     element(by.css(".c-search.homepage-search.ng-pristine.ng-valid>input"))
    //     .sendKeys(protractor.Key.BACK_SPACE)
    //     .sendKeys(protractor.Key.ENTER)
    //     browser.sleep(6000);
    // });
    // xit('getAttribute Method Usage',()=>{
    //     browser.get("https://flow.microsoft.com/en-us/");
    //     browser.sleep(3000);
    //     $('.ms-logo').getAttribute('title').then(function(titleAttribute){
    //         console.log(titleAttribute);
    //         browser.sleep(3000);

    //     });
    //     $('div[title="Microsoft"]').getAttribute('class').then(function(titleAttribute){
    //         console.log(titleAttribute);
    //         browser.sleep(3000);
            
    //     });
    // });
    // xit('getAttribute Method Usage',()=>{
    //     browser.ignoreSynchronization=true;
    //     browser.get("https://www.staples.com/");
    //     browser.sleep(3000);
    //     element(by.css('.staples-logo')).getAttribute('title').then(function(text){
    //         console.log(text);
    //     });
    // })
    // xit('getCssValue Method Usage',()=>{
    //     browser.get("https://flow.microsoft.com/en-us/");
    //     browser.sleep(3000);
    //     $('#home-video-button').getCssValue('color').then(function(text){
    //         console.log(text);
    //     })
    //     $('#home-video-button').getCssValue('font-size').then(function(text){
    //         console.log(text);
    //     });
    // });
    // it('getCssValue Method Usage',()=>{
    //     browser.ignoreSynchronization=true;
    //     browser.get("https://www.staples.com/");
    //     browser.sleep(3000);
    //     $('#section-cart > div.cart-icon-container').getCssValue('color').then(function(text){
    //         console.log(text);
    //     })
    //     $('#section-cart > div.cart-icon-container').getCssValue('font-size').then(function(text){
    //         console.log(text);
    //     });
    // });
    //getLocation method on Microsoft

    xit('getLocation Method Usage', () => {

        browser.get("https://flow.microsoft.com/en-us/");

        //finds the location of the element

        element(by.id("home-video-button")).getLocation().then(function(location){

            var x = location.x;

            var y = location.y;

            console.log(x + '------'+ y);

             })

        });
        xit('getLocation Method Usage', () => {

            browser.get("https://www.bhtp.com/");
    
            //finds the location of the element
    
            $("[class='btn footer-btn'][href='/v2/claims/create' ]").getLocation().then(function(location){
    
                var x = location.x;
    
                var y = location.y;
    
                console.log(x + '------'+ y);
    
                 })
    
            });
            
            // Mouse Actions

    xit('Mouse Hover over example', () => {

        browser.waitForAngularEnabled(false);

        browser.get("http://the-internet.herokuapp.com/");

        element(by.linkText("Hovers")).click();

        browser.sleep(2000);

        browser.actions().mouseMove($('.figure>img')).perform();

        browser.sleep(3000);

        element(by.linkText('View profile')).click();

        browser.sleep(4000);

    });
    xit("Mouse Hover over example",()=>{

        browser.waitForAngularEnabled(false);

        browser.get("http://the-internet.herokuapp.com/");

        element(by.linkText("Hovers")).click();

        browser.sleep(2000);

        browser.actions().mouseMove($$('.figure>img').get(2)).perform();

        browser.sleep(3000);

        element(by.linkText("View profile")).click();

        browser.sleep(3000);

       

    });
    xit('Drag and Drop',()=>{
        var dragAndDrop=require('html-dnd').code;
        browser.waitForAngularEnabled(false);
        browser.get('http://the-internet.herokuapp.com/drag_and_drop');
        browser.executeScript(dragAndDrop,element(by.id('column-a')),element(by.id('column-b')),0,0);
        browser.sleep(4000);
    })

    //scroling down to a new element
    xit('scroling down to a new elemen',()=>{

        browser.get("https://www.bhtp.com/");
        browser.sleep(3000);
        browser.executeScript("arguments[0].scrollIntoView();",element(by.linkText("START A CLAIM")))
            .then(function(){
                browser.sleep(3000);
                element(by.linkText("START A CLAIM")).click();  

            });
    });

    xit('scroling down to a new elemen',()=>{

        browser.get("https://www.bhtp.com/");
        browser.sleep(3000);
        browser.executeScript("window.scrollTo(0,document.body.scrollHeight)")
            .then(function(){
                browser.sleep(3000);
                element(by.linkText("START A CLAIM")).click();  

            });
    });

    xit('javaScript click',()=>{

        browser.get("https://www.bhtp.com/");
        browser.sleep(3000);
        browser.executeScript("arguments[0].click();",element(by.linkText("START A CLAIM")))
            .then(function(){
                
                browser.sleep(4000);
            });
    });
   
    

});
describe('Browser Methed Suite',function(){

    it('Browser get method',function(){
        //none angular websites
        //browser.ignoreSynchronization=true;
        browser.waitForAngularEnabled(false);
        //opening a webpage with URL
        browser.get('https://www.youtube.com//')
        browser.sleep(4000);
  });

    it('Navigate to Staples.com ',function(){
         
        browser.get('https://www.staples.com/')
    });

    it('Browser refresh method',function(){
        browser.waitForAngularEnabled(false);
        browser.get('http://www.bbc.com/');
        browser.sleep(4000);
        browser.refresh();
        browser.sleep(4000);
    });
    
    it('Navigate Back/Forward Method',function(){
        browser.waitForAngularEnabled(false);
        
        browser.get('http://www.bbc.com/');
        browser.sleep(4000);

        browser.get('https://www.google.com/');
        browser.sleep(4000);
        browser.navigate().back();
        browser.sleep(4000);
        browser.navigate().forward();
        browser.sleep(4000);
    });
   
    it('Maximaize windows Method',function(){
     browser.ignoreSynchronization=true;
     browser.get('https://www.google.com/'); 
     browser.sleep(4000);
     browser.manage().window().maximize();
     browser.sleep(3000);
     browser.manage().window().setSize(1280,900);
     browser.sleep(4000);
    }); 

    it('Get Current URL Method',function(){
        browser.ignoreSynchronization=true;

        browser.get('https://www.google.com/');
        browser.sleep(4000);
        browser.getCurrentUrl().then(function(siteUrl){
              
            console.log(siteUrl);
        });

    })

    fit("Verify the title of the page",function(){

        browser.ignoreSynchronization=true;
        browser.get('https://www.google.com/');
        browser.sleep(4000);
        browser.getTitle().then(function(title){
            console.log(title);
        });
    });



});
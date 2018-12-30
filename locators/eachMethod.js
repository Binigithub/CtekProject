//describe('each method',()=>{

    // it('each method #1',()=>{
    //  browser.ignoreSynchronization=true;
    //  browser.get("https://www.bhtp.com/");
    //  $('#top-nav-down').all(by.tagName("span")).each((item)=>{
        
    //     item.getText().then((text)=>{
    //         console.log(text);
    //     })


    //  })


    //     })

        // it('each method #2',()=>{
        //     browser.ignoreSynchronization=true;
        //     browser.get("https://www.staples.com/");
        //     $$('.section-menu').each((item)=>{
               
        //        item.getText().then((text)=>{
        //            if(text!=""){
        //            console.log(text);
        //            }
        //        })
       
       
        //     })
       
       
        // });

        // it('each method #2',()=>{
        //     browser.ignoreSynchronization=true;
        //     browser.get("http://www.bbc.com/");
        //     //browser.manage().window().setSize(1800,2000);
        //     $$('#orb-nav-links').all(by.tagName('li')).each((item,index)=>{
               
        //        item.getText().then((text)=>{
        //            if(text!=""){
        //            console.log('#' + index +': ' + text);
        //            }
        //        })
       
       
        //     })
       
       
        // });

        // describe('Julien Calculator',()=>{

        //     fit('by.binding', () => {

        //         browser.get('http://juliemr.github.io/protractor-demo/');
            
                  
            
        //         element(by.model('first')).sendKeys('5');
            
        //         element(by.model('second')).sendKeys('6');
            
        //         element(by.id('gobutton')).click();
            
        //         element(by.binding('latest')).getText().then(function(result){
            
        //             if(result==11){
            
        //                 console.log(result);
            
        //                 console.log("Passed");
            
        //             }
            
        //         })  });
        // })


        // describe('Julien Calculator',()=>{

        //     fit('by.repeater', () => {
        //         browser.get('http://juliemr.github.io/protractor-demo/');
            
        //         element(by.model('first')).sendKeys('5');
        //         element(by.model('second')).sendKeys('6');
        //         element(by.id('gobutton')).click();
            
        //         element(by.model('first')).sendKeys('7');
        //         element(by.model('second')).sendKeys('7');
        //         element(by.id('gobutton')).click();
            
        //         element(by.model('first')).sendKeys('55');
        //         element(by.model('second')).sendKeys('66');
        //         element(by.id('gobutton')).click();
            
        //         browser.sleep(4000);
            
        //         element.all(by.repeater("result in memory")).each(function(item){
            
        //             item.getText().then(function(rowData){
            
        //             console.log(rowData);
                    
            
        //         })
            
        //     })
            
        //     });

        //     fit('by.repeater', () => {

        //         browser.get('http://juliemr.github.io/protractor-demo/');
            
                  
            
        //         element(by.model('first')).sendKeys('5');
            
        //         element(by.model('second')).sendKeys('6');
            
        //         element(by.id('gobutton')).click();
            
                
            
        //         element(by.model('first')).sendKeys('7');
            
        //         element(by.model('second')).sendKeys('7');
            
        //         element(by.id('gobutton')).click();
            
            
            
        //         element(by.model('first')).sendKeys('55');
            
        //         element(by.model('second')).sendKeys('66');
            
        //         element(by.id('gobutton')).click();
            
            
            
        //         browser.sleep(4000);
            
                
            
        //         element.all(by.repeater("result in memory"))
            
        //             .each(function(item){
            
        //                 item
            
        //                     .element(by.css("td:nth-child(3)"))
            
        //                         .getText().then(function(columnData){
            
        //                             console.log(columnData);
            
        //         })
            
        //     })


        // })


        describe('Julien Calculator',()=>{

            fit('by.repeater', () => {
                browser.get('http://juliemr.github.io/protractor-demo/');
            
                element(by.model('first')).sendKeys('5');
                element(by.model('second')).sendKeys('6');
                element(by.id('gobutton')).click();
            
                element(by.model('first')).sendKeys('7');
                element(by.model('second')).sendKeys('7');
                element(by.id('gobutton')).click();
            
                element(by.model('first')).sendKeys('55');
                element(by.model('second')).sendKeys('66');
                element(by.id('gobutton')).click();
            
                browser.sleep(4000);
            
                element.all(by.repeater("result in memory").row(2).column('result.timestamp')).getText().then(function(text){
                    console.log(text);
                    
                })
                })
            
            })
            
        

         
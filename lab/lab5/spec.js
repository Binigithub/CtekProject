// describe('Learning repeater',()=>{

//     it('should repeat the table',()=>{

//         browser.get("http://www.way2automation.com/angularjs-protractor/webtables/");
//         var arr=element.all(by.repeater('dataRow in displayedCollection'))
//         arr.each(function(row){

//         row.getText().then(function(text){
            
//             console.log(text);
//         })
//     })
//    var arr2= arr.all(by.tagName("td:nth-child(2)"));
//    arr2.each(function(data){
//        data.getText().then(function(text){
//            console.log(text);
//        })
//    })
//    element(by.repeater("dataRow in displayedCollection").row(2)).element(by.tagName("td:nth-child(2)")).getText().then(function(text){
//        console.log(text);
       
//    })
// })
// it('Task-2 --> dropdown-list',()=>{

//     browser.waitForAngularEnabled(false);
//     browser.get('https://www.etsy.com/?ref=lgo');

//     //Click on Clothing&Shoes
//     element(by.linkText('Clothing & Shoes')).click();
//     browser.sleep(3000);

//     //Print everything from "ship to" dropdown
//     var shipTo = $$('#ship_to_select > optgroup:nth-child(3)>option')
//     shipTo.getText().then(function(result){    
//         var arr=[];
//         for(var i=0;i<result.length;i++){
        
//        var x=result[i].slice(0,result[i].indexOf("\n"));
//        arr.push(x);
       
//         }
        
//         console.log(arr)
        
//     })

//     //Print 100. country from dropdown
//     shipTo.get(99).getText().then(function(text){    

//         console.log(text)
//     })

//     //Click on Turkey
//     element.all(by.cssContainingText('#ship_to_select > optgroup:nth-child(3)>option','Turkey')).click();
//     browser.sleep(3000);

// })
//  })

describe('Task-3 Selector',()=>{

    function select(region,country){

        element.all(by.cssContainingText('.select2-chosen','Select a region')).click();

        element.all(by.cssContainingText('#select2-drop li',region)).click();

        browser.sleep(2000);

        element.all(by.cssContainingText('.select2-chosen','Select a country')).click();

        element.all(by.cssContainingText('#select2-drop li',country)).click();

        browser.sleep(2000);

    }

     it('Task-3 --> Porsche',()=>{

        browser.waitForAngularEnabled(false);

        browser.get('https://www.porsche.com/usa/')
         //Select Region and Country

        select('Europe','France');
        //Get the title and verify if we are on the correct page

        browser.getTitle().then(function(title){

            console.log(title);

        });

 }) 

 })

 



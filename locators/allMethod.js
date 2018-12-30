// // element
// // WebElement: input. link. image, 

// //element

// function ericElement(locator){

//     //search mechanism inside the function.
    
//     // a lot of code
    
//     var foundWebElement= "Wow I've found the element with the locator: ";
    
//     return foundWebElement;
    
//      }
//     console.log(ericElement("//div[@name='something'"));
    
//     //element function returns an object.click/sendKeys
    
    
//      // name inputtext
    
//     function ericElementAll(locator){
    
//     //code to find all the items in the page and put it in an array
    
//      var AllTheItemsIveFoundWithGivenLocator = [];
    
//         AllTheItemsIveFoundWithGivenLocator[0]="inputbox on the left";
    
//         AllTheItemsIveFoundWithGivenLocator[1]="inputbox on the right"
    
//            return AllTheItemsIveFoundWithGivenLocator;
    
//     }
    
//     console.log(ericElementAll("notuniqueone"));
    
// describe('All Method Example',()=>{

//     it('element.all grab all the linkd in Google.com',()=>{
//           browser.ignoreSynchronization=true;
//           browser.get("https:www.google.com/");
//            element.all(by.tagName("a")).getText().then((textArray)=>{
// console.log(textArray);
//           for(let i=0; i<textArray.length; i++){
//             console.log(textArray[i]);
//           }
//            })
//     })
// })

// describe('All Method Example',()=>{

    // it('element.all grab all the list in BBC.com',()=>{
    //       browser.ignoreSynchronization=true;
    //       browser.get("http://www.bbc.com/");

    //       //by.tagName
    //       // element.all(by.tagName("li")).getText().then((arrayText)=>{

    //       //by.css
    //         $$("html li").getText().then((arrayText)=>{
          
    //         console.log(arrayText);
          
    //        })
    // })
//     it('grab spesific list in BBC.com',()=>{
//         browser.ignoreSynchronization=true;
//         browser.get("http://www.bbc.com/");

        
//         //by.css
//           $$("#orb-nav-links>ul>li").getText().then((links)=>{
        
//           console.log(links);
        
//          })
//          element(by.css("#orb-nav-links")).all(by.tagName("li")).getText().then((links)=>{
//              console.log(links);
//              console.log(links.length);
//          })
//   })


// it('should get all elenents',()=>{
    
//     browser.get("https://hn.algolia.com/");

//     var result=$$(".item-title-and-infos>h2>a");
//     result.getText().then((Text)=>{
//         console.log(Text);
//     })
// })

// it('should count the elenents',()=>{
    
//     browser.get("https://hn.algolia.com/");
//     //variable version
//     var totalResult=$$(".item-title-and-infos>h2>a").count();
//     totalResult.then((totalTitles)=>{
//         console.log("Total count: " + totalTitles);
//     })
//     //or without variables
//     $$(".item-title-and-infos>h2>a").count().then((totalTitles)=>{
//         console.log("Total count: " + totalTitles);
//     })
// })

// it('should get the first/last/nth item',()=>{
    
//     browser.get("https://hn.algolia.com/");
    
//     var first=$$(".item-title-and-infos>h2>a").first();
//     var last=$$(".item-title-and-infos>h2>a").last();
//     first.getText().then((firstItem)=>{
//         console.log('First item is: ' + firstItem);
//     })
//     last.getText().then((lastItem)=>{
//         console.log('Last item is: ' + lastItem);
//     })

//     var item=$$(".item-title-and-infos>h2>a");
    
//     var sixthItem=item.get(5);
//     var tenthItem=item.get(9);
    
//     sixthItem.getText().then((textSixth)=>{
//         console.log('Sixth item of the array is: ' + textSixth);
//     })
//     tenthItem.getText().then((textTenth)=>{
//         console.log('Tenth item of the array is: ' + textTenth);
//     })

// })

   describe('All Method Example',()=>{
    fit('should find the exact element',function(){

        browser.get('https://hn.algolia.com');

        var parentElems =  $$('.item-title-and-infos');

        var resultTitle = parentElems.$$('h2>a');

        var resultDate = parentElems.all(by.partialLinkText("ago"));

        resultTitle.getText().then(function(text){

            console.log(text);

        });

        resultDate.getText().then(function(text){

            console.log(text);

        })

    });


})
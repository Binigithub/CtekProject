describe('Amazon veryfication',()=>{

    it('Should verify amazon',()=>{
        browser.ignoreSynchronization=true;
        browser.get('https://amazon.com');
       
        element(by.css('#twotabsearchtextbox')).sendKeys('laptop').submit();
         
        element.all(by.css('#s-result-count')).each(function(item){

        item.getText().then(function(text){
             var result=text.split(" ");
              console.log(result[3]);
              if(result[3]>=300&&result[3]<1000){
                  console.log(`Result is: ${result[3]} Wow there are more than 300 but less than 1000`);
              }else if(result[3]>=1000&&result[3]<10000){
                  console.log(`Result is: ${result[3]} Wow there are more than 1000 but less than 10000`)
              }else{
                  console.log(`Result is: ${result[3]}`);
              }
              var expectedArray=result.slice(6,result.length-2).toString().split(":");
              console.log(expectedArray);

            
        })
    })
    })

    it('Should verify amazon',()=>{
        browser.ignoreSynchronization=true;
        browser.get('https://amazon.com');
        
        element.all(by.css("#leftNavContainer > ul:nth-child(6) > div > li > span > span > div")).each(function(list){
            list.getText().then(function(text){
                console.log(text);
            })
    })
    })
})

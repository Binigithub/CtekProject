describe('Suzuki Personal Project',()=>{

    it('Should verify title',()=>{

        browser.ignoreSynchronization=true;
        browser.get('http://www.suzukicycles.com/');
        browser.sleep(3000);
        browser.getTitle().then(function(title){
            //expect(title).toEqual('Suzuki Cycles');
            if(title=='Suzuki Cycles'){
               console.log('Passed');
           }
            
         })


     })

    xit('Should verify Suzuki icon',()=>{

        browser.ignoreSynchronization=true;
        browser.get('http://www.suzukicycles.com/');
        
        element(by.css('#suzuki > a')).isDisplayed()
            .then(function(text){
                if(text==true){
                console.log('Passed'); 
                }else{
                    console.log('Failed');
                }
            
            
        })

        
    })

    it('Should verify List of names',()=>{
        var Suzukis=["SPORTBIKE", "CRUISER","TOURING", "STANDARD", "ADVENTURE", "DUALSPORT", "SUPERMOTO", "MOTOCROSS", "OFF ROAD" ];
        browser.ignoreSynchronization=true;
        browser.get('http://www.suzukicycles.com/');
        element(by.css('#cycles.nav-button')).click();
        element.all(by.css('.catName>h2 a')).getText().then(function(text){

            var motoTypes2018=[];
            for(var i=0;i<text.length;i++){
            
           var x=text[i].slice(0,text[i].indexOf("\nCA"));
           motoTypes2018.push(x);
           
            }
            console.log(motoTypes2018);
           
             if(motoTypes2018.toString()==Suzukis.toString()){
                console.log('Passed');
            }else{
               console.log('Failed');
            
        }
            element(by.css('#subCategories>ul :nth-child(9) a')).click();
            element.all(by.css('.catName>h2 a')).getText().then(function(text){
           var motoTypes2016=[];
           for(var i=0;i<text.length;i++){
           var y=text[i].slice(0,text[i].indexOf("\nCA"));
           motoTypes2016.push(y);

           }
           console.log(motoTypes2016);
           
                if(motoTypes2018.toString()==motoTypes2016.toString()){
                    console.log('Passed');
                }else{
                    console.log('Failed');
                }
           
           })
        })
            
        

        
    })
    

        
})
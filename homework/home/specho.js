describe('Browser Method Suite',function(){

    var brs = [
    
        {br : 'https://www.jetblue.com/', actualtitle:'Airline Tickets, Flights & Airfare: Book Direct - Official Site | JetBlue'},
    
        {br : 'https://www.lego.com/en-us', actualtitle:'LEGO.com US - Inspire and develop the builders of tomorrow'},
    
        {br : 'https://www.eat24.com/', actualtitle:'Eat24 Food Delivery | Order Online | Restaurants Delivery'},
    
        {br : 'https://www.cvs.com/', actualtitle:' Online Drugstore, Pharmacy, Prescriptions & Health Information'}
    
    
    
    ];
    
    it('Get Title',function(){
    
         for(let i in brs){
    
            browser.waitForAngularEnabled(false);
    
            browser.get(brs[i].br).then(function(){
    
            browser.getTitle().then(function(title){
    
                if(brs[i].actualtitle==title){
    
                    console.log("verified");
    
                   }
    
                });
    
           });
    
       };
    
    
    
    });
    
    
    
    });

    //or

    describe('Task',function(){

        var brs = [
    
            {br : "https://www.jetblue.com/", actualtitle:"Airline Tickets, Flights & Airfare: Book Direct - Official Site | JetBlue"},
    
            {br : "https://www.lego.com/en-us", actualtitle:"LEGO.com US - Inspire and develop the builders of tomorrow"},
    
            {br : "https://www.eat24.com/", actualtitle:"Eat24 Food Delivery | Order Online | Restaurants Delivery"},
    
            {br : "https://www.cvs.com/", actualtitle:"CVS - Online Drugstore, Pharmacy, Prescriptions & Health Information"}	
    
        ];
    
    
    
        it('Open URLs', function(){
    
            brs.forEach(function(i){
    
                browser.waitForAngularEnabled(false);
    
                browser.get(i.br);
    
                browser.sleep(2000);
    
                browser.getTitle().then(function(title){
    
                    if(i.actualtitle == title){
    
                        console.log("passed");
    
                    }else{
    
                        console.log("failed");
    
                    }
    
                });
    
                browser.sleep(2000);
    
            });
    
                  
    
        });
    
    });

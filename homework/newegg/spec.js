describe('newegg',function(){

    it('get search result',function(){

        browser.waitForAngularEnabled(false);
        
        browser.get('https://www.newegg.com/');
        
        browser.getTitle().then(function(title){
            let newtitle=title.split(",").slice(0,3);
            console.log(newtitle);
            
        
        for(let i of newtitle){ 
        browser.get('https://www.google.com/');
       
        element(by.name('q')).sendKeys(i).submit();
        browser.sleep(2000);
        // element(by.xpath("//*[@class='VlcLAe']/center/input[1]")).click();
        // browser.sleep(2000);

        element(by.id('resultStats')).getText().then(function(title){
        
                title=title.split(" ");
        console.log(`${i} - ${title[1]} ${title[2]} found`);

        
        
        })
    
    }
     
    
     })

    })
})
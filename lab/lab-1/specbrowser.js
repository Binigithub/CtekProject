describe('Learning different browser methods',function(){
    it('should open a webpage',function(){
        browser.get('https://www.jetblue.com/');
        browser.get('https://www.lego.com/en-us');
    })
    it('soul get the current url',function(){
        browser.get('https://www.jetblue.com/');
        browser.getCurrentUrl().then(function(url){
            console.log(url);
        })

    })
    it('should verify title',function(){
      browser.get('https://www.jetblue.com/');
      browser.getTitle().then(function(title){
          console.log(title);
      })
    })
})
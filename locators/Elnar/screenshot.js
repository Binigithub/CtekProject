describe('Taking basic screenshot',()=>{
    var fs=require('fs');
    it('should take screenshot',()=>{
        browser.waitForAngularEnabled(false);
        browser.get('https://www.staples.com/');
        browser.takeScreenshot().then(function(png){
            var stream=fs.createWriteStream('CybertekScreenshot'+Date.now()+'.png');
            stream.write(new Buffer(png,'base64'));
            stream.end();
        })
    })
})
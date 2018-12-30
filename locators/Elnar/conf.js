
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');


exports.config = {
  framework: 'jasmine', 
    //seleniumAddress: 'http://localhost:4444/wd/hub',  
    
    directConnect: 'true',
 
    specs: ['windowsspec.js'],  
    
    
    onPrepare: function(){
     // browser.manage().timeouts().implicittlyWait(10000);
 
      browser.manage().window().maximize();
 
      jasmine.getEnv().addReporter(new SpecReporter({
 
        displayFailuresSummary: true,
 
        displayFailuredSpec: true,
 
        displaySuiteNumber: true,
 
        displaySpecDuration: true
 
      }));
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'report/screenshots',
        
      preserveDirectory: false,
      screenshotsSubfolder: 'images',
      jsonsSubfolder: 'jsons',
      docName: 'Report.html'
      }).getJasmine2Reporter());

 
    }
 
  };
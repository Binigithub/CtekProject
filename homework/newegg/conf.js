exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
  
    specs: ['spec.js'],

    framework: 'jasmine2',
    
    
    
    jasmineNodeOpts: {
    
        showColors: true,
    
        defaultTimeoutInterval: 30000
    
    
    
    }
  
  };
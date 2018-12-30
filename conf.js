exports.config = {

    //address of our selenium server    
    
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect : true,
    
    //which browser would you want to use for your tests?
    
    capabilities: {
        browserName: 'chrome',
    chromeOptions:{
        args:[
            '--start-fullscreen'
        ]
    },
    sharedTestFiles:true,
    maxInstances:2
},
    
    // multiCapabilities:[
    //     {'browserName':'chrome'},
    //     {'browserName':'firefox'}

    // ],
    //the name of your test scripts file
    
    specs: ['spec.js'],
    
    //which BDD framework we're going to use
    framework: 'jasmine2',
    
    jasmineNodeOpts: {
    
        showColors: true,
    
        defaultTimeoutInterval: 30000
        
    
    }
    
    };





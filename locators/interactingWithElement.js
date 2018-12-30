describe('Amazone',()=>{

it('task amazon isDisplayed', () => {

    browser.waitForAngularEnabled(false);

    //isDisplayed is boolean true/false

    browser.get('https://www.amazon.com/');

    element(by.css('#nav-logo span:nth-child(1)')).isDisplayed()

        .then(function (result) {

            if (result == true) {

                console.log("Get Quote Button Displayed Correctly");

            } else {

                console.log("Get Quote Button Displayed Test Failed");

            }

        })

    })
    fit('isEnabled', () => {

        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");

        $("#username").sendKeys("sdfcsdcv");

        $("#password").sendKeys("sdfcsdcv");

        $("#formly_1_input_username_0").sendKeys("sdfcsdcv");

        

        $(".btn-danger").isEnabled().then(function(result){

            console.log(result);

        })

    })

})
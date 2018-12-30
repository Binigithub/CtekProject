describe('Julien Calculator',()=>{


    function calc(n1,n2,operator){
        element(by.model('first')).sendKeys(n1);
        element(by.model('second')).sendKeys(n2);
        element(by.model('operator')).sendKeys(operator);
        element(by.id('gobutton')).click();
        
        browser.sleep(2000)
    }

    it('should calculate',()=>{
        browser.get("https://juliemr.github.io/protractor-demo/");
        calc(99,88,"+");
        calc(99,88,"-");
        calc(99,88,"/");
        calc(99,88,"*");
        calc(99,88,"%");
        calc(99,88,"+");
        calc(99,88,"-");
        calc(99,88,"*");
        calc(99,88,"/");
        calc(99,88,"%");
        browser.sleep(3000)
        $$('td:nth-child(3)').getText().then((text)=>{
            console.log(text);
            let sum=0;
            for(let i of text){
                sum=sum+parseFloat(i);
            }
            console.log("Sum is: " + sum);
        })

    })
})
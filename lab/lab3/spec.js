// describe('learning Xpath', () => {

//     it('should click on sign in', () => {

//         browser.waitForAngularEnabled(false);

//         browser.get("http://www.rediff.com/");

//         element(by.xpath('html/body/div[2]/div[4]/span[4]/span/a[1]')).click();

//         browser.sleep(4000);

//     });

//     fit('should click on sign in', () => {

//         browser.waitForAngularEnabled(false);

//         browser.get("https://www.cnn.com/");

//         element(by.xpath('//div[@class="column zn__column--idx-0"]/ul/li/article/a/h2')).getText()

//         .then((text) => {

//             console.log(text)

//         })

//         browser.sleep(4000);

//     });

// });

//1 salesforce
// describe('xpath',()=>{

//     it('should work login',()=>{

//         browser.ignoreSynchronization=true;
//         browser.get('https://login.salesforce.com/');
//         element(by.xpath("//*[@id='username']")).sendKeys('Mike');
//         browser.sleep(3000);
//         element(by.xpath("//*[@id='password']")).sendKeys('Smith');
//         browser.sleep(3000);
//         element(by.xpath("//*[@id='Login']")).click();
//         browser.sleep(3000);
//         element(by.xpath("//*[@id='error']")).getText().then(function(message){
//             console.log(message)
//         })

//     })
// })


//2 rediff
describe('css',()=>{

    it('should get the prices',()=>{
        

        browser.ignoreSynchronization=true;
        browser.get('http://www.rediff.com//');
        browser.manage().window().maximize();
        element(by.css('.divicon.relative>u')).click();
        browser.sleep(1000);
        $('#home_page>div h3:nth-of-type(4) a').click();
        
        $("img[alt='Laptops']").click();
        
        $$("span[itemprop='price']").getText().then((price)=>{
        for(let i of price){
        console.log(`price: $ ${i}`);
        
        
       }

    //    element.all(by.css("span[itemprop='price']")).each(function(price){

    //    price.getText().then(function(text){
    //        console.log('Price: $' + text);
    //        })
    //        })
       
         })
    
        })
    
    })




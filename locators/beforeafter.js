// describe('Jasmine Framework', () => {

//     // simple example of beforeEach/All

//     describe('A single describe', function() {

//         beforeAll(function() {

//             console.log('in beforeAll');
//         });

//         beforeEach(function() {

//             console.log('in beforeEach');
//         });

//          it('spec A', function() {

//             console.log('in spec A');

//            // expect(true).toBe(true);
//          });

//         it('spec B', function() {

//             console.log('in spec B');

//            // expect(true).toBe(true);

//         });

//     });

// });

// xdescribe('Jasmine Framework', () => {

//     // simple example of beforeEach/All

//     describe('A single describe', function() {

//         beforeAll(function() {

//             console.log('in beforeAll');

//         });

        

//         beforeEach(function() {

//             console.log('in beforeEach');

//         });

        

//         it('spec A', function() {

//             console.log('in spec A');

//            // expect(true).toBe(true);

//         });

        

//         it('spec B', function() {

//             console.log('in spec B');

//            // expect(true).toBe(true);

//         });

//     });

// });


// describe('Outer describe', function () {

//     beforeAll(function () {

//         console.log('in outer beforeAll');

//     });



//     beforeEach(function () {

//         console.log('in outer beforeEach');

//     });



//     it('spec A', function () {

//         console.log('in spec A');

       

//     });



//     it('spec B', function () {

//         console.log('in spec B');

      

//     });



//     describe('inner describe', function () {

//         beforeAll(function () {

//             console.log('in inner beforeAll');

//         });

//         beforeEach(function () {

//             console.log('in inner beforeEach');

//         });

//      it('spec C', function () {

//             console.log('in spec A');

//         });
//         it('spec D', function () {

//             console.log('in spec B');

//         });

//     });

// });

// describe('Validating the Calculator app', () => {



//     beforeAll(function(){

//         browser.sleep(3000);

//         console.log('This is printing before All of the blocks started');

//     });

    

//     beforeEach(function(){

//         browser.get('http://way2automation.com/angularjs-protractor/calc/');

//     });

    

//     afterEach(function(){

//         browser.sleep(3000);

//         console.log('This is printing after each it block');

//     });

    

//     afterAll(function(){

//         browser.sleep(3000);

//         console.log('This is printing after all of the tests blocks finished');

//     });

    

//         it('validate 1 + 1=2', () => {      

//             element(by.model("first")).sendKeys(1);

//             element(by.model('second')).sendKeys(1);

//             element(by.buttonText('Go!')).click();

//             element(by.binding('latest')).getText().then(function(text){

//                 console.log('Result is: '+text);

//             });

//         });

    

    

//         it('validate 2 + 2 = 4', () => {

//             element(by.model("first")).sendKeys(2);

//             element(by.model('second')).sendKeys(2);

//             element(by.buttonText('Go!')).click();

//             element(by.binding('latest')).getText().then(function(text){

//                 console.log('Result is: '+text);

//             });

//         });

    

//         it('validate 3 + 3 = 6', () => {

//             element(by.model("first")).sendKeys(3);

//             element(by.model('second')).sendKeys(3);

//             element(by.buttonText('Go!')).click();

//             element(by.binding('latest')).getText().then(function(text){

//                 console.log('Result is: '+text);

//             });

//         });

//     });

describe('toBeTruthy', function() {

    it('passes if subject is true', function() {

        expect(true).toBeTruthy();

        expect(false).not.toBeTruthy();

    });

    it('passes if subject is a non empty string', function() {

        expect('Should pass').toBeTruthy();        
    });

    it('passes if subject is a number not equal 0', function() {

        expect(1).toBeTruthy();        

    });

    it('fails if subject is an empty string', function() {

        expect('').not.toBeTruthy();

    });

    it('fails if subject is false', function() {

        expect(false).not.toBeTruthy();

    });

    it('fails if subject is 0', function() {

        expect(0).not.toBeTruthy();

    });
    it('toBeTrue', function() {

        //expect(1).toBeTrue();

        expect(1).toBe(true);

    });

});










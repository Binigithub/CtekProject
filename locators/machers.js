describe('toBeDefined', function() {

xit('passes if subject and expectation are equivalent', function() {      

        expect('Hello World!').toEqual('Hello World!');     

        expect('Hello World!').not.toEqual('Goodbye!');     

        expect([1, 2, 3]).toEqual([1, 2, 3]);      

        expect("1").toEqual(1);      

        expect({ foo: 1 }).toEqual({ foo: 1 });    

    });

xit('passes if subject is not undefined', function() {      

    expect({}).toBeDefined();      

    expect(undefined).not.toBeDefined();    

    });

xit('passes if subject is null', function() {     

        expect(null).toBeNull();     

        expect(undefined).not.toBeNull();     

        expect({}).not.toBeNull();    

    });

xit('passes if subject is false', function() {      

        expect(false).toBeFalsy();      

        expect(true).not.toBeFalsy();    

    });

xit('checks that the expected item is equal to the actual item up to a given level of decimal precision ',

     function() {      

        expect(1.223).toBeCloseTo(1.22);      

        expect(1.233).not.toBeCloseTo(1.22);      

        expect(1.23326).toBeCloseTo(1.23324, 3);    

    });

it('passes if the expected item is an element in the actual array, or a substring of string', function() {      

        expect([1, 2, 3]).toContain(2);      

        expect([1, 2, 3]).not.toContain(4);  

    });

    /*  To summarize 2 use cases for contain():

        To check if item is an element of an array. 

        To check if item is a a substring of a string.

    */
it('passes if the actual value is greater than the expected value', function() {     

       expect(347).toBeGreaterThan(300); 

    });

 it('passes if the actual value is less than the expected value', function() {      

        expect(2).toBeLessThan(3)
    });

});




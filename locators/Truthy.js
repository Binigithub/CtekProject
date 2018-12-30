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










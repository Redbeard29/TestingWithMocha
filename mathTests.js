// Test Suite - Mathematical Operations

//Test Cases


const assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){

    //1. Addition
    it.skip('Addition of two variables', function(){
        
        let a = 10;
        let b = 10;
        let c = a + b;
        assert.equal(c, 20);

    });

    //2. Subtraction
    it('Subtraction of two variables', function(){

        let a = 10;
        let b = 10;
        let c = a - b;
        assert.equal(c, 0);

    });

    //3. Multiplication
    it('Multiplication of two variables', function(){

        let a = 10;
        let b = 10;
        let c = a * b;
        assert.equal(c, 100);

    });

    //4. Division
    it('Division of two variables', function(){

        let a = 10;
        let b = 10;
        let c = a / b;
        assert.equal(c, 1);

    });

    it('Example Pending Test');
});
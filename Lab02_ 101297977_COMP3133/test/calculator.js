const { expect } = require('chai');
const calculator = require('../app/calculator');

describe('Calculator Tests', () => {
    it('When two numbers are added together correctly it should pass', function() {
        expect(calculator.add(5,2)).to.equal(7);
        });

    it('When two numbers are added together incorrectly it should fail', function() {
        try { 
            expect(calculator.add(5,2)).to.equal(8);
        }
        catch(err){
            //Assertion failed. Test passed.
            return;
        }
        throw new Error('Assertion did not fail. Test faild');
    
        });   

    it('When two number are subtracted together correctly it should pass', function(){
        expect(calculator.sub(5,2)).to.equal(3);
    });

    it('When two number are subtracted together incorrectly it should fail', function(){
        try{
            expect(calculator.sub(5,2)).to.equal(5);
        }catch(err){
            return;
        }
        throw new Error('Assertion did not fail. Test faild');

        
    });

    it('When two number are multiplied together correctly it should pass', function(){
        expect(calculator.mul(5,2)).to.equal(10);
    });

    it('When two number are multiplied together incorrectly it should fail', function(){
        try{
            expect(calculator.mul(5,2)).to.equal(12);
        }catch(err){
            return;
        }
        throw new Error('Assertion did not fail. Test faild');

        
    });

    it('When two number are divided together correctly it should pass', function(){
        expect(calculator.div(10,2)).to.equal(5);
    });

    it('When two number are divided together incorrectly it should fail', function(){
        try{
            expect(calculator.div(10,2)).to.equal(2);
        }catch(err){
            return;
        }
         throw new Error('Assertion did not fail. Test faild');
    });
  });
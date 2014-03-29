'use strict';

describe('daisy-chain', function () {

    var test;

    it('should create a new instance', function () {
       test = dc(['item', 'item']);
       expect(test.data).toEqual(['item', 'item']);
    });


    describe('data type checks', function () {

        beforeEach(function() {
            test = dc('some data');
        });

        it('should provide a test for array data', function () {
            expect(test.isArray).toBeDefined();
            expect(test.isArray([1,2,3])).toBe(true);
            expect(test.isArray('a string')).toBe(false);
            expect(test.isArray(123456)).toBe(false);
            expect(test.isArray({})).toBe(false);
        });

        it('should provide a test for string data', function () {
            expect(test.isString).toBeDefined();
            expect(test.isString('a string')).toBe(true);
            expect(test.isString([1,2,3])).toBe(false);
            expect(test.isString(123456)).toBe(false);
            expect(test.isString({})).toBe(false);
        });

        it('should provide a test for number data', function () {
            expect(test.isNumber).toBeDefined();
            expect(test.isNumber(123456)).toBe(true);
            expect(test.isNumber([1,2,3])).toBe(false);
            expect(test.isNumber('a string')).toBe(false);
            expect(test.isNumber({})).toBe(false);
        });

        it('should provide a method for finding the type of data', function () {
            expect(test.findDataType).toBeDefined();
            expect(test.findDataType('A string')).toBe('String');
            expect(test.findDataType(123456)).toBe('Number');
            expect(test.findDataType([1,2,3,4,5,6])).toBe('Array');
        });

    });

    describe('adding new methods', function () {

        it('should have an extend method', function () {
            expect(dc().addFn).toBeDefined();
        });

        it('should add new methods to the returned dc object', function () {
            dc().addFn('test', function() {return true});
            expect(dc().test).toBeDefined();
            expect(dc().test()).toBe(true);
        });

    });

    describe('the "sum" method', function () {

        it('should sum the values within an array if they are numbers', function () {
            var myNums = dc([1,2,3]);
            expect(myNums.sum().result()).toBe(6);
        });

        it('should sum items in object literal format', function () {
            var myObj = dc({
                item: 1,
                anotherItem: 2,
                aString: "Hello" // This will be ignored
            });

            expect(myObj.sum().result()).toBe(3);
        });
    });

});
const { fizzbuzz } = require("./fizzbuzz");

/**
 * Test for Function fizzbuzz
 */
describe("test function fizzbuss", () => {

    it("should can find the function fizzbuzz",() => {
        const result = fizzbuzz(1);
    });

    it("should return '1' for 1",() => {
        const input = 1;
        const result = fizzbuzz(input);
        expect(result).toBe('1')
    });

    it("should return 'Fizz' for 3", () => {
        let input = 3;
        let result = fizzbuzz(input); 
        expect(result).toBe('Fizz');
    });

    it("should return 'Buzz' for 5", () => {
        let input = 5;
        let result = fizzbuzz(input); 
        expect(result).toBe('Buzz');
    });

    it("should return 'FizzBuzz' for 15", () => {
        let input = 15;
        let result = fizzbuzz(input); 
        expect(result).toBe('FizzBuzz');
    });


});


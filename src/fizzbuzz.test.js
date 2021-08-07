const { fizzbuzz } = require("./fizzbuzz");

/**
 * Test for Function fizzbuzz
 */
describe("test function fizzbuss", () => {

    /**
     * Test 1
     * check if the fizzbuzz function is existing.
     * red phase: fizzbuzz is not defined
     * green phase: create and export the function fizzbuzz
     */
    it("should can find the function fizzbuzz",() => {
        const result = fizzbuzz(1);
    });

    /**
     * Test 2
     * check if the fizzbuzz function is returning the input value 1
     * red phase: received: undefined
     * green phase: received: 1
     */
    it("should return '1' for 1",() => {
        const input = 1;
        const result = fizzbuzz(input);
        expect(result).toBe('1')
    });

});


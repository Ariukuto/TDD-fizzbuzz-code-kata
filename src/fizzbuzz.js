// solution Test 2
function fizzbuzz(input) {

    if(input % 3 === 0) {
        return 'Fizz';
    }

    if(input % 5 === 0) {
        return 'Buzz';
    }

    return input.toString();
}

module.exports = {
    fizzbuzz
}
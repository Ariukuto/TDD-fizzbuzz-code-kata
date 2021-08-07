// solution Test 2
function fizzbuzz(input) {

    if(input % 3 === 0) {
        return 'Fizz';
    }

    return input.toString();
}

module.exports = {
    fizzbuzz
}
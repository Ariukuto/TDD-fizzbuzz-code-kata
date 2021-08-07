// solution Test 2
function fizzbuzz(input) {

    const isThree = check(3, "Fizz");
    const isFive = check(5, "Buzz");
    const result = isThree(input) + isFive(input);

    if(result === "") {
        return input.toString();
    }

    return result;
}

function check(checknum, label) {
    return (input) => {
        if(input % checknum === 0) {
            return label;
        }
        return "";
    }
}

module.exports = {
    fizzbuzz
}
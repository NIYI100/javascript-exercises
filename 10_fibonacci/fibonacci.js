const fibonacci = function(input) {
    let fibNumber = parseInt(input)
    if (fibNumber < 1) return "OOPS"

    let fibI = 1,
        fibII = 1,
        result = 0

    if (fibNumber === 1 || fibNumber === 2) {
        result = 1
    } else {
        for (let i = 3; i <= fibNumber; i++) {
            result = fibI + fibII
            fibI = fibII
            fibII = result
        }
    }
    return result
};

// Do not edit below this line
module.exports = fibonacci;

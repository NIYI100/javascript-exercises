const palindromes = function (input) {
    let string = input.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "").toUpperCase()
    let iterationLength = Math.floor(string.length)
    for(let i = 0; i < iterationLength; i++) {
        if (string.charAt(i) !== string.charAt(string.length -1 - i)) {
            return false
        }
    }
    return true

};

// Do not edit below this line
module.exports = palindromes;

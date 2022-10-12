const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR"
    if (num1 < 0 || num2 < 0) return "ERROR"
    let smallerNumber = num1,
        biggerNumber = num2,
        sumAll = 0
    if (num1 > num2) {
        smallerNumber = num2
        biggerNumber = num1
    }
    for (smallerNumber; smallerNumber <= biggerNumber; smallerNumber++) sumAll += smallerNumber
    return sumAll
};

// Do not edit below this line
module.exports = sumAll;

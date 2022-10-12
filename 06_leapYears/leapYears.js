const leapYears = function(year) {
    let dividableByFour = (year % 4) === 0
    let dividableByHundred = (year % 100) === 0
    let dividableByFourHundred = (year % 400) === 0

    return dividableByFour && (!dividableByHundred || (dividableByHundred && dividableByFourHundred))
};

// Do not edit below this line
module.exports = leapYears;

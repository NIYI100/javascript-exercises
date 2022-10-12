const repeatString = function(text, num) {
    let result = '';
    if (text === '' || text === "") {
        return ''
    }
    if (num < 0) {
        return 'ERROR'
    }
    for (let i = 0; i < num; i++) {
        result += text
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;

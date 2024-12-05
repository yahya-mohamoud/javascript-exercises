const palindromes = function (str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    const reversedStr = cleanedStr.split('').reverse().join('');

    return cleanedStr === reversedStr;
};

console.log(palindromes('racecar'));
// Do not edit below this line
module.exports = palindromes;

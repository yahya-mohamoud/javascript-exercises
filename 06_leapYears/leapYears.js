const leapYears = function(leapYear) {
    isDivisibleByFour = leapYear % 4 === 0;
    isCentury = leapYear % 100 === 0;
    isDivisibleByFourHundreds = leapYear % 400 == 0;

    if (isDivisibleByFour && (!isCentury || isDivisibleByFourHundreds)) {
        return true;
    }else{
        return false;
    }

};
console.log(leapYears(34992));
// Do not edit below this line
module.exports = leapYears;

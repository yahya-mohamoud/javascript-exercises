const removeFromArray = function(passedArray, ...arg) {
   let newArray = [];
    passedArray.forEach(items => {
    if (!arg.includes(items)) {
        newArray.push(items)
    }
   });
   return newArray;
};
console.log(removeFromArray([1,2,3], 3));
// Do not edit below this line
module.exports = removeFromArray;

const findTheOldest = function(array) {
    let oldest = array[0];
    let oldestAge = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].age > oldestAge) {
            oldest = array[i];
            oldestAge = array[i].age;
            }
            }
            return oldest;
            
};
    console.log(findTheOldest([
        {
          name: "Carly",
          yearOfBirth: 1942,
          yearOfDeath: 1970,
        },
        {
          name: "Ray",
          yearOfBirth: 1962,
          yearOfDeath: 2011,
        },
        {
          name: "Jane",
          yearOfBirth: 1912,
          yearOfDeath: 1941,
        },
      ]))
// Do not edit below this line
module.exports = findTheOldest;

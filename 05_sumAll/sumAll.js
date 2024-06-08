const sumAll = function(intOne, intTwo) {
    let sum = 0;
    if (intTwo < intOne) {
        for (let i = intTwo; i < (intOne + 1); i++) {
            sum += i;}
    }
    else {
        for (let i = intOne; i < (intTwo + 1); i++) {
            sum += i;}
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

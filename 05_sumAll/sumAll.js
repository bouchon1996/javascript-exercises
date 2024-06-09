const sumAll = function(intOne, intTwo) {
    if (!Number.isInteger(intOne) || !Number.isInteger(intTwo)) return "ERROR";
    if (intOne < 0 || intTwo < 0) return "ERROR"
    
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

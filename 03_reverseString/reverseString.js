const reverseString = function(string) {
    const stringArray = [] 
    for (let i=0; i < string.length; i++){
        stringArray.push(string[i]);
    }
    let reversedArray = stringArray.reverse();
    return reversedArray.join(''); 
};

// Do not edit below this line
module.exports = reverseString;

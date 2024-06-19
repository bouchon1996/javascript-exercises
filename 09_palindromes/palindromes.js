const palindromes = function (string) {
    const alphanumerical= 'abcdefghijklmnopqrstuzwxyz0123456789'

    const cleansedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

    const reversedString = cleansedString.split('').reverse().join('');

    return cleansedString === reversedString;

};

// Do not edit below this line
module.exports = palindromes;

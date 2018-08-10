function convertToRoman(num) {

    let arabicNumeral = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    let romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

    let result = '';

    for (let i = 0; i < arabicNumeral.length; i++) {
        while (arabicNumeral[i] <= num) {
            result += romanNumeral[i];
            num -= arabicNumeral[i];
        }
    }

    return result;
}

console.log(convertToRoman(29)); // should return "XXIX".
console.log(convertToRoman(44)); // should return "XLIV".
console.log(convertToRoman(68)); // should return "LXVIII"
console.log(convertToRoman(2014)); // should return "MMXIV"
console.log(convertToRoman(3999)); // should return "MMMCMXCIX"
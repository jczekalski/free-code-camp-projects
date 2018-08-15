function telephoneCheck(str) {

  var regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;

  return regex.test(str);
}

console.log(telephoneCheck("1 555-555-5555")); //should return true.
console.log(telephoneCheck("1 (555) 555-5555")); //should return true.
console.log(telephoneCheck("5555555555")); //should return true.
console.log(telephoneCheck("1 456 789 4444")); //should return true.
console.log(telephoneCheck("123**&!!asdf#")); //should return false.
console.log(telephoneCheck("2 (757) 622-7382")); //should return false.
console.log(telephoneCheck("-1 (757) 622-7382")); //should return false
console.log(telephoneCheck("2(757)622-7382")); //should return false.
console.log(telephoneCheck("555)-555-5555")); //should return false.
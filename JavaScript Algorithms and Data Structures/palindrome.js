function palindrome(str) {
  let original = str.replace(/[\W_-]/g, '').toLowerCase();
  let reversed = original.split("").reverse().join("");
  
  if (original === reversed) {
    return true;
  } else {
    return false;
  }

}

//Should be:
console.log(palindrome("Eye")); //true
console.log(palindrome("_eye")); //true
console.log(palindrome("0_0 (: /-\ :) 0-0")); //true
console.log(palindrome("A man, a plan, a canal. Panama")); //true
console.log(palindrome("not a palindrome")); //false
console.log(palindrome("five|\_/|four")); //false
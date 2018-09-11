/* -------------------------------------------------
Reverse the provided string. You may need to turn
the string into an array before you can reverse it.
Your result must be a string.
------------------------------------------------- */

function reverseString1(str){
  let reversedStr = '';
  for (var i=str.length-1; i >= 0; i--){
      reversedStr += str[i];
  }
  return reversedStr;
}


function reverseString2(str) {
  var subStr = str.split('').reverse().join('');
  return subStr;
}

reverseString2("hello");
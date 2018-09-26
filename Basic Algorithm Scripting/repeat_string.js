/*-------------------------------------------------
Repeat a given string str(first argument) for num
times(second argument).Return an empty string
if num is not a positive number.
------------------------------------------------- */

function repeatStringNumTimes(str, num) {
    var repeatedStr = "";
    for (var i = 0; i < num; i++) {
        repeatedStr += str;
    }
    return repeatedStr;
}

console.log(repeatStringNumTimes("*", 3)); // prints "***"
console.log(repeatStringNumTimes("abc", 4)); // prints "abcabcabcabc"
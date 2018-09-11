/* -------------------------------------------------
Return true if the given string is a palindrome. 
Otherwise, return false. A palindrome is a word or
sentence that's spelled the same way both forward and
backward, ignoring punctuation, case, and spacing.
------------------------------------------------- */

function palindrome(str) {
    var strReg = str.split('').reverse().join('').toLowerCase().replace(/[^a-z0-9+]+/gi, "");
    var strPal = str.toLowerCase().replace(/[^a-z0-9+]+/gi, "");
    if (strReg === strPal) {
        return true;
    } else {
        return false;
    }
}
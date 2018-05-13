// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

function factorialize(num){
    if (num == 0){ // 0! = 1
        return 1;
    } else {
        return factorialize(num-1) * num;
    }
}
factorialize(5);

// Alternative solution without recursion.
function factorializeV2(num) {

    for (var i = num - 1; i > 0; i--) {
        num = num * i
    }
    return num
}

factorializeV2(5);
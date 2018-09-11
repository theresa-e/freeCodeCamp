/* -------------------------------------------------
Return the factorial of the provided integer.
------------------------------------------------- */

function factorialize(num){
    if (num == 0){ // 0! = 1
        return 1;
    } else {
        return factorialize(num-1) * num;
    }
}
factorialize(5);

// Alternative without recursion.
function factorializeV2(num) {
    if (num == 0) {
        return 1;
    }
    for (var i = num - 1; i > 0; i--) {
        num = num * i
    }
    return num
}

factorializeV2(5);
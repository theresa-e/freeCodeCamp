/*-------------------------------------------------
You are given two arrays and an index.

Use the array methods slice and splice to copy each
element of the first array into the second array, in
order.

Begin inserting elements at index n of the second array.

Return the resulting array.The input arrays should 
remain the same after the function runs.
------------------------------------------------- */

function frankenSplice(arr1, arr2, n) {
    var left = arr2.slice(0, n);
    var right = arr2.slice(n);
    for (var i=0; i<arr1.length; i++) {
        left.push(arr1[i]);
    }
    var arr3 = left.concat(right);
    return arr3;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1); // returns [ 4, 1, 2, 3, 5, 6 ]
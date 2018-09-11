/* -------------------------------------------------
Finders Keepers:
Create a function that looks through an array (first
argument) and returns the first element in the array
that passes a truth test(second argument). If no 
element passes the test, return undefined.
------------------------------------------------- */

function findElement(arr, func){
    for (var i=0; i<arr.length; i++){
        if (func(arr[i])){ // truth test has been passed
            return arr[i]; // return val that passed
        }
    }
    return undefined; // truth test not passed
}
const addArray = (function (arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++)
        result = result + arr[i];
    return result;
})([2, 5, 7, 8, 9, 19])
console.log(addArray);  
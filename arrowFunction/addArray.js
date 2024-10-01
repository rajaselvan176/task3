const addArray = (arr)=> {
    let result = 0;
    for (let i = 0; i < arr.length; i++)
        result = result + arr[i];
    return result;
}
let answer = addArray([2, 5, 7, 8, 9, 19]);
console.log(answer);
const isPalindrome=function (arr) {
    for(let i=0;i<arr.length;i++){
    let reversed = arr[i].split('').reverse().join('');
     if (arr[i] === reversed){
        console.log(arr[i]);
     }
    
    }
}
isPalindrome(['madam',"pencil","did"]);
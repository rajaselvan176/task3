const removeDuplicate=(function(arr){
    let unique=[];
    for(let i=0;i<arr.length;i++){
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
            
}
    }
return unique;

})(["apple","apple","pine","jackfruit"])
console.log(removeDuplicate);
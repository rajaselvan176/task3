const removeDuplicate=function(arr){
    let unique=[];
    for(let i=0;i<arr.length;i++){
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
            
}
    }
return unique;

}
console .log(removeDuplicate(["apple","apple","pine","jackfruit"]));
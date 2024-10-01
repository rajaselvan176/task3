const rotate=(arr,k)=>{
for (let times = 0; times < k; times++){
    arr.unshift(arr.pop());
}
return arr;
}
console.log(rotate([1,2,3,4,5],2));
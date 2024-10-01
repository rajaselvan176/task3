const median=(function(){
    let arr1=[1,2,3,4,5,9];
    let arr2=[5,6,7,8,9,10];
    let med1=arr1.length/2;
    let med2=arr2.length/2;
    return (arr1[med1-1]+arr2[med2-1])/2;
})();
console.log(median)
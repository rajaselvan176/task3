const titleCap=(function(str){
    str=str.toLowerCase().split(" ")
        for(let i=0;i<str.length;i++)
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    return str.join(" ");
    
})("this is a pen")
console.log(titleCap);
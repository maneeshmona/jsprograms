var arr = ['ladoo','peda','barfi','jamun','malai','khoya']
arr.forEach((value,index,array)=>{

    console.log(value);
    console.log(index);
    console.log(array);

});
//for map

var result = arr.map((val,index,array)=>{
return val +'verry good';

});
console.log(result);
console.log(arr);


//for filter
var arr1 =[12,45,78,10,2,555,]
var result =arr1.filter((valu,index)=>{
    return valu>50;
})
console.log(result);
console.log(arr1);
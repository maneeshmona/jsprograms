var arr= [1,2,5,5,4,6,8,7]
for (var i = 0; i <arr.length; i++) {
    if (arr[i] ==5) {
        continue;
        break;
        
    }
    console.log(arr[i]);
}
for (var i of arr) {
    console.log(i);
    
}
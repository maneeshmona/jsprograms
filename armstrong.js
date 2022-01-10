var sum  =0;
var n = 153;
var temp = n;
while (temp>0) {
    
    var rem = temp%10;
    sum +=rem*rem*rem;
    temp  = temp/10;
}
if(sum ==  n){
    console.log(`${n}is arm`);

}
else{
    console.log("no arm strong"`${n}`);
}

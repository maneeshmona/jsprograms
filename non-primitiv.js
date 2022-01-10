var big = BigInt(2);
console.log(big);

var hugeNumber = BigInt(122222252515151115)
console.log(hugeNumber);
console.log(typeof hugeNumber);

hugeNumber = hugeNumber + 1542;
console.log(hugeNumber);


var mySymbol =Symbol("hello");
console.log(mySymbol);

var mySymbol1 = Symbol("hel");
if (mySymbol == mySymbol1)
 {
    console.log("true");
    
}
else{
    console.log("false");
}


var a = 10;
var b = 20;
if (a==b) {
    console.log("true");
    
}
else{
    console.log("false");
}
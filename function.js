function  example(){
    console.log('i am good boy');
}
example();

var a =10;
var b =20;
function example(){
    var c =a+b;
    console.log(c);
}
example();

function add(a,b){
    var c = a+b;
    console.log(c);

}
add(50,40)


//anonymous
    var fun =function(var1,var2){
    var result = var1*var2;
    console.log(result);
}
fun(15,4);

//iief
(function(a,b){

    console.log(a*b);
})(40,20);

(function(p,q){
    console.log(p+q);
})(45,45);
//arrow

  var food=(pawbaji,golgappa)=>{
    console.log(pawbaji,golgappa);
};
food ();

var arr = [10,20,30,2,05,05,05,05,08,1,8,8,8]
console.log(arr.length);

for( var a = 1 ;  a<=13; a++)
{
    // console.log(a);
    console.log(arr.length);
    console.log(arr[a]);
}

//forof
for(var i of arr){
    console.log(i);
}
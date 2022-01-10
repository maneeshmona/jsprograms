function outer(){
var outside = "i am a outside"
console.log(outside);
console.log('outer function');

function inner(){
    var inside = 'i m inside variable';
    console.log('inner function');
console.log(inside);
};

inner();

};
outer();


//function chainig
function one(){
    console.log('i am one');
};
function two(){
    console.log('iam two');
     return one;
};
function three(){
    console.log('iam three');
return two;
};
// three();
// var returnedValue = three();
// var anotherValue  = returnedValue();
// returnedValue();
// anotherValue();
three()()();
//call back

function callMom(callback){
    setTimeout(()=>{
        console.log('call mom');
        callback(callDad);
        callTeacher();
    },5000);
};

function callManeesh(func){
setTimeout(()=>{
    console.log('call maneesh');
    func(callTeacher);
},2000);

};
function callDad(fun1){
    setTimeout(()=>{
        console.log('call Dad');
        fun1();
    },3000);
};
function callTeacher(){
    setTimeout(()=>{
        console.log('callTeacher');
 
    },1000);
};
callMom(callManeesh);
// Callback();
// callManeesh();


function add(a,b){
    return a+b;
};
function sub(a,b){
    return a-b;
};
function mul(a,b){
    return a*b;

};
function opt(a,b,opt){
    return opt (a,b,add);
};

function opt (a,b,opt,opt2,opt3){
    var x = opt(a,b);
    var y = opt2(a,b);
    var z = opt3(a,b);
    return[x,y,z];
};
var result = opt(5,4,add,sub,mul,);
console.log(result);








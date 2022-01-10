// document.write('please join');
//  var ele = document.createElement('h1');
//  document.body.append(ele);
//  ele.innerText = 'welcome to my home';
//  ele.TextContent = "please tell your name";
//  ele.innerHTML = '<a href = "#">what is your name</a>';
//  ele.innerHtml = 'what';
//   var set = setTimeout(()=>{
// // console.log(Date.now);
// console.log(set);
// },1000);


// var time = new Date();
// setInterval(() =>{
//     var time = new Date();
//     ele.innerText = time;

// }, 2000);
// settimeout(() => {
    // var time = new Date ().getTime;
    // ele.innerText = time;
// }, 10);

// var a  = document.getElementById('kllll');
// a.style.color = 'red';
// a.innerText = 'i am id example';

// var b = Array.from(document.getElementsByClassName('select'));
//  b.forEach(changeColor);
//  function changeColor (ele){
//      setInterval(() => {
//          var x = Math.random();
//          if (x>0 && x<0.25) {
//              ele.style.color = "green";
             
//          }
//          else if (x>0.25 && x<0.5) {
//              ele.style.color = "red";      
//          }
//          else if (x>0.5 && x<0.75) {
//             ele.style.color = "red";      
//         }
//         else {
//             ele.style.color = "blue";      
//         }
         
//      }, 1000);
//  }

// //query selector
// var queryEle = document.querySelector('div');
// // console.log(queryEle);
// queryEle.innerText = 'hello';


// var queryele = Array.from( document.querySelectorAll('.hello'));//if u take class then put (.class)
// console.log(queryele);

// queryele.pop();
// console.log(queryele);

// queryele.forEach((ele)=>{
//     ele.style.color = 'hotpink';

// });

// //property in dom
var unorderList = document.getElementById('unordr');
var children = unorderList.childNodes;
// console.log(childrens);

function removeAnybody() {
    var unList = document.getElementById('unordr');
var children = unList.childNodes;
console.log(children);
// unList.removeChild(unList.lastElementChild);  
unList.removeChild(children[1]);  
};

//property in dom event;
function magic() {
    var ele = document.getElementsByClassName('desine');
    ele.style.height = '200px'
    ele.style.width = '200px';
    ele.style.backgroundColor = 'red'; 
    
};
function magicGone() {
    var ele = document.getElementsByClassName('desine');
    
    
}
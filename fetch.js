fetch('./db.json').then((res) => {
    res.json().then((data) => {
        console.log(data);
    });
});

var car = {
    color: 'red',
    model: 1999,
    prize: 20000
};
var store = JSON.stringify(car);

console.log(store);
console.log(typeof store);
localStorage.setItem("car",store)

 var res = localStorage.getItem("car");
console.log(res);
var res = JSON.parse(localStorage.getItem("car"));
console.log(res);
//how to clean the localstorage
// localStorage.removeItem('car');

//session storage
sessionStorage.setItem('car',JSON.stringify(car));

console.log(JSON.parse(sessionStorage.getItem('car')));



//shallo copy
let bike = {
    model:2222,
    prize:55555555,
    color:"blue"
}
console.log(bike);

let bike2 = bike;
console.log(bike2);

bike2.prize = 888888;
bike2.color = "red";
console.log(bike2);
console.log(bike);
let ans = confirm('did you deploy the project?')
let party = new Promise((resolve, reject) => {
    if (ans == true) {
        resolve('promish is kept')

    } else {
        reject("promish is failed")
    }
});
console.log(party);
party.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});



//async
function creatData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('datacreated')
        }, 5000);
    })
}

async function showData(){
    console.log('process starded');
    await creatData().then((res)=>{
        console.log(res);
    })
    setTimeout(()=>{
        console.log('showData');
    },2000)
};
showData();

// //try catch
// function creatData(){
//     return new promise((resolve,reject)=>{
//         let x =20;
//         if (x==10) {
//             setTimeout(()=>{
//                 resolve('data created')
//             },5000);
            
//         }
//         else{
//             setTimeout(()=>{
//                 reject('datanot created')
//             },4000)
//         }
//     });
// };

// async function showData(){
//     console.log('process started');

//     try{
//         let res = await creatData();
//         console.log(res);

//     }
//     catch(err){
//         console.log(err);
//     }
//     setTimeout(()=>{
//         console.log('showdata');

//     },2000);
// };
// showData();
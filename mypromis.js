//  var myPromise =new Promise((resolve,reject)=>{
//     var a = confirm('promise completed')
//     if (a) {
//         resolve('promise kept')    
//     }
//     else{
//         reject('promise fail')
//     }
//  });
// //  console.log(myPromise);
// myPromise.then((res)=>{
//     console.log(res);
// }).catch((abc)=>{
//     console.log(abc);
// });

function one() {
    return new Promise((resolve,resect)=>{
        setTimeout(()=>{
            resolve('func one');
        },5000)
    })
    
}
function two() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('func two');
        },2000);
        reject('rejected two')
    })
    
}
async function flow() {
    console.log('process stsrt');
    try{
    var a = await one();
     console.log(a);

       var b = await two();
       console.log(b);

    }
    catch(err){
        console.log(err);
    }
    // console.log(end);
};
flow();

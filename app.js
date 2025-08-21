// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextChangeColor){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextChangeColor) nextChangeColor();
//     }, 1000);
// };

// changeColor("red", 1000, ()=>{
//     changeColor("green", 1000, ()=>{
//         changeColor("orange", 1000, ()=>{
//             changeColor("white", 1000)
//         })
//     });
// })

// function saveToDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;

//     if(internetSpeed>4){
//         success();
//     }else{
//         failure();
//     }
// }

// saveToDb("Apna college", ()=>{
//     console.log("your data was saved");
//     saveToDb("Hello world", ()=>{
//         console.log("success2: data was saved");
//     }, ()=>{
//         console.log("week connection");
//     })
// }, ()=>{
//     console.log("your data was not saved");
// })

function saveToDb(data){
    return new Promise(resolve, reject);
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        success("success data was saved");
    }else{
        failure("failure data was not saved");
    }
}

saveToDb("Apna college");


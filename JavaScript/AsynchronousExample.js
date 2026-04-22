console.log("Timer Started");
let count=0
let id=setInterval(()=>{
    count++
    console.log("Countdown: ",count);
    if(count==5)
        clearInterval(id)
},1000)



// console.log("Start");
// let id=setTimeout(()=>{
//     console.log("Clear Interval example");
// },3000)
// clearTimeout(id)
// console.log("End");


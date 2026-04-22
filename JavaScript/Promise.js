// console.log("Order Placed..");

// new Promise((resolve,reject)=>{
//     let itemAvailable=true
//     setTimeout(()=>{
//         if(itemAvailable){
//             resolve("Food Delivered!")
//         }
//         else{
//             reject("Item not available")
//         }
//     },5000)
// }).then((value)=>{
//     console.log(value);
    
// }).catch((value)=>{
//     console.log(value);
// })

// console.log("Doing other works....");

// -----------------------------------------------------------------------------

console.log("Waiting for bus:");
let transport = new Promise((res,rej)=>{
    let isArrived=true
    setTimeout(()=>{
        if(isArrived){
            res({
                name:"Orange Travels",
                busNo: "KC0741",
            })
        }
        else{
            rej("Bus got Delayed...")
        }
    },3000)
})

// transport.then((val)=>{
//     console.log(val);
//     console.log("Name of travels:",val.name);
    
// }).catch((val)=>{
//     console.log(val); 
// })


async function handlePromise() {
    try{
        let value=await transport
        console.log(value);
        
    }
    catch(err){
        console.log(err);    
    }
}

handlePromise()
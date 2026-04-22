// let promise1=fetch('https://jsonplaceholder.typicode.com/posts')
//                 .then((response)=>{
//                     let promise2=response.json()
//                         .then((data)=>{
//                             console.log(data);
//                             console.log(data[0]);
//                             console.log("Title:",data[0].title);
                            
//                         })
//                         .catch((err)=>{
//                             console.log(err);
//                         })
//                 })
//                 .catch((err)=>{
//                     console.log(err);
//                 })


//-------------------------------------------------------------------------------------


let h2=document.querySelector("h2")
let h3=document.querySelector("h3")
async function fetchData(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/posts')
        const data=await response.json()
        console.log(data);
        h2.innerHTML=data[0].title
        h3.innerHTML=data[0].userId
        data.forEach((ele,index)=>{
            console.log(index,ele.title);  
        })
        
    }
    catch(err){
        console.log(err);  
    }
}

fetchData()
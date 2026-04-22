let inc=document.getElementById("inc")
let dec=document.getElementById("dec")
let res=document.getElementById("res")
let value=document.getElementById("value")

let count=0
inc.addEventListener("click",()=>{
    count++
    value.innerText=count
})

dec.addEventListener("click",()=>{
    if(count>0){
        count--
        value.innerText=count
    }
})

res.addEventListener("click",()=>{
    count=0
    value.innerText=count
})
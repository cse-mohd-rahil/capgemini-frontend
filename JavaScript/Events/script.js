//-----------------------------------------------Inline level Event listner
// function handleClick(){
//     document.querySelector("h1").innerText="React JS"
// }

//-------------------------------------------------DOM level event listner  (OnClick)
// let button=document.getElementById("btn")
// button.onclick=()=>{
    //     document.querySelector("h1").innerText="HTML"
    
    // }
    
//----------------------------------------------------addEventListner
// let button1=document.getElementById("button")
// button1.addEventListener("click",()=>{
//     document.querySelector("h1").innerText="CSS"
// })


//-----------------------------------------Advantage of addEventListner

// function f1(){
//     console.log("First");
// }
// function f2(){
//     console.log("Second");
// }



// let btn=document.getElementById("btn")
// btn.addEventListener("click",()=>{
//     console.log("First");   
// })
// btn.addEventListener("click",()=>{
//     console.log("Second");   
// })

//-------------------------------------------------OnInput

// let input=document.querySelector("input")
// input.addEventListener("input",()=>{
//     document.getElementById("h2").innerText=input.value
// })


//--------------------------------------------OnSubmit

// let form=document.getElementById("form")
// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     let data=document.getElementById("name").value
//     if(data==""){
//         alert("Field should not be empty")
//     }
//     else{
//         console.log("Form Submitted:",data);
//         document.getElementById("name").value=""
//     }
// })


//-----------------------------------------OnMouseHover and OnMouseOut

// let button=document.querySelector("button")
// button.addEventListener("mouseover",()=>{
//     document.body.style.backgroundColor="blue"
//     document.body.style.color="white"
// })
// button.addEventListener("mouseout",()=>{
//     document.body.style.backgroundColor="red"
//     document.body.style.color="white"
// })


//---------------------------------------------OnKeyDown

// document.getElementById('input').addEventListener("keydown",()=>{
//     document.body.style.backgroundColor="red"
// })


let div=document.getElementById("box")
let button=document.querySelector("button")
button.addEventListener("click",()=>{
    div.classList.toggle("lpu")
})


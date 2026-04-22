let input=document.getElementById("input")
let ul=document.getElementById('ul')
let add=document.getElementById('add')
let del=document.getElementById('del')

add.addEventListener("click",()=>{
    let li=document.createElement('li')
    li.innerText=input.value
    ul.appendChild(li)
    document.getElementById("input").value=""
})

del.addEventListener("click",()=>{
    ul.removeChild(ul.lastElementChild)
})
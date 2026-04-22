
const p=document.querySelector("p")
// console.log(p.innerText);           //gives only visible content
// console.log(p.textContent);         //gives visible as well as invisible content


//Changing the content
p.innerText="Tomorrow may be JavaScript"
p.textContent="Day after tomorrow may be React"
p.innerHTML="<i>Very less students. <mark>There is a meeting at 12</mark></i>"


//Changing Style
let h1=document.querySelector("h1")
console.log((h1));

h1.style.color="white"
h1.style.background="lightblue"
h1.style.fontSize="30px"
h1.style.padding="20px"
h1.style.textShadow="2px 1px 3px black"



//Changing Attribute
let image=document.querySelector("img")
image.setAttribute("src","./image.webp")
console.log(image.getAttribute("src"))
// image.removeAttribute("src")



//Creating and adding elements
let h2=document.createElement("h2")
h2.innerText="This is created using createElement method"
document.body.appendChild(h2)

let para=document.createElement("p")
para.innerHTML="This is inside div and created using createElement method"
document.querySelector('div').appendChild(para)


let i=document.createElement("i")
i.innerText="This text is in italics"

let b=document.createElement("b")
b.innerText="This text is in bold"

document.querySelector("div").append(i," ",b)

document.querySelector("div").prepend("This is prepend")



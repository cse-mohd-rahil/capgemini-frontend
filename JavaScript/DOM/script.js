console.log(document.title);
document.title="DOM Title"
console.log(document.title);


console.log(document.body);
console.log(document.p);


let paragraph=document.getElementById("para")
    console.log(paragraph);
let a=document.getElementsByClassName("head")
console.log(a);


let b=document.getElementsByTagName("h1")
console.log(b);

let c=document.querySelector(".head")
console.log(c);
let d=document.querySelectorAll("h1")
console.log(d);
let price:number=540
console.log(price);
price=564
// price="Hii"        //wrong
console.log(price);


let productName:string
productName="HeadPhone"
console.log(productName);


let isStudent:boolean=true
console.log(isStudent);

let address:undefined
console.log(address);

let salary:null
salary=null
console.log(salary);

let user1:Symbol
user1=Symbol("rahil")
console.log(user1);


let num1:bigint=30n
let num2:bigint=20n
console.log(num1+num2);

let branch:string[]=["CSE","ECE"]
console.log(branch);

let mixed:(number|string|boolean)[]=["kalam",433,true]
console.log(mixed);





function LateComers(student:String,rollNo:number){
    console.log(student);
    console.log(rollNo);
}
LateComers("Ajay",111)



function smileCompetition():string{
    return "Anything but string"
}
console.log(smileCompetition());



function noreturn():void{
    console.log("This doesn't return anything");
    // return "anything"
}
noreturn()


let object:{name:string,age:number,address:{city:string}}={
    name:"Raj",
    age:20,
    address:{
        city:"Delhi"
    }
}
console.log(object);


let variable:any
variable=20
variable="Raj"
console.log(variable);
variable=null
console.log(variable);

//-------------------------------------tuple (fixed-order array)

let details:[name:string,age:number,isEmployee:boolean]=["kalam",20,true]
console.log(details);


//---------------------------------------------------literals/constants
let statuss: "happy" | "sad"
// statuss="angry"      //error only happy or sad can be used
statuss="happy"
console.log(statuss);



// -------------------------Problem with any and then use of unknown
let message:unknown="hello"
message=45
message="Lunch break"
if(typeof message=="string")   {
    console.log(message.toUpperCase());
}
else{
    console.log(message);
    
}


//---------------optional parameters

function lunchbreak(time:number,day?:string){
    console.log("Lunch Time: ",time);
    console.log("Today is:",day);
}

lunchbreak(1)


//----------------------default parameter
function fun(mood:string="Smile"){
    console.log(mood);
}
fun("angry")
fun()


//---------------------------arrow function
let a=(college:string,buildingNo:number=321):string=>{
    console.log("College Name: ",college);
    console.log("Building number: ",buildingNo);
    return "anything"
}
a("LPU",38)



//-------------------------------Rest (any number of arguments)
function chitchat(...rest:string[]){
    console.log(rest);
}
chitchat("hi","hello")

function chitchat2(...rest:number[]){
    console.log(rest);
}
chitchat2(54,23,122,887,45)

function chitchat3(...rest:(number|string)[]){
    console.log(rest);
}
chitchat3(45,"hi",676,56,"hello")



// ---------------------------------Interface

interface user{
    name:string,
    readonly spects:string,    //this value can't be updated
    rollno:number
}

let student1:user={
    name:"Rahil",
    spects:"10p",
    rollno:101
}

let student2:user={
    name:"Sahil",
    spects:"2p",
    rollno:111
}

console.log(student1);
console.log(student2);
student2.rollno=122
console.log(student2);




//-------------------------------------UNION
function f5(rating:string|number){
    if(typeof rating=="string")
        console.log(rating.toUpperCase());
    else    
        console.log(rating);       
}

f5("five Star")
f5(12)
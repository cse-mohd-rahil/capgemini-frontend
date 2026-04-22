"use strict";
let price = 540;
console.log(price);
price = 564;
// price="Hii"        //wrong
console.log(price);
let productName;
productName = "HeadPhone";
console.log(productName);
let isStudent = true;
console.log(isStudent);
let address;
console.log(address);
let salary;
salary = null;
console.log(salary);
let user1;
user1 = Symbol("rahil");
console.log(user1);
let num1 = 30n;
let num2 = 20n;
console.log(num1 + num2);
let branch = ["CSE", "ECE"];
console.log(branch);
let mixed = ["kalam", 433, true];
console.log(mixed);
function LateComers(student, rollNo) {
    console.log(student);
    console.log(rollNo);
}
LateComers("Ajay", 111);
function smileCompetition() {
    return "Anything but string";
}
console.log(smileCompetition());
function noreturn() {
    console.log("This doesn't return anything");
    // return "anything"
}
noreturn();
let object = {
    name: "Raj",
    age: 20,
    address: {
        city: "Delhi"
    }
};
console.log(object);
let variable;
variable = 20;
variable = "Raj";
console.log(variable);
variable = null;
console.log(variable);
//-------------------------------------tuple (fixed-order array)
let details = ["kalam", 20, true];
console.log(details);
//---------------------------------------------------literals/constants
let statuss;
// statuss="angry"      //error only happy or sad can be used
statuss = "happy";
console.log(statuss);
// -------------------------Problem with any and then use of unknown
let message = "hello";
message = 45;
message = "Lunch break";
if (typeof message == "string") {
    console.log(message.toUpperCase());
}
else {
    console.log(message);
}
//---------------optional parameters
function lunchbreak(time, day) {
    console.log("Lunch Time: ", time);
    console.log("Today is:", day);
}
lunchbreak(1);
//----------------------default parameter
function fun(mood = "Smile") {
    console.log(mood);
}
fun("angry");
fun();
//---------------------------arrow function
let a = (college, buildingNo = 321) => {
    console.log("College Name: ", college);
    console.log("Building number: ", buildingNo);
    return "anything";
};
a("LPU", 38);
//-------------------------------Rest (any number of arguments)
function chitchat(...rest) {
    console.log(rest);
}
chitchat("hi", "hello");
function chitchat2(...rest) {
    console.log(rest);
}
chitchat2(54, 23, 122, 887, 45);
function chitchat3(...rest) {
    console.log(rest);
}
chitchat3(45, "hi", 676, 56, "hello");
let student1 = {
    name: "Rahil",
    spects: "10p",
    rollno: 101
};
let student2 = {
    name: "Sahil",
    spects: "2p",
    rollno: 111
};
console.log(student1);
console.log(student2);
student2.rollno = 122;
console.log(student2);
function f5(rating) {
    if (typeof rating == "string")
        console.log(rating.toUpperCase());
    else
        console.log(rating);
}
f5("five Star");
f5(12);

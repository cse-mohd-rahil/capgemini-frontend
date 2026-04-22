var json=`{
    "Name":"Saaaaaa",
    "Age":28,
    "Marks":90
}`
// console.log(json);

var b=JSON.parse(json);             //parse converts JSON to JS object
console.log(b);


var json1={
    Name:"Saaaaaa",
    Age:28,
    Marks:90
}
var a=JSON.stringify(json1);      //stringify converts javascript object to JSON
console.log(a);
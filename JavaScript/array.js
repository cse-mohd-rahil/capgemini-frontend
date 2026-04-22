// let arr=["Palak","Himani","Naina"]
// arr.push("Poornima")
// console.log(arr);

// arr.pop()
// console.log(arr);

// arr.unshift("Garv")
// console.log(arr);

// arr.shift()
// console.log(arr);



//delete
// let arr=["Palak","Himani","Naina"]
// arr.splice(0,1)
// console.log(arr);

//adding
// let arr=["Palak","Himani","Naina"]
// arr.splice(2,0,"Sambar")

// console.log(arr);


//update
// let arr=["Palak","Himani","Naina"]
// arr.splice(1,1,"Garv 😎")
// console.log(arr);


// -----------------------------------------------FOR EACH LOOP----------------------------------------------

// let students=["Sam","John","Rahul","Aman"]
// students.forEach((ele,ind,array)=>{
//     console.log(`Student ${ele} at index ${ind} and ${array}`);    
// })



// ----------------------------------------------MAP method--------------------------------------------

// let arr=[1,2,3,4,5]
// arr.map((val)=>{
//     console.log(val*2);
// })


// let prices=[43,12,560,123,437,555]
// let total=prices.map((ele,val)=>{
//     let tax=30
//     return ele+tax   
// })
// console.log("Price without tax: ",prices);
// console.log("Price with tax: ",total);


// -------------------------------------------FILTER method----------------------------------------

// let ages=[23,44,12,7,43,66,50,35]
// let result=ages.filter((age)=>{
//     return age>30
// })
// console.log(result);


// let num=[1,2,3,4,5,6,7,8]
// let even=num.filter((n)=>{return n%2==0})
// console.log(even);


//----------------------------------------REDUCE method-------------------------------------------

// let number=[1,2,3,4]
// let sum=number.reduce((acc,val)=>{
//     return acc+val
// },0)
// console.log(sum);



// -------------------------------------Array Destructuring--------------------------------------

// let fruits=["Mango","Apple","Guava","Orange","Carrot"]
// let [a,b,c,d,e,g]=fruits
// console.log(a);
// console.log(g);  //undefined


// let details=["Headphones","Laptop","Shirt",[3500,2500,2000,5400],"Shoes"]
// let[a,b,c,[first,second,third,fourth],e]=details       //order important
// console.log(third);

// -------------------------------------Object Destructuring------------------------------------

// let product={
//     item:"watch",
//     price:5000,
//     details:{
//         loc:"Hyderabad",
//         warranty:2
//     },
//     brand:"fastrack",
//     material:"steel"
// }

// let{price,item,details:{loc,warranty},brand,material}=product
// console.log(warranty);


//-------------------------------------REST parameter-----------------------------------------

// function flipkart(product1,product2,...cart){
//     console.log(product1);
//     console.log(product2);
//     console.log(cart);
// }
// flipkart("Shoes","Shirt","Watch","Mobile")


// -------------------------------Spread Operator--------------------------------------------

let details={
    name:"capgemini",
    duration:5,
}

console.log(details);
let detailsCopy={...details}
console.log(detailsCopy);


let rollNo=[43,56,89,31,27]
let copiedArray=[101,...rollNo,102]
console.log(copiedArray);






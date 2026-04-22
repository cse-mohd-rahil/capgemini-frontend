// let details={
//     empId:"abc123",
//     empName:"Rahul",
//     pincode: 221004,
//     salary:undefined,
//     contact:9876543210,
//     company:"Testyantra",
//     location:"Bangalore",
//     "12age":25,
//     "@collage-uni":"LPU",
//     12:543,
//     Hobbies:["Travelling","Playing","Sleeping","eating"],
//     address:{
//         state:"Uttar Pradesh",
//         city:"Lucknow"
//     }
// }
// console.log(details);
// console.log(details.company);
// console.log(details["12age"]);
// console.log(details["12"]);
// console.log(details.Hobbies);
// console.log(details.Hobbies[1]);
// console.log(details.address);
// console.log(details.address.city);



// details.isMarried=false        //adding properties to object
// console.log(details);


// delete details.location      //deleting the object
// console.log(details);


// details.salary=null           //updating properties of object
// console.log(details);


// console.log(Object.keys(details))
// console.log(Object.values(details))
// console.log(Object.entries(details))


// --------------------------------------------------------------------------


// let training={
//     course:"Java FullStack",
//     year:"FinalYear",
//     details:{
//         Technologies:["Java","CSS","React"],
//         duration:6,
//         Timings:"9-5",
//         salaryDetails:{
//             salary:0,
//             hasHolidays:false,
//             MentaHealth:undefined
//         }
//     }
// }

// console.log(training.details.Technologies[2]);
// console.log(training.details.salaryDetails.hasHolidays);


// --------------------------------------------OBJECT FREEZE and SEAL---------------------------------


// let emp={
//     name:"Rajpal",
//     company:"RedChilli",
//     salary: 500000,
//     state:"Maharashtra"
// }

// Object.freeze(emp)

// emp.id=123         //can not add
// console.log(emp);

// delete emp.name     //can not delete
// console.log(emp);

// emp.state="UP"   //can not update
// console.log(emp);


let emp={
    name:"Rajpal",
    company:"RedChilli",
    salary: 500000,
    state:"Maharashtra"
}

Object.seal(emp)

emp.id=123         //can not add
console.log(emp);

delete emp.name     //can not delete
console.log(emp);

emp.state="UP"   //can update
console.log(emp);
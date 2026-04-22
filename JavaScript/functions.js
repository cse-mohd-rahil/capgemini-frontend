// function defaultValue(a,b=20){
//     console.log(a+b);
// }
// defaultValue(10)

// function greeting(a,b){
//     console.log("Now we are returning a value: ");
//     return a+b;
//     console.log("Bye......");
// }

// let res=greeting(5,7)
// console.log(res);


// function f1(){
//     console.log("Returns nothing...");
//     return;
// }
// let a=f1()
// console.log(a);

// function f1(){
//     console.log("Returns nothing...");
// }
// let a=f1()
// console.log(a);


//-------------------------------------------ANONYMOUS FUNCTION-------------------------------------

// let a=function(){
//     console.log(("This is anonymous function"));
// }
// a();

//---------------------------------------FUNCTION EXPRESSION------------------------------
// let b=function sleep(){
//     console.log("Someone is sleeping...");
// }
// b();
// sleep()            //Here sleep is not defined and it will throw error


//---------------------------------ARROW FUNCTION----------------------------------------

// let a=()=>"Hello"
// console.log(a());

// let b=()=>{return "Hi"}
// console.log(b());

// let c=p=>{
//     console.log("hello",p)
// }

// c("John")


// --------------------------------HIGHER ORDER FUNCTION--------------------------------

function CallBackFunction(){
    console.log("This is a callback function");
}

function HOC(func){
    console.log("This is Higher Order function");
    func()
}

HOC(CallBackFunction)


// function getNotification(){
//     console.log("Hey!! i reached home Safely...😊");
    
// }

// function travelling(message){
//  console.log("Going to home....🚘");
//  message()
 
// }
// travelling(getNotification)




// function f1(){
//     console.log("This is higher order function i am going to return f2 function");
//   return function f2(){
//     console.log("This is returned function");
//    }
// }
// let a=f1()
// // console.log(a);
// a()



// function outer(){
//     let like=10;
//      function inner(){
//             console.log("Your likes count: ",like);
//      }
//      inner()
// }
// outer()





// function movieplan(){
//     console.log("Planning for movie");

//      function bookTicket(){
//         console.log("Booked ticket");
         
//      }
//      bookTicket()

//      function buyPopCorn(){
//         console.log("Buying pop corn..🍿");
//      }
//      buyPopCorn()

//      function enjoy(){
//          console.log("Enjoying Movie...🎥");
//      }
//      enjoy()

// }
// movieplan()



// var a=10;
// let b=20;
// const c=30;


// console.log(a);
// console.log(b);
// console.log(c);



// function f1(){
//    console.log(a);
//    console.log(b);
//    console.log(c);  
// }
// f1()



// if(true){
// console.log(a);
// console.log(b);
// console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);





// function f1(){
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c);   
// }
// f1()
//   console.log(a);
//     console.log(b);
//     console.log(c); 


if(true){
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
 console.log(a);
    console.log(b);
    console.log(c);


    //scope of var is everywhere even outside the block but not for let and const

    
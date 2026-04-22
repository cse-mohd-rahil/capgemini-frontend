//Question 1--------------------------------------------------------

let arr=[{
        name:"Rahul",
        subject: "JavaScript",
        id:101  
    },
    {
        name:"Sameer",
        subject:"HTML",
        id:102
    }
]

arr.forEach((element)=>{
    console.log("Name:",element.name);
    console.log("Subject:",element.subject);
    console.log("ID:",element.id);
})


//Question 2---------------------------------------------------------

function discount(user){
    let price=3000
    if(user=='student'){
        return price-(0.5*price)
    }
    else if(user=='employee'){
        return price-100
    }
}

console.log(discount('student'));
console.log(discount('employee'));


//Question 3------------------------------------------------------

function signal(s){
    if(s=='red'){
        console.log('Stop'); 
    }
    else if(s=='yellow'){
        console.log('Wait');
    }
    else if(s=='green'){
        console.log('Go');
        
    }
}

signal('red')
signal('yellow')
signal('green')
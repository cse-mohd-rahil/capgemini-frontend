async function handlePromise() {
    try{
        let value=await transport
        console.log(value);
        
    }
    catch(err){
        console.log(err);    
    }
}

handlePromise()
async function fetchData(){

    const container=document.getElementById('container')

    try{
        const response=await fetch('https://fakestoreapi.com/products')
        const data=await response.json()
        console.log(data);
        data.forEach((e)=>{
            const card=document.createElement("div")
            card.classList.add("card")

            const img=document.createElement("img")
            img.src=e.image
            
            const category=document.createElement("h3")
            category.innerText=e.category
            
            const price=document.createElement("h3")
            price.innerText=e.price

            const rating=document.createElement("p")
            rating.innerText=e.rating.rate

            card.appendChild(img)
            card.appendChild(category)
            card.appendChild(price)
            card.appendChild(rating)

            container.appendChild(card)
        })
    }
    catch(err){
        console.log(err);
    }
}
fetchData()
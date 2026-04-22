// import React, { useState } from 'react'

// const App = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: "Rahul", city: "Delhi" },
//     { id: 2, name: "Aman", city: "Mumbai" },
//     { id: 3, name: "Priya", city: "Punjab" }
//   ])

//   const [name, setName] = useState("")
//   const [city, setCity] = useState("")
//   const [editId, setEditId] = useState(null)

//   function deleteUser(id) {
//     let data = users.filter((item) => item.id !== id)
//     setUsers(data)
//   }

//   function editUser(user) {
//     setName(user.name)
//     setCity(user.city)
//     setEditId(user.id)
//   }

//   function updateUser() {
//     let data = users.map((item) =>
//       item.id === editId
//         ? { ...item, name: name, city: city }
//         : item
//     )

//     setUsers(data)
//     setName("")
//     setCity("")
//     setEditId(null)
//   }

//   return (
//     <div>
//       <h1>User List</h1>

//       <input
//         type="text"
//         placeholder="Enter Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <input
//         type="text"
//         placeholder="Enter City"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />

//       <button onClick={updateUser}>
//         Update
//       </button>

//       {users.map((item) => (
//         <div key={item.id}>
//           <h3>{item.name}</h3>
//           <p>{item.city}</p>

//           <button onClick={() => editUser(item)}>
//             Edit
//           </button>

//           <button onClick={() => deleteUser(item.id)}>
//             Delete
//           </button>

//           <hr />
//         </div>
//       ))}
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'

function ProductCard(props) {
  return (
    <div
      style={{
        width: "45%",
        background: "white",
        padding: "10px",
        textAlign: "center"
      }}
    >
      <img
        src={props.data.image}
        style={{ width: "70px", height: "70px" }}
      />

      <h3>{props.data.name}</h3>

      <button onClick={() => props.buyNow(props.data)}>
        Buy Now
      </button>
    </div>
  )
}

function CartCard(props) {
  return (
    <div
      style={{
        background: "white",
        padding: "10px",
        marginBottom: "10px",
        textAlign: "center"
      }}
    >
      <img
        src={props.item.image}
        style={{ width: "70px", height: "70px" }}
      />

      <h3>{props.item.name}</h3>
      <p>Count: 1</p>

      <button onClick={() => props.removeItem(props.item.id)}>
        Remove
      </button>
    </div>
  )
}

const App = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      image: "https://tse2.mm.bing.net/th/id/OIP.30y29wUXqS17aMfWTdQ7rQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 2,
      name: "Mobile",
      image: "https://tse4.mm.bing.net/th/id/OIP.L_IBmQ5JmWqU-k1Ezm9DjgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 3,
      name: "Watch",
      image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg"
    },
    {
      id: 4,
      name: "Headphone",
      image: "https://tse3.mm.bing.net/th/id/OIP.7Rpt53WF85APw_WhnFxVIgHaK5?rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ]

  const [cart, setCart] = useState([])

  function buyNow(product) {
    let found = cart.find((item) => item.id === product.id)

    if (!found) {
      setCart([...cart, product])
    }
  }

  function removeItem(id) {
    let update = cart.filter((item) => item.id !== id)
    setCart(update)
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      {/* Product */}
      <div style={{ width: "70%", background: "#ddd", padding: "20px" }}>
        <h1>Products</h1>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {products.map((item) => (
            <ProductCard
              key={item.id}
              data={item}
              buyNow={buyNow}
            />
          ))}
        </div>
      </div>

      {/* Cart */}
      <div style={{ width: "30%", background: "#cfe8ff", padding: "20px" }}>
        <h1>Cart {cart.length}</h1>

        {cart.map((item) => (
          <CartCard
            key={item.id}
            item={item}
            removeItem={removeItem}
          />
        ))}
      </div>

    </div>
  )
}

export default App
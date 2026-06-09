const App = () => {
  // In react we can treat HTML tags as data so we can store them in variables like: let a = <p>test</p>
  let name = "Ram";
  let surname = "Shah";

  let products = [
    { name: "laptop", price: 50000, _id: 1, quantity: 10 },
    { name: "bike", price: 40000, _id: 2, quantity: 20 },
    { name: "tablet", price: 30000, _id: 3, quantity: 30 },
  ];

  let users = [
    {name:"ram", surname:"thapa", _id:1, age: 20, gender:"male",email:"ramthapa123@gmail.com", image:"image.jpg"},
    {name:"sita", surname:"thapa", _id:2, age: 30, gender:"female",email:"sitathapa425@gmail.com", image: "image.jpg"},
    {name:"rita", surname:"thapa", _id:3, age: 30, gender:"female",email:"ritathapa425@gmail.com", image : "image.jpg"},
    {name:"anusha", surname:"thapa", _id:4, age: 30, gender:"female",email:"anushathapa425@gmail.com", image : "image.jpg"},
  ]

  return (
    <div>
      <h1 style={{ backgroundColor: "green" }}>Details</h1>
      <p style={{ color: "tomato" }}>Name:{name}</p>
      <p style={{ border: "solid red 2px" }}>Surname:{surname}</p>
      <p>The sum is {60 + 7}</p>
      <img src="image.jpg" height={200} alt="This is a red leaf"></img>

      {products.map((items) => {
        return (
          <div
            style={{
              border: "2px solid black",
              margin: "10px",
              padding: "10px",}}>
            <p><b>ID:</b> {items._id}</p>
            <p><b>Name:</b> {items.name}</p>
            <p><b>Price:</b> {items.price}</p>
            <p><b>Quantity:</b> {items.quantity}</p>
          </div>
        );
      })}

      {users.map((items)=>{
        return <div
        style={{border: "2px tomato solid",
          margin: "10px",
          padding: "10px",
          width: "300px"
        }}>
          <img src={items.image} height={90}
          style={{
            borderRadius: "20px"
          }}></img>
          <p><b>ID: </b>{items._id}</p>
          <p><b>Name: </b>{items.name}</p>
          <p><b>Surname: </b>{items.surname}</p>
          <p><b>Email: </b>{items.email}</p>
          </div>
      })}
    </div>
  );
};

export default App;

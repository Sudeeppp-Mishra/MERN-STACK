import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CreateProduct = () => {
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [quantity, setQuantity] = useState("");
  let [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name: name,
      price: price,
      quantity: quantity,
      description: description,
    };
    console.log(data);

    try {
      let result = await axios({
        url: "http://localhost:8000/product",
        method: "post",
        data: data,
      });
      toast.success("Product Created Successfully!")
      setPrice("")
      setName("")
      setQuantity("")
      setDescription("")

    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err.error());
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              value={name}
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </div>

          <div>
            <label htmlFor="price">Price: </label>
            <input
              id="price"
              value={price}
              type="number"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            ></input>
          </div>

          <div>
            <label htmlFor="quantity">Quantity: </label>
            <input
              id="quantity"
              value={quantity}
              type="number"
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            ></input>
          </div>

          <div>
            <label htmlFor="description">Description: </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
        </div>

        <div>
          <button>Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;

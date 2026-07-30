import axios from "axios";
import React, { useEffect, useState } from "react";

const ReadAllProduct = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const result = await axios({
        url: "http://localhost:8000/product",
        method: "get",
      });

      setData(result.data.result);
    } catch (error) {
      console.error("Axios error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.map((item, i) => (
        <div key={i}>
          <p>Name is {item.name}</p>
          <p>Price is {item.price}</p>
          <p>Quantity is {item.quantity}</p>
          <p>Description is {item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ReadAllProduct;
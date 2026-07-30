import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ReadAllUser = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const result = await axios({
        url: "http://localhost:8000/user",
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
          <p>Address is {item.address}</p>
          <p>Email is {item.email}</p>
          <p>Phone is {item.phone}</p>
        </div>
      ))}
    </div>
  )
}

export default ReadAllUser
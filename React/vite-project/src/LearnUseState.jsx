import React, { useState } from "react";

const LearnUseState = () => {
  let [name, setName] = useState("Ram");
  let [count, setCount] = useState(1); // Here if we would have made just a normal variable then it won't have shown the changed value of count after we do increment values from the button below...

  return (
    <div>
      <p>
        <b>Name: </b>
        {name}
      </p>
      <button
        onClick={() => {
          console.log("Button is Clicked!");
        }}
      >
        Click Me
      </button>

      <button
        onClick={() => {
          // name = "Hari" we can't do that for something we made using useState()
          setName("Hari");
        }}
      >
        Change Name
      </button>

      <p>
        <b>Count: </b>
        {count}
      </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default LearnUseState;

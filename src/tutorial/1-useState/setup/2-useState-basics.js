import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("hello world"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  // state value is text, setText is function
  const [text, setText] = useState("default value here");

  const handleClick = () => {
    // the parameter to this function sets the value of "text"
    //setText("hello world");

    if (text == "default value here") {
      setText("hello world");
    } else {
      setText("default value here");
    }
  };
  return (
    <>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default UseStateBasics;

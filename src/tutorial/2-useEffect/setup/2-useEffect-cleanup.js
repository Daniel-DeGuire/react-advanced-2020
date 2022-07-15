import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("use effect");
    window.addEventListener("resize", checkSize);
    return () => {
      return () => {
        console.log("cleanup");
        window.removeEventListener("resize", checkSize);
      };
    };
  }, []);
  console.log("render");
  console.log(size);
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;

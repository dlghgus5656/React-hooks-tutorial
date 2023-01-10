import { useEffect, useState } from "react";

const tt = () => {
  const [name, setName] = useState("");
};

useEffect(() => {
  setName = "t1";
  console.log(`${name}`);
  console.log(name);
  return () => {
    console.log("cleanup");
    console.log(name);
  };
}, []);

import React from "react";
import { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";
import ContextSample from "./ContextSample";
import Average from "./Average";
import UsePromiseSample from "./UsePromiseSample";

const App = () => {
  // return <Counter />;
  // return <Info />;
  // const [visible, setVisible] = useState(false);
  // return (
  //   <div>
  //     <button
  //       onClick={() => {
  //         setVisible(!visible);
  //       }}
  //     >
  //       {visible ? "숨기기" : "보이기"}
  //     </button>
  //     <hr />
  //     {visible && <Info />}
  //   </div>
  // );
  // return <ContextSample />;
  // return <Average />;
  return <UsePromiseSample />;
};

export default App;

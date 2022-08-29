import React from "react";
import { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";
import ContextSample from "./ContextSample";

const App = () => {
  // return <Counter />;
  return <Info />;
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
};

export default App;

// useContext
// 이 Hook 을 사용하면 함수형 컴포넌트에서 Context 를 보다 더 쉽게 사용 할 수 있습니다.

import { createContext, useContext } from "react";

const ThemeContext = createContext("black");
const ContextSample = () => {
  const theme = useContext(ThemeContext);
  const style = {
    width: "24px",
    height: "24px",
    background: theme,
  };
  return <div style={style} />;
};

export default ContextSample;

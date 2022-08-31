// useState
// useState 는 가장 기본적인 Hook 으로서,
// 함수형 컴포넌트에서도 가변적인 상태를 지니고 있을 수 있게 해줍니다.
// 만약에 함수형 컴포넌트에서 상태를 관리해야 되는 일이 발생한다면 이 Hook 을 사용

// useReducer
// useReducer 는 useState 보다 컴포넌트에서 더 다양한 상황에 따라 다양한 상태를 다른 값으로 업데이트해주고 싶을 때 사용하는 Hook

import { render } from "@testing-library/react";
import { useState, useReducer } from "react";

function reducer(state, action) {
  // action.type 에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 변화
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b> 입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}> +1 </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}> -1 </button>
    </div>
  );
};

export default Counter;

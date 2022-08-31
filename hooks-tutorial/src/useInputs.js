// 커스텀 Hooks 만들기

// 만약에 여러 컴포넌트에서 비슷한 기능을 공유하게 되는 일이 발생한다면 이를 우리들만의 Hook 을 작성하여 로직을 재사용 할 수 있습니다.

// 8.1 useInputs
// 한번 우리가 기존에 Info 컴포넌트에서 여러개의 인풋을 관리하기 위하여 useReducer 로 해결했던 작성했던 로직을 useInputs 라는 Hook 으로 따로 분리해보겠습니다.

import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}

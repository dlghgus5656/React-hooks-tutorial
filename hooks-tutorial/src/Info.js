// useState 를 여러번 사용하기
// 하나의 useState 함수는 하나의 상태 값만 관리를 할 수 있기 때문에 만약에 컴포넌트에서
// 관리해야 할 상태가 여러 개라면 useState 를 여러번 사용하시면 됩니다.

// useEffect
// useEffect 는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook

// 마운트 될 때만 실행하고 싶을 때
// 만약 useEffect 에서 설정한 함수가 컴포넌트가 화면에 가장 처음 렌더링 될 때만 실행되고
// 업데이트 할 경우에는 실행 할 필요가 없는 경우엔 함수의 두번째 파라미터로 비어있는 배열을 넣어주시면 됩니다.

// 특정 값이 업데이트 될 때만 실행하고 싶을 때
// 바로, useEffect 의 두번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어라

import { useState, useEffect, useReducer } from "react";
import useInputs from "./useInputs";

// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value,
//   };
// }

const Info = () => {
  // const [name, setName] = useState("");
  // const [nickname, setNickname] = useState("");
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  // const onChange = (e) => {
  //   dispatch(e.target);
  // };

  // useEffect(() => {
  // console.log(
  //   "렌더링이 완료되었습니다! 이번엔 마운트 될 때만 실행되고 특정 값이 업데이트 될 때 실행합니다."
  // );
  // console.log("effect");
  // console.log(name);

  // return () => {
  //   console.log("cleanup");
  //   console.log(name);
  // };
  // console.log(
  //   {
  //     name,
  //     nickname,
  //   }
  //    ! 마운트 될 때만 실행하고 싶을 때
  // 만약 useEffect 에서 설정한 함수가 컴포넌트가 화면에 가장 처음 렌더링 될 때만 실행되고
  // 업데이트 할 경우에는 실행 할 필요가 없는 경우엔 함수의 두번째 파라미터로 비어있는 배열을 넣어주시면 된다.
  // );
  //    특정 값이 업데이트 될 때만 실행하고 싶을 때
  //    useEffect 를 사용 할 때 특정 값이 변경이 될 때만 호출하게 하고 싶을 경우도 있을 때
  //    바로, useEffect 의 두번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어주시면 된다.
  // }, []);

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const onChangeNickname = (e) => {
  //   setNickname(e.target.value);
  // };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input nickname="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;

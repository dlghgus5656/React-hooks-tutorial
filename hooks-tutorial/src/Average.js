// useMemo
// useMemo 를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있습니다.

// 인풋 내용이 바뀔 땐 평균 값을 다시 계산 할 필요가 없는데, 이렇게 렌더링 할 때마다 계산을 하는 것은 낭비지요?

// useMemo Hook 을 사용하면 이러한 작업을 최적화 할 수 있습니다.
// 렌더링 하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고 만약에
// 원하는 값이 바뀐 것이 아니라면 이전에 연산했던 결과를 다시 사용하는 방식입니다.

// useCallback
// useCallback 은 useMemo와 상당히 비슷한 함수입니다.
// 주로 렌더링 성능을 최적화해야 하는 상황에서 사용하는데요,
// 이 Hook을 사용하면 이벤트 핸들러 함수를 필요할 때만 생성 할 수 있습니다.

// useRef
// useRef Hook 은 함수형 컴포넌트에서 ref 를 쉽게 사용 할 수 있게 해줍니다.

import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링 될 떄만 함수 생성
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus();
    },
    [number, list]
  ); // number 혹은 list 가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값: </b> {avg}
      </div>
    </div>
  );
};

export default Average;

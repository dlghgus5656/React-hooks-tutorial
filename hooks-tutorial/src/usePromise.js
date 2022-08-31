// usePromise
// 이번에는 함수형 컴포넌트에서 Promise 를 더 쉽게 사용 할 수 있는 Hook 을 만들어봅시다.

import { useState, useEffect } from "react";

export default function usePromise(promiseCreator, deps) {
  const [resolved, setResolved] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const process = async () => {
    setLoading(true);
    try {
      const result = await promiseCreator();
      setResolved(result);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    process();
  }, deps);
  return [loading, resolved, error];
}

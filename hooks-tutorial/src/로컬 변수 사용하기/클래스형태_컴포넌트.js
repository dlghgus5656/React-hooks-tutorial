// 추가적으로, 컴포넌트 로컬 변수를 사용해야 할 때도 useRef 를 활용 할 수 있습니다. 여기서 로컬 변수라 함은, 렌더링이랑은 관계 없이 바뀔 수 있는 값을 의미합니다.
import { Component } from "react";

class MyComponent extends Component {
  id = 1;
  setId = (n) => {
    this.id = n;
  };
  printId = () => {
    console.log(this.id);
  };
  render() {
    return <div>MyComponent</div>;
  }
}

export default MyComponent;

// 주의 하실 점은, 이렇게 넣는 ref 안의 값은 바뀌어도 컴포넌트가 렌더링 되지 않는다는 점 입니다.
// 렌더링과 관련 되지 않은 값을 관리 할 때만 이러한 방식으로 코드를 작성해주세요.

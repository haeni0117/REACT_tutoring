## `useState`는 언제 사용하는가?
  -  리액트 컴포넌트를 만들 때 컴포넌트에서 보여줘야 하는 내용이 사용자 인터랙션에 따라 동적으로 바뀌어야할 때 useState를 사용한다.
  -  리액트 이전 버전(16.8이전)에서는 해당 기능이 없었는데, 16.8버전 이후부터 `Hooks`라는 기능이 도입되어서 함수형 컴포넌트에서도 상태를 관리할 수 있다.
  -  `useState`함수도 `Hooks` 중 일부이다. 
### exercise 1 : 버튼을 누르면 숫자가 바뀌는 Counter 컴포넌트를 만들기 
```
import React from 'react';

function Counter() {
  const onIncrease = () => {
    console.log('+1')
  }
  const onDecrease = () => {
    console.log('-1');
  }
  return (
    <div>
      <h1>0</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
```
- 리액트에서 엘리먼트에 이벤트를 설정하기 -> `on이벤트이름={실행하고싶은함수}` 형태로 설정해주어야 합니다.
- 주의할 점 :  함수형태를 넣어주어야 하지, 함수를 다음과 같이 실행하지 말 것 -> 파라미터를 넣을 수 있게 설정하지 말 것 (잘못된 예 : `onClick={onIncrease()}`)
  - 렌더링되는 시점에서 함수가 호출되버리기 때문
  - 클릭할 때 함수를 호출해야하는데 렌더링 할 때 호출해버리면 버튼이 의미도 없어지고, 의도와 다르게 작동하게 된다.
```
import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
  }

  const onDecrease = () => {
    setNumber(number - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
```
- `const [number, setNumber] = useState(0);`로 동적인 작업을 처리할 수 있게 한다.
- `import React, { useState } from 'react';` : 리액트에서 `useState`함수를 불러온다.
- `useState`함수의 파라미터에는 기본값을 넣어준다. -> 기본값을 0으로 하고 싶으면 `useState(0)`으로 설정한다.
-  이 함수를 호출해주면 배열이 반환된다 -> 여기서 첫번째 원소는 `현재 상태`, 두번째 원소는 `Setter 함수`다.
## `배열비구조화할당`이란?

## Reference
- https://react.vlpt.us/basic/07-useState.html

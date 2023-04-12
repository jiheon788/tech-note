# 제어 vs 비제어 컴포넌트

## 제어 컴포넌트

제어 컴포넌트는 **사용자의 입력을 기반으로 자신의 state를 관리하고 업데이트**한다. React에서는 변경할 수 있는 state가 일반적으로 컴포넌트의 state 속성에 유지되며 `setState()`에 의해 업데이트된다. 즉, 사용자의 입력을 받는 컴포넌트에 event 객체를 이용해 `setState()`로 값을 저장하는 방식을 제어 컴포넌트 방식이라 할 수 있다. 제어 컴포넌트는 사용자가 입력한 값과 저장되는 값이 실시간으로 동기화된다.

```javascript
const App = () => {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return <input value={input} onChange={onChange} />;
};
```

이는 불필요한 리렌더링, 불필요한 api요청으로 인한 자원 낭비 문제로도 연결될 수 있다. 이러한 불필요한 방법을 막기 위해선 스로틀링이나 디바운싱(throttle&debounce)을 사용할 수 있다.

- `throttle(쓰로틀링)`: 마지막 함수가 호출된 후 일정 시간이 지나기 전에 다시 호출되지 않도록 하는 것
- `debounce(디바운싱)`: 연이어 호출되는 함수들 중 마지막 함수(또는 제일 처음)만 호출하도록 하는 것

## 비제어 컴포넌트

비제어 컴포넌트는 React에서 값을 보장하지 않는 방식이다. ref(React에서 Dom을 직접 핸들링할 때 사용)를 사용해서 값을 얻는다. 비제어 컴포넌트는 제어 컴포넌트와 달리 값이 실시간으로 동기화되지 않는다. 제어 컴포넌트가 사용자가 입력을 하는 액션이 발생될 때마다 리렌더링을 발생시키는 반면, 비제어 컴포넌트는 사용자가 직접 트리거하기 전까지는 리렌더링을 발생시키지도 않고 값을 동기화도 시키지 않는다. 이러한 비제어 컴포넌트를 사용해 렌더링을 최적화하는 라이브러리가 `react-hook-form`이다.

> `useRef()`는 heap영역에 저장되는 일반적인 자바스크립트 객체이다. 매번 렌더링 할 때 동일한 객체를 제공한다. heap에 저장되어 있기 때문에 애플리케이션이 종료되거나 가비지 컬렉팅 될 때까지, 참조할 때마다 같은 메모리 값을 가진다고 할 수 있다.

```javascript
const App = () => {
  const inputRef = useRef();

  const onClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <form className="App">
      <input ref={inputRef} />
      <button type="submit" onClick={onClick}>
        전송
      </button>
    </form>
  );
};
```

#### Reference

- [https://velog.io/@yukyung](https://velog.io/@yukyung/React-%EC%A0%9C%EC%96%B4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-%EB%B9%84%EC%A0%9C%EC%96%B4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90-%ED%86%BA%EC%95%84%EB%B3%B4%EA%B8%B0)

---

[Back](../README.md)

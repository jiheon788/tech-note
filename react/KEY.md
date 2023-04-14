# 리액트에서 Key의 역할

> keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity".

Key는 그 값이 변하지 않는, 유일한 식별자의 역할을 가진다. 즉, key 는 엘리먼트의 변화를 감지한다. 브라우저가 변화를 감지하여 DOM 이 변경되는 과정을 간략하게 살펴보면 다음과 같다.

1. virtualDOM 에서 변화를 감지한다
2. 변화가 일어난 virtualDOM 과 realDOM 을 비교하여 새로운 DOM을 연산한다.
3. 비교 이후, realDOM 은 virtualDOM 과 동일하게 업데이트 된다.

realDOM은 모든 부분을 업데이는 하는 것이 아닌 변화가 감지된 부분만 업데이트 한다. 아래 예시와 같이 key가 없는 경우, list 의 변화가 생길 시 리액트는 list 의 전체 순서가 변한 것으로 인지하여 모든 li 태그를 리렌더링 하게 된다. 즉 DOM을 비효율적으로 운영하게 된다.

```html
<ul>
  <li>Svelte</li>
  <li>React</li>
  <li>Vue</li>
</ul>
```

```javascript
// key의 사용
const Component = () => {
  return (
    <ul>
      {array.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};
```

하지만 key가 존재할 땐, 리액트는 original DOM 과 비교하여 어떤 요소만 변화가 있는지 빠르게 찾아낼 수 있다. 즉, 이전처럼 모든 리스트를 순회할 필요 없이, 새롭게 추가된 요소만 업데이트 시킬 수 있다. key 를 사용하면 기존의 요소는 리렌더링하지 않고 변화가 감지된 요소만 리렌더링하여 효율적인 DOM 사용이 가능하다. 결국 React 에서 key를 사용하는 이유는 엘리먼트 혹은 컴포넌트의 변화를 감지하기 위함이다. 이는 효율적으로 DOM을 사용할 수 있다.

⚠ 리스트나 아이템이 **고정되어 변경이 없을때**는 인덱스로 사용가능하다.

#### Reference

- [https://ko.reactjs.org/docs/lists-and-keys.html](https://ko.reactjs.org/docs/lists-and-keys.html)

---

[Back](../README.md)

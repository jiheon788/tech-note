# `Event Loop` 이란?

이벤트 루프는 콜 스택을 모니터하고 태스크 큐에서 수행할 작업이 있는지 확인하는 단일 스레드 루프다. 콜 스택이 비어 있고 태스크 큐에 콜백 함수가 있는 경우, 함수는 큐에서 제거되고 실행될 콜 스택으로 푸시된다.

```javascript
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");

bar();
foo();
baz();
```

![loopanimation](./../images/loopanimation.gif)

## JS Engine

자바스크립트 엔진은 `메모리 힙`과 `콜스택`으로 구성되어 있다. (구글의 V8엔진)
자바스크립트는 단일 스레드 프로그래밍 언어인데 콜스택이 하나라는 의미다.

- Memory Heap: 메모리 할당이 일어나는 곳
- Call Stack: 코드가 실행될 때 쌓이는 곳(LIFO)

## Web APIs

브라우저에서 제공하는 API이다. DOM, Ajax, Timeout 등이 있다.
`콜스택`에서 실행된 비동기 함수는 Web API를 호출하고, Web API는 `콜백함수`를 `콜백 큐`에 넣는다.

## Callback Queue

비동기적으로 실행된 `콜백함수`가 보관되는 영역이다. (FIFO)

## Event Loop

이벤트 루프는 `콜스택`과 `콜백큐`의 상태를 체크하여, 콜스택이 빈상태일때, 콜백큐의 첫번째 콜백을 콜스택으로 밀어 넣는다. 이러한 반복적인 행동을 `틱(tick)`이라 부른다.

<img src="./../images/eventloop.png" width="80%" alt="eventloop"/>

#### Reference

- [Front End Interview Handbook: JavaScript 질문](https://www.frontendinterviewhandbook.com/kr/javascript-questions)
- [https://velog.io/@thms200/Event-Loop](https://velog.io/@thms200/Event-Loop-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84)
- [JavaScript Visualized: Event Loop](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)

<div align="right">- CreatedAt 2022.12.04</div>
<div align="right">- UpdatedAt 2022.12.15</div>

---

[Back](../README.md)

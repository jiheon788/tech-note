# `this`가 자바스크립트에서 어떻게 작동하는가?

`this`의 값은 함수가 호출되는 방식에 따라 달라진다. 규칙은 다음과 같다.

1.  `new` 키워드를 사용하는 경우, 함수 내부에 잇는 `this`는 완전히 새로운 객체이다.
2.  `apply`, `call`, `bind`가 함수의 호출 및 생성에 사용되는 경우, 함수 내의 `this`는 인수로 전달된 객체이다.
3.  `obj.method()`와 같이 함수를 메서드로 호출하는 경우, `this`는 함수가 프로퍼티인 객체이다.
4.  함수가 자유함수로 호출될 경우, 위 조건에 해당 없다면 `this`는 전역 객체이다. 브라우저에서는 `window` 객체이다. 엄격모드(`use strict`)일 경우, 전역 객체 대신 `undefined`가 된다.
5.  위 규칙이 중복된다면 상위 규칙에 따라 `this`값을 설정한다.
6.  화살표 함수의 경우, 위 규칙 모두 무시하고 생성된 시점에서 주변 스코프의 `this`값을 받는다.

#### Reference

- [Front End Interview Handbook: JavaScript 질문](https://www.frontendinterviewhandbook.com/kr/javascript-questions)

<div align="right">- CreatedAt 2022.12.01</div>

---

[Back](../README.md)

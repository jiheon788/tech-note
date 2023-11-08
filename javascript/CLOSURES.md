# 클로저란?

> A closure is the combination of a function and environment within which that function was declared - MDN

클로저(Closure)는 자바스크립트의 핵심 개념 중 하나로, 함수가 자신이 선언될 당시의 렉시컬 환경(Lexical Environment)에 대한 참조를 유지하는 현상을 말합니다. 클로저는 내부 함수가 외부 함수의 스코프에 있는 변수에 접근할 수 있게 해줍니다. (외부 함수의 실행이 끝난 후에도 접근 가능)

## 클로저의 동작 원리:

1. 함수 정의: 내부 함수가 외부 함수 내부에서 정의됩니다.
2. 렉시컬 스코프: 내부 함수는 외부 함수의 변수를 참조할 수 있습니다.
3. 함수 반환: 외부 함수가 실행을 마치고 내부 함수를 반환합니다. 반환된 함수는 어딘가에 저장되거나 다른 함수에 전달됩니다.
4. 렉시컬 환경 유지: 반환된 내부 함수는 외부 함수의 렉시컬 환경에 대한 참조를 유지합니다.
5. 외부 함수 종료: 외부 함수의 실행이 종료되어도, 내부 함수에 의해 참조되는 외부 함수의 변수는 메모리에서 해제되지 않습니다.
6. 클로저 활용: 반환된 내부 함수(클로저)가 나중에 호출될 때, 외부 함수의 변수에 여전히 접근할 수 있습니다.

## 클로저의 사용 사례:

- 데이터 은닉과 캡슐화: 클로저를 사용하여 공개 인터페이스를 통해 접근할 수 있는 변수와 메서드를 정의하고, 나머지는 비공개로 유지할 수 있습니다.
- 모듈 패턴: 클로저를 사용하여 모듈 패턴을 구현할 수 있으며, 이는 전역 변수의 사용을 줄이는 데 도움이 됩니다.
- 콜백 함수에서의 상태 유지: 비동기 작업에서 클로저를 사용하여 상태를 유지할 수 있습니다. 예를 들어, AJAX 요청을 처리할 때 요청에 관한 정보를 클로저를 통해 유지할 수 있습니다.

## Sample code

```javascript
function makeCounter() {
  let count = 0;

  return function () {
    return count++; // `count` 변수는 `makeCounter`의 렉시컬 스코프에 있습니다.
  };
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
// `count` 변수는 `makeCounter` 함수 실행이 종료된 후에도 `counter` 함수에 의해 접근될 수 있습니다.
```

이 예제에서 `counter` 함수는 클로저이며, `makeCounter` 함수의 지역 변수 `count`에 접근할 수 있습니다. `makeCounter` 함수의 실행이 종료된 후에도 `count`는 메모리에 남아 있으며, `counter` 함수가 호출될 때마다 그 값이 증가합니다.

클로저는 자바스크립트의 강력한 기능으로서, 함수형 프로그래밍 패턴을 가능하게 하고, 데이터를 안전하게 은닉하는 메커니즘을 제공합니다.

#### Reference

- [https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures](https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures)

---

[Back](../README.md)

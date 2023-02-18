# `hoisting` 이란?

> hoist: 들어[끌어]올리다

호이스팅은 함수 안에 있는 선언들을 모두 해당 함수 유효 범위의 최상단에 선언하는것을 말한다. 자바스크립트 함수는 실행되기 전 함수 안에 필요한 변수값들을 모두 모아서 유효범위의 최상단에 선언한다.

```javascript
// var 선언이 호이스팅된다.
console.log(foo); // undefined
var foo = 1;
console.log(foo); // 1

// let, const는 호이스팅되지 않는다.
console.log(bar); // ReferenceError: bar is not defined
let bar = 2;
console.log(bar); // 2
```

함수 선언은 함수 몸체가 호이스팅되는 반면, 변수 선언 형태로 작성된 함수 표현식은 변수 선언만 호이스팅된다.

```javascript
// 함수선언
console.log(foo); // [Function: foo]
foo(); // foooo!
function foo() {
  console.log("fooo!");
}
console.log(foo); // [Function: foo]

// 함수 표현식
console.log(bar); // undefined
bar(); // Uncaught TypeError: bar is not a function
var bar = function () {
  console.log("barrr!");
};
console.log(bar); // [Function: bar]
```

#### Reference

- [Front End Interview Handbook: JavaScript 질문](https://www.frontendinterviewhandbook.com/kr/javascript-questions)

<div align="right">- CreatedAt 2022.12.01</div>
<div align="right">- UpdatedAt 2022.12.04</div>

---

[Back](../README.md)

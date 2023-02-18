# 분해할당 이란?

분해할당은 ES6에서 사용할 수 있는 표현식으로 객체나 배열의 값을 추출하여 다른 변수에 배치하는 방법이다.

- 배열 분해할당

```javascript
// 변수 할당.
const foo = ["one", "two", "three"];

const [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"

// 변수 교환
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

- 객체 분해할당

```javascript
// 변수 할당.
const o = { p: 42, q: true };
const { p, q } = o;

console.log(p); // 42
console.log(q); // true
```

#### Reference

- [Front End Interview Handbook: JavaScript 질문](https://www.frontendinterviewhandbook.com/kr/javascript-questions)

<div align="right">- CreatedAt 2022.12.04</div>

---

[Back](../README.md)

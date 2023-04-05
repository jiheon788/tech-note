# 불변 객체란?

불변 객체는 **한 번 객체가 생성되면, 변하지 않는 객체**를 의미 한다. 자바스크립트에는 기본형과 참조형 데이터가 있다. 기본형 데이터를 변경하면 데이터는 변하지 않는다. (불변성) 마찬가지로 참조형 데이터도 데이터 자체를 변경하고자 하면 즉, 새로운 데이터를 할당한다면 기본형 데이터와 같이 기존 데이터는 변경되지 않는다.

하지만 참조형 데이터의 객체를 복사해서 내부 프로퍼티를 변경하면 원본 객체의 프로퍼티도 변한다. (가변성)

이럴때 깊은 복사를 이용해 불변객체를 만들어 사용한다.

## 불변객체 만드는 법

### `Object.assign()`

복사 후 참조값이 다르기에 깊은 복사가 이루어진다고 볼 수 있다. 하지만 2차원 객체의 경우 깊은 복사가 이루어지지 않는다.

```javascript
// 1차원 객체
const obj = { a: 1 };
const newObj = Object.assign({}, obj);

newObj.a = 2;

console.log(obj); // { a: 1 }
console.log(obj === newObj); // false

// 2차원 객체
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const newObj = Object.assign({}, obj);

newObj.b.c = 3;

console.log(obj); // { a: 1, b: { c: 3 } }
```

### `Spread Operator`

마찬가지로 2차원 객체에서 깊은 복사가 이루어지지 않는다.

```javascript
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const newObj = { ...obj };

newObj.b.c = 3;

console.log(obj); // { a: 1, b: { c: 3 } }
console.log(obj.b.c === newObj.b.c); // true
```

### `JSON 객체 메서드`

2차원 객체에서 깊은 복사가 이루어진다. 하지만 함수를 만날경우 `undefined`로 처리한다.

```javascript
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const newObj = JSON.parse(JSON.stringify(obj));

newObj.b.c = 3;

console.log(obj); // { a: 1, b: { c: 2 } }
console.log(obj.b.c === newObj.b.c); // false

const obj = {
  a: 1,
  b: {
    c: 2,
  },
  func: function () {
    return this.a;
  },
};

const newObj = JSON.parse(JSON.stringify(obj));

console.log(newObj.func); // undefined
```

### `재귀 함수`

객체의 깊은 복사를 다른 문제 없이 하려면, 재귀 함수를 이용하는 것이 좋다.

```javascript
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let copy = {};
  for (let key in obj) {
    copy[key] = deepCopy(obj[key]);
  }
  return copy;
}

const obj = {
  a: 1,
  b: {
    c: 2,
  },
  func: function () {
    return this.a;
  },
};

const newObj = deepCopy(obj);

newObj.b.c = 3;
console.log(obj); // { a: 1, b: { c: 2 }, func: [Function: func] }
console.log(obj.b.c === newObj.b.c); // false
```

### `lodash 모듈의 cloneDeep()`

lodash 모듈의 cloneDeep() 메서드를 활용해서, 객체의 깊은 복사를 할 수 있다.

```javascript
const lodash = require("lodash");

const obj = {
  a: 1,
  b: {
    c: 2,
  },
  func: function () {
    return this.a;
  },
};

const newObj = lodash.cloneDeep(obj);

newObj.b.c = 3;
console.log(obj); // { a: 1, b: { c: 2 }, func: [Function: func] }
console.log(obj.b.c === newObj.b.c); // false
```

#### Reference

- [https://velog.io/@hazzang](https://velog.io/@hazzang/JS-%EC%8B%9C%EB%A6%AC%EC%A6%88-%EB%B6%88%EB%B3%80-%EA%B0%9D%EC%B2%B4)

---

[Back](../README.md)

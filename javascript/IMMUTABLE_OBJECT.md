# 불변 객체란?

자바스크립트에서 불변 객체(Immutable Object)는 한 번 생성된 후에는 그 상태를 변경할 수 없는 객체를 의미합니다. 즉, 객체 내부의 값이나 상태가 변경되지 않음을 보장하는 객체입니다. 불변성은 프로그래밍에서 중요한 개념으로, 특히 함수형 프로그래밍에서 강조됩니다.

## 불변 객체의 중요성

- 예측 가능성(Predictability): 객체가 변경되지 않기 때문에, 코드의 다른 부분에서 예기치 않은 변경이 일어날 걱정 없이 객체를 자신 있게 사용할 수 있습니다.
- 변경 추적(Change Detection): 불변 객체는 새로운 상태를 만들 때마다 새로운 객체를 생성하므로, 참조 비교를 통해 쉽게 변경 여부를 감지할 수 있습니다.
- 멀티스레드 환경(Thread Safety): 동시성 프로그래밍에서 불변 객체는 상태가 변경되지 않기 때문에 데이터 경쟁(race condition)이나 동시성 오류를 방지합니다.
- 함수형 프로그래밍(Functional Programming): 함수형 프로그래밍의 핵심 원리 중 하나로, 부작용(side-effects) 없이 프로그래밍할 수 있게 합니다.

## 자바스크립트에서 불변 객체 생성

자바스크립트는 기본적으로 불변 객체를 내장하고 있지 않지만, 불변성을 강제하는 라이브러리(예: Immutable.js)를 사용하거나, Object.freeze(), Object.seal() 같은 내장 메소드를 사용해서 객체의 불변성을 부분적으로 유지할 수 있습니다.

```javascript
Copy code
const obj = Object.freeze({ name: 'John' });

obj.name = 'Doe'; // 이 변경은 무시됩니다, obj는 불변 객체입니다.
console.log(obj.name); // 'John'
```

그러나 Object.freeze()는 얕은(shallow) 동결만 수행하기 때문에, 객체 내부의 다른 객체는 여전히 변경할 수 있습니다. 완벽한 불변성을 위해서는 모든 내부 객체에 대해서도 재귀적으로 동결을 적용해야 합니다.

## 불변 객체의 한계

- 성능: 불변 객체는 상태가 바뀔 때마다 새로운 객체를 생성해야 하므로, 메모리 사용량이 증가할 수 있으며, 가비지 컬렉션에 대한 부담이 커질 수 있습니다.
- 심층 불변성(Deep Immutability): 자바스크립트에서 심층 불변 객체를 만드는 것은 기본적인 방법으로는 까다롭습니다. 따라서 완전한 불변성을 구현하려면 추가적인 라이브러리나 복잡한 로직이 필요할 수 있습니다.

## 얕은 복사와 깊은 복사

얕은 복사(Shallow Copy)와 깊은 복사(Deep Copy)는 객체를 복사할 때 사용되는 두 가지 주요 방법입니다. 이들의 차이는 복사의 깊이와 관련이 있습니다.

- 얕은 복사 : 바로 아래 단계의 값만 복사함.
- 깊은 복사 : 내부의 모든 값들을 하나하나 찾아서 전부 복사함.

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

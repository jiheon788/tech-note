# ESM vs CJS

## **CommonJS (CJS) `.cjs`**

- Node.js 서버를 위해 만들어진 모듈 시스템
- 동기적 로드: 모듈이 필요한 시점에 즉시 로드되고 해당 모듈의 코드가 실행될 때까지 다음 진행이 차단 (브라우저 환경에서 차단은 성능 혹은 동작에 문제가 발생)
- 같은 모듈이 여러번 로드되어도 한번만 실행된다. 이는 무한 루프를 방지하고 성능을 향상
- Tree-shaking이 어려움
- CJS에서 ESM를 `require` 하는 것 불가능: CJS는 Top-level Await을 지원하지 않기 때문에

```jsx
// util.js
export const sum = (x, y) => x + y;

// main.js
import { sum } from "./util.js";
```

## **ES Modules (ESM) `.mjs`**

- ES6 이후에 ES Modules이 등장하고 표준으로 등록
- 비동기적 로드: Top-Level Await를 지원하기 때문에 가능하다.
- 정적 분석
  - **빌드 타임에 모듈 의존성을 파악할 수 있어** 불필요한 모듈을 불러오지 않고 최적화할 수 있다.
  - Tree-shaking을 쉽게 할 수 있다.
- ESM에서 CJS를 `import`하는 것 가능

```jsx
// util.js
module.exports.sum = (x, y) => x + y;

// main.js
const { sum } = require("./util.js");
```

## CJS에서 트리쉐이킹이 어려운 이유?

CJS는 기본적으로 require/module.exports를 동적으로 하는 것에 제약이 없다. 따라서 CJS는 빌드 타임에 정적 분석을 적용하기 어렵고, 런타임에서만 모듈 관계를 파악할 수 있다.

```jsx
const utilName = /* 동적인 값 */
const util = require(`./utils/${utilName}`);

function foo() {
  if (/* 동적인 조건 */) {
    module.exports = /* ... */;
  }
}
foo();
```

반면에 ESM은 정적인 구조로 모듈끼리 의존하도록 강제된다. import path에 동적인 값을 사용할 수 없고, export는 최상위 스코프에서만 사용할 수 있다. 따라서 ESM은 빌드 단계에서 정적 분석을 통해 모듈 간의 의존 관계를 파악할 수 있고, Tree-shaking을 쉽게 할 수 있다.

```jsx
import util from `./utils/${utilName}.js`; // 불가능

import { add } from "./utils/math.js"; // 가능

function foo() {
  export const value = "foo"; // 불가능
}

export const value = "foo"; // 가능
```

## Top-Level Await 이란?

Top-Level Await는 ES2022부터 도입된 **모듈의 최상위 레벨에서 await를 사용**할 수 있는 기능이다. Top-level await를 사용한 모듈이 하나의 거대한 async 함수처럼 동작한다

```jsx
// A.mjs
let todoList;

const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
todoList = await response.json();

export { todoList };

//-----------------------------------
// B.mjs
import { todoList } from "./A.mjs";

console.log(todoList); // {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
```

위 코드에서 'Top-level await를 사용한 A 모듈'을 import 하는 B 모듈은, A 모듈의 await가 모두 실행되기 전(비동기 처리가 완료되기 전까지) 동작을 중지하게 된다. 따라서 B 모듈에서는 todoList로 바로 접근을 해도, 비동기 처리가 완료됐다는 것을 보장하기 때문에 원하던 결과를 얻을 수 있게 된다.

#### [Top-Level Await Usecase](https://github.com/tc39/proposal-top-level-await#use-cases)

- Dynamic dependency pathing
- Resource initialization
- Dependency fallbacks
- WebAssembly Modules

#### Reference

- https://fe-developers.kakaoent.com/2022/220728-es2022/
- https://toss.tech/article/commonjs-esm-exports-field

---

[Back](../README.md)

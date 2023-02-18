# Stack

![stack](../images/stack.jpg)

스택은 LIFO 구조이다. Array.prototype 형태로 스택과 비슷한 메소드들이 구현되어 있어 쉽게 응용가능하다.

- e.g. 접시쌓기

```javascript
const stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

stack[stack.length - 1]; // peek 3

stack.pop(); // 3
stack.pop(); // 2
stack.pop(); // 1
```

#### Reference

- [https://geniee.tistory.com/20](https://geniee.tistory.com/20)
- [https://github.com/trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms)

<div align="right">- CreatedAt 2022.12.04</div>

---

[Back](../README.md)

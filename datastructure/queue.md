# Queue

![Queue](../images/queue.jpg)

큐는 추상데이터 타입이자 컬렉션이다. 큐 내부의 요소는 순서를 유지하며 큐의 가장 뒷 부분에 삽입하는 enqueue, 첫번째 요소를 제거하는 dequeue 작업을 수행한다. 큐는 FIFO 구조를 가진다. Array.prototype으로 구현이 가능하다. 큐는 BFS(Breadh-First Search)를 구현할 때 자주 이용된다.

- e.g. 은행 줄서기

#### ⚠ Bad

- `shift()` 함수는 선형 시간이 걸리므로 큐에서 기대하는 로직과 다름

```javascript
const queue = [];

queue.push(1); // enqueue 1
queue.push(2); // enqueue 2
queue.push(3); // enqueue 3

queue.shift(); // dequeue 1
queue.shift(); // dequeue 2
queue.shift(); // dequeue 3
```

#### ✔ Good

```javascript
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

// usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
```

#### Reference

- [https://geniee.tistory.com/20](https://geniee.tistory.com/20)
- [https://github.com/trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms)

---

[Back](../README.md)

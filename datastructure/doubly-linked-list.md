# Doubly Linked List

![linkedlist](../images/doubly-linked-list.jpg)

이중 연결 리스트(Double Linked List)는 `prev`만 추가해서 양방향으로 참조하도록 구현한다.

```javascript
// Node 클래스 정의
class Node {
  constructor(value) {
    this.value = value; // 노드 값
    this.next = null; // 다음 노드 포인터
    this.prev = null; // 이전 노드 포인터
  }
}

// DoublyLinkedList 클래스 정의
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    return newNode; // 마지막 노드를 반환
  }

  insert(afterNode, value) {
    const newNode = new Node(value);
    if (afterNode === null) {
      // 리스트가 비어있거나 처음에 삽입
      newNode.next = this.head;
      if (this.head) this.head.prev = newNode;
      this.head = newNode;
      if (!this.tail) this.tail = newNode;
    } else {
      newNode.next = afterNode.next;
      newNode.prev = afterNode;
      if (afterNode.next) afterNode.next.prev = newNode;
      afterNode.next = newNode;
      if (afterNode === this.tail) this.tail = newNode;
    }
    return newNode; // 삽입된 노드를 반환
  }

  remove(node) {
    if (!node) return;
    if (node === this.head) {
      this.head = node.next;
      if (this.head) this.head.prev = null;
    } else if (node === this.tail) {
      this.tail = node.prev;
      if (this.tail) this.tail.next = null;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
  }

  print() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result.join("");
  }
}
```

### 시간 복잡도

| Access | Search | Insertion | Deletion |
| :----: | :----: | :-------: | :------: |
|  O(n)  |  O(n)  |   O(1)    |   O(n)   |

#### Reference

- [https://geniee.tistory.com/20](https://geniee.tistory.com/20)
- [https://github.com/trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms)

<div align="right">- CreatedAt 2022.12.04</div>

---

[Back](../README.md)

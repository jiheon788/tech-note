# Doubly Linked List

![linkedlist](../images/doubly-linked-list.jpg)

이중 연결 리스트(Double Linked List)는 `prev`만 추가해서 양방향으로 참조하도록 구현한다.

```javascript
function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

let head = new Node(0);
let node1 = new Node(1);
let node2 = new Node(2);

head.next = node1;
node1.next = node2;
node1.prev = head;
node2.prev = node1;
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

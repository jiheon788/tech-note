# Linked List

![linkedlist](../images/linked-list.jpg)

링크드 리스트는 데이터 요소의 선형 집합이다. 자바스크립트에서는 객체를 참조하는 방식으로 구현 가능하다.

```JavaScript
function Node(val) {
  this.val = val;
  this.next = null;
}

// 노드 생성
let head = new Node(0);
let node1 = new Node(1);
let node2 = new Node(2);

// 노드 연결
head.next = node1;
node1.next = node2;
```

### 시간 복잡도

| 접근 | 탐색 | 삽입 | 삭제 |
| :--: | :--: | :--: | :--: |
| O(n) | O(n) | O(1) | O(n) |

#### Reference

- [https://geniee.tistory.com/20](https://geniee.tistory.com/20)
- [https://github.com/trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms)

<div align="right">- CreatedAt 2022.12.04</div>

---
[Back](./README.md)

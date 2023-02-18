# Tree

![tree](../images/tree.jpg)

- 배열로 만들기: index 0을 비워둔다. root를 1부터 시작하게 해서, 왼쪽 자식 노드는 `index * 2`, 오른쪽 자식 노드는 `index * 2 + 1`로 참조하기 쉽게 한다.

- 연결리스트: left, right를 이용하여 자식 노드를 참조하도록 구현한다.

```javascript
// 배열을 이용한 방법
/*        5
 *     /    \
 *    3      8
 *   / \   /  \
 *  1   4  7   9
 */
const tree = [null, 5, 3, 8, 1, 4, 7, 9];

// 연결리스트 이용한 방법
function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

let root = new Node(5);
let left = new Node(3);
let right = new Node(8);
root.left = left;
root.right = right;
```

## Full Binary Tree (정 이진 트리)

- 모든 노드가 2개 또는 0개의 자식을 갖는 이진 트리
- 자식이 하나인 노드가 존재하면 안됨

## Complete Binary Tree (완전 이진 트리)

- 마지막 레벨 제외 모든 노드가 채워짐
- 마지막 레벨은 왼쪽에서 오른쪽 방향으로는 다 채워짐

## Perfect Binary Tree (포화 이진 트리)

- 모든 레벨이 빠짐없이 채워짐

## Traversal (순회)

```javascript
function traversal(node) {
  if (node === null) return;

  // console.log('preorder', node.val);
  traversal(node.left);
  // console.log('inorder', node.val);
  traversal(node.right);
  // console.log('postorder', node.val);
}
```

## Binary Search Tree

![binary-search-tree](../images/binary-search-tree.jpg)

## AVL

![binary-search-tree](../images/avl.gif)

#### Reference

- [https://geniee.tistory.com/20](https://geniee.tistory.com/20)
- [https://github.com/trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms)

<div align="right">- CreatedAt 2022.12.04</div>

---

[Back](../README.md)

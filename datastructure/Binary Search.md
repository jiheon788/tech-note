# Binary Search

- 정렬 되어있는 요소들을 반씩 제외하며 찾는 알고리즘
- O(log n)의 시간복잡도
- 반드시 정렬되어 있어야한다
- 배열, 이진트리로 구현 가능

## Binary Search Array

```javascript
const binarySearch = (array, targetValue) => {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left < right) {
    if (array[mid] === targetValue) {
      return mid;
    }

    if (array[mid] < targetValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return -1;
};

// usage
const arr = [1, 2, 5, 124, 300, 1004];
binarySearch(arr, 1); // 0
binarySearch(arr, 5); // 2
```

## Binary Search Tree

![binary-search-tree](../images/binary-search-tree.jpg)

- 이진 탐색을 위한 이진트리
- 왼쪽 서브 트리는 루트보다 작은 값, 오른쪽은 루트보다 큰 값
- 최악의 경우 한쪽으로 편향된 트리가 될 수 있다 (순차 탐색과 동일한 시간복잡도)
- 이를 해결하기 위해 AVL트리, 레드-블랙 트리 자료구조 이용

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value < value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      } else {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      }
    }
  }

  has(value) {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }

      if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    return false;
  }
}

// usage
const tree = new BinarySearchTree();

tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(8);
tree.insert(2);

tree.has(7); // true
tree.has(1); // false
```

---

[Back](../README.md)

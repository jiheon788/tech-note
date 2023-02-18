# 힙 정렬(Heap Sort)

## 특징

- 힙 정렬이란 데이터들 이진 트리로 구성하여 정렬하는 방법이다.

  - 내림차순: 최대 힙 트리 - 큰 값이 위로
  - 오름차순: 최소 힙 트리 - 작은 값이 위로

- Heap: 힙은 최댓값 및 최솟값을 찾아내는 연산을 빠르게 하기 위해 고안된 완전이진트리를 기본으로 하는 자료구조이다.

<div>
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Sorting_heapsort_anim.gif" width="45%" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Heapsort-example.gif" width="45%" />
</div>

## 로직

1. 최대 힙을 구성한다.
2. 현재 힙 루트는 가장 큰 값이 존재한다. 루트의 값을 마지막 요소와 바꾼 후, 힙의 사이즈를 하나 줄인다.
3. 루트 노드를 마지막 노드로 대체한다. 그리고 다시 최대 힙 구성.
4. 힙의 사이즈가 1보다 크면 위의 과정을 반복한다.

## 시간복잡도

| Name          |   Best   | Average  |  Worst   | Memory | Stable | Comments |
| ------------- | :------: | :------: | :------: | :----: | :----: | :------- |
| **Heap sort** | n log(n) | n log(n) | n log(n) |   1    |   No   |          |

## 소스 코드

```javascript
class Heap {
  #heap;
  #type = "min"; // 최대, 최소 구분
  constructor(type) {
    this.#heap = [];
    this.#type = type;
  }

  // 부모 정점
  parentIndex = (index) => Math.floor((index - 1) / 2);
  // 왼쪽 자식
  leftChildIndex = (index) => 2 * index + 1;
  // 오른쪽 자식
  rightChildIndex = (index) => 2 * index + 2;

  // 위치 변경
  swap = (a, b) => {
    let temp = this.#heap[a];
    this.#heap[a] = this.#heap[b];
    this.#heap[b] = temp;
  };

  // 힙구조로 만들기
  insert = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      this.#heap.push(arr[i]);
      var index = this.#heap.length - 1;
      var parent = this.parentIndex(index);

      // 최대힙 > 큰 값이 root
      if (this.#type === "max") {
        while (this.#heap[parent] < this.#heap[index]) {
          this.swap(parent, index);
          index = this.parentIndex(index);
          parent = this.parentIndex(index);
        }
      }
      // 최소힙 > 작은 값이 root 또는 기본값
      else {
        while (this.#heap[parent] > this.#heap[index]) {
          this.swap(parent, index);
          index = this.parentIndex(index);
          parent = this.parentIndex(index);
        }
      }
    }
  };

  delete = () => {
    // 가장 마지막 값을 처음으로 이동
    var item = this.#heap.shift();
    this.#heap.unshift(this.#heap.pop());

    // 다시 힙 구조로 만들기 Start
    var index = 0;
    var leftChild = this.leftChildIndex(index);
    var rightChild = this.rightChildIndex(index);

    // 최대힙 > 큰 값이 root
    if (this.#type === "max") {
      while (
        this.#heap[leftChild] > this.#heap[index] ||
        this.#heap[rightChild] > this.#heap[index]
      ) {
        var min = leftChild;
        if (this.#heap[rightChild] > this.#heap[min]) {
          min = rightChild;
        }
        this.swap(min, index);
        index = min;
        leftChild = this.leftChildIndex(min);
        rightChild = this.rightChildIndex(min);
      }
    }
    // 최소힙 > 작은 값이 root
    else {
      while (
        this.#heap[leftChild] < this.#heap[index] ||
        this.#heap[rightChild] < this.#heap[index]
      ) {
        var min = leftChild;
        if (this.#heap[rightChild] < this.#heap[min]) {
          min = rightChild;
        }
        this.swap(min, index);
        index = min;
        leftChild = this.leftChildIndex(min);
        rightChild = this.rightChildIndex(min);
      }
    }

    return item;
  };
}

// 힙 정렬
const heapSort = (arr, type) => {
  var result = [];
  var heap = new Heap(type);
  heap.insert(arr);
  for (let i = 0; i < arr.length; i++) {
    result.push(heap.delete());
  }
  return result;
};

// let arr = [2, 1, 8, 4, 6, 7, 3, 0, 9, 5];
// console.log(heapSort(arr, 'min'));
// console.log(heapSort(arr, 'max'));
```

```javascript
const heapSort = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr = heapify(arr, i);

    if (arr[0] > arr[i]) {
      let temp = arr[i];
      arr[i] = arr[0];
      arr[0] = temp;
    }
  }

  return arr;
};

const heapify = (arr, lastIndex) => {
  let index = parseInt(lastIndex / 2) - 1;

  while (index >= 0) {
    const left = arr[index * 2 + 1];
    const right = arr[index * 2 + 2];
    if (left >= right && arr[index] < left) {
      temp = arr[index];
      arr[index * 2 + 1] = temp;
      arr[index] = left;
    } else if (right > left && arr[index] < right) {
      temp = arr[index];
      arr[index * 2 + 2] = temp;
      arr[index] = right;
    }
    index--;
  }

  return arr;
};
```

#### Reference

- [wikipedia](https://ko.wikipedia.org/wiki/%ED%9E%99_%EC%A0%95%EB%A0%AC)
- [https://developerjun2.tistory.com/157](https://developerjun2.tistory.com/157)
- [https://taesung1993.tistory.com/26](https://taesung1993.tistory.com/26)

<div align="right">- CreatedAt 2023.01.01</div>

---

[Back](../README.md)

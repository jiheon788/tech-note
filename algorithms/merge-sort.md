# 병합 정렬(Merge Sort)

## 특징

- 전체 데이터를 하나의 단위로 분할한 후 분할한 것들을 다시 병합하는 정렬 방식
- `분할 정복 알고리즘`에 속함
- `재귀 함수`를 사용하여 최종적으로는 배열의 길이가 1이 될 때까지 쪼개진 다음 하나씩 합쳐가면서 정렬을 시켜주는 원리
- 어떠한 경우에도 `좋은 성능을 보장`한다.
- 중복된 데이터의 순서가 바뀌지 않는 `stable`한 정렬이다.
- 크기가 큰 레코드를 정렬한 경우, LinkedList를 사용한다면 병합 정렬은 퀵 정렬을 포함한 다른 어떤 정렬 방법보다 효율적이다.
- 정렬하는데 `추가 메모리가 필요함` (in-place 알고리즘이 아님)
- 병합 정렬은 두가지 함수로 이루어 진다.

  - `function merge(left, right)`: 이미 정렬된 배열 두가지를 받아서 하나로 합치는 함수
  - `function mergeSort(arr)`: 배열을 반으로 쪼개서 merge 함수에게 넘기는 함수

<div>
<img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif" width="30%" />
<img src="../images/mergesort.png" width="55%" />
</div>

## 로직

1. 리스트를 가장 작은 단위로 나눈다
2. 각 요소와 인접한 리스트를 비교한다.
3. 두개의 인접한 리스트를 정렬하고 병합한다.
4. 마지막으로 모든 요소들은 정렬되고 병합한다.

## 시간복잡도

| Name           |   Best   | Average  |  Worst   | Memory | Stable | Comments |
| -------------- | :------: | :------: | :------: | :----: | :----: | :------- |
| **Merge sort** | n log(n) | n log(n) | n log(n) |   n    |  Yes   |          |

## 소스 코드

```JavaScript
const merge = (left, right) => {
  const result = [];
  while (left.length !== 0 && right.length !== 0) {
    left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift());
  }

  return [...result, ...left, ...right];
}

const mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  const pivot = Math.floor(arr.length / 2);
  const left = arr.slice(0, pivot);
  const right = arr.slice(pivot);

  return merge(mergeSort(left), mergeSort(right));
}

```

#### Reference

- [wikipedia](https://ko.wikipedia.org/wiki/%ED%95%A9%EB%B3%91_%EC%A0%95%EB%A0%AC)
- [https://jun-choi-4928.medium.com](https://jun-choi-4928.medium.com/javascript%EB%A1%9C-merge-sort-%EB%B3%91%ED%95%A9%EC%A0%95%EB%A0%AC-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-c13c3eee6570)

<div align="right">- CreatedAt 2023.01.01</div>

---

[Back](../README.md)

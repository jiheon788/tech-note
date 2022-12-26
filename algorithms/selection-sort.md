# 선택 정렬(Selection Sort)

## 특징

- 요소들이 들어갈 위치는 이미 정해져 있다.
- 구현 난이도가 낮고, 단순한 정렬 알고리즘이다.
- `제자리 정렬(In-place sort)`이기 때문에 추가적인 메모리 필요하지 않다.
- 메모리 상황이 극도로 제한되어있다면 효율적
- 정렬이 이미 되어있는 경우에도 매번 정해진 자리에 올 수 있는 최소값을 찾아야하기 때문에 성능이 좋지 않다.
- 선택 정렬은 데이터가 중복된 경우 위치가 바뀔 수 있기 때문에 `Unstable`한 정렬이다.

<img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Selection_sort_animation.gif" width="30%" />
<img src="../images/selectionsort.gif" width="65%" />

## 로직

1. 배열 중에 최솟값이 위치한 index를 찾는다.
2. 최솟값이 위치한 index의 값과 맨 처음 index값을 swap한다.
3. 맨처음 index를 제외한 나머지 요소끼리 1, 2 단계 수행
4. 하나의 요소가 남을 때까지 위 1 ~ 3 과정 반복

## 시간복잡도

| Name               |     Best      |    Average    |     Worst     | Memory | Stable | Comments |
| ------------------ | :-----------: | :-----------: | :-----------: | :----: | :----: | :------- |
| **Selection sort** | n<sup>2</sup> | n<sup>2</sup> | n<sup>2</sup> |   1    |   No   |          |

## 소스 코드

```JavaScript
const selectionSort  = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }

  return arr;
}
```

#### Reference

- [https://webruden.tistory.com/476](https://webruden.tistory.com/476)
- [https://im-developer.tistory.com/133](https://im-developer.tistory.com/133)

<div align="right">- CreatedAt 2022.12.26</div>

---

[Back](../README.md)

# 퀵 정렬(Quick Sort)

## 특징

- 퀵 정렬은 pivot(중심축) 을 정하고, 중심축 보다 작은 값들은 왼쪽으로 큰 값들은 오른쪽으로 보내는 것이다.
- 이렇게 pivot을 정해서 왼쪽 오른쪽으로 나누고 다시금 왼쪽 오른쪽에 대해 재귀적으로 pivot을 정해서 왼쪽 오른쪽을 나누고, 이 과정을 반복하면 결국 정렬이 완성 된다.
- 추가적인 공간을 필요로 하지 않는 in-place 알고리즘 -> 메모리 절약
- unstable한 정렬 방법(중복 값의 위치가 바뀔 수 있기 때문)

<div>
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif" width="35%" />
  <img src="../images/quicksort.gif" width="55%" />
</div>

## 로직

1. 피벗을 설정한다.
2. 피벗보다 큰 수는 오른쪽 작은 수는 왼쪽에 배치한다.
3. 피벗을 기준으로 두개의 배열로 나눈다.
4. 각각의 배열을 1번부터 재귀적으로 반복한다.

## 시간복잡도

| Name           |   Best   | Average  |     Worst     | Memory | Stable | Comments |
| -------------- | :------: | :------: | :-----------: | :----: | :----: | :------- |
| **Quick sort** | n log(n) | n log(n) | n<sup>2</sup> | log(n) |   No   |          |

## 소스 코드

```JavaScript
const divide = (arr, left, right, pivot) => {
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  return left;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  const pivot = arr[mid];
  const partition = divide(arr, left, right, pivot);
  quickSort(arr, left, partition - 1);
  quickSort(arr, partition, right);

  return arr;
}
```

## 퀵 정렬과 병합 정렬

### 공통점

- Divide and Conquer(분할-정복) 알고리즘
- 점진적으로 탐색할 배열의 크기를 쪼개서 재귀함수에 넘겨준다.

### 차이점

- 병합정렬은 배열을 분할하는 방식이 반으로 쪼개는 것
- 퀵 정렬은 크게 두 가지 분할 방법이 있다.

- 퀵 정렬은 병합정렬과 달리 다른 메모리 공간을 사용하지 않는다. (오직 재귀 콜 스택을 위한 메모리만 사용됨, 그에 반면 병합정렬은 매 번 새로운 배열을 만들어 내므로 메모리 사용량이 더 큼)

- 병합정렬은 stable 하지만, 퀵 정렬은 unstable 하다.

#### Reference

- [wikipedia](https://ko.wikipedia.org/wiki/%ED%80%B5_%EC%A0%95%EB%A0%AC)
- [https://nyang-in.tistory.com/222](https://nyang-in.tistory.com/222)
- [https://velog.io/@devjade](https://velog.io/@devjade/JavaScript%EB%A1%9C-%ED%80%B5%EC%A0%95%EB%A0%ACquick-sort%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)

<div align="right">- CreatedAt 2022.12.28</div>

---

[Back](../README.md)

# 삽입 정렬(Insertion Sort)

## 특징

- 삽입 정렬은 자료 배열의 모든 요소를 앞에서부터 차례대로 이미 정렬된 배열 부분과 비교하여, 자신의 위치를 찾아 삽입함으로써 정렬을 완성하는 알고리즘이다.
- 선택정렬, 버블정렬은 이중포문으로 원소들을 몽땅 검사하면서 위치를 바꾸는 정렬이었지만, 삽입정렬은 조건을 걸어 필요할 때만 위치를 바꾸게 된다.
- 비교와 교환을 통해 정렬하는 알고리즘이므로 다른 메모리 공간을 필요로 하지 않기에 제자리 정렬입니다.(in-place sorting)
- 배열이 길어질수록 효율이 떨어진다. 다만, 구현이 간단하다는 장점이 있다.
- 정렬하고자 하는 배열 안에서 교환하는 방식이므로, 다른 메모리 공간을 필요로 하지 않는다.

<div>
<img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Insertion_sort.gif" width="30%" />
<img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif" width="55%" />
</div>

## 로직

1. 정렬은 2번째 위치(index)의 값을 temp에 저장한다
2. temp와 이전에 있는 원소들과 비교하여 자리를 바꾸며 삽입해 나간다.
3. 1번으로 돌아가서 다음 위치(index)의 값을 temp에 저장하고 이 과정을 반복한다.

## 시간복잡도

| Name               | Best |    Average    |     Worst     | Memory | Stable | Comments |
| ------------------ | :--: | :-----------: | :-----------: | :----: | :----: | :------- |
| **Insertion sort** |  n   | n<sup>2</sup> | n<sup>2</sup> |   1    |  Yes   |          |

## 소스 코드

```javascript
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let index = i;

    while (index > 0 && temp < arr[index - 1]) {
      arr[index] = arr[index - 1];
      index--;
    }
    arr[index] = temp;
  }
  console.log(arr);
};
```

#### Reference

- [wikipedia](https://ko.wikipedia.org/wiki/%EC%82%BD%EC%9E%85_%EC%A0%95%EB%A0%AC)
- [https://angerscroll.tistory.com/12](https://angerscroll.tistory.com/12)

<div align="right">- CreatedAt 2023.01.01</div>

---

[Back](../README.md)

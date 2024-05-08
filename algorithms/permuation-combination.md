# Permuation(순열)과 Combination(조합)

> 순열(Permutation)과 조합(Combination)은 집합이나 목록에서 원소를 선택하는 방법을 다루는 개념으로, 수학적인 조합론에서 중요한 위치를 차지합니다. 두 개념의 기본 차이는 원소를 선택할 때 **순서의 중요성**에 있습니다.

## Permutation

순열은 원소들을 '순서 있게' 배열하는 것을 말합니다. 순서가 중요하기 때문에 원소들을 선택하는 방법이 각기 다르게 취급됩니다. 예를 들어, {1, 2}와 {2, 1}은 서로 다른 순열로 간주됩니다.

- 순열의 시간복잡도는 O(n!)

```javascript
function permutations(arr, n) {
  // 1개만 뽑는다면 그대로 순열을 반환한다. 탈출 조건으로도 사용된다.
  if (n === 1) return arr.map((v) => [v]);
  let result = [];

  // 요소를 순환한다
  arr.forEach((fixed, idx, arr) => {
    // 현재 index를 제외한 요소를 추출한다.
    // index번째는 선택된 요소
    const rest = arr.filter((_, index) => index !== idx);
    // 선택된 요소를 제외하고 재귀 호출한다.
    const perms = permutations(rest, n - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 순열을 합쳐준다.
    const combine = perms.map((v) => [fixed, ...v]);
    // 결과 값을 추가한다.
    result.push(...combine);
  });

  // 결과 반환
  return result;
}
```

## Combination

조합은 원소들을 '순서 없이' 그룹화하는 것을 말합니다. 순서를 고려하지 않기 때문에 {1, 2}와 {2, 1}은 동일한 조합으로 간주됩니다. 조합은 특정한 크기의 부분집합을 모두 찾아내는 것에 중점을 둡니다.

- 조합의 시간복잡도는 O(2n)

```javascript
function combinations(arr, n) {
  // 1개만 뽑는다면 그대로 조합을 반환한다. 탈출 조건으로도 사용된다.
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  // 요소를 순환한다
  arr.forEach((fixed, idx, arr) => {
    // 현재 index 이후 요소를 추출한다.
    // index번째는 선택된 요소
    const rest = arr.slice(idx + 1);
    // 선택된 요소 이전 요소들을 제외하고 재귀 호출한다.
    const combis = combinations(rest, n - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 조합을 합쳐준다.
    const combine = combis.map((v) => [fixed, ...v]);
    // 결과 값을 추가한다.
    result.push(...combine);
  });

  // 결과 반화
  return result;
}
```

#### Reference

- [https://recipesds.tistory.com/entry/%EC%B4%88%EA%B0%84%EB%8B%A8-Permuation%EC%88%9C%EC%97%B4%EA%B3%BC-Combination%EC%A1%B0%ED%95%A9](https://recipesds.tistory.com/entry/%EC%B4%88%EA%B0%84%EB%8B%A8-Permuation%EC%88%9C%EC%97%B4%EA%B3%BC-Combination%EC%A1%B0%ED%95%A9)
- [https://velog.io/@proshy/JS%EC%88%9C%EC%97%B4%EC%A1%B0%ED%95%A9%EC%A4%91%EB%B3%B5%EC%88%9C%EC%97%B4-%EA%B5%AC%ED%95%98%EA%B8%B0](https://velog.io/@proshy/JS%EC%88%9C%EC%97%B4%EC%A1%B0%ED%95%A9%EC%A4%91%EB%B3%B5%EC%88%9C%EC%97%B4-%EA%B5%AC%ED%95%98%EA%B8%B0)

<div align="right">- CreatedAt 2022.12.26</div>

---

[Back](../README.md)

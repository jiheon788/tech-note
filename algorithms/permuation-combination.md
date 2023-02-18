# Permuation(순열)과 Combination(조합)

> Permutaion은 Combination에 r개 순서를 만들어주는 과정이고, Combination은 Permutation에서 순서를 없애주는, 즉 순서를 무시하는, 과정입니다.

## Permutation

- 순서를 고려하여 늘어놓는 방법(중복o)
- 9개 숫자를 가지고, 3자리의 숫자를 만드는 방법은 ?
  $$9 * 8 * 7 = 9! / 6! = 9P3$$

- a,b,c,d 4개의 문자로 3글자의 단어 만드는 방법
  $$4P3 = 4 * 3 * 2 = 24$$

```javascript
// 순열
const getPermutation = (arr, selectNum) => {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = getPermutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });

  return result;
};
```

## Combination

- 순서를 고려하지 않고 뽑는 방법(중복x)
- a,b,c,d 4개의 문자로 3글자의 단어 만드는 방법
  $$4P3 / 3! = 4 * 3 * 2  / 3 * 2 = 24 / 6 = 4$$

```javascript
// 조합
const getCombination = (arr, selectNum) => {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = getCombination(restArr, selectNum - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });

  return result;
};
```

#### Reference

- [https://recipesds.tistory.com/entry/%EC%B4%88%EA%B0%84%EB%8B%A8-Permuation%EC%88%9C%EC%97%B4%EA%B3%BC-Combination%EC%A1%B0%ED%95%A9](https://recipesds.tistory.com/entry/%EC%B4%88%EA%B0%84%EB%8B%A8-Permuation%EC%88%9C%EC%97%B4%EA%B3%BC-Combination%EC%A1%B0%ED%95%A9)
- [https://velog.io/@proshy/JS%EC%88%9C%EC%97%B4%EC%A1%B0%ED%95%A9%EC%A4%91%EB%B3%B5%EC%88%9C%EC%97%B4-%EA%B5%AC%ED%95%98%EA%B8%B0](https://velog.io/@proshy/JS%EC%88%9C%EC%97%B4%EC%A1%B0%ED%95%A9%EC%A4%91%EB%B3%B5%EC%88%9C%EC%97%B4-%EA%B5%AC%ED%95%98%EA%B8%B0)

<div align="right">- CreatedAt 2022.12.26</div>

---

[Back](../README.md)

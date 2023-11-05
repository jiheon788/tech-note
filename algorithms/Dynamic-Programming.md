# Dynamic Programming

Dynamic Programming (DP)은 복잡한 문제를 해결하기 위한 알고리즘 설계 기법 중 하나입니다. 이 기법은 큰 문제를 작은 하위 문제로 나누고, 각 하위 문제의 해결책을 저장하여 (캐싱하여) 재사용함으로써 전체 문제를 효율적으로 해결합니다. 이 방법은 주로 최적화 문제에 사용되며, 각 하위 문제는 한 번만 풀리고 그 결과는 필요할 때마다 재사용됩니다.

Dynamic Programming의 핵심 아이디어는 다음 두 가지입니다:

1. Overlapping Subproblems (중복되는 하위 문제): 문제가 동일한 하위 문제를 반복해서 해결해야 할 때 사용됩니다.
2. Optimal Substructure (최적 부분 구조): 문제의 최적 해결책이 그 하위 문제의 최적 해결책으로부터 구성될 수 있을 때 사용됩니다.

## 예시: 피보나치 수열

피보나치 수열은 Dynamic Programming을 설명하는 데 자주 사용되는 예시입니다. 피보나치 수열의 정의는 다음과 같습니다:

$$
F(0) = 0, F(1) = 1
$$

$$
F(n) = F(n-1) + F(n-2) for n >= 2
$$

일반적인 재귀적 접근 방식으로 피보나치 수를 계산하면 많은 중복 계산이 발생합니다. 예를 들어, F(5)를 계산하기 위해 F(4)와 F(3)을 계산해야 하고, F(4)를 계산하기 위해서는 다시 F(3)과 F(2)를 계산해야 합니다. 이렇게 F(3)의 계산이 중복되는 것을 볼 수 있습니다.

Dynamic Programming을 사용하면, 한 번 계산한 값을 저장해 두었다가 필요할 때 다시 계산하지 않고 재사용할 수 있습니다. 이를 "메모이제이션"이라고 합니다.

자바스크립트로 피보나치 수열을 계산하는 Dynamic Programming 예시 코드는 다음과 같습니다:

```javascript
function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n]; // 이미 계산된 값이면 반환
  if (n <= 2) return 1; // 기본 경우

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo); // 하위 문제의 결과를 메모
  return memo[n]; // 계산된 결과 반환
}

console.log(fibonacci(50)); // 큰 수도 빠르게 계산
```

위 코드에서 memo 객체는 이미 계산된 피보나치 수를 저장하는데 사용됩니다. 이 방식으로, 각 피보나치 수는 한 번만 계산되며, 이후에는 저장된 값을 재사용하여 효율적으로 전체 수열을 계산할 수 있습니다.

#### Reference

- [www.google.com](www.google.com)

---

[Back](../README.md)

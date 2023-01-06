# 유클리드 호제법(Euclidean Algorithm)

## 최대공약수 GCD(Greatest Common Divisor)

- 최대공약수는 두 자연수의 공통된 약수 중 가장 큰 수를 의미
- 72와 30의 최대 공약수는 6이다.

## 최소 공배수 LCM(Least Common Multiple)

- 최소공배수는 두 자연수의 공통된 배수 중 가장 작은 수를 의미
- ex) 72와 30의 최소 공배수는 360이다.

$$최소 공배수 = 두 자연수의 곱 / 최대 공약수$$

## 유클리드 호제법(Euclidean Algorithm)

> 호제법이란? 두 수가 서로 상대방 수를 나누어서 결국 원하는 수를 얻는 방법

- 2개의 자연수를 입력 받아 최대 공약수를 구하기 위해 2부터 두 자연수 중 작은 자연수까지 모두 나누어보면서 가장 큰 공약수를 구할 수 있다.
- 하지만, 이 방법으로 문제를 풀면 시간 복잡도는 O(N)이 된다.
- `유클리드 호제법`은 최대공약수를 단순하면서도 빠르게 구할 수 있는 알고리즘이다.
- 시간 복잡도를 `O(logN)`으로 줄일 수 있다.

- (a>b) 2개의 자연수 a, b에 대해서 a와 b의 최대공약수는 b와 r의 최대 공약수와 같다는 성질을 이용한다.

1. a % b = r
2. b % r = r0
3. r % r0 = r1
4. r0 % r1 = r2
5. 나머지가 0이 될때 까지 반복

- 나머지가 0이 되었을 때 나누는 수가 a, b의 최대 공약수(GCD) 이다.

## 소스코드

```javascript
//  a > b

// euclidean
const getGCD = (a, b) => {
  let remainder = a % b;
  if (remainder === 0) return b;
  return euclidean(b, remainder);
};

// 최소 공배수 = 두 자연수의 곱 / 최대 공약수
const getLCM = (a, b) => a * b / getGCD(a, b)
```

#### Reference

- [https://dimenchoi.tistory.com/46](https://dimenchoi.tistory.com/46)

<div align="right">- CreatedAt 2023.01.06</div>

---

[Back](../README.md)

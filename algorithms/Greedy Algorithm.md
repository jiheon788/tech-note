# Greedy Algorithm

그리디 알고리즘(Greedy Algorithm)은 문제를 해결하는 방법 중 하나로, 매 선택에서 그 순간에 가장 좋아 보이는 것을 선택하는 방식으로 문제에 접근합니다. 이러한 방식은 각 단계에서 지역적으로 최적의 선택을 함으로써 최종적으로 전역적으로도 최적해에 도달하기를 기대합니다.

그리디 알고리즘의 핵심은 다음과 같습니다:

1. 지역적 최적 선택(Local Optima): 현재 상황에서 가장 좋은 선택을 합니다.
2. 탐욕적 속성(Greedy Property): 선택은 각 단계에서 최적이며, 한 번 한 선택은 번복하지 않습니다.
3. 최적 부분 구조(Optimal Substructure): 문제에 대한 전체 최적해가 각 단계의 최적해의 조합으로 구성될 수 있습니다.

그리디 알고리즘은 항상 전역적으로 최적의 해를 주는 것은 아니지만, 많은 문제, 특히 최적화 문제에서 효율적인 해를 빠르게 찾는 데 유용합니다.

## 예시: 거스름돈 문제

거스름돈 문제는 그리디 알고리즘을 설명하는 데 자주 사용되는 예시입니다. 고객에게 거스름돈을 줄 때, 가능한 적은 수의 동전을 사용하여 거스름돈을 주고 싶다고 가정해 봅시다. 사용할 수 있는 동전의 종류가 1원, 5원, 10원, 50원, 100원, 500원이라고 할 때, 그리디 알고리즘을 사용하여 이 문제를 해결할 수 있습니다.

그리디 알고리즘에 따라, 매 순간 가장 가치가 큰 동전을 최대한 사용하여 거스름돈을 줍니다. 예를 들어, 800원을 거슬러 줘야 한다면, 다음과 같이 거슬러 줄 수 있습니다:

먼저, 가장 큰 500원을 사용합니다. (남은 거스름돈: 300원)
다음으로, 100원을 3개 사용합니다. (남은 거스름돈: 0원)
이 방법으로, 총 4개의 동전을 사용하여 거스름돈을 줄 수 있습니다.

```javascript
function getChange(totalAmount, coins) {
  let remainingAmount = totalAmount;
  let change = [];
  coins.sort((a, b) => b - a); // 동전을 내림차순으로 정렬합니다.

  for (let coin of coins) {
    let count = Math.floor(remainingAmount / coin); // 해당 동전을 최대한 사용합니다.
    if (count > 0) {
      change.push({ coin: coin, count: count });
      remainingAmount -= coin * count; // 사용한 동전만큼 남은 금액을 갱신합니다.
    }
    if (remainingAmount === 0) break; // 거스름돈을 다 거슬러 주었다면 반복을 종료합니다.
  }

  return change; // 거슬러 준 동전의 종류와 개수를 반환합니다.
}

// 사용할 수 있는 동전의 종류
const coins = [500, 100, 50, 10, 5, 1];

// 800원을 거슬러 주는 경우
const amountToChange = 800;
const changeGiven = getChange(amountToChange, coins);

console.log(`To give ${amountToChange} won in change, we need:`);
changeGiven.forEach((c) => console.log(`${c.count} coin(s) of ${c.coin} won`));

/**
 * console result
 * To give 800 won in change, we need:
 * 1 coin(s) of 500 won
 * 3 coin(s) of 100 won
 */
```

그리디 알고리즘은 간단하고 빠르지만, 항상 최적의 해를 보장하지는 않습니다. 그러나 거스름돈 문제와 같이 그리디 선택 속성이 최적해를 보장하는 경우에는 매우 효과적입니다.

#### Reference

- [www.google.com](www.google.com)

---

[Back](../README.md)

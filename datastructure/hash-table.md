# Hash Table

![hash-table](../images/hash-table.jpg)

해시 테이블은 키를 값에 매핑할 수 있는 연관 배열을 구현하는 자료구조이다. 해시 함수를 사용해 원하는 값을 담을 수 있는 버킷 또는 슬롯 배열의 인덱스를 계산한다.
이상적으로는 해시 함수는 각 키들을 고유 버킷에 할당해야 하지만 대부분의 해시테이블은 불완전한 해시 함수를 사용하기 때문에 **해시 충돌**이 발생할 수 있다.

## 해시 충돌 해결법 
1. 선형 탐사법
    - 충돌이 발생하면 옆으로 한 칸 이동
    - 이동한 영역에 또 충돌이 발생하면 다시 옆으로 한칸 이동한다.
    - 특정 영역에 몰릴 수 있고, 최악의 경우 탐색에 선형시간이 걸림
2. 제곱 탐사법
    - `충돌이 발생한 횟수^2` 만큼 이동한다
3. 이중 해싱
    - 충돌이 발생하면 다른 해시 함수를 이용
4. 분리 연결법
    - 버킷의 값을 연결 리스트로 사용하여 충돌이 발생하면 리스트에 값을 추가한다


다음은 분리 연결법을 통해 해시 충돌을 해결한 예시이다

![collision](../images/collision-resolution.jpg)

#### Reference

- [https://github.com/trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms)

---

[Back](../README.md)

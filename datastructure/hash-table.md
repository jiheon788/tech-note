# Hash Table

![hash-table](../images/hash-table.jpg)

해시 테이블은 키를 값에 매핑할 수 있는 연관 배열을 구현하는 자료구조이다. 해시 함수를 사용해 원하는 값을 담을 수 있는 버킷 또는 슬롯 배열의 인덱스를 계산한다.
이상적으로는 해시 함수는 각 키들을 고유 버킷에 할당해야 하지만 대부분의 해시테이블은 불완전한 해시 함수를 사용하기 때문에 해시 충돌이 발생할 수 있다.

다음은 분리 연결법을 통해 해시 충돌을 해결한 예시이다

![collision](../images/collision-resolution.jpg)

#### Reference

- [https://github.com/trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms)

<div align="right">- CreatedAt 2022.12.04</div>

---

[Back](../README.md)

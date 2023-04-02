# 실행 컨텍스트란?

> 실행 컨텍스트(execution context)는 실행할 코드에 제공할 환경 정보들을
> 모아놓은 객체로, 자바스크립트의 동적 언어로서의 성격을 가장 잘 파악할 수 있는
> 개념이다.
>
> - 정재남, 코어자바스크립트

실행 컨텍스트는 **자바스크립트 코드가 실행되는 환경**이다. 모든 자바스크립트 코드는 실행 컨텍스트 내부에서 실행된다. 함수가 실행되면 해당하는 실행 컨텍스트가 생성되고, [자바스크립트 엔진](./event-loop.md)에 있는 콜 스택에 쌓인다. 가장 위에 쌓여있는 컨텍스트와 관련 있는 코드를 실행하면서(LIFO), 전체 코드의 환경과 순서를 보장하게 된다. 전역 컨텍스트와 함수 컨텍스트 2가지가 존재한다.

1. 활성화 되는 시점에 `Variable Environment`, `Lexical Environment`, `This Binding` 세가지 정보를 수집
2. 컨텍스트 생성 후 함수에 사용되는 변수들은 변수 객체 안에서 값을 찾고, 없다면 스코프 체인을 따라 올라가며 찾는다.
3. 함수 실행이 마무리 되면 해당 컨텍스트는 사라지고, 페이지가 종료되면 전역 컨텍스트가 사라진다.

#### `Variable Environment`

- 현재 컨텍스트 내의 식별자들에 대한 정보 + 외부 환경 정보
- 최초 실행 시의 스냅샷 유지, 변경사항 반영하지 않음

#### `Lexical Environment`

- Variable Environment의 내용을 복사해서 만듬
- 변경 사항이 실시간으로 반영

#### `This Binding`

- this 식별자가 바라봐야 할 대상 객체
- 실행 컨텍스트 활성화 당시 this가 지정되지 않은 경우, 전역객체가 저장
- 함수를 호출하는 방법에 따라 [this에 저장되는 대상](./this.md)이 다르다

#### Reference

- [정재남, 코어 자바스크립트](http://www.yes24.com/Product/Goods/78586788?pid=123487&cosemkid=go15677587165719959&gclid=Cj0KCQjwz6ShBhCMARIsAH9A0qVEyrfgtHxHgytBmA3eV-vHnfYaRf2o2uR46aFCTstCGfOZSiCZBVEaAtkcEALw_wcB)

---

[Back](../README.md)

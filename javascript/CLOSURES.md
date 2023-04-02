# 클로저란?

> A closure is the combination of a function and environment within which that function was declared - MDN

클로저란 **함수와 해당 함수가 선언된 렉시컬 환경의 조합**이다. 외부 함수가 반환된 후에도 외부 함수의 변수 범위 체인에 접근할 수 있다. 전역 변수의 사용을 억제하고, 정보를 은닉하기 위해 사용한다.

#### Example

```javascript
function makeAddNumFunc(num) {
  const toAdd = num;

  return function (num) {
    return num + toAdd;
  };
}

const add5 = makeAddNumFunc(5);

add5(3); // 8
add5(8); // 13
add5(15); // 20
```

위 예시에서 makeAddNumFunc가 리턴하는 익명함수는 본인이 정의될 때의 환경인 makeAddNumFunc의 Lexical Environment를 기억하고 있다. 따라서, toAdd에 할당된 값을 기억하고 익명함수가 호출 될 때마다
인자로 받은 숫자와 toAdd에 할당되어있던 숫자를 더해서 리턴한다.

## 클로저의 원리

클로저는 본인이 생성될 때의 `Lexical Environment`을 기억한다. 그리고 본인이 호출될 때 그 `Lexical Environment`에 있는 변수들을 참조할 수 있게된다.
실행 컨텍스트와 `Lexical Environment`은 별개의 존재이다. 실행 컨텍스트에서 `Lexical Environment`을 참조하고는 있지만, 실행 컨텍스트가 종료된 후에도 해당 `Lexical Environment`가 어딘가에서 참조되고 있다면 **`Lexical Environment`은 가비지 컬렉팅 대상에서 제외**된다.

이러한 동작으로 인해 함수가 호출될 때의 `Lexical Environment`를 기억할 수 있게 되고, 클로저의 동작이 성립하게 되는 것이다.

## 클로저의 장점 (활용)

#### 1. 데이터를 보존할 수 있다.

클로저 함수는 외부 함수의 실행이 끝나더라도 외부 함수 내 변수를 사용할 수 있다. 클로저는 이처럼 특정 데이터를 스코프 안에 가두어 둔 채로 계속 사용할 수 있게하는 폐쇄성을 갖는다.

#### 2. 정보의 접근 제한 (캡슐화)

‘클로저 모듈 패턴’을 사용해 객체에 담아 여러 개의 함수를 리턴하도록 만든다. 이러한 정보의 접근을 제한하는 것을 캡슐화라고 한다.

#### 3. 모듈화에 유리하다.

클로저 함수를 각각의 변수에 할당하면 각자 독립적으로 값을 사용하고 보존할 수 있다. 이와 같이 함수의 재사용성을 극대화 함수 하나를 독립적인 부품의 형태로 분리하는 것을 모듈화라고한다. 클로저를 통해 데이터와 메소드를 묶어다닐 수 있기에 클로저는 모듈화에 유리하다.

#### Reference

- [https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures](https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures)

---

[Back](../README.md)

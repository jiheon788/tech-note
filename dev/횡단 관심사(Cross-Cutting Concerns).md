# 횡단 관심사(Cross-Cutting Concerns)

횡단 관심사(Cross-Cutting Concerns)는 여러 클래스나 모듈에 걸쳐서 관심을 가져야 하는 기능이나 문제를 말합니다. 예를 들면, 로깅, 보안, 데이터 유효성 검사와 같은 기능들은 어플리케이션의 많은 부분에서 반복적으로 나타나는 관심사입니다.

이러한 횡단 관심사를 처리하는 전통적인 방법은 각각의 모듈이나 클래스에서 동일한 코드를 반복해서 작성하는 것입니다. 하지만 이러한 방법은 코드 중복을 발생시키고, 유지보수를 어렵게 만듭니다.

## 횡단 관심사 처리 방법

횡단 관심사를 처리하는 데에는 `Aspect-Oriented Programming (AOP)`이라는 방법이 자주 사용됩니다. AOP는 횡단 관심사를 별도의 모듈(Aspect)로 분리하여, 기본 로직(비즈니스 로직)에서 분리함으로써 코드의 중복을 줄이고, 관리를 용이하게 합니다.

## AOP의 기본 용어

- `Aspect`: 횡단 관심사의 모듈화된 코드.
- `Advice`: Aspect가 언제 적용될지를 정의한 코드 (예: 메소드 호출 전, 호출 후).
- `Join point`: Advice가 적용될 수 있는 지점 (예: 메소드 실행, 필드 접근).
- `Pointcut`: Join point들의 집합으로, 실제로 Advice가 적용되는 위치를 정의.

## Sample

#### As - Is

로그 출력을 횡단 관심사로 삼았을 때, AOP를 사용하지 않는 경우, 각 함수나 메소드에서 직접 로그 출력 코드를 작성해야 합니다.

```javascript
function doSomething() {
  console.log("Starting doSomething");
  // 기본 로직
  console.log("Finished doSomething");
}

function doSomethingElse() {
  console.log("Starting doSomethingElse");
  // 기본 로직
  console.log("Finished doSomethingElse");
}
```

#### To-Be

이 경우 loggingAspect 함수는 모든 함수에 대한 로그를 담당하고, applyAspect라는 가상의 AOP 적용 함수를 통해 doSomething과 doSomethingElse 함수에 로깅 기능을 '위빙'합니다.

```javascript
// 로깅 관련 Aspect 정의
function loggingAspect() {
  console.log(`${this.functionName}가 시작됨.`);
  // 함수 호출
  console.log(`${this.functionName}가 완료됨.`);
}

function doSomething() {
  // 실제 작업
}

function doSomethingElse() {
  // 실제 작업
}

// AOP 프레임워크를 사용하여 loggingAspect를 doSomething과 doSomethingElse에 적용
applyAspect(doSomething, loggingAspect);
applyAspect(doSomethingElse, loggingAspect);
```

실제로는 JavaScript에서는 AOP를 지원하는 라이브러리를 사용하거나, 프록시(proxy), 데코레이터(decorators) 등을 활용하여 비슷한 효과를 낼 수 있습니다. 그리고 Java와 같은 다른 언어에서는 Spring AOP와 같은 프레임워크를 통해 이를 구현합니다.

이러한 방식을 사용하면, 각각의 함수나 메소드에서 중복된 로그 관련 코드를 작성하지 않아도 되며, 나중에 로그 로직을 변경할 때도 한 곳에서만 수정하면 되므로 유지보수가 훨씬 쉬워집니다.

#### Reference

- [www.google.com](www.google.com)

---

[Back](../README.md)

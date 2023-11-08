# 실행 컨텍스트란?

> 실행 컨텍스트(execution context)는 실행할 코드에 제공할 환경 정보들을
> 모아놓은 객체로, 자바스크립트의 동적 언어로서의 성격을 가장 잘 파악할 수 있는
> 개념이다.
>
> - 정재남, 코어자바스크립트

실행 컨텍스트(Execution Context)는 자바스크립트 코드가 실행되기 위해 필요한 환경 또는 범위를 말합니다. 이 컨텍스트 내에서는 변수, 객체, 함수 등의 정보를 관리하며, 자바스크립트 엔진이 스크립트를 어떻게 처리할지 결정합니다.
자바스크립트에서는 코드가 실행될 때마다 실행 컨텍스트가 생성되는데, 크게 세 가지 유형이 있습니다:

1. 전역 실행 컨텍스트(Global Execution Context): 자바스크립트 코드가 실행되면 가장 먼저 만들어지는 컨텍스트로, 전역 변수와 함수를 관리합니다.
2. 함수 실행 컨텍스트(Function Execution Context): 함수가 호출될 때마다 새로운 컨텍스트가 생성되어 해당 함수의 지역 변수, 매개변수, 그리고 다른 정보를 관리합니다.
3. 평가 실행 컨텍스트(Eval Execution Context): eval 함수를 통해 실행되는 코드 블럭에 대한 컨텍스트입니다.

각 실행 컨텍스트는 여러 구성 요소를 가집니다. 그 중 가장 중요한 것은:

- 변수 환경(Variable Environment): 현재 컨텍스트 내의 모든 지역 변수를 포함합니다.
- 렉시컬 환경(Lexical Environment): 외부 환경 정보를 포함하고, 클로저(Closure)와 관련이 있습니다.
- This 바인딩: 함수 호출 방식에 따라 this 키워드의 값이 결정됩니다.

실행 컨텍스트 스택(EC stack) 또는 콜 스택(Call Stack)이라고 하는 스택 구조를 사용하여, 코드 실행 중에 이러한 컨텍스트들이 관리됩니다. 가장 먼저 들어간 전역 컨텍스트가 스택의 바닥에 있고, 함수 호출 시 새로운 함수 컨텍스트가 스택에 추가(push)됩니다. 함수 실행이 끝나면 해당 함수 컨텍스트는 스택에서 제거(pop)됩니다.

#### Reference

- [정재남, 코어 자바스크립트](http://www.yes24.com/Product/Goods/78586788?pid=123487&cosemkid=go15677587165719959&gclid=Cj0KCQjwz6ShBhCMARIsAH9A0qVEyrfgtHxHgytBmA3eV-vHnfYaRf2o2uR46aFCTstCGfOZSiCZBVEaAtkcEALw_wcB)

---

[Back](../README.md)

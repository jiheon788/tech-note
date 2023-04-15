# Fiber

> 선언형 UI 라이브러리의 동시성 렌더링 기술

리액트 앱에 상태 변화가 일어난 시점부터 이에 대응하는 UI 변화가 화면에 비칠 때까지 리액트 내부적으로 여러 단계를 거친다. 대표적으로 reconciliation(재조정)과 render(렌더) 단계가 있다.

- Reconciliation: Virtual DOM 트리의 업데이트 된 버전과 실제로 화면에 렌더 된 버전을 비교해 바뀐 부분을 감지하는 작업
- Render: 비교 후 변경된 사항을 실제 DOM 요소에 반영하는 작업

두 가지 작업을 해주는 reconciler와 renderer의 모듈은 분리되어 있다. 본문에서는 리액트 v16 이전의 `Stack reconciler`와 이후에 사용되는 `Fiber reconciler`가 트리를 탐색하는 방식을 비교해보고자 한다.

## Stack Reconciler

Stack reconciler는 virtual DOM 트리를 비교하고 화면에 변경 사항을 푸시하는 이 모든 작업을 동기적으로, 하나의 큰 테스크로 실행한다. 이는 현 상태의 트리와 작업 중인 트리를 DFS 패턴으로 재귀적으로 탐색하며 깊은 콜 스택 만들게 된다. 일시 중지, 취소가 불가능 하여 콜스택이 비워지기 전까지 메인 스레드는 다른 작업을 할 수 없다.

## Fiber Reconciler

React 팀은 이 현상을 해결하기 위해 증분 렌더링(Incremental Rendering)을 고안하게 되었고 그 과정에서 Fiber Reconciler로 reconciler 모듈이 변경되었다.

증분 렌더링(Incremental Rendering)를 구현하기 위해서는 작업을 일시정지하고 나중에 다시 시작할 수 있어야 했다. 또 이전에 완료된 작업을 재사용하거나 필요하지 않은 경우 중단 할 수 있어야 했다. 그래서 도입된게 Fiber이다. Fiber는 React에서 작업의 단위이며, JavaSrciprt 객체이다.

### 동작 방법

#### 렌더 단계(Render Phase)

> Fiber는 current 와 workInProgress 두가지 트리를 가지고 있다. current 트리는 현재 화면에 있는 것으로 React가 변경 하면 안정성을 보장 할 수 없기 때문에 복사본인 workInProgress 트리를 만들어서 작업하게 된다.

Render Phase는 비동기적으로 동작하며 두 fiber 트리를 비교하고 변경된 Effect들을 수집하는 작업을 한다. 리액트 scheduler로 인해 허용되는 시간 동안 작업하고 user input, animation 같은 더 급한 작업이 있다면 해당 작업에게 메인 스레드를 양보한다. 위 과정에서 React가 언제라도 workInProgress 트리 내부 변경사항을 버릴 수 있기 때문에 Dom 또는 componentDidMount 같은 생명 주기 메서드에 대한 변경사항은 렌더링 단계중에서 실행 할 수 없다.

#### 커밋 단계(Commit Phase)

커밋 단계에서는 렌더 단계에서 수집한 Effect와 변경된 정보를 가지고 있는 Fiber를 통해 Effect를 실행하고 Dom에 적용하는 단계를 거친다. 이 단계는 동기적으로 한번에 이루어지기 때문에 일시정지하거나 취소할 수 없다.

Commit 후에는 workInProgress 트리가 현재(current)의 트리가 된다.

#### Reference

- [https://blog.mathpresso.com/react-deep-dive-fiber-88860f6edbd0](https://blog.mathpresso.com/react-deep-dive-fiber-88860f6edbd0)
- [https://velog.io/@tnghgks](https://velog.io/@tnghgks/React-Fiber%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C)

---

[Back](../README.md)

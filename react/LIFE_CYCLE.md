# React의 생명주기

<div>
<img src='https://user-images.githubusercontent.com/90181028/231976815-3e56141a-bb69-42da-9a41-53d24eb58750.png' width='49%' alt='클래스 컴포넌트의 생명주기' />
<img src='https://user-images.githubusercontent.com/90181028/231976463-b699c600-1040-4349-8a32-f0885348b01a.png' width='45%' alt='함수형 컴포넌트의 생명주기' />
</div>

생명주기 메서드는 컴포넌트가 브라우저상에 나타나고, 업데이트되고, 사라지게 될 때 호출되는 메서드들이다. 클래스 컴포넌트를 사용할 때 명확히 사용되며 함수형 컴포넌트의 등장으로 이전만큼 명확히 구분되어 사용되진 않는다.

총 9개의 라이프 사이클은 크게 `Mount`, `Update`, `Unmount` 세가지로 분류된다. 이는 DOM이 생성되어 웹 브라우저에 나타나고, 변하고, 제거됨을 뜻한다. 업데이트는 아래 4가지 상황에서 발생한다.

- props의 변화
- state의 변화
- 부모 컴포넌트의 리렌더링
- this.forceUpdate로 렌더링 트리거

## 1. Mount

#### 1.1. `constructor`

컴포넌트를 만들면서 가장 먼저 실행, 초기 state 값을 정의한다.

```javascript
// Class
class Example extends React.Component {
  constructor(props) {
    super(props);
      this.state = 0;
}

// Hooks
const Example = () => {
  const [count,setCount] = useState(0);
}
```

#### 1.2. `getDerivedStateFromProps`

props로 받아 온 값을 state에 동기화한다. 컴포넌트가 마운트 될 때와 업데이트될 때 호출된다. (render메서드 직전) 시간이 흐름에 따라 변하는 props에 state가 의존하는 아주 드문 사용 케이스를 위하여 존재한다.

```javascript
// Class
class Example extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value !== prevState.value) {
      return { value: nextProps.value };
    }
    return null;
  }
}
```

#### 1.3. `render`

컴포넌트를 렌더링 할 때 사용한다. 함수형에서는 render를 쓰지 않고 렌더링이 가능하다.

```javascript
// Class
class Example extends React.Component {
  render() {
    return <div>컴포넌트</div>;
  }
}

// Hooks
const example = () => {
  return <div>컴포넌트</div>;
};
```

#### 1.4. `componentDidMount`

컴포넌트의 첫 렌더링 이후 호출되는 메서드이다. 외부 라이브러리 연동하거나 데이터를 fetch 한다. 함수형 컴포넌트에서는 `useEffect`의 의존성 배열을 비워 구현한다.

```javascript
// Class
class Example extends React.Component {
    componentDidMount() {
        ...
    }
}

// Hooks
const Example = () => {
    useEffect(() => {
        ...
    }, []);
}
```

## 2. Update

#### 2.1. `getDerivedStateFromProps`

[상단 1.2. getDerivedStateFromProps와 동일](#12-getderivedstatefromprops)

#### 2.2. `shouldComponentUpdate`

props나 state를 변경했을 때, 리렌더링을 할지 말지 결정한다. 반드시 true나 false를 반환해야하며 성능 최적화를 위한 것이다.

```javascript
// Class
class Example extends React.Component {
  shouldComponentUpdate(nextProps) {
    // 이전값과 현재값이 같으면 리랜더링을 하지 않습니다.
    return nextProps.value !== this.props.value
  }
}

// Hooks
const Example = React.memo(() => {
      ...
  },
  (prevProps, nextProps) => {
    return nextProps.value === prevProps.value
  }
)
```

#### 2.3. `getSnapshotBeforeUpdate`

render에서 만들어진 결과가 브라우저에 실제로 반영되기 직전(컴포넌트에 변화가 일어나기 직전의 DOM)의 DOM 상태를 가져와서 특정 값을 반환하면 그 다음 `componentDidUpdate`에서 받아와 사용한다. 함수형에서는 아직 대체할만한 hook이 없다.

```javascript
class Example extends React.Component {
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }
}
```

#### 2.4. `ComponentDidUpdate`

리렌더링이 완료한 후 실행한다. [2.3. getSnapshotBeforeUpdate](#23-getsnapshotbeforeupdate)에서 반환한 값을 조회 가능하다.

```javascript
// Class
class Example extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        ...
    }
}

// Hooks
const Example = () => {
    useEffect(() => {
        ...
    }, []);
}
```

## 3. Unmount

#### 3.1. `componentWillUnmount`

컴포넌트가 화면에서 사라지기 직전(DOM에서 제거할 때)에 호출된다. `componentDidMount`에서 등록한 이벤트가 있다면 여기서 제거 해야한다. 함수형 컴포넌트에서는 `useEffect CleanUp` 함수를 통해 해당 메서드를 구현할 수 있다.

```javascript
// Class
class Example extends React.Component {
    coomponentWillUnmount() {
        ...
    }
}

// Hooks
const Example = () => {
    useEffect(() => {
        return () => {
            ...
        }
    }, []);
}
```

## 4. etc

#### 4.1. `componentDidCatch`

컴포넌트 렌더링 도중에 에러가 발생했을 때 애플리케이션이 멈추지 않고 오류 UI를 보여줄 수 있게 한다.

```javascript
// Class
class Example extends React.Component {
  componentDidCatch(error, info) {
    console.log("에러가 발생했습니다.");
  }
}
```

#### Reference

- [https://react.vlpt.us/basic/25-lifecycle.html](https://react.vlpt.us/basic/25-lifecycle.html)
- [https://whales.tistory.com/146](https://whales.tistory.com/146)

---

[Back](../README.md)

# CSS 방법론이란?

CSS 방법론은 CSS코드를 무질서 하게 작성 할 때 오는 문제점들을 보완 하고자 일관되고 체계적인 방법을 제시하는 방법론이다.

CSS에도 작성된 코드를 쉽게 파악하고 유지보수성 까지 고려한다면 명확하고 일관성있는 규칙이 필요하다. `BEM`, `SMACSS`, `OOCSS`는 일관되고 체계적인 방법을 가진 CSS 방법론들이다.

3가지 방법론은 작성방식이 달라도 아래 세가지는 공통적으로 중요시한다.

- 원활한 유지보수를 위함
- 코드의 재사용성을 높이기 위함
- 클래스명 만으로도 무슨 내용인지 예측할 수 있게 함

## BEM (Block Element Modifier)

`블록(Block)`, `요소(Element)`, `상태(Modifier)`로 구분하여 클래스 작성하며 엄격한 네이밍 규칙을 가진다. 코드를 직관적으로 파악할수 있지만 이름이 길고 복잡해 질수 있다.

#### `Block` : 재사용 가능한 영역(header, footer, navigation…), 하나의 단어를 사용하되 길어질 경우 (-)를 사용

```css
.header {
  ...;
}
.block {
  ...;
}
```

#### `Element` : 블록의 내부 구성을 표현, 두개의 underscores(\_\_)로 표기

```css
.header {
  ...;
}
.header__link {
  ...;
}
.header__tap {
  ...;
}
.header__tap__item {
  ...;
}
```

#### `Modifier` : 요소의 상태를 표현, 두개의 hyphen(-)로 표기

```css
.header--hide {
  ...;
}
.header__tap--big {
  ...;
}
.header__tap--big {
  ...;
}
```

## SMACSS(Scalable Modular Architecture CSS)

범주화(categorization)로 패턴화 하고자 하는 방법론이다. 기본(base), 레이아웃(layout), 모듈(module), 상태(state), 테마(theme) 다섯가지의 범주를 제시한다.

⚠ SMACSS 사용시에는 대표적으로 아래의 4가지 유의사항들이 존재한다.

- 파생된 CSS셀렉터 사용금지
- Id 셀렉터 사용금지
- !Important 사용금지
- 다른 개발자들이 이해할 수 있도록 class 이름을 의미있게 지어야 함

#### `Base` : 스타일 초기화 (reset.css)

```css
body,
p,
table,
form,
fieldset,
legend,
input,
button ... {
  margin: 0;
  padding: 0;
}
```

#### `layout` : 주요 요소(id), 하위 요소(class)로 구분하고 접두사를 사용

```css
#header {
  width: 400px;
}
#aside {
  width: 30px;
}

.layout-width #header {
  width: 600px;
  padding: 10px;
}
.layout-width #aside {
  width: 100px;
}
```

#### `module` : 재사용 가능한 구성요소

```css
.stick {
  ...;
}
.stick-name {
  ...;
}
.stick-number {
  ...;
}
```

#### `state` : 요소의 상태 변화를 표현하고 접두사 사용

```css
.is-error {
  ...;
}
.is-hidden {
  ...;
}
.is-disabled {
  ...;
}
```

#### `theme` : 사용자가 선택 가능 하도록 스타일을 재선언하여 사용

```css
/* base.css */
.header {
  background-color: green;
}

/* theme.css */
.header {
  background-color: red;
}
```

## OOCSS(Object Oriented CSS)

중복을 최소화하고 캡슐화를 원칙으로 한다. 공통된 부분을 찾아 어디서나 재활용 할수 있다는 장점이 있다. 반면에 다중 클래스 사용으로 유지보수의 어려움과 가독성이 떨어질수 있다.

#### 컨테이너와 컨텐츠를 분리

```
<div class="header common-width">Header</div>
<div class="footer common-width">Footer</div>

.header{
    position: fixed;
    top: 0;
}
.footer{
    position: absolute;
    bottom: 0;
}
.common-width{
    width: 700px;
    margin: 0;
}
```

#### 구조와 모양을 분리 또는 결합

```
<div class="btn skin tel">tel</div>
<div class="btn skin">email</div>
.btn{공통 스타일 정의}
.skin{공통 스타일 정의}
```

#### Reference

- [https://jinminkim-50502.medium.com/css-bem-smacss-oocss-9e4d6beb0a38](https://jinminkim-50502.medium.com/css-bem-smacss-oocss-9e4d6beb0a38)

---

[Back](../README.md)

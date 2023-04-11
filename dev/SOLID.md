# SOLID 원칙이란?

> 컴퓨터 프로그래밍에서 SOLID란 로버트 마틴이 2000년대 초반에 명명한 객체 지향 프로그래밍 및 설계의 다섯 가지 기본 원칙을 마이클 페더스가 두문자어 기억술로 소개한 것이다. **프로그래머가 시간이 지나도 유지 보수와 확장이 쉬운 시스템을 만들고자 할 때** 이 원칙들을 함께 적용할 수 있다. SOLID 원칙들은 소프트웨어 작업에서 프로그래머가 소스 코드가 읽기 쉽고 확장하기 쉽게 될 때까지 소프트웨어 소스 코드를 리팩터링하여 코드 냄새를 제거하기 위해 적용할 수 있는 지침이다. 이 원칙들은 애자일 소프트웨어 개발과 적응적 소프트웨어 개발의 전반적 전략의 일부다. - [위키백과](<https://ko.wikipedia.org/wiki/SOLID_(%EA%B0%9D%EC%B2%B4_%EC%A7%80%ED%96%A5_%EC%84%A4%EA%B3%84)>)

SOLID원칙은 객체지향 프로그래밍 설계 라는 패러다임을 토대로 만들어진 좋은 코드를 작성하기 위한 원칙이다. 본 문서에서는 프론트엔드 관점에서의 SOLID 원칙을 적용하여 정리하였다.

## SRP: Single Responsibility Principle

SRP(단일책임원칙)은 하나의 모듈은 오직 하나의 액터에 대해서만 책임져야 한다.

⚠ 여기서 책임은 동작을 정의하는 것이 아니다. 동작으로 쪼개다 보면 그 기준이 애매하고, 과할 정도로 컴포넌트가 쪼개질 수 있다. 컴포넌트를 너무 자잘하게 쪼개면 전체 로직을 한눈에 파악하기 어렵게 만들고 코드 네비게이션에 들어가는 공수를 늘어나게 만든다. 단일한 동작을 갖도록 코딩하는 것은 `컴포넌트` 가 아니라 `순수한 함수` 한정이 되어야 하며 클린 아키텍쳐가 아닌 클린 코드에 가까운 개념이다.

## OCP: Open-Closed Principle

OCP(개방 폐쇄의 원칙)는 소프트웨어 구성요소가 확장에는 열려있고, 변경에는 닫혀있어야 한다는 원리이다. 요구사항의 변경이나 추가사항에 기존 구성요소의 수정을 줄이고, 쉽게 확장해서 재사용할 수 있어야 한다는 의미이다. 추상화를 가능하게 하는 중요 메커니즘은 `추상화`와 `다형성`이다.

하나의 함수의 기능이 여러가지 옵션들로 인해 내부에서 분기가 많이 발생하고 있다면 OCP와 SRP의 원칙에 맞게 함수를 매개 변수로 받는 방법을 통해서 공통 매커니즘의 코드와 새로운 기능에 대한 코드를 분리해서 다룰 수 있게 할 수 있다.

#### example

```javascript
// 확장에 닫혀(closed)있는 구조, 섹션이 추가되면 else-if 를 추가해야함
sections.map((section) => {
  if (section.type === "BANNER") {
    return section.items.map((item) => <Banner item={item} />);
  } else if (type === "RECENTLY_VIEWED") {
    return section.items.map((item) => <PosterView item={item} />);
  }
});

// 확장에 개방(open) 될 수 있도록 다형성을 이용
{
  sections.map((section) => (
    <Section section={section}>
      {section.items.map((item) => (
        <Item section={section} item={item} />
      ))}
    </Section>
  ));
}
```

## LSP: Liskov Substitution Principle

LSP(리스코프 치환 원칙)은 "상속(is-a)으로 이어진 관계에서 예상 못할 행동을 하지 말라."는 원칙이다다. 즉 일반화 관계에 대해 묻는 것이다. 인터페이스나 상위 정의된 부분과 실제 구현된 부분이 예상과 다르다면 잘못 사용하게 될 가능성이 매우 높고 이슈 발생 시 원인을 찾아내기도 힘들어진다. 상속 관계로 간주할 수 있는, 당연하게 여겨지는 명제가 예상과 다르게 펼쳐지는 것. 이것이 LSP 위반이다. 이를 위반한 예시는 아래와 같다.

- GET method 의 REST API로 정의했는데 실제 동작에선 DB 상태를 변경
- API 응답으로 주기로 약속한 모델을 화면마다 다르게 내려줌

## ISP: Interface Segregation Principle

ISP(인터페이스 분리 원칙)는 한 클래스는 자신이 사용하지 않는 인터페이스는 구현하지 말아야 한다는 원칙이다. 즉, 불필요한 것에 의존하지 않도록 하라는 뜻이다. 하나의 일반적인 인터페이스보다는, 여러 개의 구체적인 인터페이스가 낫다. 자신이 사용하지 않는 기능(인터페이스)에는 영향을 받지 말아야 한다는 의미이다. 소프트웨어는 인터페이스 분리 원칙을 통해 시스템의 내부 의존성을 약화시켜 리팩토링, 수정, 재배포를 쉽게 할 수 있다.

e.g. 스마트폰으로 전화, 웹서핑, 사진 촬영 등 다양한 기능을 사용할 수 있다. 그런데 전화를 할 때에는 웹서핑, 사진촬영 등 다른 기능은 사용하지 않는다. 따라서 전화기능과 웹서핑 기능 사진 촬영 기능은 각각 독립된 인터페이스로 구현하여, 서로에게 영향을 받지 않도록 설계되어 있는것이다.

## DIP: Dependency Inversion Principle

DIP(의존성 역전 법칙)는 의존 관계를 맺을 때, 변화하기 쉬운것 보단 변화하기 어려운 것에 의존해야 한다는 원칙이다. 변화하기 쉬운것이란 구체적인 것을 말하고, 변화하기 어려운 것이란 **추상적인 것**을 말한다.

한 예로 컴포넌트에서 서버의 데이터를 조작하기 위해서는 적절한 수준의 추상화와 레이어가 존재를 하게 된다. 컴포넌트에서 서버에 직접 호출하는 구체화보다는 그저 필요한 데이터를 요청하는 형식의 추상화된 layer 계층인 hook을 사용할 수 있다. 추상화된 레이어를 두는 이유는 컴포넌트 입장에서는 데이터가 필요하지만 그게 반드시 서버의 데이터일 필요는 없다. 이러한 레이어를 통해서 언제든 서버가 아니라 로컬의 mock데이터나 다른 방식으로도 사용하는 쪽의 코드를 변화없이 변경할 수 있게 된다.

#### example

```javascript
// 필요한 데이터를 요청하는 형식의 추상화된 layer 계층인 custom hook
const useFetch = (defaultValue, url) => {
  const [payload, setPayload] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get(url)
      .then((res) => setPayload(res.data))
      .catch((_) => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [url]);

  return [payload, isLoading, isError];
};
```

#### Reference

- [카카오 FE블로그: 프론트엔드와 SOLID 원칙](https://fe-developers.kakaoent.com/2023/230330-frontend-solid/)
- [넥스트리소프트: 객체지향 개발 5대 원리: SOLID](https://www.nextree.co.kr/p6960/)
- [teo velog: Javascript에서도 SOLID 원칙이 통할까?](https://velog.io/@teo/Javascript%EC%97%90%EC%84%9C%EB%8F%84-SOLID-%EC%9B%90%EC%B9%99%EC%9D%B4-%ED%86%B5%ED%95%A0%EA%B9%8C)

---

[Back](../README.md)

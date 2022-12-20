# REST API란?

> REST API는 정해진 명확한 표준이 없기 때문에 REST API를 사용함에 있어 '무엇이 옳고 그른지'가 아닌 개발하는 서비스의 특징과 개발 집단의 환경과 성향 등이 충분히 고려되어 설계되어야 할 것입니다

REST(Representational State Transfer) API는 `자원을 이름으로 구분하여 해당 자원의 상태를 주고받는 모든 것`을 의미합니다.

## REST 란?

1. HTTP URI(Uniform Resource Identifier)를 통해 자원을 명시하고,
2. HTTP Method(GET, POST 등)를 통해
3. 해당 자원에 대한 CRUD Operation을 적용하는 것을 의미한다.

## REST 구성요소

- 자원(Resource): HTTP URI
- 행위(Verb): HTTP Method
- 행위의 내용(Representations): HTTP Message Pay Load

## REST 특징

- **Server - Client(서버 - 클라이언트 구조)**: 서버는 API제공, 클라이언트는 사용자 인증이나 컨텍스트(세션, 로그인 정보)등을 직접 관리하는 구조로 각각의 역할이 확실히 구분되기 때문에 클라이언트- 서버에서 개발해야 할 내용이 명확해지고 서로간 의존성이 줄어든다.

- **Stateless(무상태)**: 작업을 위한 상태정보를 따로 저장하고 관리하지 않는 무상태성 성격을 갖는다. 세션 정보나 쿠기 정보를 별도로 저장하고 관리하지 않기에 API 서버는 들어오는 요청만을 단순히 처리하면 된다. 때문에 서비스의 자유도가 높아지고 서버에서 불필요한 정보를 관리하지 않음으로써 구현이 단순해진다.

- **Cacheable(캐시 처리 가능)**: REST는 HTTP 기존 웹표준을 그대로 사용하기에 웹에서 사용하는 기존 인프라를 그대로 활용가능. 따라서 HTTP가 가진 캐싱 기능 적용이 가능하다. HTTP 프로토콜 표준에서 사용하는 Last-Modified 태그나 E-Tag를 이용하면 캐싱 구현이 가능하다.

- **Layered Systems(계층화)**: REST서버는 다중계층으로 구성될 수 있으며 보안, 로드 밸런싱, 암호화 계층을 추가해 구조상의 유연성을 둘 수 있다. Proxy, Gateway 같은 네트워크 기반의 중간 매체 사용 할 수 있게 한다.

- **Uniform Interface(인터페이스의 일관성)**: URI로 지정한 리소스에 대한 조작을 통일되고 한정적인 인터페이스로 수행하는 아키텍쳐 스타일

## 디자인 가이드

1. URI는 정보의 자원을 표현해야 한다.
2. 자원에 대한 행위는 HTTP Method로 표현한다.

```
# 회원 삭제
GET /members/delete/1 (x)
DELETE /members/1 (o)

# 회원 정보 조회
GET /members/show/1 (x)
GET /members/1 (o)

# 회원 추가
GET /members/insert/2 (x) - GET 메서드는 리소스 생성에 알맞이 않다.
POST /members/2 (o)
```

이와 같이 URI는 자원을 표현하는 데에 집중하고, 행위에 대한 정의는 HTTP METHOD를 통해 하는 것이 REST한 API를 설계하는 중심 규칙이다.

## URI 설계 시 주의 사항

- 슬래시 구분자(/)는 계층 관계를 나타내는데 사용

```
http://restapi.example.com/houses/apartments
http://restapi.example.com/animals/mammals/whales
```

- URI 마지막 문자에 슬래시를 포함하지 않는다.

```
http://restapi.example.com/houses/apartments/ (x)
http://restapi.example.com/houses/apartments  (o)
```

- 하이픈(-)은 URI 가독성을 높이는데 사용
- 언더바(\_)는 URI에 사용하지 않는다.
- URI경로에는 소문자 사용
- 파일 확장자(.jpg 등)은 URI에 사용하지 않는다
- 바디 내용의 포맷을 나타내기 위한 파일 확장자는 URI안에 포함하지 않는다

## 리소스 간의 관계 표현방법

리소스간 연관 관계가 있을 경우 아래와 같이 사용

```
# /리소스명/리소스 ID/관계있는 다른 리소스명

GET /users/{userid}/devices (일반적으로 has의 관계 표현할 때)

# 사용자가 좋아하는 디바이스 목록
GET /users/{userid}/likes/devices
```

## 자원을 표현하는 Colllection과 Document

- Document: 단순한 문서
- Collection: 문서들의 집합, 객체들의 집합, **복수로 표현**
  둘 다 리소스라고 표현할 수 있으며 URI에 포현된다.

```
http:// restapi.example.com/sports/soccer
# sports라는 컬렉션과 soccer라는 도큐먼트로 표현

http:// restapi.example.com/sports/soccer/players/13
# sports, players 컬렉션과 soccer, 13(13번인 선수)를 의미하는 도큐먼트
```

## HTTP 응답 상태 코드

| code | desc                                                                         |
| ---- | ---------------------------------------------------------------------------- |
| 200  | 클라이언트 요청 정상 수행                                                    |
| 201  | 클라이언트의 리소스 생성 요청 성공적으로 수행                                |
| -    | -                                                                            |
| 301  | 클라이언트가 요청한 리소스에 대한 URI가 변경, 변경된 URI를 헤더에 적어줘야함 |
| -    | -                                                                            |
| 400  | 클라이언트의 요청이 부적절                                                   |
| 401  | 클라이언트 인증이 되지않은 상태에서 보호된 리소스 요청                       |
| 405  | 사용불가능한 Method                                                          |
| -    | -                                                                            |
| 500  | 서버에 문제가 있을 경우                                                      |

#### Reference

- [https://meetup.toast.com/posts/92](https://meetup.toast.com/posts/92)

<div align="right">- CreatedAt 2022.12.10</div>

---

[Back](./README.md)

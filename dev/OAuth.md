# OAuth 란?

- OAuth(Open Authorization)는 인터넷 사용자들이 비밀번호를 제공하지 않고 다른 웹사이트 상의 자신들의 정보에 대해 웹사이트나 애플리케이션의 접근 권한을 부여할 수 있는 공통적인 수단으로서 사용되는, **접근 위임을 위한 개방형 표준**이다.
- 별도의 회원가입 없이 로그인을 제공하는 플랫폼의 아이디만 있으면 서비스를 이용할 수 있게 해준다.
- 외부 서비스에서도 인증을 가능하게 하고 그 서비스의 API를 이용하게 해주는 것
- 인증(Authentication)과 권한(Authorization)을 획득하는 것

  - **인증 (Authentication)**: 시스템 접근을 확인
  - **권한 (Authorization)**: 행위의 권리를 검증

- 개인정보를 여러 곳에 입력하며 피싱에 둔감해지고 3rd-party Application이 안전하다는 보장이 없다는 배경으로 인해 탄생

## OAuth 구성

- **Client**: OAuth 2.0을 사용해 서드파티 로그인 기능을 구현할 자사 또는 개인 애플리케이션 서버
- **Resource Owner**: 서드파티 애플리케이션 (Google, Facebook, Kakao 등)에 이미 개인정보를 저장(회원가입)하고 있으며 Client가 제공하는 서비스를 이용하려는 사용자,
  'Resource' 는 개인정보
- **Resource Server**: 사용자의 개인정보를 가지고있는 애플리케이션 (Google, Facebook, Kakao 등) 서버, Client는 Token을 이 서버로 넘겨 개인정보를 응답 받을 수 있다.
- **Authorization Server**: 권한을 부여(인증에 사용할 아이템을 제공주는)해주는 서버
  - 사용자는 이 서버로 ID, PW를 넘겨 Authorization Code를 발급 받을 수 있다.
  - Client는 이 서버로 Authorization Code을 넘겨 Token을 발급 받을 수 있다.

## OAuth Flow

![image](https://user-images.githubusercontent.com/90181028/212653795-f7d65874-64d9-4736-888d-1157f015c40e.png)

- 보통 Authorization Server로 부터 access token(비교적 짧은 만료기간을 가짐) 과 refresh token(비교적 긴 만료기간을 가짐)을 함께 부여 받는다.
- access token은 보안상 만료기간이 짧기 때문에 얼마 지나지 않아 만료되면 사용자는 로그인을 다시 시도해야한다.
- refresh token이 있다면 access token이 만료될 때 refresh token을 통해 access token을 재발급 받아 재 로그인 할 필요없게끔 한다.

### JWT vs OAuth

- `JWT`와 `OAuth 2.0`는 서로가 추구하는 목적이 다르다.
- `OAuth 2.0`는 하나의 플랫폼의 권한(아무 의미없는 무작위 문자열 토큰)으로 다양한 플랫폼에서 권한을 행사할 수 있게 해줌으로써 **리소스 접근이 가능하게 하는데 목적**을 두고있다.
- JWT는 Cookie, Session을 대신하여 의미있는 문자열 토큰으로써 권한을 행사할 수 있는 토큰의 한 형식
- JWT는 로그인 세션이나 주고받는 값이 유효한지 검증할 때 주로 쓰인다.
- OAuth 2.0 에서 의미없는 정보를 가지는 토큰이 의미있는 정보를 가져야한다면 두 기술을 혼합하여 access token 을 JWT 형식으로 구현할 수도 있다.

#### Reference

- [https://hwannny.tistory.com/92](https://hwannny.tistory.com/92)

---

[Back](../README.md)

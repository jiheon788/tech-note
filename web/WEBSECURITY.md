# Web Security

## CORS (Cross-Origin Resource Sharing)

CORS는 Cross-Site HTTP Request를 가능하게 하는 표준 규약이다. HTTP 요청은 기본적으로 Cross-Site HTTP Request가 가능하다. (e.g. `<img>`, `<link>` 태그 등) 하지만 `<script></script>` 로 둘러 쌓여 있는 스크립트에서 생성된 Cross-Site HTTP Request는 SOP(Same-Origin Policy)를 적용 받기 때문에 Cross-Site HTTP Request가 불가능하다. 서로 다른 출처의 웹 사이트가 통신하는데 제약이 없으면 악의적인 사용자가 웹 사이트 정보를 탈튀할 수도 있기 때문이다. CORS는 추가 HTTP 헤더를 사용하여 한 출처에서 다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하도록 브라우저에게 알려주는 체제이다.

> Same Origin Policy란 어떤 출처에서 불러온 문서나 스크립트가 다른 출처에서 가져온 리소스와 상호작용하는 것을 제한하는 중요한 보안 방식이다

## XSS (Cross Site Scripting)

XSS는 클라이언트가 서버를 신뢰해서 벌어지는 보안 이슈이다. 서버에 요청하고 일방향으로 응답을 받는 점을 악용해 게시판이나 웹 메일 등에 자바스크립트와 같은 스크립트 코드를 삽입하여 개발자가 고려하지 않은 기능이 작동하게 하여 클라이언트를 공격하는 기법이다.

### XSS를 방지하는 방법

XSS 공격은 IPS, IDS, 방화벽 등으로도 방지할 수가 없기 때문에 단순히 문자를 필터링 하는 등의 방법만이 존재한다. XSS 공격은 입력값에 대한 검증이 제대로 이루어지지 않아 발생하는 취약점이다. 때문에 사용자의 모든 입력값에 대하여 주로 스크립트를 실행하기 위한 특수문자를 정규표현식으로 필터링해야 한다.

```javascript
// e.g. 스크립트 태그의 < 부분을 필터링
.replace(/</g, '&lt;');
```

## CSRF (Cross Site Request Forgery)

CSRF는 XSS와 반대로 서버가 클라이언트를 신뢰해서 벌어지는 보안 이슈이다. XSS를 이용한 공격이 사용자가 특정 웹사이트를 신뢰하는 점을 노린 것이라면, CSRF는 특정 웹사이트가 사용자의 웹 브라우저를 신뢰하는 상태를 노린 것이다. 사용자가 자신의 의지와는 무관하게 공격자가 의도한 행위(수정, 삭제, 등록 등)를 특정 웹 사이트에 요청하게 한다.

사용자가 인증정보를 가진 채(로그인한 상태)로 해커의 링크를 누르면 해커는 인증(로그인) 정보를 가로채서 이를 이용해 사용자가 요청한 것 처럼 위조된(공격) 요청을 보낸다.

### CSRF를 방지하는 방법

백엔드단에서 request의 referrer를 확인해서 domain이 일치하는지 검사한다. 일반적으로 referrer 검증만으로 대부분의 CSRF 공격을 방어할 수 있다.  
referrer 검증이 불가능하다면, Security Token을 활용한다. 사용자의 세션에 임의의 난수값을 저장하고 사용자의 요청마다 해당 난수 값을 포함시켜 전송한다. 이후 백엔드단에서 요청을 받을 때마다 세션에 저장된 토큰 값과 요청 파라미터에 전달되는 토큰 값이 일치하는지 검사한다.

#### Reference

- [https://hyojin96.tistory.com](https://hyojin96.tistory.com/entry/web-security-XSS-CSRF-CORS%EC%99%80-OPTIONS-%EB%A9%94%EC%84%9C%EB%93%9C)

---

[Back](../README.md)

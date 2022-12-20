# JWT (JSON Web Token)

JWT는 유저를 인증하고 식별하기 위한 토큰기반 인증이다. 토큰 자체에 사용자의 권한 정보나 서비스를 이용하기 위한 정보를 포함한다. JWT를 사용하면 무상태인 환경에서 사용자 데이터를 주고 받을 수 있다.

1. 클라이언트 사용자가 아이디, 패스워드를 통해 웹서비스 인증
2. 서버에서 서명된 JWT를 생성하여 클라이언트 응답으로 돌려주기
3. 클라이언트가 서버에 추가적인 요청을 할 때 JWT를 헤더에 첨부
4. 서버에서 클라이언트로 온 JWT를 검증

## 서명

가져온 로그인 데이터를 base64를 기반으로 인코딩한다.

```jsx
jwt.sign(
  {
    email: email,
    name: checkEmail.name,
  },
  jwtConfig.secret,
  {
    expiresIn: "1d",
  },
  (err, token) => {
    if (err) {
      res.status(401).json({ status: false, message: "로그인을 해주세요." });
    } else {
      res.json({
        status: true,
        accessToken: token,
        email: email,
        name: checkEmail.name,
      });
    }
  }
);
```

### 인코딩 데이터

정상적으로 데이터를 인코딩하면 다음과 같이 만들어진다.

<aside>
💡 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
</aside>

![Untitled](./Untitled.png)

빨간색 부분은 HEADER로 HS256으로 이루어진 JWT라는 것을 알려주고 있다. 분홍색 부분은 `PAYLOAD`로 서명을 위해 직접 넣은 데이터 이다. 파란색 부분은 `VERIFY SIGNATURE`로 서명을 확인하기 위해 사용되는 부분이다. 중간에 존재하는 `your-256-bit-secret`은 서버에서 서명을 해준 뒤 비밀 값을 넣어준다.

## 인증

> request의 Header안에 Token값을 가져와 인증을 처리한다.

```jsx
module.exports = async (req, res, next) => {
  const accessToken = req.header("accessToken");
  if (accessToken === null || accessToken === undefined) {
    res
      .status(403)
      .json({ success: false, errormessage: "Authentication fail" });
    try {
      const tokenInfo = await new Promise((resolve, reject) => {
        jwt.verify(accessToken, jwtConfig.secret, (err, decoded) => {
          if (err) {
            reject(err);
          } else {
            resolve(decoded);
          }
        });
      });
      req.tokenInfo = tokenInfo;
      next();
    } catch (err) {
      console.log(err);
      res
        .status(403)
        .json({ success: false, errormessage: "Authentication fail" });
    }
  }
};
```

Token을 가져온 후 빈 값을 체크한다. 만약 Token이 존재하지 않는다면 에러가 일어나게 되고, 정상적으로 Token이 존재한다면? 인증을 진행한다. token값을 인증 처리 한 후, token의 정보를 req.tokenInfo부분에 저장한다.

즉, 클라이언트에서 로그인을 하면 서버는 사용자의 이메일과 비밀번호를 확인한 뒤, 토큰을 클라이언트에게 준다. 클라이언트는 이 토큰을 cookie or session or localstorage에 저장한다.

가장 좋은 방법은?

## cookie

> JWT를 저장하기 위해서 클라이언트의 쿠키에 저장하는 것은 XSS공격에 취약합니다. 만약 앱 외부의 Javascript에서 클라이언트에서 읽을 수 있는 경우 도난 당할 수 있습니다. ex : 다른 웹페이지에서 해당 쿠키를 가져오려고 시도하는 경우! .. 또한 쿠키는 [CSRF공격](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)에도 취약합니다. 쿠키를 사용하기 위해서는 그만큼 완화 전략이 필요합니다. (방어능력) ServerSide같은 경우 조금 더 안전함.

쿠키는 데이터를 4KB까지 저장하는 HTTP 통신의 무상태성을 보안해주기 위해 나온 공간이다. 쿠키의 특징은 타음과 같다.

- 서버에서 접근할 수 있다.
- HTTP Request시 자동으로 포함된다.
- HttpOnly 설정을 추가하여 JavaScript의 접근을 막을 수 있다.(Script를 이용한 공격인 XSS를 차단한다.)

장점

- HttpOnly 옵션을 통해 XSS공격 방어 가능
- Secure 옵션을 통해 쿠키를 HTTPS로만 전송되게 만들어 보안 수준을 높일 수 있음

단점

- 한정된 도메인에서만 사용이 가능함> 토큰이 필요 해질 때 기존 토큰을 이용하여 새 토큰을 받아올 수 있도록 api 설계를 통해 해결
- CSRF 공격에 위험성이 생김> CORS를 허용한 URL에서 보내는 요청이 아니면 막는 방법을 통해 해결

---

## localStorage

> 가장 간편하지만 XSS부분에서 가장 취약합니다.

장점

- 구현하기 쉽다.
- 하나의 도메인에 제한되어 있지 않다.

단점

- LocalStorage에 접근하면 바로 토큰에 접근할 수 있다.
- 따라서 XSS 해킹 공격을 통해 토큰이 쉽게 탈취될 수 있다.

**JWT 규정 사이트**

[OWASP JWT Cheatsheet](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.md),  [OWASP ASVS(Application Security Verification Standard)](https://github.com/OWASP/ASVS)

---

## sessionStorage사용

> localStorage와 비슷하지만 유효기간 설정이 가능하고, 브라우저가 종료되면 사라진다.

### refreshToken을 사용하는 이유

만약 node.js서버에서 하루라는 시간동안 jwt토큰을 저장하고 있는데, 만약 그 토큰이 다른 공격자에게 탈취를 당한다면? 피해자와 공격자의 접근을 구분할 수 없게된다.

인증 토큰을 탈취 당했다는 것 자체가 문제지만 일단 이런 문제가 발생했을 때 어떻게 피해를 최소화할 수 있을까? 이 때 사용할 수 있는 것이 `Refresh Token`이다.

- Access Token의 유효 기간을 짧게 설정한다.
- Refresh Token의 유효 기간은 길게 설정한다.
- 사용자는 Access Token과 Refresh Token을 둘 다 서버에 전송하여 전자로 인증하고 만료됐을 시 후자로 새로운 Access Token을 발급받는다.
- 공격자는 Access Token을 탈취하더라도 짧은 유효 기간이 지나면 사용할 수 없다.
- 정상적인 클라이언트는 유효 기간이 지나더라도 Refresh Token을 사용하여 새로운 Access Token을 생성, 사용할 수 있음.

만약 refreshToken마저 탈취를 당한경우?

- 데이터베이스에 각 사용자에 1대1로 맵핑되는 Access Token, Refresh Token 쌍을 저장한다.
- 정상적인 사용자는 기존의 Access Token으로 접근하며 서버측에서는 데이터베이스에 저장된 Access Token과 비교하여 검증한다.
- 공격자는 탈취한 Refresh Token으로 새로 Access Token을 생성한다. 그리고 서버측에 전송하면 서버는 데이터베이스에 저장된 Access Token과 공격자에게 받은 Access Token이 다른 것을 확인한다.
- 만약 데이터베이스에 저장된 토큰이 아직 만료되지 않은 경우, 즉 굳이 Access Token을 새로 생성할 이유가 없는 경우 서버는 Refresh Token이 탈취당했다고 가정하고 두 토큰을 모두 만료시킨다.
- 이 경우 정상적인 사용자는 자신의 토큰도 만료됐으니 다시 로그인해야 한다. 하지만 공격자의 토큰 역시 만료됐기 때문에 공격자는 정상적인 사용자의 리소스에 접근할 수 없다.

#### Reference

- [https://pronist.dev/143#JWT-JSON%--Web%--Token-](https://pronist.dev/143#JWT-JSON%--Web%--Token-)

<div align="right">- CreatedAt 2022.12.20</div>

---

[Back](./README.md)

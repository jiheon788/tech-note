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

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

![Untitled](https://user-images.githubusercontent.com/90181028/208652724-74e049db-cfff-41fc-bd05-dc54de33e858.png)

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

## 인증 & 인가

#### 인증 (Authentication)

인증은 사용자가 누구인지 확인하는 과정입니다. 이는 보통 로그인 페이지에서 사용자가 아이디와 비밀번호를 입력하여 자신의 신원을 증명하는 방식으로 이루어집니다. 다른 인증 방법으로는 생체 인식, OTP(일회용 비밀번호), 스마트 카드 등이 있습니다. 인증은 사용자가 자신이 주장하는 사람이라는 것을 시스템에 증명하는 첫 단계입니다.

#### 인가 (Authorization)

인가는 인증된 사용자가 수행할 수 있는 작업을 결정하는 과정입니다. 사용자가 로그인하여 시스템에 접근할 수 있도록 인증을 받았다 하더라도, 그 사용자가 시스템 내에서 할 수 있는 일은 인가에 의해 결정됩니다. 예를 들어, 일반 사용자는 내용을 볼 수만 있지만, 관리자는 내용을 편집하거나 삭제할 수 있는 권한을 가지고 있습니다.

간단하게 말하면, 인증은 "당신이 누구냐"를 확인하는 과정이며, 인가는 "당신이 무엇을 할 수 있냐"를 정하는 과정입니다.

#### Reference

- [https://pronist.dev/143#JWT-JSON%--Web%--Token-](https://pronist.dev/143#JWT-JSON%--Web%--Token-)

<div align="right">- CreatedAt 2022.12.20</div>

---

[Back](../README.md)

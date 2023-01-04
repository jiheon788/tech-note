# AJAX 란?

> AJAX는 그 자체가 기술은 아닙니다. 하지만 HTML, XHTML 등 을 비롤한 기존의 여러 기술을 사용하는 새로운 접근법이라고 설명할 수 있습니다.

- `Ajax`는 JavaScript의 라이브러리 중 하나
- `Asynchronous Javascript And Xml`(비동기식 자바스크립트와 xml)의 약자
- 브라우저가 가지고 있는 `XMLHttpRequest` 객체를 이용해서 전체페이지를 새로 고치지 않고 페이지의 일부만을 위한 데이터를 로드하는 기법
- JS를 사용한 비동기 통신
- 클라이언트 - 서버 간에 XML 데이터를 주고받는 기술

## Ajax의 장점

- 웹페이지 속도 향상
- 서버의 처리의 완료를 기다리지 않고 처리 가능하다.
- 서버에서 데이터만 전송하면 되므로 전체적인 코딩의 양이 줄어든다.
- 기존 웹어서는 불가능했던 다양한 UI를 가능하게 해준다. ( Flickr의 경우, 사진의 제목이나 태그를 페이지의 리로드 없이 수정할 수 있다.)

## Ajax의 단점

- 히스토리 관리가 안 된다. (보안에 좀 더 신경을 써야한다.)
- 연속으로 데이터를 요청하면 서버 부하가 증가
- XMLHttpRequest를 통해 통신을 하는 경우 사용자에게 아무런 진행 정보가 주어지지 않는다.

## Ajax의 사용

```javascript
//  XMLHttpRequest를 이용하여 요청
function reqListener(e) {
  console.log(e.currentTarget.response);
}

var oReq = new XMLHttpRequest();
var serverAddress = "https://hacker-news.firebaseio.com/v0/topstories.json";

oReq.addEventListener("load", reqListener);
oReq.open("GET", serverAddress);
oReq.send();

// jQuery나 기타 AJAX 기능이 내장되어 있는 라이브러리를 이용하여 AJAX 요청을 처리
$.ajax({
    url: ,
    type: 'GET',
    success: function onData (data) {
        console.log(data);
    },
    error: function onError (error) {
        console.error(error);
    }
});
```

#### Reference

- [https://coding-factory.tistory.com/143](https://coding-factory.tistory.com/143)
- [https://velog.io/@surim014](https://velog.io/@surim014/AJAX%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80)

<div align="right">- CreatedAt 2023.01.04</div>

---

[Back](../README.md)

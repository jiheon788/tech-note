# Doctype 이란?

**문서형식선언**(Document Type Declaration)은 어떤 SGML이나 XML 기반 문서 내에 **그 문서가 특정 문서 형식 정의(DTD)를 따름을 지정하는 것** 입니다.

DOCTYPE 선언은 HTML 문서에서 <html> 태그를 정의하기 전에 가장 먼저 선언되어야만 합니다.

이러한 DOCTYPE 선언은 HTML 태그는 아니지만, 선언된 페이지의 HTML 버전이 무엇인지를 웹 브라우저에 알려주는 역할을 하는 선언문으로, 대소문자를 구분하지 않습니다.

HTML 4.01에서 DOCTYPE 선언은 SGML을 기반으로 하기 때문에 DTD를 참조해야 합니다. DTD는 브라우저가 콘텐츠를 정확하게 표현하도록 마크업 언어에 대한 규칙을 명시합니다.

하지만 HTML5는 SGML을 기반으로 하지 않기 때문에 DTD를 참조할 필요가 없습니다.

웹 브라우저에서는 문서형식 선언이 없다면 쿼크모드로 렌더링 하여 브라우저마다 다른 형태의 결과물을 보여줍니다. 문서 형식 선언을 하면 HTML문서를 표준모드로 렌더링할 수 있습니다.

- 표준모드: 브라우저가 출력하고자 하는 문서가 최신이라 판단되면 표준모드로 렌더링 하는데, CSS2 스펙에 따라 CSS가 적용되었다는 것을 의미한다.

- 쿼크모드: 오래된 웹 페이지의 하위 호환성 유지를 위해 사용되며, W3C나 IETF의 표준을 엄격하게 준수하지 않는다. 같은 코드라도 웹 브라우저마다 다르게 해석해서 다른 결과물을 보여준다.

#### Sample

```html
<!-- HTML 4.01 -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">

<!-- HTML 5 -->
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>HTML !DOCTYPE declaration</title>
  </head>
  <body>
    <p>이 문서는 HTML 문서입니다.</p>
  </body>
</html>
```

#### Reference

- [http://www.tcpschool.com/html-tags/doctype](http://www.tcpschool.com/html-tags/doctype)

---

[Back](../README.md)

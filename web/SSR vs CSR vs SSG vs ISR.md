# SSR vs CSR vs SSG vs ISR

웹 개발에서 SSR, CSR, SSG, ISR은 다양한 렌더링 방식을 나타내는 용어들입니다.

## SSR (Server-Side Rendering)

- 웹페이지의 렌더링이 서버에서 이루어집니다.
- 사용자가 페이지를 요청할 때마다 서버는 HTML을 생성하고 완성된 페이지를 사용자에게 보냅니다.
- 이 방식은 초기 로딩 속도가 빠르고 검색 엔진 최적화(SEO)에 유리합니다.
- e.g. 전통적인 PHP, ASP.NET, Node.js 등을 이용한 웹페이지.

## CSR (Client-Side Rendering)

- 웹페이지의 렌더링이 사용자의 브라우저(클라이언트)에서 이루어집니다.
- 서버는 HTML의 틀과 JavaScript를 보내고, JavaScript가 브라우저에서 실행되면서 페이지를 완성합니다.
- 초기 로딩은 느리지만, 한 번 로딩되고 나면 사용자 경험이 매우 부드러워집니다.
- e.g. Angular, React, Vue.js 등의 SPA(Single-Page Application).

## SSG (Static Site Generation)

- 빌드 타임에 웹사이트의 모든 페이지를 미리 생성하여 정적 파일로 만듭니다.
- 사용자가 요청할 때마다 이미 생성된 정적 파일을 서버가 바로 제공합니다.
- 매우 빠른 로딩 속도와 높은 성능, 좋은 SEO 이점을 가지고 있습니다.
- e.g. Next.js, Gatsby, Hugo 등을 이용한 정적 사이트.

## ISR (Incremental Static Regeneration)

- SSG의 확장 개념으로, 사이트를 빌드할 때 일부 페이지만 생성하고, 나머지 페이지는 사용자의 요청이 있을 때 점진적으로 - 생성합니다.
- 페이지가 요청될 때 만들어지며, 한 번 생성된 페이지는 캐싱되어 빠르게 제공됩니다.
- 변화하는 데이터에 유연하게 대응할 수 있는 SSG의 장점을 살린 방식입니다.
- e.g. Next.js의 ISR 기능.

#### Reference

- [www.google.com](www.google.com)

---

[Back](../README.md)

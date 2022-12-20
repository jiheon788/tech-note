# CI/CD 이란?

## CI (Continuous integration, 지속적 통합)

CI는 빌드와 테스트를 자동화해서 공유 저장소에 병합시키는 프로세스를 뜻한다. 깃과 같은 버전관리 시스템을 이용할 때 여러 개발자가 하나의 공유저장소를 사용하는 경우가 많다. 이 경우 충돌이 발생하기 쉬운데 CI는 빌드/테스트 자동화부터 코드의 일관성을 제공해 지속적으로 통합한다는 용어이다.

## CD (Continuous Delivery / Deploy, 지속적 전달 / 배포)

CD는 CI의 빌드/테스트를 통해서 정상적으로 수행됨을 확인하면 이는 배포를 수동으로 하느냐 자동으로 하느냐에 따라 2가지로 나뉜다.

- 지속적 전달: 프로덕션 배포를 위한 상태가 되고 배포는 수동으로 한다. 개발팀과 비즈니스팀간의 커뮤니케이션을 돕는다.
- 지속적 배포: 프로덕션까지 자동으로 배포하며 어플리케이션의 제공 속도를 향상시킨다.

CI/CD의 대표적인 서비스로 Jenkins, Travis CI, Circle CI 등이 있다.

#### Reference

- [https://github.com/baeharam/Must-Know-About-Frontend/blob/main/Notes/frontend/ci-cd.md](https://github.com/baeharam/Must-Know-About-Frontend/blob/main/Notes/frontend/ci-cd.md)

<div align="right">- CreatedAt 2022.12.20</div>

---

[Back](./README.md)

# OSI 7 Layer & TCP/IP 4 Layer?

![img](./../images/osi7_tcpip.png)

## OSI 7 Layer Overview

OSI 모델은 국제표준화기구(ISO)에서 개발한 네트워크 기술의 기본이 되는 모델로, 컴퓨터 네트워크 프로토콜 디자인과 통신을 계층으로 나누어 설명한 것이다. 시스템간의 통신을 제공하는 프로토콜의 집합, 7개의 레이어로 이루어져 있다.

## OSI 7 Layer

1. Physical Layer - 물리계층

- 데이터를 물리 매체상으로 전송하는 역할, 전송을 위해 필요한 물리적 링크의 설정, 유지, 해제를 담당한다.
- 시스템 간의 물리적인 연결과 전기 신호를 변환 및 제어
- 전송 단위는 `Bit`을 사용
- 데이터 전달의 역할

2. Data-Link Layer - 데이터링크 계층

- 네트워크 기기 간의 데이터 전송 및 물리 주소를 결정
- 전송 단위는 `Frame`, 주소는 `Mac`
- 물리게층의 있는 그대로의 전송설비를 신뢰할 수 있는 링크로 변환
- 네트워크 계층에서 정보를 받아 주소와 제어 정보를 헤더와 테일에 추가한다.

3. Network Layer - 네트워크 계층

- 다른 네트워크와 통신하기 위한 경로 설정 및 논리 주소를 결정
- 전송단위는 `Packet`, 주소는 `IP`
- 송신측에서 수신측까지 데이터를 안전하게 전달하기 위한 논리적링크를 설정, 상위계층 데이터를 작은 크기의 패킷으로 분할하여 전송하는 역할

4. Transport Layer - 전송계층

- 신뢰할 수 있는 통신을 구현
- 전송단위는 `Segment`, 주소는 `Port`

5. Session Layer - 세션계층

- 세션 체결, 통신 방식을 결정
- 전송 단위는 `message`

6. Presentation Layer - 표현계층

- 문자 코드, 압축, 암호화 등의 데이터를 변환
- 전송 단위는 `message`

7. Applicaion Layer - 응용계층

- 이메일 & 파일 전송, 웹사이트 조회 등 애플리케이션의 서비스 제공
- 전송 단위는 `message`

## TCP/IP 4 Layer Overview

현재의 인터넷에서 컴퓨터들이 정보를 주고 받는데 쓰이는 프로토콜의 모음이다.

## TCP/IP 4 Layer

1. Network Access Layer - 네트워크 접속 계층

- OSI 7 계층에서 물리계층과 데이터링크 계층
- 하드웨어적인 요소와 관련된 모든 것을 지원하는 계층

2. Internet Layer - 인터넷 계층

- OSI 7 계층에서 네트워크 계층
- 전송계층으로부터 받은 데이터에 IP패킷헤더를 붙여 `IP패킷`으로 만들어 전송

3. Transport Layer - 전송 계층

- OSI 7 계층에서 전송 계층
- 네트워크 양단의 송수신 호스트 사이에서 신뢰성 있는 전송기능 제공
- 시스템의 논리주소와 포트를 가지고 있어서 각 상위 계층의 프로세스를 연결해서 통신
- 정확한 패킷의 전송을 보장하는 TCP와 정확한 정송을 보장하지 않는 UDP 프로토콜을 이용
- 데이터의 정확한 전송보다 빠른 속도의 전송이 필요한 멀티미디어 통신에서 UDP가 유용

4. Application Layer - 응용 계층

- OSI 7 계층에서 세션, 프레젠테이션, 애플리케이션 계층

## 각 계층별 관련 프로토콜

![layer](./../images/layer.jpg)

- Application Layer
  - FTP (File Transfer Protocol)
  - VSFTP (Very Secure File Transfer Protocol)
  - SNMP (Simple Network Management Protocol)
  - SMTP (Simple Mail Transfer Protocol)
  - HTTP (Hyper Text Transfer Protocol)
  - HTTPS (Hyper Test Transfer Protocol Secure)
  - DNS (Domain Name System)
- Transport Layer
  - TCP (Transmission Control Protocol)
  - UDP (User Datagram Protocol)
  - SCTP (Stream Control Transmission Protocol)
- Network Layer
  - IP (Internet Protocol)
  - ICMP (Internet Control Message Protocol)
  - IGMP (Internet Group Message Protocol)
  - ARP (Address Resolution Protocol)
  - RARP (Reverse Address Resolution Protocol)
- Data-Link Layer
  - 이더넷
    - 이더넷에 접속되어 있는 장치들은 어느때라도 데이터를 전송할 수 있는데, 전송하기 전에 회선이 사용 중인지 감시하고 있다가 회선이 비어 있을 때 데이터를 전송
    - 데이터를 전송하는 시점에 다른 장치가 동시에 전송을 개시하면 충돌이 발생하게 되며, 충돌한 데이터들은 버려지고 데이터를 전송한 장치들에게 재전송을 요구

#### Reference

- [https://goitgo.tistory.com/25](https://goitgo.tistory.com/25)

<div align="right">- CreatedAt 2022.12.02</div>
<div align="right">- UpdatedAt 2022.12.04</div>

---

[Back](./README.md)

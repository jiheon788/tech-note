# OSI 7 Layer & TCP/IP 4 Layer?

> OSI 모델은 네트워크를 이해하고 설명하는 데 유용한 이론적 모델이고, TCP/IP 모델은 실제 네트워킹 프로토콜의 구현을 기반으로 하는 실용적 모델이라고 할 수 있습니다.

![img](./../images/osi7_tcpip.png)

## OSI 7 Layer Overview

OSI 7 Layer 모델은 네트워킹을 이해하기 위한 개념적인 프레임워크로, 데이터 통신 과정을 7개의 계층으로 나눕니다. 각 계층은 다음과 같습니다:

## OSI 7 Layer

1. 물리 계층(Physical Layer): 물리적인 매체를 통한 데이터의 전기적 신호 전송을 담당합니다.
2. 데이터 링크 계층(Data Link Layer): 맥(MAC) 주소를 통한 노드 간의 데이터 전송을 관리하며, 오류 검출 및 수정을 수행합니다.
3. 네트워크 계층(Network Layer): IP 주소를 사용하여 다양한 네트워크 간의 데이터 라우팅을 담당합니다.
4. 전송 계층(Transport Layer): TCP/UDP 프로토콜을 통해 호스트 간의 데이터 전송을 관리하며, 신뢰성과 흐름 제어를 제공합니다.
5. 세션 계층(Session Layer): 통신 세션을 구성, 관리, 종료하는 역할을 합니다.
6. 표현 계층(Presentation Layer): 데이터의 형식을 정의하고, 암호화 및 압축과 같은 변환 작업을 담당합니다.
7. 응용 계층(Application Layer): 사용자가 네트워크에 접근할 수 있도록 인터페이스를 제공하며, 이메일 및 파일 전송과 같은 응용 서비스를 포함합니다.

## TCP/IP 4 Layer Overview

반면, TCP/IP 4 Layer 모델은 인터넷에서 사용되는 실질적인 프로토콜 스택으로, OSI 모델을 좀 더 단순화하여 4개의 계층으로 구성됩니다:

## TCP/IP 4 Layer

1. 링크 계층(Link Layer): OSI의 물리 계층과 데이터 링크 계층의 기능을 합친 것으로, 물리적 네트워크 하드웨어와 매체에 관한 것입니다.
2. 인터넷 계층(Internet Layer): OSI의 네트워크 계층에 해당하며, IP 프로토콜을 통한 패킷 라우팅을 담당합니다.
3. 전송 계층(Transport Layer): OSI 모델의 전송 계층과 동일하게, 데이터의 전송을 담당하며 TCP와 UDP 프로토콜을 사용합니다.
4. 응용 계층(Application Layer): OSI의 세션 계층, 표현 계층, 응용 계층을 아우르며, 사용자에게 서비스를 직접 제공합니다.

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
<div align="right">- UpdatedAt 2023.11.05</div>

---

[Back](../README.md)

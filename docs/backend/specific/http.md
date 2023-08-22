[[toc]]

## HTTP 개요

- HTTP는 HTML문서와 같은 리소스들을 가져올 수 있게 해주는 프로토콜
- HTTP는 웹에서 이루어지는 모든 데이터 교환의 기초이며, 클라이언트-서버 프로토콜

![alt](../../images/http1.png)

- 클라이언트와 서버들은 개별적인 메세지 교환에 의해 통신한다
- 클라이언트에서 서버로 보내는게 requests, 서버에서 클라로 보네는게 response

## HTTP 기반 시스템의 구성 요소
- HTTP는 클라-서버 프로토콜
- 클라는 서버로 요청을 보내고, 서버는 클라로 응답을 하게 되는데, 이 요청과 응답 사이에는 여러개의 개체들이 있다
- 예를 들어 게이트웨이, 캐시, 프록시 등..

![alt](../../images/http2.png)

- 실제 브라우저와 요청을 처리하는 서버 사이에는 많은 컴퓨터들이 숨어 있다
- 라우터, 모뎀 등
- 웹의 계층적인 설계 (OSI 7) 덕에 이런 부분들은 네트워크와 전송 계층 내로 숨겨진다
- HTTP는 어플리케이션 계층의 최상단에 존재한다

### 클라이언트 : 사용자 에이전트
- 말그대로 클라이언트 브라우저를 뜻함
- 브라우저는 HTTP 요청 내에서 값들을 조정하고, HTTP 응답을 해석해 사용자에게 보여주는 역할을 한다

### 웹 서버
- 클라이언트에 의한 요청에 대한 문서를 제공하는 서버

### 프록시
- HTTP 전달 과정에서 여러개의 컴퓨터/머신을 통과한다
- 대부분 전송, 네트워크 혹은 물리 계층에서 동작하며, 성능에 상당히 큰 영향을 주지만 HTTP 계층은 이들의 동작이 어떻게 되는지 모른다
- 이러한 컴퓨터 머신 중 어플리케이션 계층에서 동작하는 것들을 일반적으로 프록시 라고 명명한다
    - 캐시
    - 필터링
    - 로드밸런싱
    - 인증
    - 로깅
    - 등등..

## HTTP의 기초적인 측면
### HTTP는 간단하다
- 사람이 읽기 쉽게 고안

### HTTP는 확장 가능
- HTTP 헤더는 HTTP를 확장하고 실험하기 쉽게 만듬
- 클라이언트와 서버가 새로운 헤더의 시맨틱에 대해 간단히 협의하면 새로운 기능 추가가 가능하다

### HTTP는 상태는 없지만, 세션은 존재
- HTTP는 상태를 저장하지 않는다 (Stateless)
- 상태가 없으면 불편할 것 같지만, HTTP 쿠키는 상태가 있는 세션을 만들도록 해준다

### HTTP와 연결
- 연결은 전송 계층에서 제어되므로 근본적으로 HTTP 영역 밖이다
- HTTP는 연결 될 수 있도록 하는 근본적인 전송 프로토콜을 요구하지 않는다
- 그냥 신뢰할 수 있거나 메세지 손실이 없는 연결을 요구한다 (오류는 표시해줌)
- 보통 TCP를 더 신뢰해서 TCP 표준에 의존한다
- HTTP 1.0의 기본 동작은 각 요청.응답에 대해 별도의 TCP를 여는 것
- 이러한 동작은 여러 요청을 연속해서 보내면 매번 TCP를 열어야 돼서 비효율적이다
- 이런 문제 개선을 위해 1.1이 나왔고, 파이프라이닝 개념과 지속적인 연결의 개념을 도입
    - 기본적인 TCP 연결은 Connection 헤더를 사용해 부분적으로 제어 가능
- Http/2는 좀 더 지속적이고 효율적인 연결을 도와준다

## HTTP로 제어할 수 있는 것
- 캐시
- origin 제약사항 완화 (cors)
- 인증
- 프로시와 터널링
- 세션

## HTTP 흐름

```java
1. TCP 연결을 연다
2. HTTP 메세지를 전송

GET / HTTP/1.1
Host: abcd.efg.org
Accept-Language: kr

3. 응답을 읽는다

HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html... 

4. 연결을 닫거나 다른 요청들을 위해 재사용
```

## HTTP 메시지

- 요청

![alt](../../images/http3.png)

- 응답

![alt](../../images/http4.png)

## 참조
- [HTTP 개요](https://developer.mozilla.org/ko/docs/Web/HTTP/Overview)
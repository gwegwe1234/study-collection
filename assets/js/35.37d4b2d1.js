(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{231:function(t,s,a){t.exports=a.p+"assets/img/http1.8cfeef1d.png"},232:function(t,s,a){t.exports=a.p+"assets/img/http2.929f4051.png"},233:function(t,s,a){t.exports=a.p+"assets/img/http3.d2fb5602.png"},234:function(t,s,a){t.exports=a.p+"assets/img/http4.94e095a3.png"},659:function(t,s,a){"use strict";a.r(s);var r=a(0),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#http-개요"}},[t._v("HTTP 개요")])]),r("li",[r("a",{attrs:{href:"#http-기반-시스템의-구성-요소"}},[t._v("HTTP 기반 시스템의 구성 요소")]),r("ul",[r("li",[r("a",{attrs:{href:"#클라이언트-사용자-에이전트"}},[t._v("클라이언트 : 사용자 에이전트")])]),r("li",[r("a",{attrs:{href:"#웹-서버"}},[t._v("웹 서버")])]),r("li",[r("a",{attrs:{href:"#프록시"}},[t._v("프록시")])])])]),r("li",[r("a",{attrs:{href:"#http의-기초적인-측면"}},[t._v("HTTP의 기초적인 측면")]),r("ul",[r("li",[r("a",{attrs:{href:"#http는-간단하다"}},[t._v("HTTP는 간단하다")])]),r("li",[r("a",{attrs:{href:"#http는-확장-가능"}},[t._v("HTTP는 확장 가능")])]),r("li",[r("a",{attrs:{href:"#http는-상태는-없지만-세션은-존재"}},[t._v("HTTP는 상태는 없지만, 세션은 존재")])]),r("li",[r("a",{attrs:{href:"#http와-연결"}},[t._v("HTTP와 연결")])])])]),r("li",[r("a",{attrs:{href:"#http로-제어할-수-있는-것"}},[t._v("HTTP로 제어할 수 있는 것")])]),r("li",[r("a",{attrs:{href:"#http-흐름"}},[t._v("HTTP 흐름")])]),r("li",[r("a",{attrs:{href:"#http-메시지"}},[t._v("HTTP 메시지")])]),r("li",[r("a",{attrs:{href:"#참조"}},[t._v("참조")])])])]),r("p"),t._v(" "),r("h2",{attrs:{id:"http-개요"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-개요"}},[t._v("#")]),t._v(" HTTP 개요")]),t._v(" "),r("ul",[r("li",[t._v("HTTP는 HTML문서와 같은 리소스들을 가져올 수 있게 해주는 프로토콜")]),t._v(" "),r("li",[t._v("HTTP는 웹에서 이루어지는 모든 데이터 교환의 기초이며, 클라이언트-서버 프로토콜")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(231),alt:"alt"}})]),t._v(" "),r("ul",[r("li",[t._v("클라이언트와 서버들은 개별적인 메세지 교환에 의해 통신한다")]),t._v(" "),r("li",[t._v("클라이언트에서 서버로 보내는게 requests, 서버에서 클라로 보네는게 response")])]),t._v(" "),r("h2",{attrs:{id:"http-기반-시스템의-구성-요소"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-기반-시스템의-구성-요소"}},[t._v("#")]),t._v(" HTTP 기반 시스템의 구성 요소")]),t._v(" "),r("ul",[r("li",[t._v("HTTP는 클라-서버 프로토콜")]),t._v(" "),r("li",[t._v("클라는 서버로 요청을 보내고, 서버는 클라로 응답을 하게 되는데, 이 요청과 응답 사이에는 여러개의 개체들이 있다")]),t._v(" "),r("li",[t._v("예를 들어 게이트웨이, 캐시, 프록시 등..")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(232),alt:"alt"}})]),t._v(" "),r("ul",[r("li",[t._v("실제 브라우저와 요청을 처리하는 서버 사이에는 많은 컴퓨터들이 숨어 있다")]),t._v(" "),r("li",[t._v("라우터, 모뎀 등")]),t._v(" "),r("li",[t._v("웹의 계층적인 설계 (OSI 7) 덕에 이런 부분들은 네트워크와 전송 계층 내로 숨겨진다")]),t._v(" "),r("li",[t._v("HTTP는 어플리케이션 계층의 최상단에 존재한다")])]),t._v(" "),r("h3",{attrs:{id:"클라이언트-사용자-에이전트"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#클라이언트-사용자-에이전트"}},[t._v("#")]),t._v(" 클라이언트 : 사용자 에이전트")]),t._v(" "),r("ul",[r("li",[t._v("말그대로 클라이언트 브라우저를 뜻함")]),t._v(" "),r("li",[t._v("브라우저는 HTTP 요청 내에서 값들을 조정하고, HTTP 응답을 해석해 사용자에게 보여주는 역할을 한다")])]),t._v(" "),r("h3",{attrs:{id:"웹-서버"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#웹-서버"}},[t._v("#")]),t._v(" 웹 서버")]),t._v(" "),r("ul",[r("li",[t._v("클라이언트에 의한 요청에 대한 문서를 제공하는 서버")])]),t._v(" "),r("h3",{attrs:{id:"프록시"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#프록시"}},[t._v("#")]),t._v(" 프록시")]),t._v(" "),r("ul",[r("li",[t._v("HTTP 전달 과정에서 여러개의 컴퓨터/머신을 통과한다")]),t._v(" "),r("li",[t._v("대부분 전송, 네트워크 혹은 물리 계층에서 동작하며, 성능에 상당히 큰 영향을 주지만 HTTP 계층은 이들의 동작이 어떻게 되는지 모른다")]),t._v(" "),r("li",[t._v("이러한 컴퓨터 머신 중 어플리케이션 계층에서 동작하는 것들을 일반적으로 프록시 라고 명명한다\n"),r("ul",[r("li",[t._v("캐시")]),t._v(" "),r("li",[t._v("필터링")]),t._v(" "),r("li",[t._v("로드밸런싱")]),t._v(" "),r("li",[t._v("인증")]),t._v(" "),r("li",[t._v("로깅")]),t._v(" "),r("li",[t._v("등등..")])])])]),t._v(" "),r("h2",{attrs:{id:"http의-기초적인-측면"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http의-기초적인-측면"}},[t._v("#")]),t._v(" HTTP의 기초적인 측면")]),t._v(" "),r("h3",{attrs:{id:"http는-간단하다"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http는-간단하다"}},[t._v("#")]),t._v(" HTTP는 간단하다")]),t._v(" "),r("ul",[r("li",[t._v("사람이 읽기 쉽게 고안")])]),t._v(" "),r("h3",{attrs:{id:"http는-확장-가능"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http는-확장-가능"}},[t._v("#")]),t._v(" HTTP는 확장 가능")]),t._v(" "),r("ul",[r("li",[t._v("HTTP 헤더는 HTTP를 확장하고 실험하기 쉽게 만듬")]),t._v(" "),r("li",[t._v("클라이언트와 서버가 새로운 헤더의 시맨틱에 대해 간단히 협의하면 새로운 기능 추가가 가능하다")])]),t._v(" "),r("h3",{attrs:{id:"http는-상태는-없지만-세션은-존재"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http는-상태는-없지만-세션은-존재"}},[t._v("#")]),t._v(" HTTP는 상태는 없지만, 세션은 존재")]),t._v(" "),r("ul",[r("li",[t._v("HTTP는 상태를 저장하지 않는다 (Stateless)")]),t._v(" "),r("li",[t._v("상태가 없으면 불편할 것 같지만, HTTP 쿠키는 상태가 있는 세션을 만들도록 해준다")])]),t._v(" "),r("h3",{attrs:{id:"http와-연결"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http와-연결"}},[t._v("#")]),t._v(" HTTP와 연결")]),t._v(" "),r("ul",[r("li",[t._v("연결은 전송 계층에서 제어되므로 근본적으로 HTTP 영역 밖이다")]),t._v(" "),r("li",[t._v("HTTP는 연결 될 수 있도록 하는 근본적인 전송 프로토콜을 요구하지 않는다")]),t._v(" "),r("li",[t._v("그냥 신뢰할 수 있거나 메세지 손실이 없는 연결을 요구한다 (오류는 표시해줌)")]),t._v(" "),r("li",[t._v("보통 TCP를 더 신뢰해서 TCP 표준에 의존한다")]),t._v(" "),r("li",[t._v("HTTP 1.0의 기본 동작은 각 요청.응답에 대해 별도의 TCP를 여는 것")]),t._v(" "),r("li",[t._v("이러한 동작은 여러 요청을 연속해서 보내면 매번 TCP를 열어야 돼서 비효율적이다")]),t._v(" "),r("li",[t._v("이런 문제 개선을 위해 1.1이 나왔고, 파이프라이닝 개념과 지속적인 연결의 개념을 도입\n"),r("ul",[r("li",[t._v("기본적인 TCP 연결은 Connection 헤더를 사용해 부분적으로 제어 가능")])])]),t._v(" "),r("li",[t._v("Http/2는 좀 더 지속적이고 효율적인 연결을 도와준다")])]),t._v(" "),r("h2",{attrs:{id:"http로-제어할-수-있는-것"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http로-제어할-수-있는-것"}},[t._v("#")]),t._v(" HTTP로 제어할 수 있는 것")]),t._v(" "),r("ul",[r("li",[t._v("캐시")]),t._v(" "),r("li",[t._v("origin 제약사항 완화 (cors)")]),t._v(" "),r("li",[t._v("인증")]),t._v(" "),r("li",[t._v("프로시와 터널링")]),t._v(" "),r("li",[t._v("세션")])]),t._v(" "),r("h2",{attrs:{id:"http-흐름"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-흐름"}},[t._v("#")]),t._v(" HTTP 흐름")]),t._v(" "),r("div",{staticClass:"language-java extra-class"},[r("pre",{pre:!0,attrs:{class:"language-java"}},[r("code",[r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" TCP 연결을 연다\n"),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" HTTP 메세지를 전송\n\nGET "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" HTTP"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Host")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" abcd"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("efg"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Accept")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Language")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" kr\n\n"),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" 응답을 읽는다\n\nHTTP"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" OK\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sat")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("09")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Oct")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("2010")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("02")]),t._v(" GMT\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Server")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Apache")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Last")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Modified")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tue")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dec")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("2009")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" GMT\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ETag")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"51142bc1-7449-479b075b2891b"')]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Accept")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ranges")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bytes\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Content")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Length")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("29769")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Content")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Type")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" text"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html\n\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("DOCTYPE html"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" \n\n"),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v(" 연결을 닫거나 다른 요청들을 위해 재사용\n")])])]),r("h2",{attrs:{id:"http-메시지"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-메시지"}},[t._v("#")]),t._v(" HTTP 메시지")]),t._v(" "),r("ul",[r("li",[t._v("요청")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(233),alt:"alt"}})]),t._v(" "),r("ul",[r("li",[t._v("응답")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(234),alt:"alt"}})]),t._v(" "),r("h2",{attrs:{id:"참조"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#참조"}},[t._v("#")]),t._v(" 참조")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/HTTP/Overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP 개요"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);
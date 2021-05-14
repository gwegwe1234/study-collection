(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{658:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"_2강"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2강"}},[a._v("#")]),a._v(" 2강")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#restful-api"}},[a._v("RESTful API")]),s("ul",[s("li",[s("a",{attrs:{href:"#uri"}},[a._v("URI")])]),s("li",[s("a",{attrs:{href:"#uri-형식"}},[a._v("URI 형식")])]),s("li",[s("a",{attrs:{href:"#rest-서비스를-위한-uri-경로-설계"}},[a._v("REST 서비스를 위한 URI 경로 설계")])]),s("li",[s("a",{attrs:{href:"#http-동사"}},[a._v("HTTP 동사")])]),s("li",[s("a",{attrs:{href:"#uri-query-design"}},[a._v("URI query design")])]),s("li",[s("a",{attrs:{href:"#응답코드"}},[a._v("응답코드")])])])]),s("li",[s("a",{attrs:{href:"#rpc-api"}},[a._v("RPC API")])]),s("li",[s("a",{attrs:{href:"#api-버전-관리"}},[a._v("API 버전 관리")])]),s("li",[s("a",{attrs:{href:"#api-문서화"}},[a._v("API 문서화")]),s("ul",[s("li",[s("a",{attrs:{href:"#rest-api"}},[a._v("REST API")])]),s("li",[s("a",{attrs:{href:"#rpc-api"}},[a._v("RPC API")])])])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"restful-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restful-api"}},[a._v("#")]),a._v(" RESTful API")]),a._v(" "),s("ul",[s("li",[a._v("REST는 컴포넌트간 상호작용의 확장성, 범용적인 인터페이스, 컴포넌트의 독립적인 배포를 강조하며 응답 지연시간 감소, 보안강화, 레거시 시스템의 캡슐화를 위한 중간 컴포넌트 강조")])]),a._v(" "),s("h3",{attrs:{id:"uri"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uri"}},[a._v("#")]),a._v(" URI")]),a._v(" "),s("ul",[s("li",[a._v("URI 는 HTTP 프로토콜의 주요 구성요소로, API에 접근하는 방법")]),a._v(" "),s("li",[a._v("URL과의 차이는 URL은 http:// 로만 시작하는거고, URI 는 URN + URL이라고 보면될듯")])]),a._v(" "),s("h3",{attrs:{id:"uri-형식"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uri-형식"}},[a._v("#")]),a._v(" URI 형식")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('URI = scheme "://" authority "/" path ["?" query] ["#" fragment]\nURI = http://myserver.com/mypath?query=1#document\n')])])]),s("ul",[s("li",[a._v("URI 형식 지정\n"),s("ul",[s("li",[a._v("슬래시는 리소스 사이의 계층적 관계를 나태내는데 사용")]),a._v(" "),s("li",[a._v("URI의 마지막에 슬래시가 포함되선 안됨")]),a._v(" "),s("li",[a._v("가독성을 높이기 위해 하이픈(-)을 사용해야 한다.")]),a._v(" "),s("li",[a._v("밑줄 문자(_)는 URI에 사용하면 안된다.")]),a._v(" "),s("li",[a._v("URI의경로 부분은 대소문자를 구분하므로 소문자를 사용하는 것이 좋다.")])])])]),a._v(" "),s("h3",{attrs:{id:"rest-서비스를-위한-uri-경로-설계"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rest-서비스를-위한-uri-경로-설계"}},[a._v("#")]),a._v(" REST 서비스를 위한 URI 경로 설계")]),a._v(" "),s("ul",[s("li",[a._v("경로는 문서 / 컬렉션 / 저장소 / 컨트롤러로 구분된다.")])]),a._v(" "),s("h4",{attrs:{id:"컬렉션"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#컬렉션"}},[a._v("#")]),a._v(" 컬렉션")]),a._v(" "),s("ul",[s("li",[a._v("컬렉션은 일반적으로 개별 문서에 접근하기 위한 매개 변수로 구분되는 여러 리소스가 들어있는 하나의 디렉토리")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("GET /cats   -> 모든 고양이가 컬렉션에 들어 있음\nGET /cats/1 -> 1번 고양이를 위한 하나의 문서\n")])])]),s("ul",[s("li",[a._v("컬렉션을 정의할땐 cats, people 처럼 복수형으로 지정해주어야 한다.")])]),a._v(" "),s("h4",{attrs:{id:"문서"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#문서"}},[a._v("#")]),a._v(" 문서")]),a._v(" "),s("ul",[s("li",[a._v("문서는 데이터베이스의 행과 비슷한 하나의 객체를 가리키는 리소스")]),a._v(" "),s("li",[a._v("하나의 문서는 하위 문서 또는 컬렉션과 같은 하위 리소스를 가질 수 있다.")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("GET /cats/1            -> 1번 고양이를 위한 하나의 문서\nGET /cats/1/kittens    -> 1번 고양이의 모든 새끼고양이들\nGET /cats/1/kittens/1  -> 1번 고양이의 1번 새끼고양이\n")])])]),s("h4",{attrs:{id:"컨트롤러"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#컨트롤러"}},[a._v("#")]),a._v(" 컨트롤러")]),a._v(" "),s("ul",[s("li",[a._v("컨트롤러 리소스는 리소스를 표준 CRUD 기능에 매핑 할 수 없는 경우에 사용된다.")]),a._v(" "),s("li",[a._v("컨트롤러의 이름은 하위 리소스가 없는 URI 경로의 마지막 부분(세그머트) 이다.")]),a._v(" "),s("li",[a._v("컨트롤러에 매개변수가 필요한 경우, 일반적으로 쿼리 문자열에 매개변수가 포함된다.")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("POST /cats/1/feed            -> 1번 고양이에게 먹이 주기\nPOST /cats/1/feed?food=fish  -> 1번 고양이에게 물고기를 먹이로 주기\n")])])]),s("ul",[s("li",[a._v("컨트롤러 이름을 정의할 때는 항상 동사를 사용해야 한다.")])]),a._v(" "),s("h4",{attrs:{id:"저장소"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#저장소"}},[a._v("#")]),a._v(" 저장소")]),a._v(" "),s("ul",[s("li",[a._v("저장소는 클라이언트가 관리하는 리소스 저장소이며 클라이언트가 리소스를 추가, 검색 및 삭제할 수 있게 한다.")]),a._v(" "),s("li",[a._v("컬렉션과 달리 저장소는 새로운 URI를 생성하지 않으며, 클라이언트가 지정한 URI를 사용한다.")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("PUT /cats/2\n")])])]),s("h4",{attrs:{id:"crud-함수-이름"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crud-함수-이름"}},[a._v("#")]),a._v(" CRUD 함수 이름")]),a._v(" "),s("ul",[s("li",[a._v("REST URI를 설정 할 때, URI 일부로 CRUD 함수의 이름을 사용하지 않고, 대신 HTTP 동사를 사용한다.")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("DELETE /cats/1234\n")])])]),s("ul",[s("li",[a._v("이런식으로 HTTP 동사에 의해 동작이 정의되기 때문에, 아래와 같은 이름은 별로다.")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("GET /deleteCat/1234\nDELETE /deleteCat/1234\nPOST /cats/1234/delete\n")])])]),s("h3",{attrs:{id:"http-동사"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-동사"}},[a._v("#")]),a._v(" HTTP 동사")]),a._v(" "),s("ul",[s("li",[a._v("GET")]),a._v(" "),s("li",[a._v("POST")]),a._v(" "),s("li",[a._v("PUT")]),a._v(" "),s("li",[a._v("PATCH")]),a._v(" "),s("li",[a._v("DELETE")]),a._v(" "),s("li",[a._v("HEAD")]),a._v(" "),s("li",[a._v("OPTIONS")])]),a._v(" "),s("h4",{attrs:{id:"get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[a._v("#")]),a._v(" GET")]),a._v(" "),s("ul",[s("li",[a._v("보통 조회 업무에 사용된다.")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("GET /v1/cats HTTP/1.1\n")])])]),s("h4",{attrs:{id:"post"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post"}},[a._v("#")]),a._v(" POST")]),a._v(" "),s("ul",[s("li",[a._v("새로운 리소스를 만들거나 컨트롤러를 실행하는데 사용")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('POST /v1/cats HTTP/1.1\nContent-Type: application/json\nContent-Length: xxxx\n\n{"name": "Ted"}\n')])])]),s("h4",{attrs:{id:"put"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#put"}},[a._v("#")]),a._v(" PUT")]),a._v(" "),s("ul",[s("li",[a._v("변경 가능한 리소스를 업데이트 하는데 사용")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('PUT /v1/cats HTTP/1.1\nContent-Type: application/json\nCotent-Length: xxxx\n\n{"name": "Cindy"}\n')])])]),s("h4",{attrs:{id:"patch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#patch"}},[a._v("#")]),a._v(" PATCH")]),a._v(" "),s("ul",[s("li",[a._v("부분 업데이트에 사용된다.")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('PATCH /v1/cats/12343 HTTP/1.1\nContent-Type: application/json\nContent-Length: xxxx\n\n{"weight": 9}\n')])])]),s("h4",{attrs:{id:"delete"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[a._v("#")]),a._v(" DELETE")]),a._v(" "),s("ul",[s("li",[a._v("삭제할 때 사용")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("DELETE /v1/cats/12343 HTTP/1.1\nContent-Type: application/json\nContent-Length: 0\n")])])]),s("h4",{attrs:{id:"head"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[a._v("#")]),a._v(" HEAD")]),a._v(" "),s("ul",[s("li",[a._v("본문 없이 리소스에 대한 헤더만 검색하는 경우에 사용")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("HEAD /v1/cats/12343 HTTP/1.1\nContent-Type: application/json\nContent-Length: 0\n")])])]),s("h3",{attrs:{id:"uri-query-design"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uri-query-design"}},[a._v("#")]),a._v(" URI query design")]),a._v(" "),s("ul",[s("li",[a._v("쿼리는 다음과 같은 작업시에 활용해야 한다.\n"),s("ul",[s("li",[a._v("페이지 처리")]),a._v(" "),s("li",[a._v("필터링")]),a._v(" "),s("li",[a._v("정렬")])])]),a._v(" "),s("li",[a._v("컨트롤러에 요청할 때 쿼리파라미터를 쓰면, 글자수 제한도 있고 그래서 짤릴수가 있다.")]),a._v(" "),s("li",[a._v("가능하면 POST를 쓰고, 필터링같은거 할때 정도만 써주자")])]),a._v(" "),s("h3",{attrs:{id:"응답코드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#응답코드"}},[a._v("#")]),a._v(" 응답코드")]),a._v(" "),s("ul",[s("li",[a._v("자세한 코드 정보까진 정리할 필요가 없어보임")]),a._v(" "),s("li",[a._v("간단하게 잘못된 요청정보를 살펴보면")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('POST /kittens\nRESPONSE HTTP 200 OK\n{\n    "status": 401,\n    ...\n}\n')])])]),s("ul",[s("li",[a._v("이딴식으로 200으로 주면서 내부에 401 오류가 나거나 이러면 멘붕이 오니 하지말자")])]),a._v(" "),s("h2",{attrs:{id:"rpc-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rpc-api"}},[a._v("#")]),a._v(" RPC API")]),a._v(" "),s("ul",[s("li",[a._v("최근 RPC 기술은 클라이언트와 서버의 인터페이스를 맞출 필요 없이 구성이 가능해졌다.")]),a._v(" "),s("li",[a._v("많이 쓰이는건 Protocol Buffer로 구글에서 만든 툴")]),a._v(" "),s("li",[a._v("gRPC로 사용한다.")])]),a._v(" "),s("h2",{attrs:{id:"api-버전-관리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-버전-관리"}},[a._v("#")]),a._v(" API 버전 관리")]),a._v(" "),s("ul",[s("li",[a._v("버전관리는 최대한 안하는게 깔끔하고 좋지만, 어쩔수 없이 해야할 때가 있다.")]),a._v(" "),s("li",[a._v("주요 변경사항이 생기면 API 버전 번호를 증가시킨다.")]),a._v(" "),s("li",[a._v("주요 변경사항\n"),s("ul",[s("li",[a._v("API나 API 매개 변수의 제거 또는 이름 변경")]),a._v(" "),s("li",[a._v("API 매개 변수의 타입 변경")]),a._v(" "),s("li",[a._v("응답코드, 에러 코드 또는 실패 규약의 변경")]),a._v(" "),s("li",[a._v("기존 API의 동작 변경")])])]),a._v(" "),s("li",[a._v("주요 변경사항이 아닌것\n"),s("ul",[s("li",[a._v("리턴되는 엔티티에 매개변수 추가")]),a._v(" "),s("li",[a._v("새로운 엔드포인트나 기능의 추가")]),a._v(" "),s("li",[a._v("버그 수정 또는 주요 변경사항 목록에 포함되지 않은 기타 유지 관리")])])])]),a._v(" "),s("h2",{attrs:{id:"api-문서화"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-문서화"}},[a._v("#")]),a._v(" API 문서화")]),a._v(" "),s("h3",{attrs:{id:"rest-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rest-api"}},[a._v("#")]),a._v(" REST API")]),a._v(" "),s("ul",[s("li",[a._v("Swagger")]),a._v(" "),s("li",[a._v("API Blueprint")]),a._v(" "),s("li",[a._v("RAML")])]),a._v(" "),s("h3",{attrs:{id:"rpc-api-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rpc-api-2"}},[a._v("#")]),a._v(" RPC API")]),a._v(" "),s("ul",[s("li",[a._v("Protocol Buffer")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
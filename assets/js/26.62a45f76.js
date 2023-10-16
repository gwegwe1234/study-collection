(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{633:function(t,a,s){t.exports=s.p+"assets/img/grpc1.8913d707.png"},634:function(t,a,s){t.exports=s.p+"assets/img/grpc2.d010d7eb.png"},635:function(t,a,s){t.exports=s.p+"assets/img/grpc3.271e94c9.png"},636:function(t,a,s){t.exports=s.p+"assets/img/grpc4.edf10036.png"},637:function(t,a,s){t.exports=s.p+"assets/img/grpc5.425c93df.png"},638:function(t,a,s){t.exports=s.p+"assets/img/grpc6.179593cc.png"},639:function(t,a,s){t.exports=s.p+"assets/img/grpc7.47c1f85e.png"},828:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"grpc-샘플"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grpc-샘플"}},[t._v("#")]),t._v(" gRPC 샘플")]),t._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#grpc-vs-rest"}},[t._v("gRPC vs Rest")])]),n("li",[n("a",{attrs:{href:"#grpc-사용하기"}},[t._v("gRPC 사용하기")])]),n("li",[n("a",{attrs:{href:"#java에서-grpc-사용하기"}},[t._v("Java에서 gRPC 사용하기")])]),n("li",[n("a",{attrs:{href:"#go에서-grpc-사용하기"}},[t._v("Go에서 gRPC 사용하기")])])])]),n("p"),t._v(" "),n("h3",{attrs:{id:"grpc-vs-rest"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grpc-vs-rest"}},[t._v("#")]),t._v(" gRPC vs Rest")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Rest 통신 방식은 url 을 통해 호출을 하면 서버로 JSON 같은 형식으로 서버로 들어가고,\n서버에선 JSON 을 컨버팅해 객체로 만들어 가공 및 작업 후 다시 JSON 형식으로 클라이언트로 보내준다.\n")])])]),n("p",[n("img",{attrs:{src:s(633),alt:"Alt text"}})]),t._v(" "),n("ul",[n("li",[t._v("이런 귀찮은 작업 없이 바로 클라이언트에서 서버에 있는 기능을 바로 쓸 수 있게 하는 방식이 "),n("em",[t._v("RPC")]),t._v(" 방법이다.")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(634),alt:"Alt text"}})]),t._v(" "),n("ul",[n("li",[t._v("RPC 기술을 쉽게 쓰라고 나온 기술이 구글에서 만든 gRPC 이다.")])]),t._v(" "),n("h3",{attrs:{id:"grpc-사용하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grpc-사용하기"}},[t._v("#")]),t._v(" gRPC 사용하기")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("기본적으로 gRPC를 사용할 때 .proto 파일을 생성을 해줘야 한다.\n만들어진 proto파일을 protoc로 자동 생성을 하면, 서버 기본 베이스 클래스나, \n클라이언트의  stub 객체같은 기능들이 포함된 클래스들을 만들어준다.\n클래스 자동 생성 명령어 : protoc -I helloworld helloworld/helloworld.proto --go_out=plugins=grpc:helloworld\nproto 파일 구조는 다음과 같다.\n")])])]),n("p",[n("img",{attrs:{src:s(635),alt:"Alt text"}})]),t._v(" "),n("ul",[n("li",[t._v("service 는 실제 생성될 메소드 모음이다.")])]),t._v(" "),n("p",[t._v("["),n("strong",[t._v("메소드")]),t._v("]")]),t._v(" "),n("ul",[n("li",[t._v("rpc {method 명} (input parameter) returns (output parameter) {} 로 정의하고.")])]),t._v(" "),n("p",[t._v("["),n("strong",[t._v("객체")]),t._v("]")]),t._v(" "),n("ul",[n("li",[t._v("message { ... } 로 정의한다.")])]),t._v(" "),n("p",[t._v("메소드 설명 주석을 좀 마구잡이로 해석해놔서.. 간단하게 그림으로 설명하면")]),t._v(" "),n("h4",{attrs:{id:"_1-클라이언트-요청-서버-응답-1-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-클라이언트-요청-서버-응답-1-1"}},[t._v("#")]),t._v(" 1. 클라이언트 요청 - 서버 응답 (1:1)")]),t._v(" "),n("p",[n("img",{attrs:{src:s(636),alt:"Alt text"}})]),t._v(" "),n("h4",{attrs:{id:"_2-클라이언트-요청-서버-스트림-응답-1-n"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-클라이언트-요청-서버-스트림-응답-1-n"}},[t._v("#")]),t._v(" 2. 클라이언트 요청 - 서버 스트림 응답 (1:N)")]),t._v(" "),n("p",[n("img",{attrs:{src:s(637),alt:"Alt text"}})]),t._v(" "),n("h4",{attrs:{id:"_3-클라이언트가-스트림-요청-서버-응답-n-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-클라이언트가-스트림-요청-서버-응답-n-1"}},[t._v("#")]),t._v(" 3. 클라이언트가 스트림 요청 - 서버 응답 (N:1)")]),t._v(" "),n("p",[n("img",{attrs:{src:s(638),alt:"Alt text"}})]),t._v(" "),n("h4",{attrs:{id:"_4-둘-다-스트림-형식으로-던지는-방식-n-n"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-둘-다-스트림-형식으로-던지는-방식-n-n"}},[t._v("#")]),t._v(" 4. 둘 다 스트림 형식으로 던지는 방식 (N:N)")]),t._v(" "),n("p",[n("img",{attrs:{src:s(639),alt:"Alt text"}})]),t._v(" "),n("p",[t._v("출처 : "),n("a",{attrs:{href:"https://grpc.io/docs/tutorials/",target:"_blank",rel:"noopener noreferrer"}},[t._v("gRPC 공식 홈페이지 튜토리얼"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"java에서-grpc-사용하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#java에서-grpc-사용하기"}},[t._v("#")]),t._v(" Java에서 gRPC 사용하기")]),t._v(" "),n("h4",{attrs:{id:"_1-일반적인-grpc용-클라이언트-서버-어플리케이션-작성-방법"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-일반적인-grpc용-클라이언트-서버-어플리케이션-작성-방법"}},[t._v("#")]),t._v(" 1. 일반적인 gRPC용 클라이언트 - 서버 어플리케이션 작성 방법")]),t._v(" "),n("ul",[n("li",[t._v("service / message를 .proto 파일에 생성 (경로 : src/main/proto/)")]),t._v(" "),n("li",[t._v("protocol buffer compiler를 통해 소스 생성")]),t._v(" "),n("li",[t._v("서버 어플리케이션 소스 작성")]),t._v(" "),n("li",[t._v("클라이언트 어플리케이션 소스 작성")])]),t._v(" "),n("h4",{attrs:{id:"_2-maven-dependency"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-maven-dependency"}},[t._v("#")]),t._v(" 2. Maven Dependency")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("io.grpc"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("grpc-netty"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.16.1"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("io.grpc"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("grpc-protobuf"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.16.1"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("io.grpc"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("grpc-stub"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.16.1"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("extensions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("extension")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("kr.motd.maven"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("os-maven-plugin"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.6.1"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("extension")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("extensions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugins")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.xolstice.maven.plugins"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("protobuf-maven-plugin"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0.6.1"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("configuration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("protocArtifact")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          com.google.protobuf:protoc:3.3.0:exe:${os.detected.classifier}\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("protocArtifact")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pluginId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("grpc-java"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pluginId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pluginArtifact")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          io.grpc:protoc-gen-grpc-java:1.4.0:exe:${os.detected.classifier}\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pluginArtifact")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("configuration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("executions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("execution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("goals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("goal")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("compile"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("goal")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("goal")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("compile-custom"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("goal")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("goals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("execution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("executions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugins")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("h4",{attrs:{id:"_3-proto-파일-작성"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-proto-파일-작성"}},[t._v("#")]),t._v(" 3. proto 파일 작성")]),t._v(" "),n("ul",[n("li",[t._v("기본 config 작성")]),t._v(" "),n("li",[t._v("message structure 정의")]),t._v(" "),n("li",[t._v("service 정의")])]),t._v(" "),n("h4",{attrs:{id:"_4-프로토콜-버퍼로-소스-컴파일"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-프로토콜-버퍼로-소스-컴파일"}},[t._v("#")]),t._v(" 4. 프로토콜 버퍼로 소스 컴파일")]),t._v(" "),n("ul",[n("li",[t._v("protoc -I=$SRC_DIR --java_out=$DST_DIR $SRC_DIR/HelloService.proto")]),t._v(" "),n("li",[t._v("maven package")])]),t._v(" "),n("h4",{attrs:{id:"_5-서버-소스-구성"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-서버-소스-구성"}},[t._v("#")]),t._v(" 5. 서버 소스 구성")]),t._v(" "),n("ul",[n("li",[t._v("service로 자동 생성된 Base 소스를 상속받아, 필요한 메소드를 오버라이딩 해준다.")])]),t._v(" "),n("h4",{attrs:{id:"_6-클라이언트-소스-구성"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-클라이언트-소스-구성"}},[t._v("#")]),t._v(" 6. 클라이언트 소스 구성")]),t._v(" "),n("ul",[n("li",[t._v("stub을 생성해 클라이언트용 소스를 구성")])]),t._v(" "),n("p",[t._v("소스 : "),n("a",{attrs:{href:"https://github.com/gwegwe1234/gRPC-example/tree/master/javaGrpc",target:"_blank",rel:"noopener noreferrer"}},[t._v("gRPC-java 샘플"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("출처 : "),n("a",{attrs:{href:"https://grpc.io/docs/languages/java/basics/",target:"_blank",rel:"noopener noreferrer"}},[t._v("gRPC 공식 사이트 자바 샘플"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"go에서-grpc-사용하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#go에서-grpc-사용하기"}},[t._v("#")]),t._v(" Go에서 gRPC 사용하기")]),t._v(" "),n("p",[t._v("자바 gRPC 사용 법과 거의 동일하다.")]),t._v(" "),n("p",[t._v("차이점으로는 따로 gRPC 라이브러리를 가져올 필요없이, 소스를 작성하면 mod에서 자동으로 grpc 라이브러리를 추가 해준다.")]),t._v(" "),n("h4",{attrs:{id:"_1-proto-파일-작성"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-proto-파일-작성"}},[t._v("#")]),t._v(" 1. proto 파일 작성")]),t._v(" "),n("ul",[n("li",[t._v("기본 config 작성")]),t._v(" "),n("li",[t._v("message structure 정의")]),t._v(" "),n("li",[t._v("service 정의")])]),t._v(" "),n("h4",{attrs:{id:"_2-프로토콜-버퍼로-소스-컴파일"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-프로토콜-버퍼로-소스-컴파일"}},[t._v("#")]),t._v(" 2. 프로토콜 버퍼로 소스 컴파일")]),t._v(" "),n("ul",[n("li",[t._v("protoc -I helloworld helloworld/helloworld.proto --go_out=plugins=grpc:helloworld")])]),t._v(" "),n("h4",{attrs:{id:"_3-서버-소스-구성"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-서버-소스-구성"}},[t._v("#")]),t._v(" 3. 서버 소스 구성")]),t._v(" "),n("ul",[n("li",[t._v("proto 파일에서 생성된 인터페이스를 구현해서 서버 소스를 작성한다.")])]),t._v(" "),n("h4",{attrs:{id:"_4-클라이언트-소스-구성"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-클라이언트-소스-구성"}},[t._v("#")]),t._v(" 4. 클라이언트 소스 구성")]),t._v(" "),n("ul",[n("li",[t._v("New{service명}Client 로 stub을 만들고, 메소드 호출을 하도록 클라이언트 소스를 구성한다.")])]),t._v(" "),n("p",[t._v("소스 : "),n("a",{attrs:{href:"https://github.com/gwegwe1234/gRPC-example/tree/master/goGrpc/example/helloworld",target:"_blank",rel:"noopener noreferrer"}},[t._v("gRPC-go 샘플"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("출처 : "),n("a",{attrs:{href:"https://grpc.io/docs/languages/go/basics/",target:"_blank",rel:"noopener noreferrer"}},[t._v("gRPC 공식 사이트 Go 샘플"),n("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);
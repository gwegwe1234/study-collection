(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{537:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"마구잡이-spring-공부-정리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#마구잡이-spring-공부-정리"}},[e._v("#")]),e._v(" 마구잡이 Spring 공부 정리")]),e._v(" "),a("h3",{attrs:{id:"스프링-부트-property-yml-설정-값들-프로세스"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#스프링-부트-property-yml-설정-값들-프로세스"}},[e._v("#")]),e._v(" 스프링 부트 property || yml 설정 값들 프로세스")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("처음엔 application.properties의 spring.active.profiles을 봐서 설정을 해준 후 프로필 설정을 한다. \n\n이후에 Environment 설정할 때 bootstrap.yml 의 spring.active.profiles을 보고 설정을 해준 후 bean 등록을 해준다.\n*즉 우선순위는 bootstrap.yml* 이 더 높다.\n\n그래서 bootstrap.yml 프로필 설정을 dev,local 이런식으로 설정해서, dev가 포함되면서 실제 설정은 local에서 할 수 있도록 설정해준다.\n\n환경변수 설정(-D active.profile 같은거)\nbootstrap.yml 설정 -> active profile 설정되면 (ex local) 스프링이 bootstrap-local.yml 찾는다.\n환경변수설정 > yml설정 오버라이딩\n")])])]),a("h3",{attrs:{id:"스프링-req-처리-프로세스-dispatcher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#스프링-req-처리-프로세스-dispatcher"}},[e._v("#")]),e._v(" 스프링 req 처리 프로세스 (dispatcher)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Request -> DoDispatch -> mv = ha.handle -> controller & service (들어온 리퀘스트로 컨트롤러 찾아서 modelAndVIew를 넘겨줌) -> processDispatchResult (갖고온 mv로 맞는 view타입을 찾아 view를 그려주는 등 작업을함) -> Exception 확인 -> Render\n")])])]),a("h3",{attrs:{id:"스프링-기본-개념-정리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#스프링-기본-개념-정리"}},[e._v("#")]),e._v(" 스프링 기본 개념 정리")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Dependency : 한 클래스가 다른 클래스의 메서드를 실행할 때, 이를 의존한다고 표현한다. 의존이란 변경에 의해 영향을 받는 관계를 말한다.")])]),e._v(" "),a("li",[a("p",[e._v("DI : 의존 주입.(생성자, 세터)")])]),e._v(" "),a("li",[a("p",[e._v("Assembler : 조립기. 여러가지 생성된 객체들을 조립해서 필요한걸 가져다 쓸 수 있도록 하는 곳. 스프링이 DI를 지원해주는 조립기이다.(스프링 컨테이너)")])]),e._v(" "),a("li",[a("p",[e._v("DI 방식")]),e._v(" "),a("ul",[a("li",[e._v("Constructor : 빈 객체를 생성하는 시점에 모든 의존 객체가 주입된다.")]),e._v(" "),a("li",[e._v("Setter : property 태그의 name 속성을 통해 어던 의존 객체가 주입되는지 알 수 있다.")])])])]),e._v(" "),a("h3",{attrs:{id:"스프링-부트-예외처리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#스프링-부트-예외처리"}},[e._v("#")]),e._v(" 스프링 부트 예외처리")]),e._v(" "),a("ul",[a("li",[e._v("전역 처리 Global Level using -  @ControllerAdvice")]),e._v(" "),a("li",[e._v("컨트롤러단에서 처리 Controller Level using - @ExceptionHandler")]),e._v(" "),a("li",[e._v("메소드단위 처리 Method Level using - try/catch")])])])}),[],!1,null,null,null);t.default=s.exports}}]);
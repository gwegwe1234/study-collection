(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{272:function(t,a,s){t.exports=s.p+"assets/img/system2.04ab6316.png"},273:function(t,a,s){t.exports=s.p+"assets/img/system1.431b89f0.png"},274:function(t,a,s){t.exports=s.p+"assets/img/system3.cf5e5d29.png"},703:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_11강"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_11강"}},[t._v("#")]),t._v(" 11강")]),t._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#도시를-세운다면"}},[t._v("도시를 세운다면?")])]),n("li",[n("a",{attrs:{href:"#시스템-제작과-시스템-사용을-분리하라"}},[t._v("시스템 제작과 시스템 사용을 분리하라")])]),n("li",[n("a",{attrs:{href:"#main-분리"}},[t._v("Main 분리")])]),n("li",[n("a",{attrs:{href:"#팩토리"}},[t._v("팩토리")])]),n("li",[n("a",{attrs:{href:"#의존성-주입"}},[t._v("의존성 주입")])]),n("li",[n("a",{attrs:{href:"#확장"}},[t._v("확장")])]),n("li",[n("a",{attrs:{href:"#자바-프록시"}},[t._v("자바 프록시")])]),n("li",[n("a",{attrs:{href:"#순수-자바-aop-프레임워크"}},[t._v("순수 자바 AOP 프레임워크")])]),n("li",[n("a",{attrs:{href:"#aspectj-관점"}},[t._v("AspectJ 관점")])]),n("li",[n("a",{attrs:{href:"#테스트-주도-시스템-아키텍쳐-구축"}},[t._v("테스트 주도 시스템 아키텍쳐 구축")])])])]),n("p"),t._v(" "),n("h3",{attrs:{id:"도시를-세운다면"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#도시를-세운다면"}},[t._v("#")]),t._v(" 도시를 세운다면?")]),t._v(" "),n("ul",[n("li",[t._v("만약 도시를 세운다고 가정하면 모든 사항을 한명의 사람이 관리 할 순 없다.")]),t._v(" "),n("li",[t._v("수도 관리팀, 전기 관리팀 등등.. 각각의 역할이 나눠져 있다.")]),t._v(" "),n("li",[t._v("도시가 돌아가는 또다른 이유는 추상화와 모듈화 때문이다.")]),t._v(" "),n("li",[t._v("따라서 큰그림을 이해하지 못하더라도 개인이 관리하는 구성요소는 효율적으로 돌아간다.")])]),t._v(" "),n("hr"),t._v(" "),n("ul",[n("li",[t._v("소프트웨어 팀도 마찬가지로 도시처럼 구성한다.")]),t._v(" "),n("li",[t._v("근데 막상 제작하는 시스템은 비슷한 수준으로 관심사를 묶거나, 추상화를 이루지 못한다.")]),t._v(" "),n("li",[t._v("즉 시스템 수준에도 높은 추상화를 유지하는 방법이 필요하다")])]),t._v(" "),n("h3",{attrs:{id:"시스템-제작과-시스템-사용을-분리하라"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#시스템-제작과-시스템-사용을-분리하라"}},[t._v("#")]),t._v(" 시스템 제작과 시스템 사용을 분리하라")]),t._v(" "),n("ul",[n("li",[n("em",[t._v("제작")]),t._v("과 "),n("em",[t._v("사용")]),t._v("은 아주 다르다.")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("소프트웨어 시스템은 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("어플리케이션 객체를 제작하고 의존성을 서로 "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'연결'")]),t._v("하는"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n준비과정과 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("준비 과정 이후에 이어지는"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 런타임 로직을 분리해야 한다"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),n("ul",[n("li",[t._v("시작 단계는 모든 어플리케이션이 풀어야 할 "),n("em",[t._v("관심사")]),t._v("다.")]),t._v(" "),n("li",[t._v("관심사 분리는 우리 분야에서 가장 오래되고 가장 중요한 설계 기법")]),t._v(" "),n("li",[t._v("but 대다수의 어플리케이션은 시작 단계라는 관심사를 분리하지 않는다.")]),t._v(" "),n("li",[t._v("준비 과정 코드를 주먹 구구식으로 구현하고, 런타임 로직과 마구 뒤섞어 버린다.")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Service")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getService")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("service "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        service "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyServiceImpl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 모든 상황에 적합한 기본값일까?")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ul",[n("li",[t._v("초기화 지연 (Lazy Initialization) 혹은 계산 지연(Lazy Evaluation) 기법이다.\n"),n("ul",[n("li",[t._v("실제로 필요할 때까지 객체를 생성하지 않아 불필요한 부하가 걸리지 않는다.")]),t._v(" "),n("li",[t._v("어떤 경우에도 null을 내뱉지 않는다.")])])])]),t._v(" "),n("hr"),t._v(" "),n("ul",[n("li",[t._v("위와 같은 장점이 있지만, getService 메소드가 MyServiceImpl에 명시적으로 의존해버리는 문제가 잇다.")]),t._v(" "),n("li",[t._v("런타임 로직에서 MyServiceImpl 객체를 전혀 사용하지 않아도 의존성을 해결하지 않으면 컴파일 에러가 발생한다.")]),t._v(" "),n("li",[t._v("테스트에도 어려움이 있다. -> getService 테스트 하려고 테스트 전용 객체 생성 필요")]),t._v(" "),n("li",[t._v("무엇보다 해당 객체가 모든 상황에 적합한 객체인지 모른다는 사실이 가장 큰 문제이다.")]),t._v(" "),n("li",[t._v("이러한 초기화 지연 기법을 여기저기 사용하면 결국 시스템자체가 조잡해지고 중복이 난무하게 된다.")])]),t._v(" "),n("h3",{attrs:{id:"main-분리"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#main-분리"}},[t._v("#")]),t._v(" Main 분리")]),t._v(" "),n("ul",[n("li",[t._v("시스템 생성과 시스템 사용 분리 방법\n"),n("ul",[n("li",[t._v("생성과 관련된 코드는 모두 main에 맡긴다.")]),t._v(" "),n("li",[t._v("나머지 시스템은 모든 객체가 생성되었고 모든 의존성이 연결되었다고 가정한다.")])])])]),t._v(" "),n("p",[n("img",{attrs:{src:s(272),alt:"메인분리"}})]),t._v(" "),n("ul",[n("li",[t._v("메인 함수에서 시스템에 필요한 객체를 생성하고 어플리케이션에 넘겨버리면, 어플리케이션은 객체를 사용만 한다.")]),t._v(" "),n("li",[t._v("어플리케이션은 메인에서 객체를 어떻게 생성했는지 전혀 모르고, 잘됐다고 가정을 해버리는 구조이다.")])]),t._v(" "),n("h3",{attrs:{id:"팩토리"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#팩토리"}},[t._v("#")]),t._v(" 팩토리")]),t._v(" "),n("ul",[n("li",[t._v("객체가 생성되는 시점을 어플리케이션이 결정하는 방법도 있다.")]),t._v(" "),n("li",[t._v("예를 들어, 주문처리 시스템에서 어플리케이션은 LineItem 인스턴스를 생성해 Order에 추가한다.")]),t._v(" "),n("li",[t._v("이럴때 Abstract Factory 패턴을 이용한다.")]),t._v(" "),n("li",[t._v("이런식으로 짜면 생성시점은 어플리케이션이 결정하지만, 실제 객체를 생성하는 코드는 알 수 없다.")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(273),alt:"팩토리"}})]),t._v(" "),n("h3",{attrs:{id:"의존성-주입"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#의존성-주입"}},[t._v("#")]),t._v(" 의존성 주입")]),t._v(" "),n("ul",[n("li",[t._v("사용과 제작을 분리하는 가장 강력한 메카니즘은 의존성 주입(Dependency Injection)이다.")]),t._v(" "),n("li",[t._v("의존성 주입은 제어의 역전 (Inversion Of Control) 기법을 의존성 관리에 적용한 메커니즘이다.")]),t._v(" "),n("li",[t._v("제어 역전에선 한 객체가 맡은 보조 책임을 새로운 객체에게 떠넘겨 버린다 -> SRP")]),t._v(" "),n("li",[t._v("의존성 관리 맥락에서 객체는 의존성 자체를 인스턴스로 만드는 책임은 지지 않는다.")]),t._v(" "),n("li",[t._v("이런 책임을 다른 "),n("em",[t._v("전담")]),t._v(" 메커니즘에게 넘겨버린다. -> 제어의 역전 발생")]),t._v(" "),n("li",[t._v("보통 main 루틴이나 특수 "),n("em",[t._v("컨테이너")]),t._v("를 사용한다. (스프링 IOC 컨테이너 생각하면 될듯)")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyService")]),t._v(" myService "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyService")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jndiContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookup")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NameOfMyService"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ul",[n("li",[t._v("JNDI 검색은 DI를 부분적으로 구현한 기능이다.")]),t._v(" "),n("li",[t._v("호출하는 객체는 실제로 반환되는 객체의 유형을 제어하지 않는다.")]),t._v(" "),n("li",[t._v("대신 호출하는 객체는 의존성을 능동적으로 해결한다.")])]),t._v(" "),n("hr"),t._v(" "),n("ul",[n("li",[t._v("하지만 진정한 DI는 클래스가 의존성 자체를 해결하려고 하지않고, setter 메소드같은거로 설정해서 완전히 수동적으로 해결한다.")]),t._v(" "),n("li",[t._v("DI 컨테이너는 요청이 들어올 때마다 필요한 객체의 인스턴스를 만든 후 생성자 인수나 설정자 메소드를 사용해 의존성을 설정한다.")])]),t._v(" "),n("h3",{attrs:{id:"확장"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#확장"}},[t._v("#")]),t._v(" 확장")]),t._v(" "),n("ul",[n("li",[t._v("조그만한 시골도시에 왕복 6차선도로를 처음부터 깔아버릴 순 없다.")]),t._v(" "),n("li",[t._v("시스템도 마찬가지로 처음부터 거대하게 짜버릴 순 없다.")]),t._v(" "),n("li",[t._v("처음부터 올바르게 시스템을 만든다는 믿음은 갖다 버리고, 오늘 주어진 업무에 맞춰 시스템을 구현해야 한다.")]),t._v(" "),n("li",[t._v("내일은 새로운 스토리에 맞춰 업무를 확장해 나가면 되고")]),t._v(" "),n("li",[t._v("이것이 반복적이고 점진적인 애자일의 핵심이다.")])]),t._v(" "),n("hr"),t._v(" "),n("ul",[n("li",[t._v("소스레벨에선 TDD 같은 방식으로 소스를 깨끗하게 점점더 발전 시킬 수 있다.")]),t._v(" "),n("li",[t._v("시스템은??")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("소프트웨어 시스템은 물리적인 시스템과 다르다"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 관심사를 적절히 분리해 관리한다면\n소프트웨어 아키텍처는 점진적으로 발전할 수 있다"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),n("ul",[n("li",[t._v("횡단(cross-cutting) 관심사")]),t._v(" "),n("li",[t._v("AOP는 횡단 관심사에 대처해 모듈성을 확보하는 일반적인 방법론")])]),t._v(" "),n("h3",{attrs:{id:"자바-프록시"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#자바-프록시"}},[t._v("#")]),t._v(" 자바 프록시")]),t._v(" "),n("ul",[n("li",[t._v("자바 프록시는 단순한 상황에 적합")]),t._v(" "),n("li",[t._v("개별 객체나 클래스에서 메소드 호출을 감싸는 경우가 좋은 예")]),t._v(" "),n("li",[t._v("기본 JDK에서 제공하는 동적 프록시는 인터페이스만 지원한다.")]),t._v(" "),n("li",[t._v("클래스 프록시를 사용하려면 CGLIB, ASM, Javassist 같은 바이트 코드 라이브러리가 필요하다.")]),t._v(" "),n("li",[t._v("자바 프록시를 사용하면 깨끗한 코드를 작성하기가 어렵고, AOP해법에서 필요한 지점 (pointcut) 명시가 안되는 단점이 있다.")])]),t._v(" "),n("h3",{attrs:{id:"순수-자바-aop-프레임워크"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#순수-자바-aop-프레임워크"}},[t._v("#")]),t._v(" 순수 자바 AOP 프레임워크")]),t._v(" "),n("ul",[n("li",[t._v("다행스럽게 대부분의 프록시는 거기서 거기인 코드라 순수 자바 관점을 구현하는 스프링 AOP 같은대서 내부적으로 프록시를 사용해 자동화를 한다.")]),t._v(" "),n("li",[t._v("스프링은 비지니스 논리를 POJO로 구현한다.")]),t._v(" "),n("li",[t._v("따라서 개념적으로 더 쉽고 간단하다.")])]),t._v(" "),n("hr"),t._v(" "),n("ul",[n("li",[t._v("프로그래머는 설정 파일이나 API를 사용해 필수적인 어플리케이션 기반 구조를 구현한다.")]),t._v(" "),n("li",[t._v("여기서 트랜잭션, 보안, 캐시, 장애조치 등과 같은 횡단 관심사가 포함되는데, 많은경우 스프링이나 JBoss 라이브러리의 관점을 명시한다.")]),t._v(" "),n("li",[t._v("자기도 모르게 프레임워크의 프록시를 이용해 구현을 하는 것")]),t._v(" "),n("li",[t._v("아래는 그 예시 소스")])]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("beans")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("appDataSource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.apache.commons.dbcp.BasicDataSource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("destroy-method")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("close"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("p:")]),t._v("driverClassName")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.mysql.jdbc.Driver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("p:")]),t._v("url")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("jdbc:mysql://localhost:3306/mydb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("p:")]),t._v("username")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("me"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bankDataAccessObject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.example.banking.persistence.BankDataAccessObject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("p:")]),t._v("dataSource-ref")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("appDataSource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bank"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.example.banking.model.Bank"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("p:")]),t._v("dataAccessObject-ref")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bankDataAccessObject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v(" ...\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("beans")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("ul",[n("li",[t._v("실제 스프링 2.x 대 버전의 app.xml의 일부이다.")]),t._v(" "),n("li",[t._v("각 빈은 중첩된 러시아 인형의 일부분과 같다")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(274),alt:"러시아인형"}})]),t._v(" "),n("ul",[n("li",[t._v("Bank 도메인 객체는 DAO로 프록시 되었고, DAO는 JDBC 드라이버 자료 소스로 프록시 되었다.")]),t._v(" "),n("li",[t._v("클라이언트는 Bank 객체에서 getAccounts()를 호출한다고 생각하지만, 실제로는 Bank POJO의 기본 동작을 확장한 중첩 Decorator 객체 집합의 가장 외곽과 통신한다.")])]),t._v(" "),n("h3",{attrs:{id:"aspectj-관점"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#aspectj-관점"}},[t._v("#")]),t._v(" AspectJ 관점")]),t._v(" "),n("ul",[n("li",[t._v("가장 강력한 횡단 관심사 도구")]),t._v(" "),n("li",[t._v("자세한건 AspectJ 책을 보자")])]),t._v(" "),n("h3",{attrs:{id:"테스트-주도-시스템-아키텍쳐-구축"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#테스트-주도-시스템-아키텍쳐-구축"}},[t._v("#")]),t._v(" 테스트 주도 시스템 아키텍쳐 구축")]),t._v(" "),n("ul",[n("li",[t._v("관점으로 관심사를 분리하는 방식은 그 위력이 아주 막강하다.")]),t._v(" "),n("li",[t._v("코드 수준에서 아키텍쳐 관심사를 분리할 수 있다면, 진정한 "),n("em",[t._v("테스트 주도")]),t._v(" 아키텍처를 구축할 수 있다.")]),t._v(" "),n("li",[t._v("이제이해됨.. 결국 시스템 아키텍쳐는 횡단관심사로 다 분리해버려서 비지니스 로직과 분리하자는 말")])])])}),[],!1,null,null,null);a.default=e.exports}}]);
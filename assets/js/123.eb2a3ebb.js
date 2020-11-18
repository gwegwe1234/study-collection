(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{699:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_1강"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1강"}},[s._v("#")]),s._v(" 1강")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-스프링이-나온-이유"}},[s._v("1. 스프링이 나온 이유")])]),a("li",[a("a",{attrs:{href:"#_2-스프링의-4가지-주요-전략"}},[s._v("2. 스프링의 4가지 주요 전략")])]),a("li",[a("a",{attrs:{href:"#_3-pojo"}},[s._v("3. POJO")])]),a("li",[a("a",{attrs:{href:"#_4-di"}},[s._v("4. DI")])]),a("li",[a("a",{attrs:{href:"#_5-aop"}},[s._v("5. AOP")])]),a("li",[a("a",{attrs:{href:"#_6-template"}},[s._v("6. Template")])]),a("li",[a("a",{attrs:{href:"#_7-컨테이너"}},[s._v("7. 컨테이너")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"_1-스프링이-나온-이유"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-스프링이-나온-이유"}},[s._v("#")]),s._v(" 1. 스프링이 나온 이유")]),s._v(" "),a("ul",[a("li",[s._v("엔터프라이즈 애플리케이션 개발의 복잡함을 해소하기 위한 모델로 만들어짐")]),s._v(" "),a("li",[s._v("스프링을 사용하면 간소함, 테스트 용이, 낮은 결합도 라는 이득")]),s._v(" "),a("li",[s._v("결국 자바 개발 간소화라는 목적으로 만든 프레임워크")])]),s._v(" "),a("h2",{attrs:{id:"_2-스프링의-4가지-주요-전략"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-스프링의-4가지-주요-전략"}},[s._v("#")]),s._v(" 2. 스프링의 4가지 주요 전략")]),s._v(" "),a("ul",[a("li",[s._v("POJO를 이용해 가벼운 개발")]),s._v(" "),a("li",[s._v("DI 와 인터페이스 지향을 통한 loose coupling")]),s._v(" "),a("li",[s._v("애스펙트와 공통 규약을 통한 선언적 (declarative) 프로그래밍")]),s._v(" "),a("li",[s._v("애스펙트와 템플릿을 통한 중복 코드 제거")]),s._v(" "),a("li",[s._v("결국 이 네개의 기능 원칙을 통해 만들어진 프레임워크")])]),s._v(" "),a("h2",{attrs:{id:"_3-pojo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-pojo"}},[s._v("#")]),s._v(" 3. POJO")]),s._v(" "),a("ul",[a("li",[s._v("스프링은 최대한 스프링 자체에 의존성이 높은 클래스 확장을 요구하지 않는다.")]),s._v(" "),a("li",[s._v("어노테이션을 붙이는 정도를 쓰는데, 그게없으면 걍 싹다 pojo라고 보면된다.")])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HelloWorldBean")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sayHello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello World!"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("위의 소스를 보면, 이게 스프링에 관련된거라곤 알 수 가 없다. 이런걸 pojo라고 본다.")]),s._v(" "),a("li",[s._v("스프링이 pojo를 활용하는 방법은 DI를 활용한 빈 조립이다.")])]),s._v(" "),a("h2",{attrs:{id:"_4-di"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-di"}},[s._v("#")]),s._v(" 4. DI")]),s._v(" "),a("ul",[a("li",[s._v("DI 가 왜 나왔을까 고민해보자")]),s._v(" "),a("li",[s._v("실제로 소스를 짜다보면 하나의 클래스나 메소드에서 모든걸 해결하는게 아닌, 여러개의 클래스로 로직을 짠다.")]),s._v(" "),a("li",[s._v("이럴 경우 서로서로 참조를 하는데, 이럴 경우 결합도가 매우 높아지는 문제가 발생한다.")])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DamselRescueingKnight")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Knight")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RescueDamselQuest")]),s._v(" quest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DamselRescuingKnight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("quest "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RescueDamselQuest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 강결합")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("embarkOnquest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        quest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("embark")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[a("p",[s._v("설명을 재밌게 해놨는데, 위의 소스를 보면, 소녀를 구하는 기사 (Knight가 implements된) 는 다른 뭔짓을 시키고 싶어도, 소녀를 구하는 임무만 할 수 있는 멍청한 기사가 된다.")])]),s._v(" "),a("li",[a("p",[s._v("즉 저 멍청한 기사는 소녀만 구하는 일만 하고, 전쟁을 나가거나 소녀가 아닌 성숙한 여인을 구하는 행동은 할 수가 없게된다.")])]),s._v(" "),a("li",[a("p",[s._v("위에처럼 소스를 짜게되면, 테스트도 제한되게 되고, 재활용도 어려워진다. 예를 들어 전쟁을 나가는 기사를 만들고 싶으면, 다른 클래스를 또 작성을 해야된다.")])]),s._v(" "),a("li",[a("p",[s._v("그렇다고 기사한테 하나의 일만 시키기 싫다고, 아무런 일도 안시킬 순 없으니 이럴 때 필요한게 종속객체 주입 (Dependency Injection)이다.")])]),s._v(" "),a("li",[a("p",[s._v("즉 기사한테, 너한테 일을 주긴 줄건데 무슨일을 줄건진 기사의 상사(제3자)가 그때그때 맞춰서 주는거라고 생각하면 된다.")])])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BraveKnight")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Knight")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Quest")]),s._v(" quest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BraveKnight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Quest")]),s._v(" quest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// quest 생성자 주입")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("quest "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" quest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("embarkOnQuest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        quest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("embark")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[a("p",[s._v("위의 용감한 기사 소스를 보면, 이전의 '소녀를 구하는 임무를 하는 멍청한 기사' 가 아니라 뭐든 용감한 일은 할 수 있는 기사가 되었다.")])]),s._v(" "),a("li",[a("p",[s._v("즉 저 BraveKnight라는 기사를 선언할때, 내가 원하는 임무를 마구 줘버리면 된다는 소리다.")])])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Knight")]),s._v(" braveKnight "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BraveKnight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Quest")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Fight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 싸움을 하는 기사")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Knight")]),s._v(" braveKnight "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BraveKnight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Quest")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Rescue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//소녀를 구하는 기사")]),s._v("\n")])])]),a("ul",[a("li",[a("p",[s._v("소녀를 구할수도 있고, 전쟁을 갈수도 있고, 이런식으로 구현을 하게되면 Knight 와 Quest는 종속이 매우 느슨하게 된다.(loose coupling)")])]),s._v(" "),a("li",[a("p",[s._v("이렇게 여러개의 클래스들간에 연결이 되는것을 wiring 이라고 한다.")])]),s._v(" "),a("li",[a("p",[s._v("스프링에서 이런 DI 설정을 하는 방법을 xml / java 기반으로 할 수 있도록 제공해주는데, 개인적으로 xml은 필요없다고 생각해서 따로 정리는 안해놓음.")])])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Configuration")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("KnightConfig")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Bean")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Knight")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("knight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BraveKnight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("quest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Bean")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Quest")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("quest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SlayDragonQuest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[a("p",[s._v("java 기반 설정은 이런식으로 한다.")])]),s._v(" "),a("li",[a("p",[s._v("스프링에서 이러한 빈들을 관리를 아주 잘해주는데 AppplicationContext 에서 관리를 해준다. 이정도만 알아두자.")])])]),s._v(" "),a("h2",{attrs:{id:"_5-aop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-aop"}},[s._v("#")]),s._v(" 5. AOP")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Aspect 지향 프로그래밍은 애플리케이션 전체에 기능 재사용을 추구하는 방식이다.")])]),s._v(" "),a("li",[a("p",[s._v("보통 로깅, 트랜잭션처리 등을 쓰는데 사용하는데, Aspect를 횡으로 쪼갠다고 한다. 좀더 알아보도록 하자")])])]),s._v(" "),a("h4",{attrs:{id:"aspect-기반-프로그래밍은-왜-필요할까"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aspect-기반-프로그래밍은-왜-필요할까"}},[s._v("#")]),s._v(" Aspect 기반 프로그래밍은 왜 필요할까?")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("공통적인 처리를 해야하는 부분을 여러 컴포넌트에서 개발을 한다고 하면, 중복이 오지게 되는 문제가 발생한다.")])]),s._v(" "),a("li",[a("p",[s._v("다른 문제로는 특정 기능을 하는 컴포넌트를 개발했는데, 맨날 로깅넣고 트랜잭션넣고 이렇게 본연의 기능을 제외한 다른 기능 소스가 추가되어 소스가 더러워지는 문제가 발생한다.")])]),s._v(" "),a("li",[a("p",[s._v("바로 이럴때 횡단으로 기능을 넣어주는 AOP를 사용하면, 소스가 깔끔해진다.")])]),s._v(" "),a("li",[a("p",[s._v("자세한 소스나 설정법은 4장에 나온다니 그때 좀더 자세하게 적어봐야겠다.")])])]),s._v(" "),a("h2",{attrs:{id:"_6-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-template"}},[s._v("#")]),s._v(" 6. Template")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("템플릿은 잘 알다시피 개노가다를 좀 줄이기 위한 개념이다. 사실 스프링 자체가 노가다나 귀찮은 설정을 안해주려고 만든거지만..")])]),s._v(" "),a("li",[a("p",[s._v("대표적으로 jdbcTemplate.queryForObject 나 RestTemplate 같은거라고 보면 된다. 예외 처리나 반복되는 코드를 템플릿을 사용해 복잡함을 줄이는 용도이다.")])]),s._v(" "),a("li",[a("p",[s._v("템플릿을 사용할 경우, 실제 원하는 기능에 집중해 개발을 할 수가 있다.")])])]),s._v(" "),a("h2",{attrs:{id:"_7-컨테이너"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-컨테이너"}},[s._v("#")]),s._v(" 7. 컨테이너")]),s._v(" "),a("ul",[a("li",[s._v("bean lifecycle을 관리하는 덩어리라고 생각하면 된다.")]),s._v(" "),a("li",[s._v("대표적으로 beanFactory / applicationContext 가 있는데, 보통 후자를 쓴다.")])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeanLifecycle")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" 스프링 빈을 인스턴스화\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" 스프링이 값과 빈의 레퍼런스를 빈의 프로퍼티에 주입\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeanNameAware")]),s._v(" 의 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setBeanName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeanFactoryAware")]),s._v(" 의 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setBeanFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ApplicationContextAware")]),s._v(" 의 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setApplicationContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.")]),s._v(" bean 전후로 초기화 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" 프로퍼티셋 설정 을 해준다"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.")]),s._v(" 다쓰면 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("destroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);
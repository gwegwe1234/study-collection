(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{264:function(s,a,t){s.exports=t.p+"assets/img/map.cea9d9b9.png"},772:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_8강"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8강"}},[s._v("#")]),s._v(" 8강")]),s._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#외부-코드-사용하기"}},[s._v("외부 코드 사용하기")])]),n("li",[n("a",{attrs:{href:"#경계-살피고-익히기"}},[s._v("경계 살피고 익히기")])]),n("li",[n("a",{attrs:{href:"#아직-존재하지-않는-코드를-사용하기"}},[s._v("아직 존재하지 않는 코드를 사용하기")])]),n("li",[n("a",{attrs:{href:"#깨끗한-경계"}},[s._v("깨끗한 경계")])])])]),n("p"),s._v(" "),n("ul",[n("li",[s._v("모든 소프트웨어를 개발은 어렵다.")]),s._v(" "),n("li",[s._v("때로는 다른 개발자들이 개발한 컴포넌트나, 오픈소스같은 것들을 사용하기도 한다.")])]),s._v(" "),n("h3",{attrs:{id:"외부-코드-사용하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#외부-코드-사용하기"}},[s._v("#")]),s._v(" 외부 코드 사용하기")]),s._v(" "),n("ul",[n("li",[s._v("인터페이스 제공자 vs 인터페이스 사용자")]),s._v(" "),n("li",[s._v("제공자는 최대한 많은 기능을 넣어 팔아먹으려고 하고, 사용자는 자기가 원하는 기능만 딱딱 있었으면 한다")]),s._v(" "),n("li",[s._v("java.util.Map을 보면, clear()라는 기능이 맨위에 있는데, 넘겨주는 쪽은 안쓰길 믿고 넘기는 방법만 있다.")]),s._v(" "),n("li",[s._v("또한 넣는 객체 타입도 제한이 없어 마구 집어넣을 수 있다.")])]),s._v(" "),n("p",[s._v("Map 기능들")]),s._v(" "),n("p",[n("img",{attrs:{src:t(264),alt:"Alt text"}})]),s._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Map")]),s._v(" sensors "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HashMap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sensor")]),s._v(" s "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sensor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" sensor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sensorId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),n("ul",[n("li",[s._v("위의 맵 사용을 보면, 맵이 반환하는 Object가 올바른 유형으로 바꾸는건 사용자의 몫이다.")]),s._v(" "),n("li",[s._v("이렇게되면 챙길거도 많고 지저분하다.")]),s._v(" "),n("li",[s._v("저따구로 쓰지말고 Generics를 사용하자")])]),s._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Map")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sensor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" sensors "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HashMap")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sensor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sensor")]),s._v(" s "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sensors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sensorId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),n("ul",[n("li",[s._v("이렇게 하면 타입에 대해선 해결이 되지만, 사용자에게 필요하지 않은 기능까지 제공하는 문제는 해결이 안된다.")]),s._v(" "),n("li",[s._v("만약 프로그램에서 Map<String, Sensor> 형태로 여기저기 넘겨버리\b면, 인터페이스가 변해버릴 경우 수정할 부분이 너무 많아진다.")]),s._v(" "),n("li",[s._v("실제로 자바 5에서 제네릭이 등장하면서, 제네릭을 금지하는 곳도 있었다고 한다.")]),s._v(" "),n("li",[s._v("아래는 Map을 좀더 깔끔하게 쓰는 방법이다.")])]),s._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sensors")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Map")]),s._v(" sensors "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HashMap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sensor")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sensor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" sensors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("ul",[n("li",[s._v("경계 인터페이스인 Map을 Sensors 안으로 숨겨줘 버린다.")]),s._v(" "),n("li",[s._v("따라서 Map 인터페이스가 변해도, Sensors 만 바꾸면 다른 곳은 따로 고칠 필요가없다")]),s._v(" "),n("li",[s._v("또한 필요한 기능만을 Sensors안에다가 넣어서 다른 기능을 잘못쓸 문제도 없다.")]),s._v(" "),n("li",[s._v("위의 예시는 Map을 사용할때마다 캡슐화를 하라는 소리는 아니고, 다른 외부 API같은걸 쓸때 여기저기 그냥 넘기지 말라는 예시 같은거다. 즉 외부 API를 쓸때도 캡슐화를 잘해주자.")])]),s._v(" "),n("h3",{attrs:{id:"경계-살피고-익히기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#경계-살피고-익히기"}},[s._v("#")]),s._v(" 경계 살피고 익히기")]),s._v(" "),n("ul",[n("li",[s._v("외부 프로그램을 사용하면 익히기도 어렵고, 문제가 있을 수도 있으니 먼저 간단한 테스트케이스로 외부 코드를 익히자. -> 학습 테스트")]),s._v(" "),n("li",[s._v("학습 테스트는 드는 비용은 없지만 필요한 지식만 확보할 수 있는 손쉬운 방법")])]),s._v(" "),n("p",[s._v("추가적으로 아래의 이점도 있다.")]),s._v(" "),n("ul",[n("li",[s._v("패키지가 예상대로 도는지 검증하고, 통합 이후에도 주기적으로 검증이 가능\n"),n("ul",[n("li",[s._v("패키지의 새 버전이 나오면 학습 테스트만 돌려 차이가 있는지만 확인하면 동작을 보장할 수도 있음")]),s._v(" "),n("li",[s._v("호환되지 않을 경우 코드를 수정하든 패키지를 수정하든 조치를 미리 취할 수 있음")])])]),s._v(" "),n("li",[s._v("경계 테스트와 함께라면 버전 변경도 두렵지 않다.\n"),n("ul",[n("li",[s._v("필요 이상으로 낡은 버전을 사용하려는 유혹에서 빠져나올 수 있음")])])])]),s._v(" "),n("h3",{attrs:{id:"아직-존재하지-않는-코드를-사용하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#아직-존재하지-않는-코드를-사용하기"}},[s._v("#")]),s._v(" 아직 존재하지 않는 코드를 사용하기")]),s._v(" "),n("ul",[n("li",[s._v("지금 알지 못하는 코드 영역을 개발 할 때도 경계는 유용하게 쓰일 수 있다.")]),s._v(" "),n("li",[s._v("필요한 인터페이스를 정의/구현하면 전적으로 통제가 가능해짐")]),s._v(" "),n("li",[s._v("테스트도 간편하게 진행할 수 있음")]),s._v(" "),n("li",[s._v("Adapter 패턴 공부해보자")])]),s._v(" "),n("h3",{attrs:{id:"깨끗한-경계"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#깨끗한-경계"}},[s._v("#")]),s._v(" 깨끗한 경계")]),s._v(" "),n("ul",[n("li",[s._v("변경이 이루어질 때 경계를 잘 통제하고 있다면 향후 변경으로 인해 발생하는 비용 감소\n"),n("ul",[n("li",[s._v("경계에 위치하는 코드는 깔끔히 분리")]),s._v(" "),n("li",[s._v("기대치를 정의하는 테스트 케이스 작성")])])]),s._v(" "),n("li",[s._v("통제가 불가능한 외부 패키지를 사용하기보단 왠만하면 우리의 패키지나 코드를 사용하자 (흠..)")])])])}),[],!1,null,null,null);a.default=e.exports}}]);
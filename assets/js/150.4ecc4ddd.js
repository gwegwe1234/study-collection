(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{776:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_3장"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3장"}},[t._v("#")]),t._v(" 3장")]),t._v(" "),s("ul",[s("li",[t._v("값 객체는 equals()를 구현해야 한다.")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("테스트 목록")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("$5 + 10CHF = $10 (환율 1:2일 경우)")])]),t._v(" "),s("tr",[s("td",[s("s",[t._v("$5 * 2 = $10")])])]),t._v(" "),s("tr",[s("td",[t._v("amount를 private으로 만들기")])]),t._v(" "),s("tr",[s("td",[s("s",[t._v("Dollar 부작용?")])])]),t._v(" "),s("tr",[s("td",[t._v("Money 반올림?")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("eqauls()")])])]),t._v(" "),s("tr",[s("td",[t._v("hashCode()")])])])]),t._v(" "),s("ul",[s("li",[t._v("만약 Dollar를 해시 테이블의 키로 쓸 생각이라면 equals()를 구현할 때 hashCode()도 같이 구현해 줘야한다")]),t._v(" "),s("li",[t._v("할 일 목록에 적어놓고 문제가 생기면 그 때 다뤄보자")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("testEquality")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertTrue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dollar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dollar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("우선 돌아가도록 단순 true 반환하도록 구현하자")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("상식적으로 두 객체는 동일하다는 것을 유추 할 수 있다.")]),t._v(" "),s("li",[t._v("정확한 테스트 구현을 위해 틀린 예시를 한번 봐보자")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("testEquality")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertTrue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dollar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dollar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertFalse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dollar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dollar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("이제 구현해 준다")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dollar")]),t._v(" dollar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dollar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dollar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("amount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("테스트 목록")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("$5 + 10CHF = $10 (환율 1:2일 경우)")])]),t._v(" "),s("tr",[s("td",[s("s",[t._v("$5 * 2 = $10")])])]),t._v(" "),s("tr",[s("td",[t._v("amount를 private으로 만들기")])]),t._v(" "),s("tr",[s("td",[s("s",[t._v("Dollar 부작용?")])])]),t._v(" "),s("tr",[s("td",[t._v("Money 반올림?")])]),t._v(" "),s("tr",[s("td",[s("s",[t._v("eqauls()")])])]),t._v(" "),s("tr",[s("td",[t._v("hashCode()")])])])]),t._v(" "),s("ul",[s("li",[t._v("일시적으로는 잘 돌아가게 짰지만, 정확한 테스트 지원을 위해서 지금 설계하는 프로그램이 어떤 변화 가능성을 지원해야 할까?")]),t._v(" "),s("li",[t._v("몇몇 부분을 변경해 보면 명확해 진다")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("테스트 목록")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("$5 + 10CHF = $10 (환율 1:2일 경우)")])]),t._v(" "),s("tr",[s("td",[s("s",[t._v("$5 * 2 = $10")])])]),t._v(" "),s("tr",[s("td",[t._v("amount를 private으로 만들기")])]),t._v(" "),s("tr",[s("td",[s("s",[t._v("Dollar 부작용?")])])]),t._v(" "),s("tr",[s("td",[t._v("Money 반올림?")])]),t._v(" "),s("tr",[s("td",[s("s",[t._v("eqauls()")])])]),t._v(" "),s("tr",[s("td",[t._v("hashCode()")])]),t._v(" "),s("tr",[s("td",[t._v("Equal null")])]),t._v(" "),s("tr",[s("td",[t._v("Equal object")])])])]),t._v(" "),s("ul",[s("li",[t._v("동일성 문제는 일시적으로 해결 됐지만, 만약 null이나 다른 객체가 들어와 비교하면 어떻게 될까?")]),t._v(" "),s("li",[t._v("일반적인 상황이긴 하지만, 지금 당장 필요하진 않으니 할일 목록에 따로 적어만 두도록 하자")]),t._v(" "),s("li",[t._v("이제 동질성 기능을 구현했으므로 Dollar와 Dollar를 직접 비교할 수 있게 됐다.")]),t._v(" "),s("li",[t._v("이제 amount를 private으로 만들 수 있게 됐다.")]),t._v(" "),s("li",[t._v("위의 작업을 보면 아래와 같은 순서를 거쳤다")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" 우리의 디자인 패턴"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("값 객체"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("이 하나의 또 다른 오퍼레이션을 암시한다는 것을 알게됨\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" 해당 오퍼레이션을 테스트함\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" 해당 오퍼레이션을 간단히 구현\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v(" 곧장 리팩토링 하는 대신 테스트를 조금 더 한다\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.")]),t._v(" 두 경우 모두 수용할 수 있도록 리팩토링\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);
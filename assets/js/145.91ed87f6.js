(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{793:function(a,s,t){"use strict";t.r(s);var n=t(0),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_6장"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6장"}},[a._v("#")]),a._v(" 6장")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("테스트 목록")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("$5 + 10CHF = $10 (환율 1:2일 경우)")])]),a._v(" "),t("tr",[t("td",[t("s",[a._v("$5 * 2 = $10")])])]),a._v(" "),t("tr",[t("td",[t("s",[a._v("amount를 private으로 만들기")])])]),a._v(" "),t("tr",[t("td",[t("s",[a._v("Dollar 부작용?")])])]),a._v(" "),t("tr",[t("td",[a._v("Money 반올림?")])]),a._v(" "),t("tr",[t("td",[t("s",[a._v("eqauls()")])])]),a._v(" "),t("tr",[t("td",[a._v("hashCode()")])]),a._v(" "),t("tr",[t("td",[a._v("Equal null")])]),a._v(" "),t("tr",[t("td",[a._v("Equal object")])]),a._v(" "),t("tr",[t("td",[t("s",[a._v("5CHF X 2 = 10CHF")])])]),a._v(" "),t("tr",[t("td",[a._v("Dollar / Franc 중복")])]),a._v(" "),t("tr",[t("td",[t("code",[a._v("공용 equals")])])]),a._v(" "),t("tr",[t("td",[a._v("공용 times")])])])]),a._v(" "),t("ul",[t("li",[a._v("코드 복붙을 아주 많이했다")]),a._v(" "),t("li",[a._v("요걸 없애기 위해서 만든 클래스 중 하나가 다른 클래스를 상속받게 하는 것")]),a._v(" "),t("li",[a._v("근데 그러면 개판이됨")]),a._v(" "),t("li",[a._v("대신 두 클래스의 공통 상위 클래스를 만든다")]),a._v(" "),t("li",[a._v("MONEY")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Money")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Money")]),a._v("\n")])])]),t("ul",[t("li",[a._v("Dollar가 Money를 상속받도록 해보자")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Dollar")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Money")]),a._v("\n")])])]),t("ul",[t("li",[a._v("테스트는 당연히 잘돌아간다")]),a._v(" "),t("li",[a._v("이제 amount 인스턴스 변수를 Money로 옮길 수 있다")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Money")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" amount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("ul",[t("li",[a._v("하위클래스에서 보도록 protected로 선언해 줬다")]),a._v(" "),t("li",[a._v("이제 equals() 코드를 위로 올리는 일을 할 수 있게 되었다.")]),a._v(" "),t("li",[a._v("우선 임시 변수 선언하는 부분을 변경한다")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Dollar")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Money")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("equals")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Money")]),a._v(" dollar "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Dollar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" dollar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("amount "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("amount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("ul",[t("li",[a._v("당연히 테스트는 아주 잘 돈다")]),a._v(" "),t("li",[a._v("이제 cast를 변경해준다")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Dollar")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Money")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("equals")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Money")]),a._v(" dollar "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Money")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" dollar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("amount "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("amount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("ul",[t("li",[a._v("원할한 의사소통을 위해 변수명도 바꿔준다")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Dollar")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Money")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("equals")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Money")]),a._v(" money "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Money")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" money"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("amount "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("amount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("이제 이 메소드를 Dollar에서 Money로 옮긴다")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Money")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" amount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("equals")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Money")]),a._v(" money "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Money")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" money"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("amount "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("amount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("ul",[t("li",[a._v("이제 Franc.equals()를 제거해야 한다.")]),a._v(" "),t("li",[a._v("근데 문제는 동치성 테스트에 Franc테스트 코드가 없다")]),a._v(" "),t("li",[a._v("복붙을 안했으니까")]),a._v(" "),t("li",[a._v("적절한 테스트를 갖지 못한 코드에서 TDD를 해야하는 경우가 종종 있다.")]),a._v(" "),t("li",[a._v("충분한 테스트가 없다면 지원 테스트가 갖춰지지 않은 리팩토링을 만날 수 밖에 없음")]),a._v(" "),t("li",[a._v("리팩토링하면서 실수해도 테스트가 다 도는 문제가 생기는것")]),a._v(" "),t("li",[a._v("그럴 때 있으면 좋을거 같은 테스트를 작성한다")]),a._v(" "),t("li",[a._v("리팩토링은 매우중요!")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Test")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("testFrancEquality")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("assertTrue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Franc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("equals")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Franc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("assertFalse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Franc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("equals")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Franc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("ul",[t("li",[a._v("이제 Franc도 Money를 상속하도록 하고, amount를 없앤다")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Franc")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Money")]),a._v("\n")])])]),t("ul",[t("li",[a._v("Franc의 equals도 Money와 동일하므로 삭제해버린다.")]),a._v(" "),t("li",[a._v("그런데 Franc와 Dollar를 비교하면 어떻게 될까?")]),a._v(" "),t("li",[a._v("이건 다음장에서 하도록 목록에 추가한다")])]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("테스트 목록")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("$5 + 10CHF = $10 (환율 1:2일 경우)")])]),a._v(" "),t("tr",[t("td",[t("s",[a._v("$5 * 2 = $10")])])]),a._v(" "),t("tr",[t("td",[t("s",[a._v("amount를 private으로 만들기")])])]),a._v(" "),t("tr",[t("td",[t("s",[a._v("Dollar 부작용?")])])]),a._v(" "),t("tr",[t("td",[a._v("Money 반올림?")])]),a._v(" "),t("tr",[t("td",[t("s",[a._v("eqauls()")])])]),a._v(" "),t("tr",[t("td",[a._v("hashCode()")])]),a._v(" "),t("tr",[t("td",[a._v("Equal null")])]),a._v(" "),t("tr",[t("td",[a._v("Equal object")])]),a._v(" "),t("tr",[t("td",[t("s",[a._v("5CHF X 2 = 10CHF")])])]),a._v(" "),t("tr",[t("td",[a._v("Dollar / Franc 중복")])]),a._v(" "),t("tr",[t("td",[t("s",[a._v("공용 equals")])])]),a._v(" "),t("tr",[t("td",[a._v("공용 times")])]),a._v(" "),t("tr",[t("td",[a._v("Franc와 Dollar 비교하기")])])])]),a._v(" "),t("ul",[t("li",[a._v("정리하면")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.")]),a._v(" 공통된 코드를 첫 번째 클래스"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Dollar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("에서 상위 클래스"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Money")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("로 단계적으로 올린다\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.")]),a._v(" 두 번째 클래스"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Franc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("도 "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Money")]),a._v("의 하위 클래스로 만든다\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.")]),a._v(" 불필요한 구현을 제거하기 전에 두 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("equals")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" 구현을 일치시킨다\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
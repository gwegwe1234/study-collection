(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{793:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_5장"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5장"}},[t._v("#")]),t._v(" 5장")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("테스트 목록")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("$5 + 10CHF = $10 (환율 1:2일 경우)")])]),t._v(" "),a("tr",[a("td",[a("s",[t._v("$5 * 2 = $10")])])]),t._v(" "),a("tr",[a("td",[a("s",[t._v("amount를 private으로 만들기")])])]),t._v(" "),a("tr",[a("td",[a("s",[t._v("Dollar 부작용?")])])]),t._v(" "),a("tr",[a("td",[t._v("Money 반올림?")])]),t._v(" "),a("tr",[a("td",[a("s",[t._v("eqauls()")])])]),t._v(" "),a("tr",[a("td",[t._v("hashCode()")])]),t._v(" "),a("tr",[a("td",[t._v("Equal null")])]),t._v(" "),a("tr",[a("td",[t._v("Equal object")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("5CHF X 2 = 10CHF")])])])])]),t._v(" "),a("ul",[a("li",[t._v("가장 흥미로워 보이는 첫 번째 테스트에 대해 접근을 어떻게 해야될까?")]),t._v(" "),a("li",[t._v("너무 사이즈가 크다")]),t._v(" "),a("li",[t._v("작은 단계 하나로 구현하는 테스트를 작성해낼 수 있을지 확실하지 않다")]),t._v(" "),a("li",[t._v("우선은 Dollar와 비슷하지만 달러대신 프랑(오래된 책이구나..)을 표현할 수 있는 객체가 필요하다")]),t._v(" "),a("li",[t._v("Dollar 객체와 비슷하게 작동하는 Franc이라는 객체를 만든다면 단위가 섞인 덧셈 테스트를 작성하고 돌려보는데 더 가까워진다")]),t._v(" "),a("li",[t._v("Dollar 테스트 복사후 수정")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("testFrancMultiplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Franc")]),t._v(" five "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Franc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertEquals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Franc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" five"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("times")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertEquals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Franc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" five"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("times")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("이제 초록색으로 바꾸기위해 Dollar 객체를 복사해 Franc 객체를만든다")]),t._v(" "),a("li",[t._v("근데 이런 복붙은 당연히 좋은 방법이 아님")]),t._v(" "),a("li",[t._v("그래도 아래 주기를 항상 생각이 필요")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" 테스트 작성\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" 컴파일 되게 하기\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" 실패하는지 확인하기 위해 실행\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v(" 실행하게 만듦\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.")]),t._v(" 중복 제거\n")])])]),a("ul",[a("li",[t._v("처음 네 단계는 빠르게 진행해야 된다")]),t._v(" "),a("li",[t._v("그러면 새 기능이 포함되더라도 잘 알고 있는 상태에 이를 수 있다")]),t._v(" "),a("li",[t._v("즉 코드가 더러워지는 죄를 지을지언정 속도가 아주 빠르다")]),t._v(" "),a("li",[t._v("더러운 Franc 코드를 작성해보자")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Franc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Franc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Franc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("times")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" multiplier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Franc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" multiplier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Franc")]),t._v(" franc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Franc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" franc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hashCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Objects")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("테스트 목록")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("$5 + 10CHF = $10 (환율 1:2일 경우)")])]),t._v(" "),a("tr",[a("td",[a("s",[t._v("$5 * 2 = $10")])])]),t._v(" "),a("tr",[a("td",[a("s",[t._v("amount를 private으로 만들기")])])]),t._v(" "),a("tr",[a("td",[a("s",[t._v("Dollar 부작용?")])])]),t._v(" "),a("tr",[a("td",[t._v("Money 반올림?")])]),t._v(" "),a("tr",[a("td",[a("s",[t._v("eqauls()")])])]),t._v(" "),a("tr",[a("td",[t._v("hashCode()")])]),t._v(" "),a("tr",[a("td",[t._v("Equal null")])]),t._v(" "),a("tr",[a("td",[t._v("Equal object")])]),t._v(" "),a("tr",[a("td",[a("s",[t._v("5CHF X 2 = 10CHF")])])]),t._v(" "),a("tr",[a("td",[t._v("Dollar / Franc 중복")])]),t._v(" "),a("tr",[a("td",[t._v("공용 equals")])]),t._v(" "),a("tr",[a("td",[t._v("공용 times")])])])]),t._v(" "),a("ul",[a("li",[t._v("이제 5CHF X 2 = 10CHF 테스트가 완료 되었다")]),t._v(" "),a("li",[t._v("코드를 실행시키기까지의 단계가 짧았기 대문에 컴파일 되게하기 단계도 넘어갈 수 있었다")]),t._v(" "),a("li",[t._v("중복이 매우 많으므로 그 중복을 없앨 테스트 목록을 추가하자")]),t._v(" "),a("li",[t._v("검토해보면")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" 큰 테스트를 공략할 수 없다"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 그래서 진전할 수 있는 작은 테스트를 만든다\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" 뻔뻔스럽게도 중복을 만들고 조금 고쳐 테스트를 작성한다\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" 설상가상으로 모델 코드까지 쓰레기같이 복사하고 수정해서 테스트를 통과시킨다\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v(" 중복이 사라지기 전에는 집에 가지않는다고 약속 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" 남한테 안보여줌\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
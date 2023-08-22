(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{778:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_1장"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1장"}},[t._v("#")]),t._v(" 1장")]),t._v(" "),s("ul",[s("li",[t._v("통화 단위와 환율이 필요")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("테스트 목록")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("$5 + 10CHF = $10 (환율 1:2일 경우)")])]),t._v(" "),s("tr",[s("td",[t._v("$5 * 2 = $10")])])])]),t._v(" "),s("ul",[s("li",[t._v("제대로된 코드를 짜기위한 정확하고 필요한 테스트코드는 어떤게 있을까?\n"),s("ul",[s("li",[t._v("통화가 다른 두 금액을 더해서 주어진 환율에 맞게 변한 금액을 결과로 얻을 수 있어야 함")]),t._v(" "),s("li",[t._v("어떤 금액(주가)을 어떤 수(주식의 수)에 곱한 금액을 결과로 얻을 수 있어야 함")])])]),t._v(" "),s("li",[t._v("어떤 객체가 필요할까?")]),t._v(" "),s("li",[t._v("사실 위의 말은 함정")]),t._v(" "),s("li",[t._v("객체가 아닌 테스트를 먼저 만들어야 한다")]),t._v(" "),s("li",[t._v("다시 말해보면")]),t._v(" "),s("li",[t._v("어떤 테스트가 필요할까?")]),t._v(" "),s("li",[t._v("첫 번째 테스트는 복잡해 보이고 두 번째 테스트는 간단해 보이니 두 번째 테스트를 먼저 진행한다")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("testMultiplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dollar")]),t._v(" five "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dollar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    five"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("times")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertEquals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" five"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("맘에 안드는 부분이 많고 부작용이 있을 수 있지만, 우선 이런 문제들은 무시하고 진행한다.")]),t._v(" "),s("li",[t._v("우선 실패하는 테스트가 주어진 상태이고, 최대한 빨리 초록 막대를 보여야 한다.")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("테스트 목록")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("$5 + 10CHF = $10 (환율 1:2일 경우)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$5 * 2 = $10")])])]),t._v(" "),s("tr",[s("td",[t._v("amount를 private으로 만들기")])]),t._v(" "),s("tr",[s("td",[t._v("Dollar 부작용?")])]),t._v(" "),s("tr",[s("td",[t._v("Money 반올림?")])])])]),t._v(" "),s("ul",[s("li",[t._v("위의 코드는 컴파일 조차 되지 않는다")]),t._v(" "),s("li",[t._v("현재 4개의 컴파일 에러가 존재한다\n"),s("ul",[s("li",[t._v("Dollar 클래스 없음")]),t._v(" "),s("li",[t._v("생성자 없음")]),t._v(" "),s("li",[t._v("times(int) 메소드 없음")]),t._v(" "),s("li",[t._v("amount 필드 없음")])])]),t._v(" "),s("li",[t._v("한 번에 하나씩")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dollar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("달러 컴파일 에러가 사라짐")]),t._v(" "),s("li",[t._v("생성자를 만든다")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dollar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("이제 에러 2개 남음")]),t._v(" "),s("li",[t._v("times()의 stub 구현이 필요하다")]),t._v(" "),s("li",[t._v("컴파일만 되게 최소로")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("times")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" multiplier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("마지막으로 amount 필드 생성")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("이제 정상적으로 컴파일이 되고 테스트는 실패하게 된다")]),t._v(" "),s("li",[t._v("JUnit은 결과가 10이 나와야 하는데 0이 나왔다는 것을 알려준다")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("opentest4j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AssertionFailedError")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Expected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Actual")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),s("ul",[s("li",[t._v("이 과정들을 통해서 우리는 "),s("code",[t._v("다중 통화 구현")]),t._v(" 문제에서 "),s("code",[t._v("이 테스트를 통과시킨 후 나머지 테스트들도 통과시키기")]),t._v(" 로 범위가 작아졌다.")]),t._v(" "),s("li",[t._v("위의 테스트를 통과 시키는건 매우 쉬움")]),t._v(" "),s("li",[t._v("가장 최소한 단위의 테스트 통과 방법은 아래와 같다")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" amount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("이제 초록색이 뜨긴한다")]),t._v(" "),s("li",[t._v("물론 원하는 동작은 아니지만")]),t._v(" "),s("li",[t._v("이제 아래 주기와 같이 계속 수정이 필요하다")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" 작은 테스트를 하나 추가한다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" 모든 테스트를 실행해서 테스트가 실패하는 것을 확인한다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" 조금 수정한다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v(" 모든 테스트를 실행해서 테스트가 성공하는 것을 확인한다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.")]),t._v(" 중복을 제거하기 위해 리팩토링을 한다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("ul",[s("li",[t._v("4번까지 했으니 이제 5번을 해야한다")]),t._v(" "),s("li",[t._v("중복이 어딨지?")]),t._v(" "),s("li",[t._v("10은 다른 어딘가에서 넘어온 값")]),t._v(" "),s("li",[t._v("이걸 중복을 없애줘야 한다")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("times")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" multiplier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    amount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("여전히 테스트는 통과한다")]),t._v(" "),s("li",[t._v("단계단계가 너무 작다는 느낌도 든다")]),t._v(" "),s("li",[t._v("근데 이게 TDD임")]),t._v(" "),s("li",[t._v("이제 5를 얻기위해 생성자에 amount값을 집어넣어주는 코드를 추가한다")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dollar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("amount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("그럼 이제 이걸 times에서 쓸 수 있다")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("times")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" multiplier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    amount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("인자 multiplier는 2이므로, 상수를 이 인자로 대체한다")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("times")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" multiplier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    amount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" multiplier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("이제 첫 번째 테스트는 완료가 되었다.")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("테스트 목록")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("$5 + 10CHF = $10 (환율 1:2일 경우)")])]),t._v(" "),s("tr",[s("td",[s("s",[t._v("$5 * 2 = $10")])])]),t._v(" "),s("tr",[s("td",[t._v("amount를 private으로 만들기")])]),t._v(" "),s("tr",[s("td",[t._v("Dollar 부작용?")])]),t._v(" "),s("tr",[s("td",[t._v("Money 반올림?")])])])]),t._v(" "),s("ul",[s("li",[t._v("다음과 같은 작업들을 진행했다\n"),s("ul",[s("li",[t._v("우리가 알고 있는 작업해야 할 테스트 목록을 만듬")]),t._v(" "),s("li",[t._v("오퍼레이션이 외부에서 어떻게 보이길 원하는지 말해주는 이야기를 코드로 표현")]),t._v(" "),s("li",[t._v("JUnit에 대한 상세한 사항들을 잠시 무시")]),t._v(" "),s("li",[t._v("스텁 구현(껍데기 구현)을 통해 테스트를 컴파일")]),t._v(" "),s("li",[t._v("아주 쓰레기같이 테스트를 통과시킴")]),t._v(" "),s("li",[t._v("돌아가는 코드에서 상수를 변수로 변경하여 점진적으로 일반화")]),t._v(" "),s("li",[t._v("새로운 할일들을 한번에 처리하는 대신 할일 목록에 추가하고 넘어감")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);
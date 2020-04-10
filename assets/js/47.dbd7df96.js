(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{526:function(a,s,t){a.exports=t.p+"assets/img/oop1.ac372952.png"},527:function(a,s,t){a.exports=t.p+"assets/img/oop2.552a1f00.png"},565:function(a,s,t){"use strict";t.r(s);var e=t(0),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"절차지향-vs-객체지향"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#절차지향-vs-객체지향"}},[a._v("#")]),a._v(" 절차지향 vs 객체지향")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("객체지향 객체지향 엄청나게 얘기는 많이듣고 좋다고 얘기는 들었지만, 실제로 내가 객체지향으로 개발을 하고있는지에 대한 고민이 들었다. 겸사겸사 객체지향을 공부하면서 정리를 해보려고 한다.\n")])])]),e("ul",[e("li",[a._v("개발을 하다보면 한번 만든 시스템이 5년, 10년 이상씩 쓴다")]),a._v(" "),e("li",[a._v("오래 쓰는 시스템일수록 유지보수에 대한 고찰이 필요하다")])]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[a._v("초기 개발 비용 "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" 유지 보수 비용\n")])])]),e("ul",[e("li",[a._v("이러한 비용을 줄이기 위해 어떤 코드를 짜야할까?\n"),e("ul",[e("li",[a._v("분석이 쉬운 코드")]),a._v(" "),e("li",[a._v("변경이 쉬운 코드")]),a._v(" "),e("li",[a._v("-> 객체 지향")])])])]),a._v(" "),e("h3",{attrs:{id:"절차-지향"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#절차-지향"}},[a._v("#")]),a._v(" 절차 지향")]),a._v(" "),e("ul",[e("li",[a._v("절차 지향 코드는 데이터를 중심으로 개발을 한다.")]),a._v(" "),e("li",[a._v("개발 클래스 안에다가 직접 데이터를 조작한다는 소리\n"),e("img",{attrs:{src:t(526),alt:"절차지향"}})]),a._v(" "),e("li",[a._v("각각의 클래스에서 데이터를 조작을 하기 때문에, 이에 대한 의존성이 크다.")]),a._v(" "),e("li",[a._v("절차지향 -> 이프문\n"),e("ul",[e("li",[a._v("데이터 모델링을 한다 (데이터가 엄청 중요하다고 생각)")]),a._v(" "),e("li",[a._v("VO 생성 (getter / setter)")]),a._v(" "),e("li",[a._v("dao 생성")]),a._v(" "),e("li",[a._v("순차적으로 dao에서 데이터를 가져오고 조건에 따라 소스를 실행")]),a._v(" "),e("li",[a._v("수많은 if / else 문 생성")]),a._v(" "),e("li",[a._v("객체 지향적으로 짰다고 생각을 하지만 실질적으론 절차 지향적 코드")])])]),a._v(" "),e("li",[a._v("위와 같이 절차지향적으로 짠 코드는 결과적으로 가독성이 떨어지고, 코드의 유지보수가 매우 어려워진다.")]),a._v(" "),e("li",[a._v("예를 들어 데이터 타입이 int 에서 long으로 바뀌면, 해당 데이터를 참고하는 모든 클래스의 수정이 필요해진다.")]),a._v(" "),e("li",[a._v("데이터 지향 모델")])]),a._v(" "),e("h3",{attrs:{id:"객체-지향"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#객체-지향"}},[a._v("#")]),a._v(" 객체 지향")]),a._v(" "),e("ul",[e("li",[a._v("객체지향은 데이터에 집중하는것이 아닌 기능에 집중한다.\n"),e("ul",[e("li",[a._v("절차지향의 if / else 문을")])])]),a._v(" "),e("li",[a._v("객체간 데이터 이동은 최소한으로 줄이면서, 객체간엔 서로의 기능을 실행해 달라고 요청을 한다.\n"),e("img",{attrs:{src:t(527),alt:"객체지향"}})]),a._v(" "),e("li",[a._v("서로간에 기능을 요청하는 형태이기 때문에, 각각의 내부클래스에서 데이터가 변한다고해도 영향이 덜간다.")]),a._v(" "),e("li",[a._v("즉 캡슐화를 잘 하게 되면 유지보수 비용이 줄어든다.")])]),a._v(" "),e("h3",{attrs:{id:"객체-지향의-핵심"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#객체-지향의-핵심"}},[a._v("#")]),a._v(" 객체 지향의 핵심")]),a._v(" "),e("ul",[e("li",[a._v("객체의 핵심기능은 바로 "),e("em",[a._v("기능")]),a._v(" 제공이다.\n"),e("ul",[e("li",[a._v("어떠한 기능을 제공하는지 정의한다.")]),a._v(" "),e("li",[a._v("내부적으로 그 기능을 어떻게 지원하고, 어떤데이터를 쓰는지 등은 숨긴다 (캡슐화)")])])]),a._v(" "),e("li",[a._v("만약 휴대폰이라는 객체가 있다고하면\n"),e("ul",[e("li",[a._v("볼륨 증가")]),a._v(" "),e("li",[a._v("볼륨 감소")]),a._v(" "),e("li",[a._v("화면 띄움")]),a._v(" "),e("li",[a._v("전원 끄기")]),a._v(" "),e("li",[a._v("전원 키기")]),a._v(" "),e("li",[a._v("등등..")])])])]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CellPhone")]),a._v(" cellPhone "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CellPhone")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ncellPhone"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("increaseVolume")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 어떻게 볼륨을 조절하는지 호출하는 쪽에서 알 수가 없음")]),a._v("\n")])])]),e("ul",[e("li",[a._v("만약 절차지향적으로 개발을 하면")])]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CellPhone")]),a._v(" cellPhone "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CellPhone")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Volume")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" cellPhone"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("getVolume")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ncellPhone"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("setVolume")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("volume "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("ul",[e("li",[a._v("위의 코드는 기능만 나와있고 데이터는 숨겨져 있지만, 아래는 볼륨의 자료형까지 다 보여진다.")]),a._v(" "),e("li",[a._v("만약 절차지향 소스에선, CellPhone에서 볼륨의 자료형이 long으로 바뀌면, 모든 호출하는 코드도 변경이 되어야 한다.")]),a._v(" "),e("li",[a._v("하지만 객체 지향은 CellPhone 내의 volume자료형이 뭐건간에 호출하는 쪽에선 변경되는게 없다.")]),a._v(" "),e("li",[a._v("이게 바로 객체 지향 vs 절차 지향 의 핵심 차이")]),a._v(" "),e("li",[a._v("좋은 객체는 데이터를 주는게 아닌 기능을 제공해야한다. 무조건..!")])])])}),[],!1,null,null,null);s.default=n.exports}}]);
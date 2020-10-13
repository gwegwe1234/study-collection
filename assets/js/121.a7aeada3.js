(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{648:function(a,t,s){"use strict";s.r(t);var v=s(0),r=Object(v.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"_6강"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6강"}},[a._v("#")]),a._v(" 6강")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#기능-설계-대-구조-설계"}},[a._v("기능 설계 대 구조 설계")])]),s("li",[s("a",{attrs:{href:"#두-가지-재료-기능과-구조"}},[a._v("두 가지 재료: 기능과 구조")])]),s("li",[s("a",{attrs:{href:"#안정적인-재료-구조"}},[a._v("안정적인 재료: 구조")]),s("ul",[s("li",[s("a",{attrs:{href:"#도메인-모델"}},[a._v("도메인 모델")])]),s("li",[s("a",{attrs:{href:"#도메인의-모습을-담을-수-있는-객체지향"}},[a._v("도메인의 모습을 담을 수 있는 객체지향")])]),s("li",[s("a",{attrs:{href:"#표현적-차이"}},[a._v("표현적 차이")])]),s("li",[s("a",{attrs:{href:"#불안정한-기능을-담는-안정적인-도메인-모델"}},[a._v("불안정한 기능을 담는 안정적인 도메인 모델")])])])]),s("li",[s("a",{attrs:{href:"#불안정한-제료-기능"}},[a._v("불안정한 제료: 기능")]),s("ul",[s("li",[s("a",{attrs:{href:"#유스케이스"}},[a._v("유스케이스")])]),s("li",[s("a",{attrs:{href:"#유스케이스의-특성"}},[a._v("유스케이스의 특성")])]),s("li",[s("a",{attrs:{href:"#유스케이스는-설계-기법도-객체지향-기법도-아니다"}},[a._v("유스케이스는 설계 기법도, 객체지향 기법도 아니다")])])])]),s("li",[s("a",{attrs:{href:"#재료-합치기-기능과-구조의-통합"}},[a._v("재료 합치기: 기능과 구조의 통합")]),s("ul",[s("li",[s("a",{attrs:{href:"#도메인-모델-유스케이스-그리고-책임-주도-설계"}},[a._v("도메인 모델, 유스케이스, 그리고 책임-주도 설계")])]),s("li",[s("a",{attrs:{href:"#기능-변경을-흡수하는-안정적인-구조"}},[a._v("기능 변경을 흡수하는 안정적인 구조")])])])]),s("li",[s("a",{attrs:{href:"#정리"}},[a._v("정리")])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"기능-설계-대-구조-설계"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기능-설계-대-구조-설계"}},[a._v("#")]),a._v(" 기능 설계 대 구조 설계")]),a._v(" "),s("ul",[s("li",[a._v("기능 설계 : 무엇을 할 수 있는지에 초점")]),a._v(" "),s("li",[a._v("구조 설계 : 제품의 형태가 어때야 하는지에 초점")]),a._v(" "),s("li",[a._v("소프트웨어는 요구사항이 항상 변하고, 추가되기 때문에 구조적으로 설계를 해 재사용 성을 높이고 변경에 빠르게 대처하는게 좋다.")]),a._v(" "),s("li",[a._v("미래에 대비하는 가장 좋은 방법은 변경을 예측 하는것이 아니라, 변경을 수용할 수 있는 선택의 여지를 설계에 마련해 놓는것")]),a._v(" "),s("li",[a._v("즉 객체지향, 특히 객체 지도를 만들어서 구조를 설계해 소프트웨어를 만들면 좋다.")])]),a._v(" "),s("h2",{attrs:{id:"두-가지-재료-기능과-구조"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#두-가지-재료-기능과-구조"}},[a._v("#")]),a._v(" 두 가지 재료: 기능과 구조")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.")]),a._v(" 구조는 사용자나 이해 관계자들이 도메인에 관해 생각하는 개념과 개념들 간의 관계로 표현한다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.")]),a._v(" 기능은 사용자의 목표를 만족시키기 위해 책임을 수행하는 시스템의 행위로 표현한다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n")])])]),s("h2",{attrs:{id:"안정적인-재료-구조"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#안정적인-재료-구조"}},[a._v("#")]),a._v(" 안정적인 재료: 구조")]),a._v(" "),s("h3",{attrs:{id:"도메인-모델"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#도메인-모델"}},[a._v("#")]),a._v(" 도메인 모델")]),a._v(" "),s("ul",[s("li",[a._v("사용자가 프로그램을 사용하는 대상 분야를 "),s("code",[a._v("도메인")]),a._v("이라고 한다.")]),a._v(" "),s("li",[a._v("도메인 모델에서 모델이란 대상을 단순화해서 표현한 것")]),a._v(" "),s("li",[s("code",[a._v("모델")]),a._v("은 지식을 선택적으로 단순화하고 의식적으로 구조화한 형태")]),a._v(" "),s("li",[a._v("이걸 합친 "),s("code",[a._v("도메인 모델")]),a._v("은 소프트웨어가 목적하는 영역 내의 개념과 개념 간의 관계, 다양한 규칙이나 제약 등을 주의 깊게 추상화한 것")]),a._v(" "),s("li",[a._v("ex) 은행 업무에 종사하는 사람들은 은행 도메인을 고객과 계좌 사이의 돈의 흐름으로 이해한다.")])]),a._v(" "),s("h3",{attrs:{id:"도메인의-모습을-담을-수-있는-객체지향"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#도메인의-모습을-담을-수-있는-객체지향"}},[a._v("#")]),a._v(" 도메인의 모습을 담을 수 있는 객체지향")]),a._v(" "),s("ul",[s("li",[a._v("최종 코드는 사용자가 도메인을 바라보는 관점을 반영해야 한다.")]),a._v(" "),s("li",[a._v("바로 객체지향이 이런걸 만족시킨다.")])]),a._v(" "),s("h3",{attrs:{id:"표현적-차이"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#표현적-차이"}},[a._v("#")]),a._v(" 표현적 차이")]),a._v(" "),s("ul",[s("li",[a._v("소프트웨어 객체는 절대로 현실 객체에 대한 추상화가 아니다.")]),a._v(" "),s("li",[a._v("소프트웨어 객체와 현실 객체 사이의 관계를 가장 적절하게 표현한 단어는 은유..!")]),a._v(" "),s("li",[a._v("물론 소프트웨어 객체는 기반이 현실 객체이다.")]),a._v(" "),s("li",[a._v("이런 현실객체 <-> 소프트웨어 객체 간의 간극을 "),s("code",[a._v("표현적 차이")]),a._v(" or "),s("code",[a._v("의미적 차이")]),a._v("라고 부른다.")]),a._v(" "),s("li",[a._v("이 간극을 최대한 줄이는것이 중요")]),a._v(" "),s("li",[a._v("은유를 통해 투영해야 하는 대상이 바로 도메인 모델이다.")]),a._v(" "),s("li",[a._v("열심히 도메인 객체들을 은유해 보자. (말이 어려워..)")]),a._v(" "),s("li",[a._v("결국 현실과 차이는 있지만 최대한 비슷한 도메인 기반으로 뽑아낸 모델들을 잘 설계해서 객체지향적으로 코드를 작성하자 이말인듯")])]),a._v(" "),s("h3",{attrs:{id:"불안정한-기능을-담는-안정적인-도메인-모델"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#불안정한-기능을-담는-안정적인-도메인-모델"}},[a._v("#")]),a._v(" 불안정한 기능을 담는 안정적인 도메인 모델")]),a._v(" "),s("ul",[s("li",[a._v("도메인 모델을 기반으로 작성하는 또다른 이유는 도메인 모델이 제공하는 구조가 상대적으로 안정적이기 때문")])]),a._v(" "),s("h2",{attrs:{id:"불안정한-제료-기능"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#불안정한-제료-기능"}},[a._v("#")]),a._v(" 불안정한 제료: 기능")]),a._v(" "),s("h3",{attrs:{id:"유스케이스"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#유스케이스"}},[a._v("#")]),a._v(" 유스케이스")]),a._v(" "),s("ul",[s("li",[a._v("사용자의 목표를 달성하기 위해 사용자와 시스템 간에 이뤄지는 상호작영의 흐름을 텍스트로 정리한 것을 "),s("code",[a._v("유스케이스")]),a._v("라고 한다.")]),a._v(" "),s("li",[a._v("유스케이스의 가치는 사용자들의 목표를 중심으로 시스템의 기능적인 요구사항들을 이야기 형식으로 묶을 수 있다는 점")])]),a._v(" "),s("h3",{attrs:{id:"유스케이스의-특성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#유스케이스의-특성"}},[a._v("#")]),a._v(" 유스케이스의 특성")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.")]),a._v(" 유스케이스는 사용자와 시스템 간의 상호작용을 보여주는 텍스트다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("다이어그램 아님"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" 이야기 흐름에 집중해 작성하자"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" 다이어그램 집착 x\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.")]),a._v(" 유스케이스는 하나의 시나리오가 아니라 여러 시나리오들의 집합이다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.")]),a._v(" 유스케이스는 단순한 피처 목록과 다르다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" 단순 기능 나열과는 다르다\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" 연관 기능들을 묶어 시나리오로 만들어야 한다\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.")]),a._v(" 유스케이스는 사용자 인터페이스와 관련된 세부 정보를  포함하지 말아야 한다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.")]),a._v(" 유스케이스는 내부 설계와 관련된 정보를 포함하지 않는다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n")])])]),s("h3",{attrs:{id:"유스케이스는-설계-기법도-객체지향-기법도-아니다"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#유스케이스는-설계-기법도-객체지향-기법도-아니다"}},[a._v("#")]),a._v(" 유스케이스는 설계 기법도, 객체지향 기법도 아니다")]),a._v(" "),s("ul",[s("li",[a._v("유스케이스는 단지 사용자가 바라보는 시스템의 외부 관점만을 표현한다")]),a._v(" "),s("li",[a._v("유스케이스는 시스템의 내부 구조나 실행 메커니즘에 관한 어떤 정보도 제공하지 않는다.")]),a._v(" "),s("li",[a._v("유스케이스는 단순하게 사용자가 시스템을 통해 무엇을 얻을 수 있고 어떻게 상호작용할 수 있느냐에 관한 정보만 기술된다.")]),a._v(" "),s("li",[a._v("즉 유스케이스를 통해서는 시스템 내부 구조를 유추할 수도 없고, 객체지향과도 상관이 없다.")]),a._v(" "),s("li",[a._v("유스케이스는 기능적 요구사항을 사용자의 목표라는 문맥을 중심으로 묶기 위한 정리 기법")])]),a._v(" "),s("h2",{attrs:{id:"재료-합치기-기능과-구조의-통합"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#재료-합치기-기능과-구조의-통합"}},[a._v("#")]),a._v(" 재료 합치기: 기능과 구조의 통합")]),a._v(" "),s("h3",{attrs:{id:"도메인-모델-유스케이스-그리고-책임-주도-설계"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#도메인-모델-유스케이스-그리고-책임-주도-설계"}},[a._v("#")]),a._v(" 도메인 모델, 유스케이스, 그리고 책임-주도 설계")]),a._v(" "),s("ul",[s("li",[a._v("도메인 모델은 구조를, 유스케이스는 협력의 출발점인 시스템 책임을 제공한다")]),a._v(" "),s("li",[a._v("커다란 책임을 시스템 안의 작은 규모의 객체들이 수행해야 하는 작은 규모의 책임으로 세분화하고, 어떤 객체를 선택할 지 도메인 모델을 사용한다.")]),a._v(" "),s("li",[a._v("유스케이스를 통해 필요한 메세지들을 식별해 객체들에게 책임을 할당하고, 실제로 객체를 구현하기 위해 클래스를 추가하고 속성과 메소드들을 추가한다.")]),a._v(" "),s("li",[a._v("유스케이스는 사용자에게 제공할 기능을 시스템의 책임으로 보게 함으로써 객체 간의 안정적인 구조에 책임을 분배할 수 있는 출발점을 제공한다.")]),a._v(" "),s("li",[a._v("책임 할당의 기본 원칙은 책임을 수행하는 데 필요한 정보를 가진 객체에게 그 책임을 할당하는 것이다.")])]),a._v(" "),s("h3",{attrs:{id:"기능-변경을-흡수하는-안정적인-구조"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기능-변경을-흡수하는-안정적인-구조"}},[a._v("#")]),a._v(" 기능 변경을 흡수하는 안정적인 구조")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.")]),a._v(" 도메인 모델을 구성하는 개념은 비즈니스가 없어지거나 완전히 개편되지 않는 한 안정적으로 유지된다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.")]),a._v(" 도메인 모델을 구성하는 개념 간의 관계는 비즈니스 규칙을 기반으로 하기 때문에 비즈니스 정책이 크게 변경되지 않는한 유지된다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n")])])]),s("h2",{attrs:{id:"정리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#정리"}},[a._v("#")]),a._v(" 정리")]),a._v(" "),s("ul",[s("li",[a._v("결국 객체지향적으로 생각하고 개념들을 숙지해서 여러번 적용해보는게 답인거 같다.. 어려워..ㅠㅠ")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{363:function(t,s,a){t.exports=a.p+"assets/img/exception.60eba6c6.png"},388:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"예외처리"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#예외처리"}},[t._v("#")]),t._v(" 예외처리")]),t._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#_1-예외-클래스"}},[t._v("1. 예외 클래스")])]),n("li",[n("a",{attrs:{href:"#_2-사용예시"}},[t._v("2. 사용예시")])]),n("li",[n("a",{attrs:{href:"#_3-사용자-정의-예외-생성"}},[t._v("3. 사용자 정의 예외 생성")])]),n("li",[n("a",{attrs:{href:"#_4-트랜잭션"}},[t._v("4. 트랜잭션")])])])]),t._v("\n예외처리를 하다보니 지금까지 예외를 너무 아무렇게나 처리했다."),n("p"),t._v(" "),n("p",[t._v("그냥 캐치문에 로그만 찍어주고 어떤 에러인지 정확히 나누지도않고..")]),t._v(" "),n("p",[t._v("정확히 용도에 맞는 예외처리를 해주도록 연습하고, 예외처리개념을 좀 정확하게 정리할 필요성을 느껴서 정리좀 해봄")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("컴파일 에러 : 컴파일 할 때 발생하는 에러\n런타임 에러 : 프로그램 실행중에 발생하는 에러\n\n소스코드 컴파일 시 컴파일러에서 소스코드(.java)에 있는 오류들을 잡아서 에러를 알려준다.\n정상적으로 수정하면, 컴파일러가 소스코드 (.java)  파일을 .class 파일로 변환해 준다.\n\n자바에서는 실행 시 (runtime) 발생할 수 있는 프로그램 오류를 ‘에러’와 ‘예외’ 두 가지로 구분하고 있다.\n에러는 메모리 부족이나 스택오버플로우같은 발생하면 복구하기 힘든 심각한 오류이고, 예외는 발생하더라도 수습이 될 수 있는 비교적 덜 심각한 상황이다.\n\n-> 에러 / 예외는 둘다 런타임 오류이다.\n")])])]),n("h2",{attrs:{id:"_1-예외-클래스"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-예외-클래스"}},[t._v("#")]),t._v(" 1. 예외 클래스")]),t._v(" "),n("p",[n("img",{attrs:{src:a(363),alt:"Alt text"}})]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("RuntimeException 클래스들은 주로 프로그래머의 실수에 의해서 발생할 수 있는 예외들로서 자바의 프로그래밍 요소와 관계가 깊다.\n-> 프로그래머의 실수로 발생하는 예외\n\nException 클래스들은 주로 외부의 영향으로 발생할 수 있는 것들로서, 프로그램의 사용자들의 동작에 의해서 발생하는 경우가 많다.\n-> 사용자의 실수와 같은 외적인 요인에 의해 발생하는 예외\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("RuntimeException 클래스들과 Exception 클래스들의 중요한 차이점은 컴파일시의 예외처리 체크여부이다. \n\nRuntimeException 클래스들 그룹에 속하는 예외가 발생할 가능성이 있는 코드에는 예외 처리를 해주지 않아도 컴파일 시에 문제가 되지 않지만, Exception 클래스들 그룹에 속하는 예외가 발생할 가능성이 있는 예외는 반드시 처리를 해주어야 하며, 그렇지 않으면 컴파일 시에 에러가 발생한다.\n")])])]),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExceptionTest")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Exception을 강제로 발생시킨다.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("-> 위와 같은 경우는 컴파일 에러가 난다.")]),t._v(" "),n("p",[t._v("예외처리가 되어야 할 부분에 예외처리가 되어 있지 않다는 에러이다. 위의 결과에서 알 수 있는 것처럼, 위에서 분류한 '그 외의 Exception클래스들'이 발생할 가능성이 있는 문자들에 대해 예외처리를 해주지 않으면 컴파일 조차 되지 않는다.")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExceptionTest")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Exception을 강제로 발생시킨다.")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("-> 이런식으로 수정 필요")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExceptionTest")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RuntimeException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// RuntimeException을 강제로 발생시킨다.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("-> 위와 같은 경우 컴파일에서는 에러가 나지 않지만, 실행시에 런타임 에러가 발생하며 종료된다.\n런타임 예외는 컴파일에선 문제가 안되지만, 실제 실행시 문제가 발생하면 에러를 발생시킨다.")]),t._v(" "),n("h2",{attrs:{id:"_2-사용예시"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-사용예시"}},[t._v("#")]),t._v(" 2. 사용예시")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExceptionTest")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logic")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n            무적권\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("try : try 안에는 예외 상황이 발생할 것으로 예상되는 로직이 위치된다.\ncatch : catch 안에는 예외 발생시 후처리를 위한 로직이 들어간다.\nfinally : 무조건 실행\n")])])]),n("h2",{attrs:{id:"_3-사용자-정의-예외-생성"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-사용자-정의-예외-생성"}},[t._v("#")]),t._v(" 3. 사용자 정의 예외 생성")]),t._v(" "),n("p",[t._v("개발자에게 자신이 필요한 에러를 직접 커스터마이징도 가능하다.")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NewException")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NewException")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Exception 클래스를 상속받아 NewException을 생성할 수 있다.\n필요하면 멤버변수, 메소드를 추가가 가능하다. Exception 클래스는 생성시 스트링을 맏아 메세지로 저장이 가능하다.\n사용자 정의 Exception에서도 똑같이 하려면 생성자 정의가 필요\n")])])]),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NewException")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ERROR_CODE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NewException")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" errorCode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ERROR_CODE "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" errorCode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NewException")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 500 error")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getErrCode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ERROR_CODE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("이런식으로 커스터마이징하면, 에러메세지 (getMessage()) 이외에도 설정된 에러코드같은걸 볼 수 있다.")]),t._v(" "),n("h2",{attrs:{id:"_4-트랜잭션"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-트랜잭션"}},[t._v("#")]),t._v(" 4. 트랜잭션")]),t._v(" "),n("p",[t._v("하나의 트랜잭션에서 에러처리를 하는건 매우 중요하다.")]),t._v(" "),n("p",[t._v("트랜잭션은 하나의 작업 처리 단위를 말한다.")]),t._v(" "),n("p",[t._v("예를들어 상품 구매 트랜잭션이 있을 때")]),t._v(" "),n("ul",[n("li",[t._v("상품선택")]),t._v(" "),n("li",[t._v("장바구니 등록")]),t._v(" "),n("li",[t._v("계산\n이런 작업들이 있다.")])]),t._v(" "),n("p",[t._v("이 세가지 작업중 하나가 실패하면 모두가 취소되어야 한다 (Rollback)")]),t._v(" "),n("p",[t._v("수도코드로 정리를 해보면")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("상품구매() {\n    상품선택()\n    장바구니등록()\n    계산()\n}\n\n상품선택() {\n    ...\n}\n\n장바구니 등록(){\n    ...\n}\n\n계산(){\n    ...\n}\n")])])]),n("p",[t._v("요런식의 구조가 된다.")]),t._v(" "),n("p",[t._v("이런상태에서 뭔가가 잘못되서 롤백을 하고싶으면,")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("상품구매() {\n    try {\n        상품선택()\n        장바구니등록()\n        계산()\n    } catch (예외) {\n        모두취소()\n    }\n}\n\n상품선택() throws 예외{\n    ...\n}\n\n장바구니 등록() throws 예외{\n    ...\n}\n\n계산() throws 예외 {\n    ...\n}\n")])])]),n("p",[t._v("요런식으로 각 트랜잭션 단계에서 예외를 던지는 형식으로 구현을 해야한다.")]),t._v(" "),n("p",[t._v("만약")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("상품구매() {\n    상품선택()\n    장바구니등록()\n    계산()\n}\n\n\n상품선택() {\n    try {\n        ...\n    } catch () {\n        선택취소 ()\n    }\n}\n\n\n장바구니 등록() {\n    try {\n        ...\n    } catch () {\n        등록취소 ()\n    }\n}\n\n\n계산() {\n    try {\n        ...\n    } catch () {\n        계산취소 ()\n    }\n}\n")])])]),n("p",[t._v("요런식이면 상품 선택은 안됐는데 계산은 되는 최악의 상황이 나올 수 있으니 예외처리를 할 때는 잘 고려해서 짜도록 하자.")])])}),[],!1,null,null,null);s.default=e.exports}}]);
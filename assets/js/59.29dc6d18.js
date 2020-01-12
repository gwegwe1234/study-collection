(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{420:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_10강"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10강"}},[t._v("#")]),t._v(" 10강")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#가비지-컬렉션"}},[t._v("가비지 컬렉션")]),a("ul",[a("li",[a("a",{attrs:{href:"#q1-메모리는-어떻게-할당하는가"}},[t._v("Q1. 메모리는 어떻게 할당하는가?")])]),a("li",[a("a",{attrs:{href:"#q2-가비지-컬렉션이란-무엇인가"}},[t._v("Q2. 가비지 컬렉션이란 무엇인가?")])])])]),a("li",[a("a",{attrs:{href:"#메모리-튜닝"}},[t._v("메모리 튜닝")]),a("ul",[a("li",[a("a",{attrs:{href:"#q3-스택과-힙의-차이는-무엇인가"}},[t._v("Q3. 스택과 힙의 차이는 무엇인가?")])]),a("li",[a("a",{attrs:{href:"#q4-jvm의-힙-크기는-어떻게-지정할-수-있는가"}},[t._v("Q4. JVM의 힙 크기는 어떻게 지정할 수 있는가?")])]),a("li",[a("a",{attrs:{href:"#q5-자바에서-메모리-누수가-발생할-수-있는가"}},[t._v("Q5. 자바에서 메모리 누수가 발생할 수 있는가?")])])])]),a("li",[a("a",{attrs:{href:"#jvm과-자바-사이의-상호작용"}},[t._v("JVM과 자바 사이의 상호작용")]),a("ul",[a("li",[a("a",{attrs:{href:"#q6-jvm에서-동작하는-실제-자바-코드를-작성할-때-생명주기란-무엇인가"}},[t._v("Q6. JVM에서 동작하는 실제 자바 코드를 작성할 때 생명주기란 무엇인가?")])]),a("li",[a("a",{attrs:{href:"#q7-jvm에게-가비지-컬렉션을-실행하라고-직접-명령할-수-잇는가"}},[t._v("Q7. JVM에게 가비지 컬렉션을 실행하라고 직접 명령할 수 잇는가?")])]),a("li",[a("a",{attrs:{href:"#q8-finalize-메소드는-어떤-역할을-하는가"}},[t._v("Q8. finalize 메소드는 어떤 역할을 하는가?")])]),a("li",[a("a",{attrs:{href:"#q9-weakreference란-무엇인가"}},[t._v("Q9. WeakReference란 무엇인가?")])]),a("li",[a("a",{attrs:{href:"#q10-native-메소드란-무엇인가"}},[t._v("Q10. native 메소드란 무엇인가?")])]),a("li",[a("a",{attrs:{href:"#q11-셧다운-훅이란-무엇인가"}},[t._v("Q11. 셧다운 훅이란 무엇인가?")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"가비지-컬렉션"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#가비지-컬렉션"}},[t._v("#")]),t._v(" 가비지 컬렉션")]),t._v(" "),a("h3",{attrs:{id:"q1-메모리는-어떻게-할당하는가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q1-메모리는-어떻게-할당하는가"}},[t._v("#")]),t._v(" Q1. 메모리는 어떻게 할당하는가?")]),t._v(" "),a("ul",[a("li",[t._v("new 키워드는 자바 힙 영역에 메모리를 할당한다.")]),t._v(" "),a("li",[t._v("힙은 어플리케이션 영역에 접근할 수 있는 메모리의 메인 영역")]),t._v(" "),a("li",[t._v("객체를 할당할 때 이용할 수 있는 메모리가 충분하지 않으면, JVM은 GC를 이용해 힙에서 메모리를 재사용 하려고 한다.")]),t._v(" "),a("li",[t._v("만약 메모리가 터져버리면 OutOfMemoryError가 발생하며 JVM이 종료된다.")]),t._v(" "),a("li",[t._v("힙은 제너레이션이라는 영역으로 구분되는데, GC에서 객체가 수집 대상에서 제외되면 다른 제너레이션으로 옮겨진다.")]),t._v(" "),a("li",[t._v("객체가 처음 생성됐을 때는 Eden이라고 하는 메모리 영역에 할당된다.")]),t._v(" "),a("li",[t._v("이후 GC의 수집 대상에서 제외되면 Survivor라고 하는 메모리 영역으로 옮겨지며, 이 공간에서 수집 대상에서 제외되는 객체는 Tenured 제너레이션에 할당 된다.")])]),t._v(" "),a("h3",{attrs:{id:"q2-가비지-컬렉션이란-무엇인가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q2-가비지-컬렉션이란-무엇인가"}},[t._v("#")]),t._v(" Q2. 가비지 컬렉션이란 무엇인가?")]),t._v(" "),a("ul",[a("li",[t._v("가비지 컬렉션(GC)는 기존에 할당된 메모리를 재사용하는 메커니즘")]),t._v(" "),a("li",[t._v("자바에선 자동으로 관리해 잠재적으로 발생할 수 있는 실수를 예방해 준다.")]),t._v(" "),a("li",[t._v("자바의 전통적인 가비지 컬렉션은 "),a("em",[t._v("mark-and-sweep")]),t._v(" 방식")]),t._v(" "),a("li",[t._v("실행중인 코드에서 참조하는 객체는 live로 표시되고, 이어서 참조되는 것들도 live로 표시한다.")]),t._v(" "),a("li",[t._v("이러한 과정이 끝나면 힙에 있는 각 객체들을 찾아다니며 live로 표시되지 않은 메모리 위치에 메모리를 할당할 수 있게 만든다.")]),t._v(" "),a("li",[t._v("이 과정이 진행되는 동안 메모리를 재배치하려고 JVM의 모든 스레드가 정지되는데, "),a("em",[t._v("stop-the-world")]),t._v(" 라고 부른다.")]),t._v(" "),a("li",[t._v("자바의 GC는 최대한 많은 빈 메모리 영역을 확보하기 위해, 컴패션 작업을 진행한다.")]),t._v(" "),a("li",[t._v("컴패션은 live로 표시한 객체들을 다른 물리적인 메모리 위치로 옮김으로써, JVM이 stop-the-world인 동안 메모리 공간을 확보한다.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://preamtree.tistory.com/118",target:"_blank",rel:"noopener noreferrer"}},[t._v("GC 참고 글"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"메모리-튜닝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#메모리-튜닝"}},[t._v("#")]),t._v(" 메모리 튜닝")]),t._v(" "),a("h3",{attrs:{id:"q3-스택과-힙의-차이는-무엇인가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q3-스택과-힙의-차이는-무엇인가"}},[t._v("#")]),t._v(" Q3. 스택과 힙의 차이는 무엇인가?")]),t._v(" "),a("ul",[a("li",[t._v("스택 : 기본값, 객체의 참조, 메소드가 저장되는 위치\n"),a("ul",[a("li",[t._v("스택에 있는 변수의 생애주기는 코드의 scope에 영향을 받는다.")]),t._v(" "),a("li",[t._v("일반적인 메소드 호출이나, for / while 문 같은 코드의 괄호로 구분해서 정의")]),t._v(" "),a("li",[t._v("해당 스코프 실행이 종료되면 스코프 안에 선언된 변수들은 스택에서 제거된다.")]),t._v(" "),a("li",[t._v("메소드를 호출하면 선언된 변수들은 스택의 상단에 위치된다.")]),t._v(" "),a("li",[t._v("스택에서 다른 메소드를 호출하면 스택은 새로운 메소드의 변수를 스택의 상단에 둔다.")])])]),t._v(" "),a("li",[t._v("재귀를 많이하면 스택 영역이 가득차고 StackOverFlowError가 발생한다.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://namu.wiki/w/%EC%8A%A4%ED%83%9D(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)",target:"_blank",rel:"noopener noreferrer"}},[t._v("스택 참고 글"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"q4-jvm의-힙-크기는-어떻게-지정할-수-있는가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q4-jvm의-힙-크기는-어떻게-지정할-수-있는가"}},[t._v("#")]),t._v(" Q4. JVM의 힙 크기는 어떻게 지정할 수 있는가?")]),t._v(" "),a("ul",[a("li",[t._v("-Xmx 매개변수로 최대 힙 크기 지정이 가능하다.\n"),a("ul",[a("li",[t._v("'java -Xmx512M "),a("code",[t._v("<classname>")]),t._v("' 으로 JVM을 실행하면 JVM은 512MB 최대 힙 크기를 가진 JVM을 생성한다.")])])]),t._v(" "),a("li",[t._v("Xms 매개변수로 JVM에 할당할 초기 메모리 지정이 가능하다.")]),t._v(" "),a("li",[t._v("두 개의 매개변수가 같은 값으로 설정되면 JVM은 실행할 때 모든 메모리를 할당하도록 운영체제에 요청한다.")])]),t._v(" "),a("h3",{attrs:{id:"q5-자바에서-메모리-누수가-발생할-수-있는가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q5-자바에서-메모리-누수가-발생할-수-있는가"}},[t._v("#")]),t._v(" Q5. 자바에서 메모리 누수가 발생할 수 있는가?")]),t._v(" "),a("ul",[a("li",[t._v("자동 GC로 메모리 누수가 없을 것 같지만, 누수 발생이 가능하다.")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MemoryLeakStack")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" stackValues"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" stackPointer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MemoryLeakStack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stackValues "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stackPointer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    stackValues"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stackPointer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stackPointer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    stackPointer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" stackValues"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stackPointer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("동시성이 고려되지 않은 코드로, 여러군대에서 붙으면 쓸모가 없지만 GC가 잡아낼 수가 없다.")])]),t._v(" "),a("h2",{attrs:{id:"jvm과-자바-사이의-상호작용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm과-자바-사이의-상호작용"}},[t._v("#")]),t._v(" JVM과 자바 사이의 상호작용")]),t._v(" "),a("h3",{attrs:{id:"q6-jvm에서-동작하는-실제-자바-코드를-작성할-때-생명주기란-무엇인가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q6-jvm에서-동작하는-실제-자바-코드를-작성할-때-생명주기란-무엇인가"}},[t._v("#")]),t._v(" Q6. JVM에서 동작하는 실제 자바 코드를 작성할 때 생명주기란 무엇인가?")]),t._v(" "),a("ul",[a("li",[t._v("클래스 파일은 JVM에서 돌기 위한 자바 소스가 컴파일된 바이트코드이다.")]),t._v(" "),a("li",[t._v("클래스 정의의 바이트코드를 실행 중인 JVM의 메모리로 가져오는걸 클래스 로딩 이라고 부른다.")]),t._v(" "),a("li",[t._v("클래스 로더는 클래스 파일을 추상화해 디스크, 네트워크, JAR 같은 압축 파일에서 불러올 수 있다.")]),t._v(" "),a("li",[t._v("사용자가 직접 클래스로더를 만들면, 특정 위치에서 찾은 클래스를 직접 만든 클래스 로더에서 사용하도록 어플리케이션을 실행할 수 있다.")]),t._v(" "),a("li",[t._v("클래스가 로드되면, JVM은 바이트코드가 유효한지 검증하고, 코드가 실행되는 아키텍쳐와 운영체제에 맞춰 명령어로 바이트 코드를 해석할 수 있다.")])]),t._v(" "),a("h3",{attrs:{id:"q7-jvm에게-가비지-컬렉션을-실행하라고-직접-명령할-수-잇는가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q7-jvm에게-가비지-컬렉션을-실행하라고-직접-명령할-수-잇는가"}},[t._v("#")]),t._v(" Q7. JVM에게 가비지 컬렉션을 실행하라고 직접 명령할 수 잇는가?")]),t._v(" "),a("ul",[a("li",[t._v("System 클래스의 전역 메소드인 gc로 가비지 컬렉션을 실행하라고 명령 할 수 있다.")]),t._v(" "),a("li",[t._v("하지만 이 메소드를 호출하다고 반드시 가비지 컬렉션이 실행되는 보장은 없다.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("gc 메소드를 호출하면 자바 가상머신은 현재 차지하는 메모리를 빠르게 재사용할 수 있게 하기 위해 사용하지 않는 객체를 재생하려고 한다. 메소드 호출에서 실행 흐림이 반환됐을 때, 자바 가상머신은 모든 쓸모 없는 객체들에서 반환받은 공간을 재배치하는데 최선의 노력을 다한다.")])]),t._v(" "),a("ul",[a("li",[t._v("gc메소드를 호출하면, stop-the-world 상태가 되어 코드 실행이 느려진다.")]),t._v(" "),a("li",[t._v("gc 호출은 가급적 하지말고, 그냥 문제가 발생한 부분을 코드적으로 해결을 하자")])]),t._v(" "),a("h3",{attrs:{id:"q8-finalize-메소드는-어떤-역할을-하는가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q8-finalize-메소드는-어떤-역할을-하는가"}},[t._v("#")]),t._v(" Q8. finalize 메소드는 어떤 역할을 하는가?")]),t._v(" "),a("ul",[a("li",[t._v("finalize 메소드는 Object 클래스에서 상속된 protected 메소드이다.")]),t._v(" "),a("li",[t._v("JVM이 GC를 통해 객체를 수집할 때 가장 머저 호출하는 메소드이다.")]),t._v(" "),a("li",[t._v("이 메소드는 가비지 컬렉션에서 수집해야 하는 객체와 연관된 모든 자원을 제거하는 데 필요한 작업을 한다.")]),t._v(" "),a("li",[t._v("finalize를 오버라이딩 하면 해당 메소드가 언제 호출되는지 제어 할 수 없어 위험하다.")])]),t._v(" "),a("h3",{attrs:{id:"q9-weakreference란-무엇인가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q9-weakreference란-무엇인가"}},[t._v("#")]),t._v(" Q9. WeakReference란 무엇인가?")]),t._v(" "),a("ul",[a("li",[t._v("WeakReference는 제너릭 컨테이너 클래스이다.")]),t._v(" "),a("li",[t._v("들어있는 인스턴스에 강력한 참조가 없으면 가비지 컬렉션의 수집대상이 될 수 있다.")]),t._v(" "),a("li",[t._v("아래의 코드에서 스택 구현의 문제를 해결하려면 원소들의 WeakReferences 리스트를 유지해야 한다.")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeakReferenceStack")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeakReference")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" stackReferences"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" stackPointer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeakReferenceStack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stackReferences "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stackReferences"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        stackPointer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeakReference")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stackPointer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    stackPointer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stackReferences"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stackPointer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("peek")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stackReferences"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stackPointer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("스택에 새로운 원소가 들어왔을 때 WeakReference 객체로 저장되고 객체가 pop 될땐 WeakReference 객체를 검색하고 객체를 얻기 위해 get 메소드가 호출된다.")]),t._v(" "),a("li",[t._v("해당 객체를 가리키는 클라이언트 코드가 없을 때, 다음 가비지 컬렉션이 실행 될 때 삭제 대상으로 선택될 수 있다.")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeakReferenceTest")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("weakReferenceStackManipulation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeakReferenceStack")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ValueContainer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" stack "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeakReferenceStack")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ValueContainer")]),t._v(" expected "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ValueContainer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Value for the stack"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ValueContainer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Value for the stack"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ValueContainer")]),t._v(" peekedValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("peek")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertEquals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("expected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" peekedValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertEquals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("expected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("peek")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    peekedValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertNull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("peek")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ValueContainer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ValueContainer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("finalize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("finalize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Finalizing for [%s]%n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("stack.push 같은 형태로 스택에 객체를 삽입하면 강한 참조가 유지된다.")]),t._v(" "),a("li",[t._v("이럴 경우 가비지 컬렉션에서 수집을 실행하지 않아, gc에서 수집이 되지 않는다.")])]),t._v(" "),a("h3",{attrs:{id:"q10-native-메소드란-무엇인가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q10-native-메소드란-무엇인가"}},[t._v("#")]),t._v(" Q10. native 메소드란 무엇인가?")]),t._v(" "),a("ul",[a("li",[t._v("자바 클래스는 바이트코드로 컴파일해 클래스 파일에 저장된다.")]),t._v(" "),a("li",[t._v("이러한 바이트코드는 플랫폼 독립적이어야 하지만, 일부 플랫폼 지정 코드, 플랫폼 지정 라이브러리같은 운영체제 수준의 자원을 호출할 수 있어야 한다.")]),t._v(" "),a("li",[t._v("이런 자원 호출을 JVM을 이용하는 대부분의 각 플랫폼에 구현되어 있다.")]),t._v(" "),a("li",[t._v("자원 호출을 할 수 없는 경우에는 C나 C++의 잘 정의된 헤더를 이용할 수 있는 native 메소드 사용이 가능하다.")]),t._v(" "),a("li",[t._v("즉 이 메소드를 사용해 클래스이름, 자바 메소드 이름, 매개변수와 반환 타입까지 구분할 수 있다.")])]),t._v(" "),a("h3",{attrs:{id:"q11-셧다운-훅이란-무엇인가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q11-셧다운-훅이란-무엇인가"}},[t._v("#")]),t._v(" Q11. 셧다운 훅이란 무엇인가?")]),t._v(" "),a("ul",[a("li",[t._v("JVM이 종료되기 직전에 실행하는 코드를 셧다운 훅이라고 한다.")]),t._v(" "),a("li",[t._v("셧다운 훅은 Thread 객체에 대한 참조다.")]),t._v(" "),a("li",[t._v("즉 현재 Runtime 인스턴스의 addShutdownHook 메소드를 호출해 새로운 참조를 추가할 수 있다.")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShutdownHookTest")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addShudownHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runtime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRuntime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addShutdownHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Shutting down JVM at time: "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Shutting")]),t._v(" down JVM at time"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tue")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),t._v(" KST "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("\n")])])]),a("ul",[a("li",[t._v("종료시에 시간을 찍어줘, 예기치 못한 JVM 종료될 때 내용을 알리는거와 같은 기능을 추가 할 수 있다.")])])])}),[],!1,null,null,null);s.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{687:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_3강"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3강"}},[t._v("#")]),t._v(" 3강")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-win32-vs-win64"}},[t._v("1. WIN32 vs WIN64")]),a("ul",[a("li",[a("a",{attrs:{href:"#_64비트와-32비트"}},[t._v("64비트와 32비트")])]),a("li",[a("a",{attrs:{href:"#프로그래머-입장에서의-64비트-컴퓨터"}},[t._v("프로그래머 입장에서의 64비트 컴퓨터")])])])]),a("li",[a("a",{attrs:{href:"#_2-프로그램-구현-관점에서의-win32-vs-win64"}},[t._v("2. 프로그램 구현 관점에서의 WIN32 vs WIN64")]),a("ul",[a("li",[a("a",{attrs:{href:"#llp64-vs-lp64"}},[t._v("LLP64 vs LP64")])]),a("li",[a("a",{attrs:{href:"#_64비트와-32비트-공존의-문제점"}},[t._v("64비트와 32비트 공존의 문제점")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"_1-win32-vs-win64"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-win32-vs-win64"}},[t._v("#")]),t._v(" 1. WIN32 vs WIN64")]),t._v(" "),a("h3",{attrs:{id:"_64비트와-32비트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_64비트와-32비트"}},[t._v("#")]),t._v(" 64비트와 32비트")]),t._v(" "),a("ul",[a("li",[t._v("CPU 내부로 한 번에 전송 및 수신할 수 있는 데이터의 크기에 따라서 32비트 시스템과 64비트 시스템으로 나뉜다")]),t._v(" "),a("li",[t._v("또 하나의 기준은 데이터 처리 능력으로, 한 번에 32비트를 처리하면 32비트 컴퓨터, 한 번에 64비트 데이터를 처리하면 64비트 컴퓨터 이다.")])]),t._v(" "),a("h3",{attrs:{id:"프로그래머-입장에서의-64비트-컴퓨터"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#프로그래머-입장에서의-64비트-컴퓨터"}},[t._v("#")]),t._v(" 프로그래머 입장에서의 64비트 컴퓨터")]),t._v(" "),a("ul",[a("li",[t._v("프로그래머 입장에서 메모리 공간이 충분해지면 주소값의 범위가 넓은 만큼 더 넓은 메모리 공간을 활용할 수 있다.")]),t._v(" "),a("li",[t._v("예를 들어 메모리는 1G고, 주소값을 표현하기위해 4비트가 사용된다면, 메모리에 할당할 수 있는 주소값의 갯수는 2의 4승에 해당하는 16개(16바이트)가 전부이다.")])]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" pArr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\npArr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("위와 같은 코드를 연산하기 위해서는 pArr이 갖고 있는 값을 ALU로 이동시켜줘야 한다")]),t._v(" "),a("li",[t._v("최종적인 연산은 ALU에 의해 이뤄지기 때문에")]),t._v(" "),a("li",[t._v("이럴 때 만약 pArr의 주소값이 32비트면, 32비트 컴퓨터에선 한번에 계산이 가능하다")]),t._v(" "),a("li",[t._v("하지만 만약 주소값이 64비트면, 32비트 컴퓨터에선 2번에 나눠 ALU에 전송해야 하고, 두 번에 걸쳐 계산하므로 성능이 떨어진다.")]),t._v(" "),a("li",[t._v("그러므로 64비트 컴퓨터 환경에서는 당연히 64비트 까지 처리하는게 효율 적이게 된다.")])]),t._v(" "),a("div",{staticClass:"language-zsh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Q1. 내부 메모리에 해당하는 RAM 주소가 정해져 있을까?\nA1. 메인 메모리인 RAM에 주소가 붙어 있는 것은 아니고, 운영체제에서 프로그램 실행을 위해 편의상 붙여놓은 가상의 주소\n\nQ2. 그렇다면 주소값을 표현하기 위해 4비트를 사용했다는 건 무슨 얘기?\nA2. 0000  ~ 1111 까지 표현이 가능하다는 애기. 즉 2의 4승 16개의 주소를 표현할 수 있다.\n\nQ3. 왜 주소의 표현 범위가 넓을 수록 프로그래머에게 좋을까?\nA3. 예를 들어 총 활용 가능한 메모리의 크기가 40바이트인데, 특정 프로그래밍 시에 100바이트가 필요하면 프로그램 실행이 \n    안될 수 있다. 그러면 해당 메모리 공간을 신경써서 코딩을 해야되는데, 주소값이 32비틑 정도만 돼도 4GB의 큰 메모리를 제공해서\n    크게 문제가 안된다. 근데 그거도 적을까봐 64비트로 늘어난 것\n\nQ4. 내 컴퓨터는 램이 256메가인데, 어떻게 4기가를 할당 할 까?\nA4. Windows가 특별하게 처리한다 (후술)\n")])])]),a("h2",{attrs:{id:"_2-프로그램-구현-관점에서의-win32-vs-win64"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-프로그램-구현-관점에서의-win32-vs-win64"}},[t._v("#")]),t._v(" 2. 프로그램 구현 관점에서의 WIN32 vs WIN64")]),t._v(" "),a("h3",{attrs:{id:"llp64-vs-lp64"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#llp64-vs-lp64"}},[t._v("#")]),t._v(" LLP64 vs LP64")]),t._v(" "),a("ul",[a("li",[t._v("int long 은 4바이트인데 포인터는 8바이트 인 시스템")])]),t._v(" "),a("h3",{attrs:{id:"_64비트와-32비트-공존의-문제점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_64비트와-32비트-공존의-문제점"}},[t._v("#")]),t._v(" 64비트와 32비트 공존의 문제점")]),t._v(" "),a("ul",[a("li",[t._v("이런 경우 문제가 발생한다")])]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" arrVal "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 데이터 손실이 발생할 수 있는 위치")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pointer : %d \\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arrVal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("위의 예제에서 배열이 선언된 주소값을 출력하기 위해 int형 변수에 그 값을 저장하는데, 32비트 시스템에선 둘다 4바이트로 아무 문제가 없지만, 64비트에서는 포인터의 바이트가 8바이트로 달라서, 그냥 int, long 등 4바이트 정수형 데이터로 형으로 변환하면 안된다.")]),t._v(" "),a("li",[t._v("이런 경우 데이터 손실이 발생한다.")]),t._v(" "),a("li",[t._v("만약 배열 arr이 4G이하의 메모리 영역에 할당되어 4바이트로 주소값이 표현이 가능하면 데이터 손실이 없겠지만, 그 이상의 메모리 영역에 선언된다면 데이터 손실이 발생해 배열의 정확한 주소값을 확인할 수 없다.")])])])}),[],!1,null,null,null);s.default=r.exports}}]);
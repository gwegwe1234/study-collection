(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{788:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_5강"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5강"}},[a._v("#")]),a._v(" 5강")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#_1-프로세스의-이해"}},[a._v("1. 프로세스의 이해")]),t("ul",[t("li",[t("a",{attrs:{href:"#프로세스란-무엇인가"}},[a._v("프로세스란 무엇인가?")])]),t("li",[t("a",{attrs:{href:"#프로세스를-구성하는-요소"}},[a._v("프로세스를 구성하는 요소")])])])]),t("li",[t("a",{attrs:{href:"#_2-프로세서의-스케줄링과-상태-변화"}},[a._v("2. 프로세서의 스케줄링과 상태 변화")]),t("ul",[t("li",[t("a",{attrs:{href:"#프로세스의-스케줄링"}},[a._v("프로세스의 스케줄링")])]),t("li",[t("a",{attrs:{href:"#프로세스의-상태-변화"}},[a._v("프로세스의 상태 변화")])])])]),t("li",[t("a",{attrs:{href:"#_3-컨텍스트-스위칭"}},[a._v("3. 컨텍스트 스위칭")])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"_1-프로세스의-이해"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-프로세스의-이해"}},[a._v("#")]),a._v(" 1. 프로세스의 이해")]),a._v(" "),t("h3",{attrs:{id:"프로세스란-무엇인가"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#프로세스란-무엇인가"}},[a._v("#")]),a._v(" 프로세스란 무엇인가?")]),a._v(" "),t("ul",[t("li",[a._v("프로세스란 실행중에 있는 프로그램")]),a._v(" "),t("li",[a._v("예를드어 게임.exe가 있으면, 더블클릭하면 프로그램의 실행을 위해 메모리 할당이 이뤄지고, 이 메모리 공간으로 바이너리 코드가 올라간다.")]),a._v(" "),t("li",[a._v("이 순간부터 프로그램은 프로세스라고 불림")]),a._v(" "),t("li",[a._v("프로세스 = 실행중인 프로그램")])]),a._v(" "),t("h3",{attrs:{id:"프로세스를-구성하는-요소"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#프로세스를-구성하는-요소"}},[a._v("#")]),a._v(" 프로세스를 구성하는 요소")]),a._v(" "),t("ul",[t("li",[a._v("기본적으로 전역변수나 static 변수 할당을 위한 Data 영역, 지역변수 할당을 위한 Stack 영역, 동적 할당을 위한 Heap 영역으로 구성된다")]),a._v(" "),t("li",[a._v("프로그램을 실행시키면 실행파일 내에 존재하는 명령어들이 메모리상에 올라가서 순차적으로 실행된다고 한다")]),a._v(" "),t("li",[a._v("이렇게 실행파일을 구성하는 명령어들이 올라가는 메모리 영역이 "),t("code",[a._v("Code영역")])]),a._v(" "),t("li",[a._v("이런 것들을 묶은 모양이 "),t("code",[a._v("프로세스의 실체")])]),a._v(" "),t("li",[a._v("프로그램 실행을 위해 명령어들이 메모리 공간에 올라와 있는 상태를 프로세스라고 표현한다")])]),a._v(" "),t("h4",{attrs:{id:"register-set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#register-set"}},[a._v("#")]),a._v(" Register Set")]),a._v(" "),t("ul",[t("li",[a._v("프로그램 실행을 위해선 레지스터들이 무조건 필욯다")]),a._v(" "),t("li",[a._v("예를들어 CPU가 현재 게임.exe를 실행하고 있다면 CPU를 구성하는 레지스터들은 게임.exe 의 실행을 위해 필요한 데이터들로 채워지게 된다.")]),a._v(" "),t("li",[a._v("레지스터들의 상태도 프로세스의 일부")])]),a._v(" "),t("h2",{attrs:{id:"_2-프로세서의-스케줄링과-상태-변화"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-프로세서의-스케줄링과-상태-변화"}},[a._v("#")]),a._v(" 2. 프로세서의 스케줄링과 상태 변화")]),a._v(" "),t("h3",{attrs:{id:"프로세스의-스케줄링"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#프로세스의-스케줄링"}},[a._v("#")]),a._v(" 프로세스의 스케줄링")]),a._v(" "),t("h4",{attrs:{id:"스케줄링의-기본-원리"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#스케줄링의-기본-원리"}},[a._v("#")]),a._v(" 스케줄링의 기본 원리")]),a._v(" "),t("ul",[t("li",[a._v("프로세스의 CPU 할당 순서 및 방법을 결정짓는 일이 "),t("code",[a._v("스케줄링")])]),a._v(" "),t("li",[a._v("이떄 사용 하는 알고리즘이 스케줄링 알고리즘")])]),a._v(" "),t("h4",{attrs:{id:"멀티-프로세스는-cpu를-바쁘게-한다"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#멀티-프로세스는-cpu를-바쁘게-한다"}},[a._v("#")]),a._v(" 멀티 프로세스는 CPU를 바쁘게 한다")]),a._v(" "),t("ul",[t("li",[a._v("이 일 했다 저 일 했다 왔따 갔다 번갈아가면서 일을 하는게 멀티 프로세스")]),a._v(" "),t("li",[a._v("한 가지 프로세스가 I/O 작업등으로 대기시간이 길어지면 그때 다른 작업을 진행")])]),a._v(" "),t("h3",{attrs:{id:"프로세스의-상태-변화"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#프로세스의-상태-변화"}},[a._v("#")]),a._v(" 프로세스의 상태 변화")]),a._v(" "),t("ul",[t("li",[a._v("Start / Readey / Running / Blocked / End")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("상황 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Start")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Ready")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("S")]),a._v("는 프로세스가 생성\n프로세스 생성과 동시에 "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Ready")]),a._v(" 상태로 들어간다\n\n상황 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Ready")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Running")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Ready")]),a._v(" 상태의 프로세스들은 스케줄러에 의해 관리되는 프로세스들\n스케줄러는 "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Ready")]),a._v(" 상태에 있는 프로세스중 하나를 선택해 CPU에 의해 실행되게 함\n\n상황 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Running")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Ready")]),a._v("\n우선순위에 따라 "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Running")]),a._v(" 상태에서 "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Ready")]),a._v(" 상태로 변한다\n\n상황 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Running")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Blocked")]),a._v("\n실행중인 프로세스가 실행을 멈추는 상태로 들어가는 것\n보통 데이터 "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("I")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("O")]),a._v(" 관련된 일을 할 때 발생\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("I")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("O")]),a._v("에 걸리는 시간이 많이 걸려서"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" CPU에서 입출력 작업중인 프로세스는 잠시 "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Blocked")]),a._v(" 상태로 만든다\n\n상황 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Blocked")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Ready")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Blocked")]),a._v(" 된 상태는 스케줄러에 의해 선택될 수 없는 상태\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Ready")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Blocked")]),a._v(" 둘다 실행되지 않은 상태이지만"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" 스케줄러에 의한 선택 가능 여부가 다르다\n입출력이 완료 된 "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Blocked")]),a._v(" 상태의 프로세스를 "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Ready")]),a._v(" 상태로 변경\n")])])]),t("h2",{attrs:{id:"_3-컨텍스트-스위칭"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-컨텍스트-스위칭"}},[a._v("#")]),a._v(" 3. 컨텍스트 스위칭")]),a._v(" "),t("ul",[t("li",[a._v("실행중인 프로세스의 변경은 시스템에 많은 부하를 가져다 준다")]),a._v(" "),t("li",[a._v("실행중인 프로세스가 변경되면 CPU내에 존재하는 레지스터의 값들이 변경된다")]),a._v(" "),t("li",[a._v("레지스터 <-> 메모리 간의 레지스터 정보 이동이 "),t("code",[a._v("컨텍스트 스위칭")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
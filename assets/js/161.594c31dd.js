(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{793:function(t,a,r){"use strict";r.r(a);var s=r(0),_=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_4강"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4강"}},[t._v("#")]),t._v(" 4강")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#_1-컴퓨터-구조의-접근방법"}},[t._v("1. 컴퓨터 구조의 접근방법")]),r("ul",[r("li",[r("a",{attrs:{href:"#컴퓨터를-디자인하자"}},[t._v("컴퓨터를 디자인하자")])]),r("li",[r("a",{attrs:{href:"#레지스터를-디자인-하자"}},[t._v("레지스터를 디자인 하자")])]),r("li",[r("a",{attrs:{href:"#명령어-구조-및-명령어를-디자인-하자"}},[t._v("명령어 구조 및 명령어를 디자인 하자")])])])]),r("li",[r("a",{attrs:{href:"#_2-load-store-명령어-디자인"}},[t._v("2. LOAD & STORE 명령어 디자인")]),r("ul",[r("li",[r("a",{attrs:{href:"#load-store-명령어의-필요성"}},[t._v("LOAD & STORE 명령어의 필요성")])])])])])]),r("p"),t._v(" "),r("h2",{attrs:{id:"_1-컴퓨터-구조의-접근방법"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-컴퓨터-구조의-접근방법"}},[t._v("#")]),t._v(" 1. 컴퓨터 구조의 접근방법")]),t._v(" "),r("h3",{attrs:{id:"컴퓨터를-디자인하자"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#컴퓨터를-디자인하자"}},[t._v("#")]),t._v(" 컴퓨터를 디자인하자")]),t._v(" "),r("ul",[r("li",[t._v("레지스터 디자인")])]),t._v(" "),r("h3",{attrs:{id:"레지스터를-디자인-하자"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#레지스터를-디자인-하자"}},[t._v("#")]),t._v(" 레지스터를 디자인 하자")]),t._v(" "),r("ul",[r("li",[t._v("레지스터를 디자인하는데 있어 중요 요소")])]),t._v(" "),r("div",{staticClass:"language-java extra-class"},[r("pre",{pre:!0,attrs:{class:"language-java"}},[r("code",[r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" 레지스터를 몇 비트로 구성할 것인가"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" 몇 개 정도로 레지스터를 구성할 것인가"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" 레지스터 각각을 무슨 용도로 사용할 것인가"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n")])])]),r("ul",[r("li",[t._v("8비트 정도로 가정")]),t._v(" "),r("li",[t._v("레지스터 이름은 r0~r7 인데, r4, r5, r6, r7은 각각 ir, sp, lr, pc라는 이름으로 지니도록 한다.\n"),r("ul",[r("li",[t._v("ir : instruction register")]),t._v(" "),r("li",[t._v("sp : stack pointer")]),t._v(" "),r("li",[t._v("lr : link register")]),t._v(" "),r("li",[t._v("pc : program counter")])])])]),t._v(" "),r("h3",{attrs:{id:"명령어-구조-및-명령어를-디자인-하자"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#명령어-구조-및-명령어를-디자인-하자"}},[t._v("#")]),t._v(" 명령어 구조 및 명령어를 디자인 하자")]),t._v(" "),r("ul",[r("li",[t._v("cpu에게 일을 시키기 위한 명령어 구조 및 명령어 종류를 디자인 해야 한다")]),t._v(" "),r("li",[t._v("16비트의 레지스터라면, 맨앞 두개는 예약, 그뒤 3비트는 연산자, 그뒤 3비트는 저장소.. 이런식으로 명령어 구조를 미리 약속하고 구성한다.")]),t._v(" "),r("li",[t._v("여러가지의 약속이 있는데, 예를 들어 덧셈은 심볼 ADD 2진 001로 나타내는 등의 방법이 있다.")]),t._v(" "),r("li",[t._v("저장소에 특정 값 또는 레지스터에 저장된 값의 저장도 가능하다.")]),t._v(" "),r("li",[t._v("값인지 저장소의 값인지는 맨 앞 비트를 희생해서 가르쳐 주기도 한다.")]),t._v(" "),r("li",[t._v("결국 레지스터 내의 16비트를 나눠서 약속한 방법대로 사용해서 연산을 하게 해준다.")]),t._v(" "),r("li",[t._v("어셈블리어로 표현도 가능하다\n"),r("ul",[r("li",[t._v("ADD r2, r1, 7")]),t._v(" "),r("li",[t._v("SUB r2, r1, r0")])])]),t._v(" "),r("li",[t._v("바이너리 표현\n"),r("ul",[r("li",[t._v("0000101010010111")])])]),t._v(" "),r("li",[t._v("이제 이 명령어가 컨트롤 유닛으로 전달되어 그 의미가 해석되면, 컨트롤 유닛은 CPU의 각 모듈에 명령을 내리게 된다.")]),t._v(" "),r("li",[t._v("그리고 CPU 각 모듈은 이 명령에 따라 적절한 연산을 진행한다.")])]),t._v(" "),r("h2",{attrs:{id:"_2-load-store-명령어-디자인"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-load-store-명령어-디자인"}},[t._v("#")]),t._v(" 2. LOAD & STORE 명령어 디자인")]),t._v(" "),r("h3",{attrs:{id:"load-store-명령어의-필요성"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#load-store-명령어의-필요성"}},[t._v("#")]),t._v(" LOAD & STORE 명령어의 필요성")]),t._v(" "),r("ul",[r("li",[t._v("메인 메모리에 저장된 데이터를 레지스터로 이동시키기 위한 LOAD 명령어와, 레지스터에 저장된 데이터를 메인메모리로 이동시키기 위한 STORE 명령어가 필요하다.")])])])}),[],!1,null,null,null);a.default=_.exports}}]);
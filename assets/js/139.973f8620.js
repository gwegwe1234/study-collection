(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{667:function(a,t,_){"use strict";_.r(t);var s=_(0),v=Object(s.a)({},(function(){var a=this,t=a.$createElement,_=a._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"_6강"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6강"}},[a._v("#")]),a._v(" 6강")]),a._v(" "),_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#_1-커널-오브젝트에-대한-이해"}},[a._v("1. 커널 오브젝트에 대한 이해")]),_("ul",[_("li",[_("a",{attrs:{href:"#커널-오브젝트의-이해"}},[a._v("커널 오브젝트의 이해")])]),_("li",[_("a",{attrs:{href:"#그-이외의-커널-오브젝트들"}},[a._v("그 이외의 커널 오브젝트들")])]),_("li",[_("a",{attrs:{href:"#오브젝트-핸들을-이요한-커널-오브젝트의-조작"}},[a._v("오브젝트 핸들을 이요한 커널 오브젝트의 조작")])])])]),_("li",[_("a",{attrs:{href:"#_2-커널-오브젝트와-핸들의-종속-관계"}},[a._v("2. 커널 오브젝트와 핸들의 종속 관계")]),_("ul",[_("li",[_("a",{attrs:{href:"#커널-오브젝트의-종속-관계"}},[a._v("커널 오브젝트의 종속 관계")])]),_("li",[_("a",{attrs:{href:"#핸들의-종속-관계"}},[a._v("핸들의 종속 관계")])])])]),_("li",[_("a",{attrs:{href:"#_3-커널-오브젝트와-usage-count"}},[a._v("3. 커널 오브젝트와 Usage Count")]),_("ul",[_("li",[_("a",{attrs:{href:"#closehandle-함수에-대한-정확한-이해"}},[a._v("CloseHandle 함수에 대한 정확한 이해")])]),_("li",[_("a",{attrs:{href:"#커널-오브젝트와-usage-count"}},[a._v("커널 오브젝트와 Usage Count")])])])])])]),_("p"),a._v(" "),_("h2",{attrs:{id:"_1-커널-오브젝트에-대한-이해"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-커널-오브젝트에-대한-이해"}},[a._v("#")]),a._v(" 1. 커널 오브젝트에 대한 이해")]),a._v(" "),_("h3",{attrs:{id:"커널-오브젝트의-이해"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#커널-오브젝트의-이해"}},[a._v("#")]),a._v(" 커널 오브젝트의 이해")]),a._v(" "),_("ul",[_("li",[a._v("프로세스를 생성하는 주체는 프로그래머가 아닌 운영체제")]),a._v(" "),_("li",[a._v("프로세스 관리도 운영체제 관리")]),a._v(" "),_("li",[a._v("여러 프로세스를 관리하기 위해 프로세스에 관련된 몇몇 정보를 저장할 수 있어야 하고, 참조 및 변경이 가능해야 한다")]),a._v(" "),_("li",[a._v("그런 관리를 위해 "),_("code",[a._v("프로세스 관리 구조체")]),a._v("를 정의 했고, 프로세스가 생성돼서 프로세스 관리 구조체 변수가 생길 때마다 프로세스 정보들을 초기화하는데, 이것을 "),_("code",[a._v("커널 오브젝트")]),a._v("라고 한다")]),a._v(" "),_("li",[a._v("결국 운영체제가 관리하는 프로세스 정보가 담긴 구조체가 "),_("code",[a._v("커널 오브젝트")])])]),a._v(" "),_("h3",{attrs:{id:"그-이외의-커널-오브젝트들"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#그-이외의-커널-오브젝트들"}},[a._v("#")]),a._v(" 그 이외의 커널 오브젝트들")]),a._v(" "),_("ul",[_("li",[a._v("운영체제는 프로세스, 쓰레드 혹은 파일과 같은 리소스들을 원활히 관리하기 위해 필요한 정보를 저장해야 한다.")]),a._v(" "),_("li",[a._v("이때 데이터를 저장하는 메모리 블록을 가리켜 "),_("code",[a._v("커널 오브젝트")]),a._v("라고 한다")])]),a._v(" "),_("h3",{attrs:{id:"오브젝트-핸들을-이요한-커널-오브젝트의-조작"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#오브젝트-핸들을-이요한-커널-오브젝트의-조작"}},[a._v("#")]),a._v(" 오브젝트 핸들을 이요한 커널 오브젝트의 조작")]),a._v(" "),_("ul",[_("li",[a._v("커널 오브젝트는 직접 조작은 불가능하지만, 함수 호출을 통해 간접 조작이 가능하다")]),a._v(" "),_("li",[a._v("핸들을 사용해 우선순위 조작같은걸 할 수 있다")])]),a._v(" "),_("h2",{attrs:{id:"_2-커널-오브젝트와-핸들의-종속-관계"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-커널-오브젝트와-핸들의-종속-관계"}},[a._v("#")]),a._v(" 2. 커널 오브젝트와 핸들의 종속 관계")]),a._v(" "),_("h3",{attrs:{id:"커널-오브젝트의-종속-관계"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#커널-오브젝트의-종속-관계"}},[a._v("#")]),a._v(" 커널 오브젝트의 종속 관계")]),a._v(" "),_("ul",[_("li",[a._v("커널 오브젝트는 운영체제에 종속적이다")]),a._v(" "),_("li",[a._v("커널 오브젝트는 프로세스가 아닌 운영체제에 종속적이므로, 여러 프로세스에서 접근이 가능하다")])]),a._v(" "),_("h3",{attrs:{id:"핸들의-종속-관계"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#핸들의-종속-관계"}},[a._v("#")]),a._v(" 핸들의 종속 관계")]),a._v(" "),_("ul",[_("li",[a._v("핸들은 운영체제에 종속이 아닌 프로세스에 종속이다")])]),a._v(" "),_("h2",{attrs:{id:"_3-커널-오브젝트와-usage-count"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-커널-오브젝트와-usage-count"}},[a._v("#")]),a._v(" 3. 커널 오브젝트와 Usage Count")]),a._v(" "),_("h3",{attrs:{id:"closehandle-함수에-대한-정확한-이해"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#closehandle-함수에-대한-정확한-이해"}},[a._v("#")]),a._v(" CloseHandle 함수에 대한 정확한 이해")]),a._v(" "),_("ul",[_("li",[a._v("A 프로세스가 생성되면 A 프로세스를위한 커널 오브젝트가 생성된다")]),a._v(" "),_("li",[a._v("하지만 A 프로세스가 소멸된다고 해서 커널 오브젝트가 소멸된다고 할 순 없다")]),a._v(" "),_("li",[a._v("CloseHandle 함수를 통해 소멸시켜 줄 수 있다")])]),a._v(" "),_("h3",{attrs:{id:"커널-오브젝트와-usage-count"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#커널-오브젝트와-usage-count"}},[a._v("#")]),a._v(" 커널 오브젝트와 Usage Count")]),a._v(" "),_("ul",[_("li",[a._v("자식 프로세스의 종료코드는 자식 프로세스의 커널 오브젝트에 저장된다")]),a._v(" "),_("li",[a._v("커널 오브젝트는 해당 커널 오브젝트를 참조한느 대상이 하나도 없을 때 소멸시키는 것이 이상적")]),a._v(" "),_("li",[a._v("운영체제는 이러한 정책을 기반으로 커널 오브젝트 소멸시기를 Usage Count를 통해 관리한다")]),a._v(" "),_("li",[a._v("프로세스는 생성과 동시에 커널 오브젝트의 Usage Count는 1이 되고, 해동 커널 오브젝트에 접근이 가능한 대상이 늘어날 때마다 Usage Count가 증가된다.")]),a._v(" "),_("li",[a._v("요게 0이 되어야 커널 오브젝트가 종료가 가능")])])])}),[],!1,null,null,null);t.default=v.exports}}]);
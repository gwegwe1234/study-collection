(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{552:function(t,s,a){t.exports=a.p+"assets/img/git1.c01d41e0.png"},553:function(t,s,a){t.exports=a.p+"assets/img/git2.3c754eda.png"},647:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),e("ul",[e("li",[t._v("깃을 쓰던거만 쓰다보니 아는게 너무없다.")]),t._v(" "),e("li",[t._v("이번에 직면했던 문제(?) 상황은 아래와 같음")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(552),alt:"git"}})]),t._v(" "),e("ul",[e("li",[t._v("C의 커밋 내용을 B의 서브브랜치로 옮기고, C 커밋포인트는 없애야 되는상황")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(553),alt:"git"}})]),t._v(" "),e("ul",[e("li",[t._v("이런 모양이 돼야 한다.")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("고민했던 케이스 1\n1. B 커밋포인트에서 브랜치를 따고, C에 있던 커밋 포인트 내용을 B에서 딴 새로운 브랜치에 리베이스\n2. C는 hard reset\n")])])]),e("ul",[e("li",[t._v("결과적으로 헛소리였음")]),t._v(" "),e("li",[t._v("브랜치명으로 구분하는게 아니라 커밋포인트로 구분함..(당연한건데 멍청해서 헷갈림)")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("고민했던 케이스 2\n1. C 커밋포인트에서 B로 소프트 리셋\n2. B에서 새로운 브랜치 생성\n3. 새로운 브랜치 커밋 & 푸시\n4. 기존 브랜치는 force push\n")])])]),e("ul",[e("li",[t._v("해결됨")]),t._v(" "),e("li",[t._v("소프트 리셋을 하면 C 커밋포인트에서 작성한 변경 소스는 남아 있고 C 커밋포인트는 사라져 B커밋만 남음")]),t._v(" "),e("li",[t._v("깔끔")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("명령어\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --soft "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("commit point"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
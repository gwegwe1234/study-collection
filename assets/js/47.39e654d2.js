(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{521:function(t,a,e){t.exports=e.p+"assets/img/spring-filter1.8f385e38.png"},522:function(t,a,e){t.exports=e.p+"assets/img/spring-filter2.33a412a3.png"},552:function(t,a,e){"use strict";e.r(a);var r=e(0),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"spring-filter-chain"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-filter-chain"}},[t._v("#")]),t._v(" Spring Filter Chain")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("스프링 필터는 체인구조로 되어있다.\n")])])]),r("p",[r("img",{attrs:{src:e(521),alt:"Alt text"}})]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("서블릿 체인에서 스프링에 등록된 기본 filter들 (doFilter로 등록) 을 체크한다. \n여기에 새로운걸 추가하려면 (ex Spring Security) VirtualFilterChain 형태로 등록해주면 좋다 (Spring에 구현되어있음)\n")])])]),r("p",[r("img",{attrs:{src:e(522),alt:"Alt text"}})]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("filter 작동원리\n등록된 필터들을 돌면서 (FilterChainProxy), 각자 할당된 기능들을 수행 (ex, basicauth, cors, csrf.. 이렇게)\n그러다 중간에 뻑나면 튕김.\n\n각각의 필터에서 doFilterInternal overriding 해서 작동한다. 이후에 다시 doFilterChain해서 다음거 돌고 돌고.. 이런식으로\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);
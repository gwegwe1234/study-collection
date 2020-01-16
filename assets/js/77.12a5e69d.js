(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{453:function(v,_,t){"use strict";t.r(_);var a=t(0),l=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"_6강"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6강"}},[v._v("#")]),v._v(" 6강")]),v._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#마이크로서비스-모니터링-원칙"}},[v._v("마이크로서비스 모니터링 원칙")])]),t("li",[t("a",{attrs:{href:"#주요-지표"}},[v._v("주요 지표")])]),t("li",[t("a",{attrs:{href:"#로깅"}},[v._v("로깅")])]),t("li",[t("a",{attrs:{href:"#대시보드"}},[v._v("대시보드")])]),t("li",[t("a",{attrs:{href:"#경고-알림"}},[v._v("경고 알림")]),t("ul",[t("li",[t("a",{attrs:{href:"#효과적인-경고-알림-설정"}},[v._v("효과적인 경고 알림 설정")])]),t("li",[t("a",{attrs:{href:"#경고-대응"}},[v._v("경고 대응")])]),t("li",[t("a",{attrs:{href:"#비상-대기-순환-근무"}},[v._v("비상 대기 순환 근무")])]),t("li",[t("a",{attrs:{href:"#마이크로서비스-평가"}},[v._v("마이크로서비스 평가")])])])])])]),t("p"),v._v(" "),t("h2",{attrs:{id:"마이크로서비스-모니터링-원칙"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#마이크로서비스-모니터링-원칙"}},[v._v("#")]),v._v(" 마이크로서비스 모니터링 원칙")]),v._v(" "),t("ul",[t("li",[v._v("마이크로서비스 생태계에서 가동 중단 이유\n"),t("ul",[t("li",[v._v("전개의 잘못")]),v._v(" "),t("li",[v._v("모니터링 시스템의 결여")])])]),v._v(" "),t("li",[v._v("생산 준비된 마이크로 서비스의 모니터링 요소")])]),v._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[v._v("1.")]),v._v(" 현재 또는 과거 시점의 마이크로서비스의 상태를 파악할 수 있도록 관련돼 있거나 중요한 정보를 적절히 기록\n"),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("2.")]),v._v(" 마이크로서비스의 상태를 파악할 수 있는 대시보드를 사용\n"),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("3.")]),v._v(" 모든 주요 지표에 대해 문제 발생 시 경고 알림\n"),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("4.")]),v._v(" 마이크로서비스의 모니터링을 담당하는 지속 가능한 비상 대기 순환 구조\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),t("p",[t("b",[v._v("생산 준비된 서비스를 위한 모니터링 적절성 확인 사항")])]),v._v(" "),t("ol",[t("li",[v._v("호스트, 인프라 마이크로서비스 수준에서 주요 지표를 식별하고 모니터링")]),v._v(" "),t("li",[v._v("마이크로서비스의 과거 상태를 정확하게 나타내는 로깅 제공")]),v._v(" "),t("li",[v._v("대시보드는 쉽게 해석할 수 있으며 모든 주요 지표 포함")]),v._v(" "),t("li",[v._v("경고 알림은 실행 가능하며 신호를 제공하는 임곗값에 따라 정의")]),v._v(" "),t("li",[v._v("모든 사고 및 가동 중단을 모니터링하고 대응하기 위한 전용의 비상대기 순환 근무")]),v._v(" "),t("li",[v._v("사고 및 가동 중단을 처리하기 위한 명확하고 잘 정의되고 표준화된 비상 대응 절차 존재")])])]),v._v(" "),t("h2",{attrs:{id:"주요-지표"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#주요-지표"}},[v._v("#")]),v._v(" 주요 지표")]),v._v(" "),t("ul",[t("li",[v._v("주요 지표의 두 가지 유형\n"),t("ul",[t("li",[v._v("호스트 및 인프라 지표 : 실행하는 서버에 관련된 지표")]),v._v(" "),t("li",[v._v("마이크로서비스 지표 : 각각의 마이크로서비스의 특정적인 지표")])])])]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),t("p",[t("b",[v._v("주요 지표")])]),v._v(" "),t("ul",[t("li",[v._v("호스트 및 인프라 주요 지표\n"),t("ul",[t("li",[v._v("CPU")]),v._v(" "),t("li",[v._v("RAM")]),v._v(" "),t("li",[v._v("스레드")]),v._v(" "),t("li",[v._v("파일 기술자")]),v._v(" "),t("li",[v._v("데이터베이스 연결")])])]),v._v(" "),t("li",[v._v("마이크로서비스 주요 지표\n"),t("ul",[t("li",[v._v("언어별 지표 (언어별 상이)")]),v._v(" "),t("li",[v._v("가용성")]),v._v(" "),t("li",[v._v("서비스 수준 협약")]),v._v(" "),t("li",[v._v("지연 시간")]),v._v(" "),t("li",[v._v("엔드포인트 성공 여부")]),v._v(" "),t("li",[v._v("엔드포인트 응답 횟수")]),v._v(" "),t("li",[v._v("엔드포인트 응답 시간")]),v._v(" "),t("li",[v._v("클라이언트 서비스")]),v._v(" "),t("li",[v._v("오류 및 예외")]),v._v(" "),t("li",[v._v("종속성")])])])])]),v._v(" "),t("h2",{attrs:{id:"로깅"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#로깅"}},[v._v("#")]),v._v(" 로깅")]),v._v(" "),t("ul",[t("li",[v._v("로깅의 궁극적인 목표는 실제로 최근 어느 시점에 있던 마이크로서비스의 상태를 기술하는 것")]),v._v(" "),t("li",[v._v("대부분의 마이크로서비스 문제의 재현은 불가능하다. 즉 로깅의 중요성이 더 높아짐")]),v._v(" "),t("li",[v._v("로깅은 확장 가능하고 사용할 수 있어야 하며 쉽게 접근 가능하고 검색할 수 있어야 한다.")])]),v._v(" "),t("h2",{attrs:{id:"대시보드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#대시보드"}},[v._v("#")]),v._v(" 대시보드")]),v._v(" "),t("ul",[t("li",[v._v("모든 마이크로서비스에는 모든 주요 지표를 수집하고 표시하는 대시보드가 필수")]),v._v(" "),t("li",[v._v("대시보드는 실시간으로 갱신되고 중요한 정보가 필수로 표시되는 도표로 되어야 한다.")]),v._v(" "),t("li",[v._v("대시보드는 쉽게 접근이 가능하고 중앙 집중화되어 표준화 되어야 한다.")]),v._v(" "),t("li",[v._v("누구든지 대시보드를 통해 마이크로서비스의 상태를 파악 할 수 있어야한다.")]),v._v(" "),t("li",[v._v("정보가 지나치게 많게 표시되어 헷갈리게 표기되면 안된다 -> 주요 지표에 대한 최소한의 정보만 표시")])]),v._v(" "),t("h2",{attrs:{id:"경고-알림"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#경고-알림"}},[v._v("#")]),v._v(" 경고 알림")]),v._v(" "),t("ul",[t("li",[v._v("장애 감지는 경고 알림을 통해 수행된다.")]),v._v(" "),t("li",[v._v("호스트, 인프라, 마이크로서비스 수준의 지표와 같은 모든 주요 지표에서 임곗값 설정을 통해 알림을 설정해야한다.")])]),v._v(" "),t("h3",{attrs:{id:"효과적인-경고-알림-설정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#효과적인-경고-알림-설정"}},[v._v("#")]),v._v(" 효과적인 경고 알림 설정")]),v._v(" "),t("ul",[t("li",[v._v("경고 알림은 모든 주요 지표에 대해 설정해야 한다.")]),v._v(" "),t("li",[v._v("가동 중단을 초래하거나, 지연시간이 급격하게 늘어나거나, 가용성에 해를 입힐 수 있는 호스트 수준 등의 경고를 보내줘야 한다.")]),v._v(" "),t("li",[v._v("모든 경고 알림을 쓸모가 있어야 하며 타당한 신호를 제공하는 임곗값으로 정의해야 한다.")])]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),t("p",[t("b",[v._v("마이크로서비스의 라이프사이클 초반에 임곗값 결정하기")])]),v._v(" "),t("p",[v._v("주요 지표의 임곗값을 과거 데이터 없이 설정하기가 매우 어려움\n초반에 잘못된 값으로 임곗값을 잡으면 너무 많은 알림을 발생시킬 위험이 있다.\n개발자는 임곗값을 어디에 둘지 부하 테스트 수행을 통해 결정을 해야 한다.")])]),v._v(" "),t("ul",[t("li",[v._v("모든 경고 알림은 실행이 가능해야 한다. 실행 가능하지 않은 알림은 무시되고, 문제를 초래할 수 있다.")])]),v._v(" "),t("h3",{attrs:{id:"경고-대응"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#경고-대응"}},[v._v("#")]),v._v(" 경고 대응")]),v._v(" "),t("ol",[t("li",[v._v("알려진 경고에 대해 단계별 지침을 만든다.\n"),t("ul",[t("li",[v._v("각 지침은 경고를 분류, 완화, 해결하는 방법에 대해 자세히 설명")]),v._v(" "),t("li",[v._v("비상 근무 대기 설명서에 있어야 한다. (실제론 문서화 필요정도)\n"),t("ul",[t("li",[v._v("기술조직 전체에 공유해야 하는 호스트 수준 및 인프라 수준의 경고 알림에 대한 설명서")]),v._v(" "),t("li",[v._v("마이크로서비스별 경고에 대한 단계별 지침서")])])])])]),v._v(" "),t("li",[v._v("안티패턴에 대한 경고 알림을 식별\n"),t("ul",[t("li",[v._v("굳이 알림을 안넣어도 금방 해결되는 문제는 알림을 자동화 해야한다.")]),v._v(" "),t("li",[v._v("마이크로서비스 자체에 완화 또는 해결 단계를 구축해야 한다.")])])])]),v._v(" "),t("h3",{attrs:{id:"비상-대기-순환-근무"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#비상-대기-순환-근무"}},[v._v("#")]),v._v(" 비상 대기 순환 근무")]),v._v(" "),t("ul",[t("li",[v._v("적절히 업무를 분장해 비상 대기 순환을 하자.(..?)")])]),v._v(" "),t("h3",{attrs:{id:"마이크로서비스-평가"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#마이크로서비스-평가"}},[v._v("#")]),v._v(" 마이크로서비스 평가")]),v._v(" "),t("ul",[t("li",[v._v("마이크로 서비스의 평가항목을 체크해 보자")])]),v._v(" "),t("h4",{attrs:{id:"주요지표"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#주요지표"}},[v._v("#")]),v._v(" 주요지표")]),v._v(" "),t("ul",[t("li",[v._v("마이크로서비스의 주요 지표는 무엇인가?")]),v._v(" "),t("li",[v._v("호스트 및 인프라 지표 모니터링 여부")]),v._v(" "),t("li",[v._v("마이크로서비스 수준의 지표 모니터링 여부")]),v._v(" "),t("li",[v._v("마이크로서비스의 모든 주요 지표 모니터링 여부")])]),v._v(" "),t("h4",{attrs:{id:"로깅-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#로깅-2"}},[v._v("#")]),v._v(" 로깅")]),v._v(" "),t("ul",[t("li",[v._v("마이크로서비스의 어떤 정보를 기록해야 하는가?")]),v._v(" "),t("li",[v._v("마이크로서비스의 중요한 요청을 모두 기록하는가?")]),v._v(" "),t("li",[v._v("로깅은 주어진 시간에 마이크로서비스의 상태를 정확하게 반영하는가?")]),v._v(" "),t("li",[v._v("로깅 솔루션은 비용 효율이 좋고 확장성이 있는가?")])]),v._v(" "),t("h4",{attrs:{id:"대시보드-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#대시보드-2"}},[v._v("#")]),v._v(" 대시보드")]),v._v(" "),t("ul",[t("li",[v._v("대시보드가 있는가?")]),v._v(" "),t("li",[v._v("대시보드를 쉽게 해석할 수 있는가?")]),v._v(" "),t("li",[v._v("모든 주요 지표를 대시보드에 표시?")]),v._v(" "),t("li",[v._v("대시보드만을 보고 서비스가 올바르게 작동되는지 판단이 가능한가?")])]),v._v(" "),t("h4",{attrs:{id:"경고알림"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#경고알림"}},[v._v("#")]),v._v(" 경고알림")]),v._v(" "),t("ul",[t("li",[v._v("모든 주요 지표에 대한 경고 알림이 있는가?")]),v._v(" "),t("li",[v._v("모든 알림은 적절한 임곗값으로 정의 되었는가?")]),v._v(" "),t("li",[v._v("모든 경고 알림은 실행이 가능한가?")]),v._v(" "),t("li",[v._v("비상 대기 근무 설명서의 경고 알림에 대해 단계별 분류, 완화, 해결에 대한 지침이 있는가?")])]),v._v(" "),t("h4",{attrs:{id:"비상-대기-순환-근무-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#비상-대기-순환-근무-2"}},[v._v("#")]),v._v(" 비상 대기 순환 근무")]),v._v(" "),t("ul",[t("li",[v._v("비상 대기 순환근무가 있는가?")]),v._v(" "),t("li",[v._v("등등")])])])}),[],!1,null,null,null);_.default=l.exports}}]);
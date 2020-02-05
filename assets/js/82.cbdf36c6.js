(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{567:function(t,a,s){"use strict";s.r(a);var v=s(0),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_13강"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13강"}},[t._v("#")]),t._v(" 13강")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#overview"}},[t._v("Overview")])]),s("li",[s("a",{attrs:{href:"#동시성이-필요한-이유"}},[t._v("동시성이 필요한 이유")])]),s("li",[s("a",{attrs:{href:"#미신과-오해"}},[t._v("미신과 오해")])]),s("li",[s("a",{attrs:{href:"#동시성-구현의-난관"}},[t._v("동시성 구현의 난관")])]),s("li",[s("a",{attrs:{href:"#동시성-방어-원칙"}},[t._v("동시성 방어 원칙")])]),s("li",[s("a",{attrs:{href:"#라이브러리를-이해하라"}},[t._v("라이브러리를 이해하라")])]),s("li",[s("a",{attrs:{href:"#실행-모델을-이해하라"}},[t._v("실행 모델을 이해하라")])]),s("li",[s("a",{attrs:{href:"#동기화하는-메소드-사이에-존재하는-의존성-이해"}},[t._v("동기화하는 메소드 사이에 존재하는 의존성 이해")])]),s("li",[s("a",{attrs:{href:"#동기화하는-부분을-작게-만들어라"}},[t._v("동기화하는 부분을 작게 만들어라")])]),s("li",[s("a",{attrs:{href:"#올바른-종료-코드는-구현하기-어렵다"}},[t._v("올바른 종료 코드는 구현하기 어렵다")])]),s("li",[s("a",{attrs:{href:"#스레드-코드-테스트하기"}},[t._v("스레드 코드 테스트하기")])]),s("li",[s("a",{attrs:{href:"#결론"}},[t._v("결론")])])])]),s("p"),t._v(" "),s("h3",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("객체는 처리의 추상화다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 스레드는 일정의 추상화다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("ul",[s("li",[t._v("이 장에서는 여러 스레드를 동시에 돌리는 이유를 논한다.")]),t._v(" "),s("li",[t._v("여러 스레드를 동시에 돌리는 어려움도 논한다.")]),t._v(" "),s("li",[t._v("어려움을 대처하고 꺠끗한 코드를 작성하는 몇가지 방법도 제안한다.")]),t._v(" "),s("li",[t._v("동시성을 테스트하는 방법과 문제점을 논한다.")])]),t._v(" "),s("h3",{attrs:{id:"동시성이-필요한-이유"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#동시성이-필요한-이유"}},[t._v("#")]),t._v(" 동시성이 필요한 이유")]),t._v(" "),s("ul",[s("li",[t._v("동시성은 결합(coupling)을 없애는 전략이다.")]),t._v(" "),s("li",[t._v("죽 무엇(what)과 언제(when)을 분리하는 전략이다.")])]),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[t._v("단일 스레드 프로그램은 무엇과 언제가 서로 밀접하다.")]),t._v(" "),s("li",[t._v("이 2개를 분리하면 어플리케이션 "),s("em",[t._v("구조와 효율")]),t._v("이 극단적으로 좋아진다.\n"),s("ul",[s("li",[t._v("구조적인 관점에서 거대한 루프 하나가 아닌 작은 협력 프로그램 여럿으로 구성되는 것으로 보이고, 그로인해 문제를 분리하여 시스템을 이해하기 쉬워진다.")])])]),t._v(" "),s("li",[t._v("응담시간과 작업 처리량 개선에도 도움이 된다.\n"),s("ul",[s("li",[t._v("crawler같이 요청하고 오래 기다려야 하는 작업을 하는 경우, 여러 작업을 병렬적으로 해도 좋은 경우")])])])]),t._v(" "),s("h3",{attrs:{id:"미신과-오해"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#미신과-오해"}},[t._v("#")]),t._v(" 미신과 오해")]),t._v(" "),s("ul",[s("li",[t._v("동시성에 관한 일반적인 미신과 오해가 있다.")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("미신s\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" 동시성은 항상 성능을 높혀준다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 동시성은 때로는 성능을 높여준다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 대기 시간이 아주 길어 여러 스레드가 프로세서를 공유할 수 있거나"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n여러 프로세서가 동시에 처리할 독립적인 계산이 충분히 많은 경우에만 성능이 높아진다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" 동시성을 구현해도 설계는 변하지 않는다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 단일 스레드 시스템과 다중 스레드 시스템은 설계가 아예 다르다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 일반적으로 무엇과 언제를 분리하면 시스템 구조가 크게 달라진다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" 웹 또는 EJB 컨테이너를 사용하면 동시성을 이해할 필요가 없다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 실제로는 컨테이너가 어떻게 동작하는지"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 어떻게 동시 수정"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 데드락 등과 같은 문제를 피할 수 있는지를 알아야 한다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("타당한 생각s\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" 동시성은 다소 부하를 유발한다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 성능 측면에서 부하가 걸리며"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 코드도 더 짜야한다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" 동시성은 복잡하다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 간단한 문제라도 동시성은 복잡해진다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" 동시성을 구현하려면 흔히 근본적인 설계 전략을 재고해야 한다"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("h3",{attrs:{id:"동시성-구현의-난관"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#동시성-구현의-난관"}},[t._v("#")]),t._v(" 동시성 구현의 난관")]),t._v(" "),s("ul",[s("li",[t._v("예를 들어보자")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("X")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" lastIdUsed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNextId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("lastIdUsed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("두 쓰레드가 해당 인스턴스를 고유하면서 getnextId()를 호출한다고 가정하자.\n"),s("ul",[s("li",[t._v("43, 44를 받는다. lastIdUsed는 44가 된다.")]),t._v(" "),s("li",[t._v("44, 43을 받는다. lastIdUsed는 44가 된다.")]),t._v(" "),s("li",[t._v("43, 43을 받는다. lastIdUsed는 43이 된다.")])])]),t._v(" "),s("li",[t._v("두 스레드가 같은 변수를 참조하면 잘못된 결과를 낼 수 있는 위험한 상황이 생긴다.")])]),t._v(" "),s("h3",{attrs:{id:"동시성-방어-원칙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#동시성-방어-원칙"}},[t._v("#")]),t._v(" 동시성 방어 원칙")]),t._v(" "),s("h4",{attrs:{id:"단일-책임-원칙-srp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#단일-책임-원칙-srp"}},[t._v("#")]),t._v(" 단일 책임 원칙 (SRP)")]),t._v(" "),s("ul",[s("li",[t._v("동시성 관련 코드는 다른 코드와 분리해야 한다.")]),t._v(" "),s("li",[t._v("동시성을 구현할 때 고려할 점\n"),s("ul",[s("li",[t._v("동시성 코드는 독자적인 개발, 변경, 조율 주기가 있다.")]),t._v(" "),s("li",[t._v("동시성 코드에는 독자적인 난관이 있다. 다른 코드에서 겪는 난관과 다르며 훠얼씬 어렵다.")]),t._v(" "),s("li",[t._v("잘못 구현한 동시성 코드는 별의별 방식으로 실패한다. 그냥 개어렵다.")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("동시성 코드는 다른 코드와 분리하라")])]),t._v(" "),s("h4",{attrs:{id:"따름-정리-corollary-자료-범위를-제한하라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#따름-정리-corollary-자료-범위를-제한하라"}},[t._v("#")]),t._v(" 따름 정리 (corollary) : 자료 범위를 제한하라")]),t._v(" "),s("ul",[s("li",[t._v("위의 예제처럼 객체 하나를 공유한 후 동일 필드를 수정하면 두 스레드간 간섭이 발생해 문제가 발생한다.")]),t._v(" "),s("li",[t._v("이런문제를 해결하는 방법으로 임계영역(critical section)을 synchronized 키워드로 보호하길 권장한다.")]),t._v(" "),s("li",[t._v("이런 임계영역의 수를 줄이는 기술이 중요한데, 만약 공유 자료를 수정하는 위치가 많을수록 다음 가능성이 생긴다.\n"),s("ul",[s("li",[t._v("보호할 임계영역을 빼먹는다. 결국 수정하는 모든 코드를 망가뜨림")]),t._v(" "),s("li",[t._v("모든 임계영역을 올바로 보호했는지 확인하느라 똑같은 노력과 수고를 반복한다. ("),s("a",{attrs:{href:"https://medium.com/@duddk1551/java-dry%EC%9B%90%EC%B9%99-18abd5433b7f",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dry 위반"),s("OutboundLink")],1),t._v(")")]),t._v(" "),s("li",[t._v("버그찾기가 더 어려워진다.")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("자료를 캡슐화하라. 공유 자료를 최대한 줄여라")])]),t._v(" "),s("h4",{attrs:{id:"따름정리-자료-사본을-사용하라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#따름정리-자료-사본을-사용하라"}},[t._v("#")]),t._v(" 따름정리 : 자료 사본을 사용하라")]),t._v(" "),s("ul",[s("li",[t._v("공유 자료를 줄이려면 처음부터 공유하지 않는 방법이 제일 좋다.")]),t._v(" "),s("li",[t._v("어떤 경우에는 객체를 복사해 읽기 전용으로 사용하는 방법이 가능하다.")]),t._v(" "),s("li",[t._v("어떤 경우에는 각 스레드가 객체를 복사해 사용한 후 스레드가 해당 사본에서 결과를 가져오는 방법도 가능하다.")]),t._v(" "),s("li",[t._v("이런식으로 사본생성이 시간과 부하를 잡아먹을 수도 있으니, 잘 확인해보고 정해야 한다.")])]),t._v(" "),s("h4",{attrs:{id:"따름정리-스레드는-가능한-독립적으로-구현하라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#따름정리-스레드는-가능한-독립적으로-구현하라"}},[t._v("#")]),t._v(" 따름정리 : 스레드는 가능한 독립적으로 구현하라")]),t._v(" "),s("ul",[s("li",[t._v("다른 스레드와 자료를 공유하지 않는 스레드를 구현하자.")]),t._v(" "),s("li",[t._v("모든 정보는 비공유 출처에서 가져오며 로컬 변수에 저장한다.")]),t._v(" "),s("li",[t._v("그러면 각 스레드는 세상에 자신만 있는 듯이 돌아갈 수 있다.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("독자적인 스레드로, 가능하면 다른 프로세서에서 돌려도 괜찮도록 자료를 독립적인 단위로 분할하라")])]),t._v(" "),s("h3",{attrs:{id:"라이브러리를-이해하라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#라이브러리를-이해하라"}},[t._v("#")]),t._v(" 라이브러리를 이해하라")]),t._v(" "),s("ul",[s("li",[t._v("자바 5는 동시성 측면에서 많이 좋아졌다.\n"),s("ul",[s("li",[t._v("스레드 환경에 안전한 컬렉션을 사용한다.")]),t._v(" "),s("li",[t._v("서로 무관한 작업을 수행할 때는 executor 프레임워크를 사용한다.")]),t._v(" "),s("li",[t._v("가능하다면 스레드가 차단되지 않는 방법을 사용한다.")]),t._v(" "),s("li",[t._v("일부 클래스 라이브러리는 스레드에 안전하지 못하다.")])])])]),t._v(" "),s("h4",{attrs:{id:"스레드-환경에-안전한-컬렉션"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#스레드-환경에-안전한-컬렉션"}},[t._v("#")]),t._v(" 스레드 환경에 안전한 컬렉션")]),t._v(" "),s("ul",[s("li",[t._v("java.util.concurrent 패키지에 추가된 클래스들")]),t._v(" "),s("li",[t._v("해당 클래스들은 스레드 환경에서 안전하고, 성능도 좋다.\n"),s("ul",[s("li",[t._v("실제로 ConcurrentHashMap은 거의 모든상황에서 HashMap보다 빠르다.")]),t._v(" "),s("li",[t._v("동시 읽기 / 쓰기를 지원하며, 자주 사용하는 복합 연산을 다중 스레드 상에서 안전하게 만든 메소드로 제공한다.")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("클래스")]),t._v(" "),s("th",[t._v("설명")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ReentranLock")]),t._v(" "),s("td",[t._v("한 메소드에서 잠그고 다른 메소드에서 푸는 락")])]),t._v(" "),s("tr",[s("td",[t._v("Semaphore")]),t._v(" "),s("td",[t._v("전형적인 세마포어다. 개수(count)가 있는 락")])]),t._v(" "),s("tr",[s("td",[t._v("CountDownLatch")]),t._v(" "),s("td",[t._v("지정한 수만큼 이벤트가 발생하고 나서야 대기중인 스레드를 모두 해제하는 락")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("언어가 제공하는 클래스를 검토하라. 자바에서는 java.util.concurrent, java.util.concurrent.atomic, java.util.concurrent.locks 를 익히자.")])]),t._v(" "),s("h3",{attrs:{id:"실행-모델을-이해하라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#실행-모델을-이해하라"}},[t._v("#")]),t._v(" 실행 모델을 이해하라")]),t._v(" "),s("ul",[s("li",[t._v("아래의 표는 다중 스레드 어플리케이션을 분류하는 기본 용어")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("용어")]),t._v(" "),s("th",[t._v("설명")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("한정된 자원 (Bound Resource)")]),t._v(" "),s("td",[t._v("다중 스레드 환경에서 사용하는 자원으로, 크기나 숫자가 제한적이다. DB연결, 길이가 일정한 읽기/쓰기 버퍼 등")])]),t._v(" "),s("tr",[s("td",[t._v("상호 배제 (Mutual Exclusion)")]),t._v(" "),s("td",[t._v("한 번에 한 스레드만 공유 자료나 공유 자원을 사용할 수 있는 경우를 가르킴")])]),t._v(" "),s("tr",[s("td",[t._v("기아 (Starvation)")]),t._v(" "),s("td",[t._v("한 스레드나 여러 스레드가 굉장히 오랫동안 혹은 영원히 자원을 기다리는 상황")])]),t._v(" "),s("tr",[s("td",[t._v("데드락 (Deadlock)")]),t._v(" "),s("td",[t._v("여러 스레드가 서로가 끝나기를 기다린다. 모든 스레드가 각기 필요한 자원을 다른 스레드가 점유하는 바람에 어느 쪽도 더 이상 진행하지 못하는 상황")])]),t._v(" "),s("tr",[s("td",[t._v("라이브락 (Livelock)")]),t._v(" "),s("td",[t._v("락을 거는 단계에서 각 스레드가 서로를 방해한다. 스레드는 계속해서 진행하려 하지만, 공명(resonance) 으로 인해, 굉장히 오랫동안, 혹은 영원히 진행하지 못함")])])])]),t._v(" "),s("h4",{attrs:{id:"생산자-소비자"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#생산자-소비자"}},[t._v("#")]),t._v(" 생산자 - 소비자")]),t._v(" "),s("ul",[s("li",[t._v("아래서 대기열은 Producer/Consumer 스레드가 함께 사용하는 한정된 자원이다.")]),t._v(" "),s("li",[t._v("하나 이상의 Producer 스레드가 정보를 버퍼나 대기열에 넣는다.\n"),s("ul",[s("li",[t._v("Producer 스레드는 대기열에 빈 공간이 있을 때만 정보를 채운다.(아니면 기다림)")]),t._v(" "),s("li",[t._v("정보를 채우고 Consumer 스레드에게 시그널을 보낸다.")])])]),t._v(" "),s("li",[t._v("하나 이상의 Consumer 스레드가 대기열에서 정보를 가져와 사용한다.\n"),s("ul",[s("li",[t._v("있을 때만 가져감. 채워질 때까지 기다림")]),t._v(" "),s("li",[t._v("대기열에 빈 공간이 있을 경우 Producer 스레드에 시그널을 보낸다.")])])]),t._v(" "),s("li",[t._v("잘못하면 Producer/Consumer 스레드가 둘 다 진행 가능한 상태임에도 서로에게서 시그널을 기다릴 위험이 있다.")])]),t._v(" "),s("h4",{attrs:{id:"읽기-쓰기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#읽기-쓰기"}},[t._v("#")]),t._v(" 읽기 - 쓰기")]),t._v(" "),s("ul",[s("li",[t._v("읽기 스레드를 위한 주된 정보원으로 공유 자원을 사용하지만, 쓰기 쓰레드가 이 공유 자원을 이따금 갱신하는 상황을 의미한다.\n"),s("ul",[s("li",[t._v("읽는 스레드의 작업 동안 쓰는 스레드의 작업이 기다리면 정보 업데이트가 되지 않는 문제가 있다")]),t._v(" "),s("li",[t._v("쓰는 스레드의 작업 동안 읽는 스레드의 작업이 기다리면 이것도 기아 현상의 위험이 있음.")])])]),t._v(" "),s("li",[t._v("보통은 쓰기 스레드가 읽기 스레드가 끝날 때까지 기다린다.")])]),t._v(" "),s("h4",{attrs:{id:"식사하는-철학자들"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#식사하는-철학자들"}},[t._v("#")]),t._v(" 식사하는 철학자들")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://ko.wikipedia.org/wiki/%EC%8B%9D%EC%82%AC%ED%95%98%EB%8A%94_%EC%B2%A0%ED%95%99%EC%9E%90%EB%93%A4_%EB%AC%B8%EC%A0%9C",target:"_blank",rel:"noopener noreferrer"}},[t._v("식사하는 철학자들 설명 위키"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"동기화하는-메소드-사이에-존재하는-의존성-이해"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#동기화하는-메소드-사이에-존재하는-의존성-이해"}},[t._v("#")]),t._v(" 동기화하는 메소드 사이에 존재하는 의존성 이해")]),t._v(" "),s("ul",[s("li",[t._v("동기화하는 메소드 사이에 의존성이 생겨버리면 동시성 코드에 찾아내기 어려운 버그가 생긴다.")]),t._v(" "),s("li",[t._v("자바에선 synchronized라는 개념을 제공하지만, 여러 메소드가 공유 클래스 하나에 물려있으면 확인이 필요하다.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("공유 객체 하나에는 메소드 하나만 사용하라.")])]),t._v(" "),s("h3",{attrs:{id:"동기화하는-부분을-작게-만들어라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#동기화하는-부분을-작게-만들어라"}},[t._v("#")]),t._v(" 동기화하는 부분을 작게 만들어라")]),t._v(" "),s("ul",[s("li",[t._v("synchronized 키워드를 사용하면 락을 설정해 같은락으로 감싼 모든 코드영역은 한 번에 한 스레드만 실행이 가능하다.")]),t._v(" "),s("li",[t._v("하지만 락은 스레드를 지연시키고 부하를 가중시킨다.")]),t._v(" "),s("li",[t._v("synchronized를 마구 남발하지 말고, 그렇다고 synchronized를 줄인다고 커다란 임계영역을 만들지 말자.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("동기화 하는 부분을 최대한 작게 만들어라.")])]),t._v(" "),s("h3",{attrs:{id:"올바른-종료-코드는-구현하기-어렵다"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#올바른-종료-코드는-구현하기-어렵다"}},[t._v("#")]),t._v(" 올바른 종료 코드는 구현하기 어렵다")]),t._v(" "),s("ul",[s("li",[t._v("데드락 때문에 구현하기가 어렵다.")]),t._v(" "),s("li",[t._v("스레드가 절대 오지 않을 시그널을 기다리는 경우.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("종료 코드를 개발 초기부터 고민하고 동작하게 초기부터 구현하라. 생각보다 오래걸리낟. 생각보다 어려우므로 이미 나온 알고리즘을 검토하자.")])]),t._v(" "),s("h3",{attrs:{id:"스레드-코드-테스트하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#스레드-코드-테스트하기"}},[t._v("#")]),t._v(" 스레드 코드 테스트하기")]),t._v(" "),s("ul",[s("li",[t._v("테스트 하기가 어렵고 정확성을 보장하진 못하지만, 그럼에도 충반한 테스트는 위험을 낮춘다.")]),t._v(" "),s("li",[t._v("스레드가 하나일땐 테스트하기가 그나마 쉽지만, 두개이상이 되면 겁나 헷갈려진다.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("문제를 노출하는 테스트 케이스를 작성하자. 프로그램 설정과 시스템 설정과 부하를 바꿔가며 자주 돌려라. 테스트가 실패하면 원인을 추적하자. 다시 돌렸더니 통과하더라도 그냥 넘어가지 말자.")])]),t._v(" "),s("h4",{attrs:{id:"말이-안-되는-실패는-잠정적인-스레드-문제로-취급하라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#말이-안-되는-실패는-잠정적인-스레드-문제로-취급하라"}},[t._v("#")]),t._v(" 말이 안 되는 실패는 잠정적인 스레드 문제로 취급하라")]),t._v(" "),s("ul",[s("li",[t._v("다중 스레드 코드는 오류를 재현하기가 매우 어렵다.")]),t._v(" "),s("li",[t._v("직관적으로 어렵고, 여러가지 케이스로 에러가 날 수 있으니 단순 1회성 오류라고 치부하지 말자")])]),t._v(" "),s("h4",{attrs:{id:"다중-스레드를-고려하지-않은-순차-코드부터-제대로-돌게-만들자"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#다중-스레드를-고려하지-않은-순차-코드부터-제대로-돌게-만들자"}},[t._v("#")]),t._v(" 다중 스레드를 고려하지 않은 순차 코드부터 제대로 돌게 만들자")]),t._v(" "),s("ul",[s("li",[t._v("스레드 환경 밖에서 코드가 제대로 도는지 반드시 확인한다.")]),t._v(" "),s("li",[t._v("스레드가 호출하는 POJO를 만든다. POJO는 스레드를 모른다. 따라서 스레드 환경밖에서 테스트가 가능하다.")]),t._v(" "),s("li",[t._v("POJO에 넣는 코드는 많을수록 더 좋다.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("스레드 환경 밖에서 생기는 버그와 스레드 환경에서 생기는 버그를 동시에 디버깅하지 마라. 먼저 스레드 환경 밖에서 코드를 올바로 돌려라.")])]),t._v(" "),s("h3",{attrs:{id:"결론"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#결론"}},[t._v("#")]),t._v(" 결론")]),t._v(" "),s("ul",[s("li",[t._v("다중 스레드 코드는 올바로 구현하기 어렵고, 공유 자료가 늘어나면서 난이도는 더욱 높아진다.")]),t._v(" "),s("li",[t._v("다중 스레드 코드를 작성한다면 각별히 깨끗하게 코드를 짜야 한다. 주의하지 않으면 알 수 없는 오류에 직면할 수 있다.")]),t._v(" "),s("li",[t._v("무엇보다 SRP를 준수해야 한다. 스레드를 아는 코드와 스레드를 모르는 코드를 분리한다.\n"),s("ul",[s("li",[t._v("테스트 할 때 스레드 코드를 테스트 할 때에는 스레드만 테스트한다.")]),t._v(" "),s("li",[t._v("즉 스레드 코드는 최대한 집약되고 작아야 한다.")])])]),t._v(" "),s("li",[t._v("동시성 오류를 일으키는 잠정적인 원인을 철저히 이해해야 한다.\n"),s("ul",[s("li",[t._v("여러 스레드가 공유 자료를 조작하거나 자원 풀을 공유할 때 동시성 오류가 발생한다.")]),t._v(" "),s("li",[t._v("루프 반복을 끝내거나 프로그램을 깔끔하게 종료하는 등 경계 조건의 경우 더 까다로우므로 특히 주의해야 한다.")])])]),t._v(" "),s("li",[t._v("사용하는 라이브러리와 기본 알고리즘을 이해한다.\n"),s("ul",[s("li",[t._v("특정 라이브러리 기능이 기본 알고리즘과 유사한 어떤 문제를 어떻게 해결하는지 파악한다.")])])]),t._v(" "),s("li",[t._v("보호할 코드 영역을 찾아내는 방법과 특정 코드 영역을 잠그는 방법을 이해한다. 또 공유하는 정보와 공유하지 않는 정보를 정확하게 이해한다.\n"),s("ul",[s("li",[t._v("잠글 필요가 없는 코드는 잠그지 않는다.")]),t._v(" "),s("li",[t._v("잠긴 영역에서 다른 잠긴 영역을 호출하지 않는다.")]),t._v(" "),s("li",[t._v("공유하는 객체 수와 버위를 최대한 줄인다.")]),t._v(" "),s("li",[t._v("클라이언트에게 공유 상태를 관리하는 책임을 떠넘기지 않는다.")])])])])])}),[],!1,null,null,null);a.default=_.exports}}]);
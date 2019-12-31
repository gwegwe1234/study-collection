(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{227:function(t,a,s){t.exports=s.p+"assets/img/gopackage1.14451b53.png"},428:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_3강"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3강"}},[t._v("#")]),t._v(" 3강")]),t._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#_1-패키지"}},[t._v("1. 패키지")]),n("ul",[n("li",[n("a",{attrs:{href:"#_1-1-패키지의-이름-규칙"}},[t._v("1-1. 패키지의 이름 규칙")])]),n("li",[n("a",{attrs:{href:"#_1-2-main-패키지"}},[t._v("1-2. main 패키지")])])])]),n("li",[n("a",{attrs:{href:"#_2-가져오기"}},[t._v("2. 가져오기")]),n("ul",[n("li",[n("a",{attrs:{href:"#_2-1-원격-가져오기"}},[t._v("2-1. 원격 가져오기")])]),n("li",[n("a",{attrs:{href:"#_2-2-명명된-가져오기"}},[t._v("2-2. 명명된 가져오기")])])])]),n("li",[n("a",{attrs:{href:"#_3-init"}},[t._v("3. init")])]),n("li",[n("a",{attrs:{href:"#_4-go-내장-도구의-활용"}},[t._v("4. Go 내장 도구의 활용")])]),n("li",[n("a",{attrs:{href:"#_5-go의-추가-개발자-도구"}},[t._v("5. Go의 추가 개발자 도구")]),n("ul",[n("li",[n("a",{attrs:{href:"#_5-1-go-vet"}},[t._v("5-1. go vet")])]),n("li",[n("a",{attrs:{href:"#_5-2-go-format"}},[t._v("5-2. go format")])]),n("li",[n("a",{attrs:{href:"#_5-3-go-문서화-도구"}},[t._v("5-3. Go 문서화 도구")])])])]),n("li",[n("a",{attrs:{href:"#_6-다른-go-개발자와-협업하기"}},[t._v("6. 다른 Go 개발자와 협업하기")]),n("ul",[n("li",[n("a",{attrs:{href:"#_6-1-소스-코드-공유를-위한-저장소-생성하기"}},[t._v("6-1. 소스 코드 공유를 위한 저장소 생성하기")])])])]),n("li",[n("a",{attrs:{href:"#_7-의존성-관리"}},[t._v("7. 의존성 관리")]),n("ul",[n("li",[n("a",{attrs:{href:"#_7-1-의존성-벤더링"}},[t._v("7-1. 의존성 벤더링")])]),n("li",[n("a",{attrs:{href:"#_7-2-gb-도구"}},[t._v("7-2. gb 도구")])])])])])]),n("p"),t._v(" "),n("h2",{attrs:{id:"_1-패키지"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-패키지"}},[t._v("#")]),t._v(" 1. 패키지")]),t._v(" "),n("ul",[n("li",[t._v("모든 Go 프로그램은 "),n("em",[t._v("패키지")]),t._v("라고 불리는 일련의 파일 그룹을 통해 관리된다.")]),t._v(" "),n("li",[t._v("패키지 단위로 관리함으로써 코드를 작은단위로 쪼개고, 관리해서 재사용성을 높여준다.")]),t._v(" "),n("li",[t._v("Go 내장 라이브러리의 http를 보면")])]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("net"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("http"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n    cgi"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n    cookiejar"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n        testdata"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n    fcgi"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n    httptest"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n    httputil"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n    pprof"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n    testdata"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n")])])]),n("ul",[n("li",[t._v("위와 같은 구조로 되어있다.")]),t._v(" "),n("li",[t._v("즉 필요한 기능들만 패키지를 가져와서 사용만 하면 되는 구조이다.")])]),t._v(" "),n("h3",{attrs:{id:"_1-1-패키지의-이름-규칙"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-패키지의-이름-규칙"}},[t._v("#")]),t._v(" 1-1. 패키지의 이름 규칙")]),t._v(" "),n("ul",[n("li",[t._v("패키지의 이름 규칙은 패키지가 저장되는 디렉토리의 이름을 따르는 것")]),t._v(" "),n("li",[t._v("이렇게 명명 규칙을 따르면 패키지를 가져올 때 패키지의 이름을 쉽게 할 수 있다는 장점이 있다.")]),t._v(" "),n("li",[t._v("디렉토리의 이름은 짧고 간결한 소문자로 짓는다.")])]),t._v(" "),n("h3",{attrs:{id:"_1-2-main-패키지"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-main-패키지"}},[t._v("#")]),t._v(" 1-2. main 패키지")]),t._v(" "),n("ul",[n("li",[t._v("main이라는 이름의 패키지는 Go에서 특별한 의미를 가진다.")]),t._v(" "),n("li",[t._v("Go 커맨드를 위한 것으로 실행 가능한 바이너리 파일로 컴파일되기 위한 패키지를 정의하기 위한 것")]),t._v(" "),n("li",[t._v("즉 모든 Go로 짠 소스는 main 패키지가 있어야 한다.")]),t._v(" "),n("li",[t._v("main 패키지는 main()함수를 가지고 있어야 한다.")]),t._v(" "),n("li",[t._v("main() 함수는 프로그램의 진입점이다.")]),t._v(" "),n("li",[t._v("컴파일된 실행 바이너리의 이름은 main 패키지가 선언된 디렉토리의 이름을 따르게 된다.")])]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ul",[n("li",[t._v("해당 디렉토리에서 go build 명령어를 실행하면 hello 라는 실행파일이 생성된다.")]),t._v(" "),n("li",[t._v("실행하면 당연히 Hello World! 가 실행된다.")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("./hello\nHello World!\n")])])]),n("ul",[n("li",[t._v("main 함수가 있는곳에서 main 패키지로 선언되지 않으면 제대로 실행되지 않는다.")])]),t._v(" "),n("h2",{attrs:{id:"_2-가져오기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-가져오기"}},[t._v("#")]),t._v(" 2. 가져오기")]),t._v(" "),n("ul",[n("li",[t._v("import 구문은 컴파일러에게 패키지를 탐색할 디스크상의 경로를 알려준다.")]),t._v(" "),n("li",[t._v("여러개를 가져오려면 () 안에다가 패키지를 가져오면 된다.")])]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strings"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("ul",[n("li",[t._v("패키지가 다른 패키지를 임포트할땐, 참조하는 디렉토리 기준으로 한 상대 경로를 이용해 탐색하고, 표준 라이브러리는 Go가 설치된 경로를 기준으로 탐색한다.")]),t._v(" "),n("li",[t._v("만약 /usr/local/go 경로에 Go를 설치하고, GOPATH 환경 변수에 /home/myproject:/home/mylibraries 경로로 설정하면, 컴파일러는 net/http 패키지를 다음과 같은 순서로 탐색한다.")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("/usr/local/go/src/pkg/net/http // 표준 라이브러리가 보관되는 경로\n/home/myproject/src/net/http\n/home/mylibraries/src/net/http\n")])])]),n("ul",[n("li",[t._v("무조건 1순위는 Go 설치 경로이다.")])]),t._v(" "),n("h3",{attrs:{id:"_2-1-원격-가져오기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-원격-가져오기"}},[t._v("#")]),t._v(" 2-1. 원격 가져오기")]),t._v(" "),n("ul",[n("li",[t._v("github 이나 기타 사이트에서 특정 패키지를 가져올 수도 있다.")]),t._v(" "),n("li",[t._v("go get 명령어를 사용하여 GOPATH 환경 변수가 참조하는 경로에 코드를 저장 할 수 있다.")]),t._v(" "),n("li",[t._v("go get 명령은 재귀적으로 실행되어서 패키지의 소스 트리를 모두 탐색해서 발견되는 의존성들에 대한 모든 코드를 가져온다.")])]),t._v(" "),n("h3",{attrs:{id:"_2-2-명명된-가져오기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-명명된-가져오기"}},[t._v("#")]),t._v(" 2-2. 명명된 가져오기")]),t._v(" "),n("ul",[n("li",[t._v("동일한 여러개의 패키지를 가져와야 하면 이름을 바꿔주는 방법이 있다.")])]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n    myfmt "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mylib/fmt"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// myfmt 로 이름 변경")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Standard Library"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    myfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mylib/fmt"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ul",[n("li",[t._v("Go 컴파일러는 패키지를 가져온 후 사용하지 않으면 컴파일 에러를 발생시킨다.")]),t._v(" "),n("li",[t._v("이렇게 하면 패키지 때문에 프로그램의 크기가 커지지 않는 장점이 있다.")]),t._v(" "),n("li",[t._v("만약 참조할 필요가 없지만 가져와야 할 경우가 있을 수도 있는데, 이럴 때 빈 식별자를 사용한다.")])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("빈 식별자(blank identifier)")]),t._v(" "),n("p",[t._v("Go에서 문자 _는 빈 식별자로서 다양한 용도로 사용이 가능하다. 패키지를 가져올 때 패키지 이름을 지정하는 경우를 포함해서 값의 대입을 건너뛰고\n싶을 때나, 함수의 리턴 값 중 필요치 않은 값을 무시할 때 사용할 수 있다.")])]),t._v(" "),n("h2",{attrs:{id:"_3-init"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-init"}},[t._v("#")]),t._v(" 3. init")]),t._v(" "),n("ul",[n("li",[t._v("각각의 패키지는 최초 실행 시점에 호출될 init 함수를 필요한 만큼 정의할 수 있다.")]),t._v(" "),n("li",[t._v("컴파일러가 마련한 모든 init 함수는 main 함수가 실행되기 전에 미리 호출되도록 예약 된다.")]),t._v(" "),n("li",[t._v("초기화 하거나 기타 값설정을 한다는 등 사전 작업시에 좋다.")]),t._v(" "),n("li",[t._v("좋은 예시론 디비 연결이 있다.")]),t._v(" "),n("li",[t._v("디비 드라이버들은 init 함수 내에서 sql 패키지에 스스로 등록한다.")])]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" postgres\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"database/sql"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tsql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Register")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"postgres"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PostgresDriver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"database/sql"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tsql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"postgres"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mydb"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 메인에서 postgres로 오픈을 해도 다른 패키지에서 init으로 등록을 했기 때문에 문제가 없다.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"_4-go-내장-도구의-활용"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-go-내장-도구의-활용"}},[t._v("#")]),t._v(" 4. Go 내장 도구의 활용")]),t._v(" "),n("p",[n("img",{attrs:{src:s(227),alt:"package"}})]),t._v(" "),n("ul",[n("li",[t._v("go build hello.go : hello라는 실행 파일이 생성된다.")]),t._v(" "),n("li",[t._v("go clean hello.go : 만들어진 실행파일을 삭제해준다.")])]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/webgenie/go-in-action/chapter3/words"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io/ioutil"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"os"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfilename "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n\tcontents"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" ioutil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"파일을 열 때 오류 발생"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\ttext "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contents"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\tcount "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" words"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CountWords")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d개의 다넝 발견"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("ul",[n("li",[t._v("빌드를 할 때 패키지를 직접 명시하는 방법도 있다.\n"),n("ul",[n("li",[t._v("go build github.com/gwegwe1234/go-in-action/chapter3/io")])])]),t._v(" "),n("li",[t._v("와일드 카드 지정도 가능\n"),n("ul",[n("li",[t._v("go build github.com/gwegwe1234/go-in-action/chapter3/... : chapter3 폴더 아래 모든 패키지 빌드")])])]),t._v(" "),n("li",[t._v("패키지 식별자 대신 경로로 인수 지정 가능\n"),n("ul",[n("li",[t._v("go build .")])])]),t._v(" "),n("li",[t._v("빌드와 실행을 같이하기위한 명령어\n"),n("ul",[n("li",[t._v("go run ioTest.go")])])])]),t._v(" "),n("h2",{attrs:{id:"_5-go의-추가-개발자-도구"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-go의-추가-개발자-도구"}},[t._v("#")]),t._v(" 5. Go의 추가 개발자 도구")]),t._v(" "),n("h3",{attrs:{id:"_5-1-go-vet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-go-vet"}},[t._v("#")]),t._v(" 5-1. go vet")]),t._v(" "),n("ul",[n("li",[t._v("vet 도구로 일반적으로 발생할 수 있는 에러를 잡아준다.\n"),n("ul",[n("li",[t._v("printf 스타일의 함수 호출 시 잘못된 매개변수 지정")]),t._v(" "),n("li",[t._v("메소드 정의 시 시그니처 관련 에러")]),t._v(" "),n("li",[t._v("잘못 구성된 태구")]),t._v(" "),n("li",[t._v("조합 리터럴 사용시 누락된 키")])])])]),t._v(" "),n("h3",{attrs:{id:"_5-2-go-format"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-go-format"}},[t._v("#")]),t._v(" 5-2. go format")]),t._v(" "),n("ul",[n("li",[t._v("go fmt 명령어를 사용하면 코드 포매팅을 자동으로 해준다.")])]),t._v(" "),n("h3",{attrs:{id:"_5-3-go-문서화-도구"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-go-문서화-도구"}},[t._v("#")]),t._v(" 5-3. Go 문서화 도구")]),t._v(" "),n("h4",{attrs:{id:"커맨드라인에서-문서-탐색하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#커맨드라인에서-문서-탐색하기"}},[t._v("#")]),t._v(" 커맨드라인에서 문서 탐색하기")]),t._v(" "),n("ul",[n("li",[t._v("go doc {디렉토리명}")])]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" doc tar\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" tar "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// import "archive/tar"')]),t._v("\n\nPackage tar implements access to tar archives"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nTape archives "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" are a file format "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" storing a sequence of files that\ncan be read and written in a streaming manner"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" This "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" aims to cover\nmost variations of the format"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" including those produced by GNU and BSD tar\ntools"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" TypeReg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ErrHeader "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" errors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"archive/tar: invalid tar header"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Format "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" FormatUnknown Format "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Header "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("FileInfoHeader")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fi os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FileInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Header"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Reader "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewReader")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Reader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Reader\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Writer "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewWriter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Writer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Writer\n\n")])])]),n("h4",{attrs:{id:"문서-탐색하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#문서-탐색하기"}},[t._v("#")]),t._v(" 문서 탐색하기")]),t._v(" "),n("ul",[n("li",[t._v("godoc -http=:6060")]),t._v(" "),n("li",[t._v("localhost:6060")])]),t._v(" "),n("h2",{attrs:{id:"_6-다른-go-개발자와-협업하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-다른-go-개발자와-협업하기"}},[t._v("#")]),t._v(" 6. 다른 Go 개발자와 협업하기")]),t._v(" "),n("h3",{attrs:{id:"_6-1-소스-코드-공유를-위한-저장소-생성하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-소스-코드-공유를-위한-저장소-생성하기"}},[t._v("#")]),t._v(" 6-1. 소스 코드 공유를 위한 저장소 생성하기")]),t._v(" "),n("h4",{attrs:{id:"패키지는-반드시-저장소의-루트에-저장해야-한다"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#패키지는-반드시-저장소의-루트에-저장해야-한다"}},[t._v("#")]),t._v(" 패키지는 반드시 저장소의 루트에 저장해야 한다.")]),t._v(" "),n("ul",[n("li",[t._v("github에 src폴더같은건 넣지말고, 패키지가 root에 오도록 저장하자")])]),t._v(" "),n("h4",{attrs:{id:"패키지의-크기는-작게-유지하자"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#패키지의-크기는-작게-유지하자"}},[t._v("#")]),t._v(" 패키지의 크기는 작게 유지하자")]),t._v(" "),n("ul",[n("li",[t._v("패키지를 작게 유지하는게 일반적이다")])]),t._v(" "),n("h4",{attrs:{id:"go-fmt-명령을-실행하자"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#go-fmt-명령을-실행하자"}},[t._v("#")]),t._v(" go fmt 명령을 실행하자")]),t._v(" "),n("ul",[n("li",[t._v("go fmt 명령어를 통해 일관된 포맷팅을 유지하자")])]),t._v(" "),n("h4",{attrs:{id:"소스-코드를-문서화하자"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#소스-코드를-문서화하자"}},[t._v("#")]),t._v(" 소스 코드를 문서화하자")]),t._v(" "),n("ul",[n("li",[t._v("godoc을 사용해 문서화를 깔끔하게 해보자")])]),t._v(" "),n("h2",{attrs:{id:"_7-의존성-관리"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-의존성-관리"}},[t._v("#")]),t._v(" 7. 의존성 관리")]),t._v(" "),n("h3",{attrs:{id:"_7-1-의존성-벤더링"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-의존성-벤더링"}},[t._v("#")]),t._v(" 7-1. 의존성 벤더링")]),t._v(" "),n("ul",[n("li",[t._v("godep 이나 vendor 같은 커뮤니티 도구들로 벤더링과 가져오기 경로 재작성이라는 기법을 통해 의존성 문제를 해결한다.")]),t._v(" "),n("li",[t._v("핵심은 모든 의존성을 프로젝트 저장소의 디렉토리에 복사 후, 이 의존성들을 참조하는 가져오기 경로를 프로젝트가 제공하는 경로로 재 작성하는 것")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$GOPATH/src/github.com/ardanstudios/myproject\n|-- Godeps\n| |-- Godeps.json\n| |-- Readme\n| |-- _workspace\n|   |-- src\n|   |-- bitbucket.org\n|   |-- ww\n|   |   |-- goautoneg\n|   |       |-- Makefile\n|   |       |-- README.txt\n|   |       |-- autoneg.go\n|   |       |-- autoneg_test.go\n|   |-- github.com\n|       |-- beorn7\n|           |-- perks\n|               |-- README.md\n|               |-- quantile\n|               |-- bench_test.go\n|               |-- example_test.go\n|               |-- exampledata.txt\n|               |-- stream.go\n|\n|-- examples\n|-- model\n|-- README.md\n|-- main.go\n")])])]),n("ul",[n("li",[t._v("godep 을 사용하면 위와 같이 경로가 재설정 된다.")]),t._v(" "),n("li",[t._v("main.go 의 import 를 보면")])]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bitbucket.org/ww/goautoneg"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/beorn7/perks"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("ul",[n("li",[t._v("에서")])]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.ardanstudios.com/myproject/Godeps/_workspace/src/bitbucket.org/ww/goautoneg"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.ardanstudios.com/myproject/Godeps/_workspace/src/github.com/beorn7/perks"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("ul",[n("li",[t._v("이런식으로 GOPATH 환경 변수에 지정된 디렉토리 내에 저장되어 일관성 있게 import가 가능하다")])]),t._v(" "),n("h3",{attrs:{id:"_7-2-gb-도구"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-gb-도구"}},[t._v("#")]),t._v(" 7-2. gb 도구")]),t._v(" "),n("ul",[n("li",[t._v("gb는 완전히 새로운 빌드도구")]),t._v(" "),n("li",[n("a",{attrs:{href:"http://getgb.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{639:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_14강"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14강"}},[t._v("#")]),t._v(" 14강")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#http-메서드"}},[t._v("HTTP 메서드")]),a("ul",[a("li",[a("a",{attrs:{href:"#q1-http란-무엇인가"}},[t._v("Q1. HTTP란 무엇인가?")])]),a("li",[a("a",{attrs:{href:"#q2-http-메서드란-무엇인가"}},[t._v("Q2. HTTP 메서드란 무엇인가?")])]),a("li",[a("a",{attrs:{href:"#q3-http-응답-코드는-무엇을-알려주는가"}},[t._v("Q3. HTTP 응답 코드는 무엇을 알려주는가?")])])])]),a("li",[a("a",{attrs:{href:"#http-클라이언트"}},[t._v("HTTP 클라이언트")]),a("ul",[a("li",[a("a",{attrs:{href:"#q4-어떻게-자바-클래스에서-http-요청을-보낼-수-있는가"}},[t._v("Q4. 어떻게 자바 클래스에서 HTTP 요청을 보낼 수 있는가?")])]),a("li",[a("a",{attrs:{href:"#q5-자바의-내장-클래스를-이용하지-않고-전용-http-클라이언트-라이브러리를-이용할-때의-장점은-무엇인가"}},[t._v("Q5. 자바의 내장 클래스를 이용하지 않고 전용 HTTP 클라이언트 라이브러리를 이용할 때의 장점은 무엇인가?")])])])]),a("li",[a("a",{attrs:{href:"#rest-이용해-http-서비스-만들기"}},[t._v("REST 이용해 HTTP 서비스 만들기")]),a("ul",[a("li",[a("a",{attrs:{href:"#q6-rest-uri-는-어떻게-설계되는가"}},[t._v("Q6. REST URI 는 어떻게 설계되는가?")])]),a("li",[a("a",{attrs:{href:"#q7-자바에서-rest-서비스를-어떻게-구현할-수-있는가"}},[t._v("Q7. 자바에서 REST 서비스를 어떻게 구현할 수 있는가?")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"http-메서드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-메서드"}},[t._v("#")]),t._v(" HTTP 메서드")]),t._v(" "),a("h3",{attrs:{id:"q1-http란-무엇인가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q1-http란-무엇인가"}},[t._v("#")]),t._v(" Q1. HTTP란 무엇인가?")]),t._v(" "),a("ul",[a("li",[t._v("HTTP 프로토콜이 어떻게 작동하는지 이해하는 좋은 방법으로는 텔넷을 사용해보는 것이다.")])]),t._v(" "),a("div",{staticClass:"language-zsh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("telnet www.melon.com 443\nTrying 121.53.216.8...\nConnected to www.melon.com.\nEscape character is '^]'.\n")])])]),a("ul",[a("li",[t._v("새 행에 GET / HTTP/1.1 을 입력하면 특정 HTML 코드에 따르는 HTTP 헤더들의 집합에 응답한 후 연결을 종료하고, 커맨드 라인으로 다시 돌아온다.")])]),t._v(" "),a("div",{staticClass:"language-zsh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('GET / HTTP/1.1\nHTTP/1.0 200 OK\nServer: Apache\nX-Content-Type-Options: nosniff\nCache-Control: s-maxage=3600, must-revalidate, max-age=0\nLast-Modified: Mon, 13 May 2013 17:07:15 GMT\nVary: Accept-Encoding\nContent-Length: 6071\nContent-Type: text/html; charset=utf-8\nConnection: close\n<!DOCTYPE html>\n<html lang="mul" dir="ltr">\n... WEB PAGE CONTENT ...\n</body>\n</html>Connection closed by foreign host.\n>\n')])])]),a("ul",[a("li",[t._v("서버는 여러가지 응답을 보내주는데, 200 OK, 1.0 버전의 프로토콜 등의 정보를 보내준다.")]),t._v(" "),a("li",[t._v("응답 헤더로 여러 메타데이터도 같이 넘겨준다.")]),t._v(" "),a("li",[t._v("이후 응답 바디를 통해 HTML 코드가 날아온다.")])]),t._v(" "),a("h3",{attrs:{id:"q2-http-메서드란-무엇인가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q2-http-메서드란-무엇인가"}},[t._v("#")]),t._v(" Q2. HTTP 메서드란 무엇인가?")]),t._v(" "),a("ul",[a("li",[t._v("HTTP 메서드는 웹 서버에 요청한 자원을 이용해 무엇을 해야 하는지를 알려주는 명령어 이기 때문에 가끔 동사라고 부른다.")]),t._v(" "),a("li",[t._v("서버가 구현하는 일반 메서드들은 GET, POST, PUT, DELETE, HEAD 등이 있다.")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("메소드명")]),t._v(" "),a("th",[t._v("기능")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("GET")]),t._v(" "),a("td",[t._v("요청된 자원을 제공한다. 변경이 없어야 한다.")])]),t._v(" "),a("tr",[a("td",[t._v("PUT")]),t._v(" "),a("td",[t._v("요청된 콘텐츠를 위한 자원을 업데이트 한다.")])]),t._v(" "),a("tr",[a("td",[t._v("POST")]),t._v(" "),a("td",[t._v("요청된 콘텐츠를 위한 자원의 내용을 새로 설정한다.")])]),t._v(" "),a("tr",[a("td",[t._v("DELETE")]),t._v(" "),a("td",[t._v("요청된 자원을 삭제한다.")])]),t._v(" "),a("tr",[a("td",[t._v("HEAD")]),t._v(" "),a("td",[t._v("GET 요청과 비슷하지만 응답 코드와 헤더만 반환한다.")])])])]),t._v(" "),a("h3",{attrs:{id:"q3-http-응답-코드는-무엇을-알려주는가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q3-http-응답-코드는-무엇을-알려주는가"}},[t._v("#")]),t._v(" Q3. HTTP 응답 코드는 무엇을 알려주는가?")]),t._v(" "),a("ul",[a("li",[t._v("HTTP 응답의 첫 번째 행은 응답 코드를 포함하며 코드가 의미하는 내용이 무엇인지 짧게 설명해준다.")]),t._v(" "),a("li",[t._v("코드는 몇 가지 영역으로 구분된다.")]),t._v(" "),a("li",[t._v("첫 번째 숫자는 응답의 분류를 나타낸다.")]),t._v(" "),a("li",[t._v("2xx는 성공을 나타내는 응답 코드")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("응답코드")]),t._v(" "),a("th",[t._v("내용")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("201 Created")]),t._v(" "),a("td",[t._v("주로 PUT 요청을 반환하며 요청이 성공했고 자원이 생성되었다는걸 알려준다.")])]),t._v(" "),a("tr",[a("td",[t._v("204 No Content")]),t._v(" "),a("td",[t._v("요청은 성공했지만 서버는 클라이언트에게 추가 정보를 제공하지 않는다. 이것은 주로 PUT, POST, DELETE 요청에 성공했을 때 사용된다.")])])])]),t._v(" "),a("ul",[a("li",[t._v("4xx는 에러, 즉 클라이언트가 유효한 요청을 만들지 못했다는 것을 알려주는 응답코드")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("응답코드")]),t._v(" "),a("th",[t._v("내용")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("400 Bad Request")]),t._v(" "),a("td",[t._v("클라이언트가 잘못된 요청을 보냈다. 주로 텔넷 요청에서 발생할 수 있는데, 이 경우 요청의 첫 번째 행을 의미 없는 문자열로 보내주면 된다.")])]),t._v(" "),a("tr",[a("td",[t._v("403 Forbidden")]),t._v(" "),a("td",[t._v("주로 클라이언트가 로그인하긴 했지만 주어진 자원을 요청할 권한이 없을 때 발생")])]),t._v(" "),a("tr",[a("td",[t._v("404 Not Found")]),t._v(" "),a("td",[t._v("요청한 자원이 존재하지 않는다.")])]),t._v(" "),a("tr",[a("td",[t._v("405 Method Not Allowed")]),t._v(" "),a("td",[t._v("자원을 요청할 때 잘못된 HTTP 메소드를 이용")])])])]),t._v(" "),a("ul",[a("li",[t._v("5xx는 서버 측에 이슈가 있다는 걸 알려준다.")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("응답코드")]),t._v(" "),a("th",[t._v("내용")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("500 Internal Server Error")]),t._v(" "),a("td",[t._v("일반적인 메세지. 보통 전체 서버를 이용할 수 없는 상황이 아니라 일부 특정 자원 하나 또는 몇 개의 자원만 이용할 수 없을 때 반환")])]),t._v(" "),a("tr",[a("td",[t._v("503 Service Unavailable")]),t._v(" "),a("td",[t._v("현재 서버를 이용할 수 없다. 이 코드는 일시적인 중단임을 알려줌")])])])]),t._v(" "),a("h2",{attrs:{id:"http-클라이언트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-클라이언트"}},[t._v("#")]),t._v(" HTTP 클라이언트")]),t._v(" "),a("h3",{attrs:{id:"q4-어떻게-자바-클래스에서-http-요청을-보낼-수-있는가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q4-어떻게-자바-클래스에서-http-요청을-보낼-수-있는가"}},[t._v("#")]),t._v(" Q4. 어떻게 자바 클래스에서 HTTP 요청을 보낼 수 있는가?")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeBareHttoRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URL")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en.wikipedia.org"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpURLConnection")]),t._v(" connection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpURLConnection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("openConnection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRequestMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputStream")]),t._v(" responseInputStream "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInputStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" responseCode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResponseCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOUtils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("responseInputStream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    responseInputStream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertEquals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" responseCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Response received: [%s]%n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("텔넷 요청과 동일하게 자바로 짠 코드이다.")]),t._v(" "),a("li",[t._v("아파치의 HttpClient를 사용할 수도 있다.")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeApacheHttpClientRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CloseableHttpClient")]),t._v(" client "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpClients")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpGet")]),t._v(" get "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpGet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://en.wikipedia.org/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpResponse")]),t._v(" response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" responseCode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStatusLine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStatusCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpEntity")]),t._v(" entity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputStream")]),t._v(" responseBody "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertEquals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" responseCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("이렇게 짜도 코드 자체가 길고, 응답 본문을 읽는 데도 여전히 inputstream을 사용해야 하고, 응답 코드는 StatusLine 객체 안에 숨겨져 았다.")])]),t._v(" "),a("h3",{attrs:{id:"q5-자바의-내장-클래스를-이용하지-않고-전용-http-클라이언트-라이브러리를-이용할-때의-장점은-무엇인가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q5-자바의-내장-클래스를-이용하지-않고-전용-http-클라이언트-라이브러리를-이용할-때의-장점은-무엇인가"}},[t._v("#")]),t._v(" Q5. 자바의 내장 클래스를 이용하지 않고 전용 HTTP 클라이언트 라이브러리를 이용할 때의 장점은 무엇인가?")]),t._v(" "),a("ul",[a("li",[t._v("HTTP 요청을 생성하기 위해 전용 클라이언트를 이용할 때의 장점은 부가 기능을 사용 할 수 있다는 점이다.")]),t._v(" "),a("li",[t._v("예를 들어 프록시를 통해 HTTP 요청을 실행할때, 기본 HttpURLConnection클래스를 이용하면, 시스템 속성 http.proxyHost 와 http.proxyPort를 설정해야 한다.")]),t._v(" "),a("li",[t._v("HttpClient 라이브러리를 사용하면, AuthenticationStrategy 인터페이스를 구현해서 간단히 속성을 붙일 수 있다.")]),t._v(" "),a("li",[t._v("쿠키같은 거도 HttpURLConnection은 관리를 못하지만, HttpClient는 가능하다.")])]),t._v(" "),a("h2",{attrs:{id:"rest-이용해-http-서비스-만들기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rest-이용해-http-서비스-만들기"}},[t._v("#")]),t._v(" REST 이용해 HTTP 서비스 만들기")]),t._v(" "),a("ul",[a("li",[t._v("REST라고 부르는 이 규격은 시스템 사이에 원격 API를 제공하는 HTTP를 이용하는 스타일")])]),t._v(" "),a("h3",{attrs:{id:"q6-rest-uri-는-어떻게-설계되는가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q6-rest-uri-는-어떻게-설계되는가"}},[t._v("#")]),t._v(" Q6. REST URI 는 어떻게 설계되는가?")]),t._v(" "),a("ul",[a("li",[t._v("HTTP verbs는 해당 자원을 얻기 위한 동작이 무엇인지 알려준다.")]),t._v(" "),a("li",[t._v("/user/1234 에 GET을 이용하면 해당 사용자에 관한 내용을 반환한다.")]),t._v(" "),a("li",[t._v("/user/2500 에 POST를 이용하면 ID가 2500인 새로운 사용자를 생성한다.")]),t._v(" "),a("li",[t._v("PUT은 기존 사용자정보를 수정하고, DELETE는 삭제한다.")])]),t._v(" "),a("h3",{attrs:{id:"q7-자바에서-rest-서비스를-어떻게-구현할-수-있는가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q7-자바에서-rest-서비스를-어떻게-구현할-수-있는가"}},[t._v("#")]),t._v(" Q7. 자바에서 REST 서비스를 어떻게 구현할 수 있는가?")]),t._v(" "),a("ul",[a("li",[t._v("스프링에선 REST를 쉽게 사용할 수 있다.")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/user/{id}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PathVariable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id 경로 변수는 userid 변수로 추출")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("이런식으로 만든다.")]),t._v(" "),a("li",[t._v("REST 서비스의 중요한 기능 하나는 멱등성의 개념이다.")]),t._v(" "),a("li",[t._v("REST 서비스의 PUT, DELETE, GET 요청은 여러번 실행해도 결과가 달라지지 않아야 하며, REST 호출은 여러 개의 요청이 있더라도 한 번만 요청한 것과 같은 효과를 내어야 한다.")]),t._v(" "),a("li",[t._v("멱등성의 개념을 포함하는 API의 장점은 클라이언트가 요청이 성공적이었는지 확신할 수 없을 때 요청을 다시 보내도 된다는 점이다.")]),t._v(" "),a("li",[t._v("요청이 중간 정도까지 보내졌거나 요청이 만들어진 후에라도 응답을 받기 전에 연결이 끊어질 수 있다.")]),t._v(" "),a("li",[t._v("이런 경우엔 이런 멱등성의 장점이 매우 유용해 진다.")])])])}),[],!1,null,null,null);s.default=e.exports}}]);
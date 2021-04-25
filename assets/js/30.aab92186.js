(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{554:function(a,t,s){a.exports=s.p+"assets/img/docker1.8cbba055.png"},555:function(a,t,s){a.exports=s.p+"assets/img/docker2.42d398e7.png"},556:function(a,t,s){a.exports=s.p+"assets/img/docker3.3c3fea59.png"},557:function(a,t,s){a.exports=s.p+"assets/img/docker4.f227e469.png"},558:function(a,t,s){a.exports=s.p+"assets/img/docker5.cab9d620.png"},643:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[a._v("#")]),a._v(" Docker")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#_1-docker-란"}},[a._v("1.Docker 란?")])]),e("li",[e("a",{attrs:{href:"#_2-docker-도입하는-이유"}},[a._v("2. Docker 도입하는 이유")])]),e("li",[e("a",{attrs:{href:"#_3-docker의-특징"}},[a._v("3. Docker의 특징")])]),e("li",[e("a",{attrs:{href:"#_4-dokcer의-기본-기능"}},[a._v("4. Dokcer의 기본 기능")])]),e("li",[e("a",{attrs:{href:"#_5-docker-도입-as-is-to-be"}},[a._v("5. Docker 도입 As-is & To-Be")])]),e("li",[e("a",{attrs:{href:"#_6-docker-commands"}},[a._v("6. Docker Commands")])]),e("li",[e("a",{attrs:{href:"#_7-dockerfile"}},[a._v("7. Dockerfile")])]),e("li",[e("a",{attrs:{href:"#_8-docker-compose"}},[a._v("8. Docker Compose")])]),e("li",[e("a",{attrs:{href:"#_9-after-docker"}},[a._v("9. After docker")])])])]),e("p"),a._v(" "),e("h3",{attrs:{id:"_1-docker-란"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-docker-란"}},[a._v("#")]),a._v(" 1.Docker 란?")]),a._v(" "),e("p",[e("img",{attrs:{src:s(554),alt:"Alt text"}})]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("가상으로 같은 베이스 이미지로 띄우기 때문에 동일한 실행 보장\n")])])]),e("p",[e("img",{attrs:{src:s(555),alt:"Alt text"}})]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("컨테이너로 띄우면 여러 기능을 나눌 수도 있고 기본적으로 좀 가벼운 느낌이 크다.\n")])])]),e("h3",{attrs:{id:"_2-docker-도입하는-이유"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-docker-도입하는-이유"}},[a._v("#")]),a._v(" 2. Docker 도입하는 이유")]),a._v(" "),e("ul",[e("li",[a._v("서버가 이것저것 띄워져있으면 관리하기가 매우 어렵다. (개인적인 생각 일 수도 있음. 난 어려움..)")]),a._v(" "),e("li",[a._v("배포 횟수가 많아질 경우 개발 & 테스트가 어렵다.")]),a._v(" "),e("li",[a._v("도커를 이용할 경우 통합 테스트 환경 구축 및 배포 환경 자체를 매우 간결하게 할 수 있다.")]),a._v(" "),e("li",[a._v("실제로 써보면 테스트 / 배포가 엄청 편하고 빠름 (실제로 배포는 쿠버네티스에서 하긴하지만)")])]),a._v(" "),e("h3",{attrs:{id:"_3-docker의-특징"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-docker의-특징"}},[a._v("#")]),a._v(" 3. Docker의 특징")]),a._v(" "),e("ul",[e("li",[a._v("컨테이너 가상화 환경에서 에플리케이션을 관리하고 실행하기 위한 오픈소스 플랫폼")]),a._v(" "),e("li",[a._v("이식성이 좋다. 기존의 Waterfall 개발 환경에서는 테스트 / 상용 운영 환경에 따라 제대로 동작하지 않는 경우가 발생")]),a._v(" "),e("li",[a._v("도커의 경우, 애플리케이션 실행에 필수적인 모든 파일 및 디렉토리를 통째로 컨테이너에 담아 Docker Image 형태로 관리한다.")]),a._v(" "),e("li",[a._v("도커 이미지는 도커를 설치할 수 있는 환경이라면 어디든 동작이 가능하기 때문에, 운영환경에 따라 동작을 하지 않는 리스크가 적다.")]),a._v(" "),e("li",[a._v("추가로 여러개의 컨테이너를 띄워 통합 테스트 환경 구축이 아주 쉽다.")]),a._v(" "),e("li",[a._v("이러한 이미지는 Docker hub || private docker registry 를 구축해서 관리할 수 있다. (nexus3 같은거)")])]),a._v(" "),e("h3",{attrs:{id:"_4-dokcer의-기본-기능"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-dokcer의-기본-기능"}},[a._v("#")]),a._v(" 4. Dokcer의 기본 기능")]),a._v(" "),e("ul",[e("li",[a._v("Docker 이미지 : 컨테이너 실행에 필요한 파일과 설정값 등을 포함하고 있는 것 (정적 파일임. 윈도우 CD라고 생각하면 편함)")]),a._v(" "),e("li",[a._v("Docker 이미지 생성 : Docker는 애플리케이션 실행에 필요한 프로그램, 라이브러리, 미들웨어와 OS, 네트워크 설정 등을 모두 모아서 이미지 생성")]),a._v(" "),e("li",[a._v("Docker 컨테이너 동작 : Docker는 리눅스 상에서 컨테이너 단위로 서버를 구동시킨다. 하나의 이미지로 여러개의 컨테이너 실행 쌉가능")])]),a._v(" "),e("h3",{attrs:{id:"_5-docker-도입-as-is-to-be"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-docker-도입-as-is-to-be"}},[a._v("#")]),a._v(" 5. Docker 도입 As-is & To-Be")]),a._v(" "),e("h4",{attrs:{id:"as-is"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#as-is"}},[a._v("#")]),a._v(" As-Is")]),a._v(" "),e("p",[e("img",{attrs:{src:s(556),alt:"Alt text"}})]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("위의 이미지에서 보면 예를들어 개발환경마다 리눅스 os 가 다르거나, 미들웨어가 다르거나 하면, 같은 소스로 배포를 해도 \n의도하지 않았던 에러가 발생할 수 있다. (찾기 매우매우매우매우매우 어려움)\n")])])]),e("h4",{attrs:{id:"to-be"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#to-be"}},[a._v("#")]),a._v(" To-Be")]),a._v(" "),e("p",[e("img",{attrs:{src:s(557),alt:"Alt text"}})]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("갓 도커로 띄우면, 도커 이미지 내에 있는 설정들로만 컨테이너가 생성되기 때문에, 개발환경이 다르건 말건 자기 혼자 설정하고\n컨테이너가 뜨고 이래서 문제가 될 확률이 현저하게 줄어든다.\n")])])]),e("h3",{attrs:{id:"_6-docker-commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-docker-commands"}},[a._v("#")]),a._v(" 6. Docker Commands")]),a._v(" "),e("ul",[e("li",[a._v("커맨드가 많은데 굳이 정리하기보단 공홈 참조가 나을것 같다.")])]),a._v(" "),e("h3",{attrs:{id:"_7-dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-dockerfile"}},[a._v("#")]),a._v(" 7. Dockerfile")]),a._v(" "),e("ul",[e("li",[a._v("도커는 이미지를 만들기 위해 Dockerfile 이라는 파일에 자체 DSL 언어를 이용하여 이미지 생성 과정을 거친다.")])]),a._v(" "),e("h4",{attrs:{id:"자바-dockerfile-예시"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#자바-dockerfile-예시"}},[a._v("#")]),a._v(" 자바 Dockerfile 예시")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 1. 베이스 이미지 설정")]),a._v("\nFROM adoptopenjdk/openjdk8\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2. 작성자 같은 정보 설정")]),a._v("\nLABEL "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("maintainer")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"gwamgtae park <abcd@def.com>"')]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 3. ARG 설정")]),a._v("\nARG WAR_FILE\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 4. 프로젝트내 WAR 파일을 도커 이미지 내에 app.war라는 이름으로 통째로 복사 ")]),a._v("\nCOPY target/"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${WAR_FILE}")]),a._v(" app.war\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 5. 기타 환경변수 설정")]),a._v("\nENV "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("LC_ALL")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("C.UTF-8\nENV "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_OPTS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-server"')]),a._v("\nENV "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GC_OPTS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-XX:+UseG1GC -verbose:gc -XX:+PrintGCTimeStamps -Xloggc:gc.log"')]),a._v("\nENV "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ADDITIONAL_PROPERTIES")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# JAVA_TOOL_OPTIONS: -XX:+UnlockExperimentalVMOptions -XX:+UseCGroupMemoryLimitForHeap will be automatically picked up by adoptopenjdk")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 6. 쉘 실행 Entrypoint 작성")]),a._v("\nENTRYPOINT "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"sh"')]),a._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-c"')]),a._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"java '),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_OPTS")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$GC_OPTS")]),a._v(" -Djava.security.egd=file:/dev/./urandom -jar /app.war "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ADDITIONAL_PROPERTIES")]),a._v('"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("h3",{attrs:{id:"_8-docker-compose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-docker-compose"}},[a._v("#")]),a._v(" 8. Docker Compose")]),a._v(" "),e("ul",[e("li",[a._v("docker-compose.yaml")]),a._v(" "),e("li",[a._v("여러개의 컨테이너 설정 내용이 저장된다.")]),a._v(" "),e("li",[a._v("컨테이너간 링크 연결 / 컨테이너간의 통신 / 컨테이너 데이터관리 / 컨테이너 환경변수 설정이 가능하다.")]),a._v(" "),e("li",[a._v("docker compose 를 사용하면, 작성된 대로 여러개의 컨테이너가 구동 / 중지 / 재기동이 가능하다.")]),a._v(" "),e("li",[a._v("로컬 환경에서 상용 환경과 거의 동일하게 통합 테스트가 가능하다.")]),a._v(" "),e("li",[a._v("mysql 같은거 올릴때 매우 좋음")])]),a._v(" "),e("p",[e("img",{attrs:{src:s(558),alt:"Alt text"}})]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("위의 그림은 도커 컴포즈로 띄운 프로젝트 예시. 저런식으로 nginx / front / back 3개의 컨테이너를 띄워서 상용과 유사한 환경을 만들 수 있다.\n카프카도 떠있음. 저런식으로 db를 띄워 데이터를 동일하게 맞춰 테스트가 가능하다.\n")])])]),e("h3",{attrs:{id:"_9-after-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-after-docker"}},[a._v("#")]),a._v(" 9. After docker")]),a._v(" "),e("ul",[e("li",[a._v("실제로 도커를 상용환경에서 이용하긴 어렵다.")]),a._v(" "),e("li",[a._v("서버가 수십, 수백대가 되면 각각의 컨테이너를 명령어를 때려서 띄우고 내리고가 어렵다.")]),a._v(" "),e("li",[a._v("그래서 나온게 도커 오케스트레이션 툴인데, 요즘엔 쿠버네티스가 짱짱맨.")]),a._v(" "),e("li",[a._v("쿠버네티스도 도커 이미지를 사용하니까 결국 도커는 잘알아놔야 되는건 마찬가지이다.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
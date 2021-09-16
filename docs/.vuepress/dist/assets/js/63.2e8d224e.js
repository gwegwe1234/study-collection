(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{226:function(s,a,t){s.exports=t.p+"assets/img/awk1.68932d9f.png"},675:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"basic-terminal-commands"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-terminal-commands"}},[s._v("#")]),s._v(" Basic Terminal Commands")]),s._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#basic-terminal-commands"}},[s._v("Basic Terminal Commands")]),n("ul",[n("li",[n("a",{attrs:{href:"#grep"}},[s._v("grep")])]),n("li",[n("a",{attrs:{href:"#awk"}},[s._v("awk")])]),n("li",[n("a",{attrs:{href:"#sed"}},[s._v("sed")])]),n("li",[n("a",{attrs:{href:"#lsof"}},[s._v("lsof")])]),n("li",[n("a",{attrs:{href:"#curl"}},[s._v("curl")])]),n("li",[n("a",{attrs:{href:"#wget"}},[s._v("wget")])]),n("li",[n("a",{attrs:{href:"#tail"}},[s._v("tail")])]),n("li",[n("a",{attrs:{href:"#head"}},[s._v("head")])]),n("li",[n("a",{attrs:{href:"#less"}},[s._v("less")])]),n("li",[n("a",{attrs:{href:"#find"}},[s._v("find")])]),n("li",[n("a",{attrs:{href:"#ssh"}},[s._v("ssh")])]),n("li",[n("a",{attrs:{href:"#kill"}},[s._v("kill")])]),n("li",[n("a",{attrs:{href:"#참조"}},[s._v("참조")])])])])])]),n("p"),s._v(" "),n("h3",{attrs:{id:"grep"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grep"}},[s._v("#")]),s._v(" grep")]),s._v(" "),n("ul",[n("li",[s._v("입력으로 전달된 파일의 내용에서 특정 문자열을 찾는 명령어")]),s._v(" "),n("li",[s._v("단순 문자열 매칭이 아닌 정규표현식에 의한 패턴 매칭 방식 사용")]),s._v(" "),n("li",[s._v("grep 명령어 옵션")])]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" PATTERN "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("FILE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        -E        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" PATTERN을 확장 정규 표현식"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Extended RegEx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("으로 해석.\n        -F        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" PATTERN을 정규 표현식"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("RegEx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("이 아닌 일반 문자열로 해석.\n        -G        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" PATTERN을 기본 정규 표현식"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Basic RegEx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("으로 해석.\n        -P        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" PATTERN을 Perl 정규 표현식"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Perl RegEx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("으로 해석.\n        -e        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 매칭을 위한 PATTERN 전달.\n        -f        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 파일에 기록된 내용을 PATTERN으로 사용.\n        -i        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 대/소문자 무시.\n        -v        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 매칭되는 PATTERN이 존재하지 않는 라인 선택.\n        -w        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 단어"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("word"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 단위로 매칭.\n        -x        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 라인"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("line"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 단위로 매칭.\n        -z        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 라인을 newline"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("이 아닌 NULL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("로 구분.\n        -m        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 최대 검색 결과 갯수 제한.\n        -b        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 패턴이 매치된 각 라인"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-o 사용 시 문자열"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("의 바이트 옵셋 출력.\n        -n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 검색 결과 출력 라인 앞에 라인 번호 출력.\n        -H        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 검색 결과 출력 라인 앞에 파일 이름 표시.\n        -h        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 검색 결과 출력 시, 파일 이름 무시.\n        -o        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 매치되는 문자열만 표시.\n        -q        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 검색 결과 출력하지 않음.\n        -a        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 바이너리 파일을 텍스트 파일처럼 처리.\n        -I        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 바이너리 파일은 검사하지 않음.\n        -d        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 디렉토리 처리 방식 지정. "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("read, recurse, skip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        -D        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 장치 파일 처리 방식 지정. "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("read, skip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        -r        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 하위 디렉토리 탐색.\n        -R        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 심볼릭 링크를 따라가며 모든 하위 디렉토리 탐색.\n        -L        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" PATTERN이 존재하지 않는 파일 이름만 표시.\n        -l        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 패턴이 존재하는 파일 이름만 표시.\n        -c        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 파일 당 패턴이 일치하는 라인의 갯수 출력.\n")])])]),n("ul",[n("li",[s._v("grep 사용 예제")])]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("PATTERN"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("FILE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"User"')]),s._v(" robots.txt\n\n결과 "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" User-agent: *\n")])])]),n("h3",{attrs:{id:"awk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#awk"}},[s._v("#")]),s._v(" awk")]),s._v(" "),n("ul",[n("li",[s._v("텍스트가 저장되어 있는 파일을 원하는 대로 필터링하거나 추가해주거나 기타 가공을 통해서 나온 결과를 행과 열로 출력해주는 명령어")]),s._v(" "),n("li",[s._v("언어라고 보면 될정도로 기능이 많다")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(226),alt:"alt"}})]),s._v(" "),n("ul",[n("li",[s._v("AWK에서 레코드가 $0, 그리고 $1,...$N은 필드를 나타내는 열을 나타낸다")])]),s._v(" "),n("h4",{attrs:{id:"test-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#test-file"}},[s._v("#")]),s._v(" test file")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("name    phone           birth           sex     score\nreakwon 010-1234-1234   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1981")]),s._v("-01-01      M       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\nsim     010-4321-4321   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1999")]),s._v("-09-09      F       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("88")]),s._v("\nnara    010-1010-2020   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1993")]),s._v("-12-12      M       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\nyut     010-2323-2323   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1988")]),s._v("-10-10      F       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("59")]),s._v("\nkim     010-1234-4321   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1977")]),s._v("-07-17      M       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("69")]),s._v("\nnam     010-4321-7890   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1996")]),s._v("-06-20      M       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("75")]),s._v("\n")])])]),n("h4",{attrs:{id:"awk-사용법"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#awk-사용법"}},[s._v("#")]),s._v(" awk 사용법")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" pattern "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("action"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])])]),n("h4",{attrs:{id:"열만-출력하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#열만-출력하기"}},[s._v("#")]),s._v(" 열만 출력하기")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{ print "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(" }'")]),s._v(" ./test.txt\n\nname\nreakwon\nsim\nnara\nyut\nkim\nnam\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{ print "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v(" }'")]),s._v(" ./test.txt\n\nname phone birth\nreakwon 010-1234-1234 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1981")]),s._v("-01-01\nsim 010-4321-4321 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1999")]),s._v("-09-09\nnara 010-1010-2020 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1993")]),s._v("-12-12\nyut 010-2323-2323 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1988")]),s._v("-10-10\nkim 010-1234-4321 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1977")]),s._v("-07-17\nnam 010-4321-7890 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1996")]),s._v("-06-20\n")])])]),n("h4",{attrs:{id:"특정-패턴이-포함된-레코드-출력"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#특정-패턴이-포함된-레코드-출력"}},[s._v("#")]),s._v(" 특정 패턴이 포함된 레코드 출력")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/rea/'")]),s._v(" ./test.txt\n\nreakwon 010-1234-1234   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1981")]),s._v("-01-01      M       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n")])])]),n("h4",{attrs:{id:"출력에-추가-내용-첨가"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#출력에-추가-내용-첨가"}},[s._v("#")]),s._v(" 출력에 추가 내용 첨가")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{ print ("name:" '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(', "," "phone : " '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v(") }'")]),s._v(" ./test.txt\n\nname:name ,phone "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" phone\nname:reakwon ,phone "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 010-1234-1234\nname:sim ,phone "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 010-4321-4321\nname:nara ,phone "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 010-1010-2020\nname:yut ,phone "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 010-2323-2323\nname:kim ,phone "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 010-1234-4321\nname:nam ,phone "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 010-4321-7890\n")])])]),n("h4",{attrs:{id:"if-문"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#if-문"}},[s._v("#")]),s._v(" if 문")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{ if ( "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$4")]),s._v(' == "M" && '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$5")]),s._v(" >= 80) print ("),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v(") }'")]),s._v(" ./test.txt\n\nreakwon 010-1234-1234   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1981")]),s._v("-01-01      M       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n")])])]),n("h4",{attrs:{id:"내장함수"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#내장함수"}},[s._v("#")]),s._v(" 내장함수")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{ print ("name leng : " length('),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('), "substr(0,3) : " substr('),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(",0,3)) }'")]),s._v(" ./test.txt\n\nname leng "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" substr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0,3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" nam\nname leng "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" substr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0,3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" rea\nname leng "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" substr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0,3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" sim\nname leng "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" substr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0,3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" nar\nname leng "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" substr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0,3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" yut\nname leng "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" substr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0,3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" kim\nname leng "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" substr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0,3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" nam\n")])])]),n("h4",{attrs:{id:"반복문"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#반복문"}},[s._v("#")]),s._v(" 반복문")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{\nfor(i=0;i<2;i++)\n print( "for loop :" i "'),n("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v('" '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v(")\n}'")]),s._v(" ./test.txt\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" loop :0\tname phone birth\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" loop :1\tname phone birth\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" loop :0\treakwon 010-1234-1234 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1981")]),s._v("-01-01\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" loop :1\treakwon 010-1234-1234 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1981")]),s._v("-01-01\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" loop :0\tsim 010-4321-4321 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1999")]),s._v("-09-09\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" loop :1\tsim 010-4321-4321 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1999")]),s._v("-09-09\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" loop :0\tnara 010-1010-2020 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1993")]),s._v("-12-12\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" loop :1\tnara 010-1010-2020 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1993")]),s._v("-12-12\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" loop :0\tyut 010-2323-2323 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1988")]),s._v("-10-10\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" loop :1\tyut 010-2323-2323 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1988")]),s._v("-10-10\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" loop :0\tkim 010-1234-4321 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1977")]),s._v("-07-17\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" loop :1\tkim 010-1234-4321 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1977")]),s._v("-07-17\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" loop :0\tnam 010-4321-7890 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1996")]),s._v("-06-20\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" loop :1\tnam 010-4321-7890 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1996")]),s._v("-06-20\n")])])]),n("h3",{attrs:{id:"sed"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sed"}},[s._v("#")]),s._v(" sed")]),s._v(" "),n("ul",[n("li",[s._v("Stream Editor의 약자")]),s._v(" "),n("li",[s._v("원본 텍스트 파일을 편집하는 명령어")]),s._v(" "),n("li",[s._v("vi와 다른점은 명령어 형태로 편집이 돼서 vi처럼 실시간 편집이 아님")]),s._v(" "),n("li",[s._v("원본을 건드리지 않고 편집 (-i 옵션 넣으면 원본 변경)")])]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -n -e "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'command'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("input file"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),n("h3",{attrs:{id:"lsof"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lsof"}},[s._v("#")]),s._v(" lsof")]),s._v(" "),n("ul",[n("li",[s._v("list of files의 약자로 시스템의 열린 파일 목록을 확인하는 명령어")])]),s._v(" "),n("h3",{attrs:{id:"curl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#curl"}},[s._v("#")]),s._v(" curl")]),s._v(" "),n("ul",[n("li",[s._v("서버에 데이터 전송 또는 조회를 위한 명령어")]),s._v(" "),n("li",[s._v("흔히 하는 그 curl")])]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("URL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),n("h3",{attrs:{id:"wget"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wget"}},[s._v("#")]),s._v(" wget")]),s._v(" "),n("ul",[n("li",[s._v("web get")]),s._v(" "),n("li",[s._v("네트워크 다운로더")])]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("옵션"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("URL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),n("h3",{attrs:{id:"tail"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tail"}},[s._v("#")]),s._v(" tail")]),s._v(" "),n("ul",[n("li",[s._v("로그보는 명령어")])]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("라인 수"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("파일 명"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),n("h3",{attrs:{id:"head"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[s._v("#")]),s._v(" head")]),s._v(" "),n("ul",[n("li",[s._v("파일 앞부분 보여주는 명령어")])]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("옵션"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". 파일명\n")])])]),n("h3",{attrs:{id:"less"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#less"}},[s._v("#")]),s._v(" less")]),s._v(" "),n("ul",[n("li",[s._v("내용을 스크롤할 수 있도록 텍스트를 출력하는 명령어")])]),s._v(" "),n("h3",{attrs:{id:"find"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#find"}},[s._v("#")]),s._v(" find")]),s._v(" "),n("ul",[n("li",[s._v("파일검색")])]),s._v(" "),n("h3",{attrs:{id:"ssh"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[s._v("#")]),s._v(" ssh")]),s._v(" "),n("ul",[n("li",[s._v("sh 접속")])]),s._v(" "),n("h3",{attrs:{id:"kill"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kill"}},[s._v("#")]),s._v(" kill")]),s._v(" "),n("ul",[n("li",[s._v("프로세스 kill")])]),s._v(" "),n("h3",{attrs:{id:"참조"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#참조"}},[s._v("#")]),s._v(" 참조")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://recipes4dev.tistory.com/157",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://recipes4dev.tistory.com/157"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://reakwon.tistory.com/163",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://reakwon.tistory.com/163"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://reakwon.tistory.com/164",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://reakwon.tistory.com/164"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://bigsun84.tistory.com/295",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://bigsun84.tistory.com/295"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);
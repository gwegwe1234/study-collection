(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{625:function(a,t,s){a.exports=s.p+"assets/img/kafka_streams1.66d9bf21.jpg"},626:function(a,t,s){a.exports=s.p+"assets/img/kafka_streams2.ef4fd9b5.png"},627:function(a,t,s){a.exports=s.p+"assets/img/kafka_streams3.47a4a471.png"},628:function(a,t,s){a.exports=s.p+"assets/img/kafka_streams.a498d6c5.png"},629:function(a,t,s){a.exports=s.p+"assets/img/kafka_streams4.576f97f5.png"},630:function(a,t,s){a.exports=s.p+"assets/img/kafka_streams5.3da3dba0.png"},631:function(a,t,s){a.exports=s.p+"assets/img/kafka_streams6.dc12bf8a.png"},632:function(a,t,s){a.exports=s.p+"assets/img/kafka_streams7.f512af9e.png"},633:function(a,t,s){a.exports=s.p+"assets/img/kafka_streams8.5ca0471b.png"},634:function(a,t,s){a.exports=s.p+"assets/img/kafka_streams9.5012b956.png"},635:function(a,t,s){a.exports=s.p+"assets/img/kafka_streams10.b75a8655.png"},636:function(a,t,s){a.exports=s.p+"assets/img/kafka_streams11.7015dd3a.png"},637:function(a,t,s){a.exports=s.p+"assets/img/kafka_streams15.6a666200.png"},638:function(a,t,s){a.exports=s.p+"assets/img/kafka_streams12.ee95d227.png"},639:function(a,t,s){a.exports=s.p+"assets/img/kafka_streams13.8186428c.png"},640:function(a,t,s){a.exports=s.p+"assets/img/kafka_streams14.782ee980.png"},654:function(a,t,s){"use strict";s.r(t);var r=s(0),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"kafak-streams"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kafak-streams"}},[a._v("#")]),a._v(" Kafak Streams")]),a._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#_1-카프카-스트림-이란"}},[a._v("1.카프카 스트림 이란?")]),r("ul",[r("li",[r("a",{attrs:{href:"#_1-1-카프카-스트림의-주요-특징"}},[a._v("1-1.카프카 스트림의 주요 특징")])]),r("li",[r("a",{attrs:{href:"#_1-2-processor-topology"}},[a._v("1-2.Processor Topology")])]),r("li",[r("a",{attrs:{href:"#_1-3-kafka-streams-api"}},[a._v("1-3. Kafka Streams API")])]),r("li",[r("a",{attrs:{href:"#_1-4-사용-방법"}},[a._v("1-4. 사용 방법")])])])]),r("li",[r("a",{attrs:{href:"#_2-카프카-스트림-샘플-소스"}},[a._v("2. 카프카 스트림 샘플 소스")]),r("ul",[r("li",[r("a",{attrs:{href:"#_2-1-로컬-카프카-설정"}},[a._v("2-1.  로컬 카프카 설정")])]),r("li",[r("a",{attrs:{href:"#_2-2-예제-소스-작성"}},[a._v("2-2. 예제 소스 작성")])]),r("li",[r("a",{attrs:{href:"#_2-2-작동-화면"}},[a._v("2-2. 작동 화면")])])])])])]),r("p"),a._v(" "),r("h2",{attrs:{id:"_1-카프카-스트림-이란"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-카프카-스트림-이란"}},[a._v("#")]),a._v(" 1.카프카 스트림 이란?")]),a._v(" "),r("ul",[r("li",[a._v("카프카 스트림은 카프카에 저장된 데이터를 처리하고 분석하기 위해 개발된 클라이언트 라이브러리")]),a._v(" "),r("li",[a._v("이벤트 시간과 처리 시간을 구분하고 간단하면서도 효율적인 응용 프로그램 상태 관리 및 실시간 쿼리와 같은 중요한 스트림 처리 개념을 기반으로 되어있다.")]),a._v(" "),r("li",[a._v("카프카에서 데이터를 스트림으로 받아오고, 그 데이터를 가공해서 사용한다.")]),a._v(" "),r("li",[a._v("스트림은 절대로 안멈추고, 계속해서 데이터가 흘러 들어온다고 생각하면 된다.")]),a._v(" "),r("li",[a._v("이런 데이터 스트림을 사용하기 위해 사용 하는 API는 Kafka Streams API 이다.")])]),a._v(" "),r("h3",{attrs:{id:"_1-1-카프카-스트림의-주요-특징"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-카프카-스트림의-주요-특징"}},[a._v("#")]),a._v(" 1-1.카프카 스트림의 주요 특징")]),a._v(" "),r("ul",[r("li",[a._v("간단하고 가벼운 클라이언트 라이브러리로 설계되었으며, 모든 Java 응용 프로그램에서 사용이 가능하고, 기존 패키징, 배포 및 운영 도구와 통합이 가능")]),a._v(" "),r("li",[a._v("Apache Kafka 이외의 시스템에 대한 외부 종속이 없다.")]),a._v(" "),r("li",[a._v("Kafka의 파티셔닝 모델을 사용하여 처리를 수평으로 확장하면서 강력한 순서 보장")]),a._v(" "),r("li",[a._v("처리 중간에 Streams 클라이언트 또는 Kafka 브로커에서 장애가 발생하더라도 각 데이터가 한번만 처리되도록 보장")]),a._v(" "),r("li",[a._v("한 번에 한 레코드 씩 처리하고 데이터 처리에 밀리초 단위로 실행")]),a._v(" "),r("li",[a._v("데이터가 순서에 맞지 않게 도착을 해도 이벤트 시간 기반 윈도우 작업을 지원")])]),a._v(" "),r("h3",{attrs:{id:"_1-2-processor-topology"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-processor-topology"}},[a._v("#")]),a._v(" 1-2.Processor Topology")]),a._v(" "),r("p",[a._v("카프카 스트림은 Topology 라는 개념으로 실행 흐름을 나타낸다.")]),a._v(" "),r("p",[r("img",{attrs:{src:s(625),alt:"stream"}})]),a._v(" "),r("h4",{attrs:{id:"스트림-stream"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#스트림-stream"}},[a._v("#")]),a._v(" 스트림(Stream)")]),a._v(" "),r("ul",[r("li",[a._v("스트림은 카프카 스트림즈 API를 사용해 생성된 토폴로지로, 끊임없이 전달되는 데이터 세트를 의미한다.")]),a._v(" "),r("li",[a._v("스트림에 기록되는 단위는 key-value 형태이다.")])]),a._v(" "),r("h4",{attrs:{id:"스트림-처리-애플리케이션-stream-processing-application"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#스트림-처리-애플리케이션-stream-processing-application"}},[a._v("#")]),a._v(" 스트림 처리 애플리케이션(Stream Processing Application)")]),a._v(" "),r("ul",[r("li",[a._v("카프카 스트림 클라이언트를 사용하는 애플리케이션으로서, 하나 이상의 프로세서 토폴로지에서 처리되는 로직을 의미한다.")]),a._v(" "),r("li",[a._v("프로세서 토폴로지는 스트림 프로세서가 서로 연결된 그래프를 의미한다.")])]),a._v(" "),r("h4",{attrs:{id:"소스-프로세서-source-processor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#소스-프로세서-source-processor"}},[a._v("#")]),a._v(" 소스 프로세서(Source Processor)")]),a._v(" "),r("ul",[r("li",[a._v("위쪽으로 연결된 프로세서가 없는 프로세서를 말한다.")]),a._v(" "),r("li",[a._v("이 프로세서는 하나 이상의 카프카 토픽에서 데이터 레코드를 읽어서 아래쪽 프로세서에 전달한다. → 스트림 시작 단계")])]),a._v(" "),r("h4",{attrs:{id:"스트림-프로세서-stream-processor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#스트림-프로세서-stream-processor"}},[a._v("#")]),a._v(" 스트림 프로세서(Stream Processor)")]),a._v(" "),r("ul",[r("li",[a._v("프로세서 토폴로지를 이루는 하나의 노드를 말하여 여기서 노드들은 프로세서 형상에 의해 연결된 하나의 입력 스트림으로부터 데이터를 받아서 처리한 다음 다시 연결된 프로세서에 보내는 역할을 한다. → 실제 데이터 가공")])]),a._v(" "),r("h4",{attrs:{id:"싱크-프로세서-sink-processor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#싱크-프로세서-sink-processor"}},[a._v("#")]),a._v(" 싱크 프로세서(Sink Processor)")]),a._v(" "),r("ul",[r("li",[a._v("토폴로지 아래쪽에 프로세서 연결이 없는 프로세서를 뜻한다.")]),a._v(" "),r("li",[a._v("상위 프로세서로부터 받은 데이터 레코드를 카프카 특정 토픽에 저장한다. → 스트림 마지막 단계")])]),a._v(" "),r("h3",{attrs:{id:"_1-3-kafka-streams-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-kafka-streams-api"}},[a._v("#")]),a._v(" 1-3. Kafka Streams API")]),a._v(" "),r("p",[a._v("카프카 스트림은 데이터를 합칠 수 있다.")]),a._v(" "),r("p",[a._v("인풋으로 들어오는 데이터는 KStream 또는 KTable 이고, 아웃풋으로 나가는 데이터 스트림은 KTable이다.")]),a._v(" "),r("p",[a._v("KTable 관련해서 추가로 정리를 할 예정")]),a._v(" "),r("p",[a._v("API 를 사용하면 카프카 클러스터와 상호 작용을 하게 된다.")]),a._v(" "),r("p",[a._v("Kafka Streams API 는 어플리케이션 내에서 작동하는 api로 브로커 바깥에서 작업을 진행한다.")]),a._v(" "),r("p",[r("img",{attrs:{src:s(626),alt:"stream"}})]),a._v(" "),r("h3",{attrs:{id:"_1-4-사용-방법"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-사용-방법"}},[a._v("#")]),a._v(" 1-4. 사용 방법")]),a._v(" "),r("h4",{attrs:{id:"serializers-와-deserializers-aka-serdes-를-정의"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#serializers-와-deserializers-aka-serdes-를-정의"}},[a._v("#")]),a._v(" Serializers 와 Deserializers (aka Serdes) 를 정의")]),a._v(" "),r("ul",[r("li",[a._v("SERializer")]),a._v(" "),r("li",[a._v("DESerializer\nKey Serdes는 Value Serdes와 별개로 움직인다.")])]),a._v(" "),r("p",[a._v("내부적으로 구현된 Serdes")]),a._v(" "),r("p",[r("img",{attrs:{src:s(627),alt:"stream"}})]),a._v(" "),r("h4",{attrs:{id:"스트림-생성"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#스트림-생성"}},[a._v("#")]),a._v(" 스트림 생성")]),a._v(" "),r("p",[a._v("StreamBuilder를 사용해 KStream 또는 KTable을 설정한다.")]),a._v(" "),r("p",[r("img",{attrs:{src:s(628),alt:"stream"}})]),a._v(" "),r("p",[r("img",{attrs:{src:s(629),alt:"stream"}})]),a._v(" "),r("ul",[r("li",[a._v("위의 예시에선 KStream의 키는 String 타입이고, 값은 PlayEvent  타입이다.")]),a._v(" "),r("li",[a._v("이렇게 설정을 해주면, 특정 플레이 이벤트를 각 인스턴스마다 스트림 식으로 모두가 바라보게 있게 된다.")]),a._v(" "),r("li",[a._v("이벤트가 업데이트 되면 데이터를 가져오고, 동일한 키에 대해 업데이트되면 값을 덮어 씌우게 된다.")])]),a._v(" "),r("h4",{attrs:{id:"데이터-가공"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#데이터-가공"}},[a._v("#")]),a._v(" 데이터 가공")]),a._v(" "),r("p",[a._v("데이터를 가져와서 filterling, map, group by 등으로 데이터를 가공해 준다.")]),a._v(" "),r("p",[a._v("필터링같은 작업을 하고나면, 새로운 key / value 로 스트림이 생긴다.")]),a._v(" "),r("p",[r("em",[a._v("Filter & Map")]),a._v(" "),r("img",{attrs:{src:s(630),alt:"stream"}})]),a._v(" "),r("ul",[r("li",[a._v("위의 예시를 보면, playEvents 스트림을 필터링하고, map을 해서 새로운 KStream 객체로 리턴해준다.")]),a._v(" "),r("li",[a._v("즉 새로운 key / value 객체로 가져오게 된다.")]),a._v(" "),r("li",[a._v("위에선 새로운 SongID로 키를 만들고, value는 기존 value와 동일하게 설정했다.")])]),a._v(" "),r("p",[r("em",[a._v("Group By & Count")])]),a._v(" "),r("p",[r("img",{attrs:{src:s(631),alt:"stream"}})]),a._v(" "),r("ul",[r("li",[a._v("새로운 키를 기반으로 Group By 도 가능하다.")]),a._v(" "),r("li",[a._v("count 를 통해 카운팅도 가능하다")])]),a._v(" "),r("p",[r("em",[a._v("Reduce or Aggregate")])]),a._v(" "),r("p",[r("img",{attrs:{src:s(632),alt:"stream"}})]),a._v(" "),r("ul",[r("li",[a._v("이전 record와 현재 record로 합성이 가능하다")]),a._v(" "),r("li",[a._v("람다를 사용한다")]),a._v(" "),r("li",[a._v("결과물로 KTable이 나온다")])]),a._v(" "),r("p",[a._v("이런식으로 나온 스트림을 KTable과 조인도 가능하다. (좀더 공부 후 KTable과 연관해서 설명 추가 작성 필요)")]),a._v(" "),r("p",[r("img",{attrs:{src:s(633),alt:"stream"}})]),a._v(" "),r("p",[r("em",[a._v("Join 예시")])]),a._v(" "),r("p",[r("img",{attrs:{src:s(634),alt:"stream"}})]),a._v(" "),r("ul",[r("li",[a._v("다른 Source 에서 온 데이터들을 합칠 수 있다.")])]),a._v(" "),r("h4",{attrs:{id:"kstream-↔-ktable"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kstream-↔-ktable"}},[a._v("#")]),a._v(" KStream ↔ KTable")]),a._v(" "),r("p",[a._v("KStream과 Ktable 은 서로서로 변환을 할 수 있다.")]),a._v(" "),r("p",[r("img",{attrs:{src:s(635),alt:"stream"}})]),a._v(" "),r("h4",{attrs:{id:"windowing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windowing"}},[a._v("#")]),a._v(" Windowing")]),a._v(" "),r("p",[r("img",{attrs:{src:s(636),alt:"stream"}}),a._v(" "),r("img",{attrs:{src:s(637),alt:"stream"}})]),a._v(" "),r("ul",[r("li",[a._v("데이터를 시간 순서에 따라 키로 그루핑을 해줄 수 있다.")]),a._v(" "),r("li",[a._v("풀링 할 때 프로세싱 타임으로 구분하면, 매번 다른값이 온다. 이런 문제를 해결하기 위해 그루핑을 해주는 거를 Windowing 이라고 한다. (좀더 찾아보고 정리필요 ㅠㅠ..)")])]),a._v(" "),r("h2",{attrs:{id:"_2-카프카-스트림-샘플-소스"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-카프카-스트림-샘플-소스"}},[a._v("#")]),a._v(" 2. 카프카 스트림 샘플 소스")]),a._v(" "),r("p",[a._v("샘플 소스는 아파치 공식 홈페이지를 참고함")]),a._v(" "),r("p",[a._v("아파치 공홈 : https://kafka.apache.org/24/documentation/streams/tutorial")]),a._v(" "),r("h3",{attrs:{id:"_2-1-로컬-카프카-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-로컬-카프카-설정"}},[a._v("#")]),a._v(" 2-1.  로컬 카프카 설정")]),a._v(" "),r("p",[a._v("도커로 띄워도 되고, 로컬에 직접 카프카를 설치해도 된다.")]),a._v(" "),r("p",[a._v("먼저 카프카를 로컬에 설치하고 예제에 사용할 토픽 2개를 만든다.")]),a._v(" "),r("h4",{attrs:{id:"토픽-생성"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#토픽-생성"}},[a._v("#")]),a._v(" 토픽 생성")]),a._v(" "),r("blockquote",[r("p",[a._v("bin/kafka-topics.sh --create "),r("br"),a._v("\n--bootstrap-server localhost:9092 "),r("br"),a._v("\n--replication-factor 1 "),r("br"),a._v("\n--partitions 1 "),r("br"),a._v("\n--topic streams-plaintext-input")])]),a._v(" "),r("p",[a._v('결과 : Created topic "streams-plaintext-input" // input 으로 사용할 토픽 생성')]),a._v(" "),r("blockquote",[r("p",[a._v("bin/kafka-topics.sh --create "),r("br"),a._v("\n--bootstrap-server localhost:9092 "),r("br"),a._v("\n--replication-factor 1 "),r("br"),a._v("\n--partitions 1 "),r("br"),a._v("\n--topic streams-wordcount-output "),r("br"),a._v("\n--config cleanup.policy=compact")])]),a._v(" "),r("p",[a._v('결과 : Created topic "streams-wordcount-output" // output 으로 사용할 토픽 생성')]),a._v(" "),r("h4",{attrs:{id:"producer-와-consumer-를-띄워준다"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#producer-와-consumer-를-띄워준다"}},[a._v("#")]),a._v(" producer 와 consumer 를 띄워준다.")]),a._v(" "),r("p",[a._v("Producer")]),a._v(" "),r("blockquote",[r("p",[a._v("bin/kafka-console-producer.sh --broker-list localhost:9092 --topic streams-plaintext-input")])]),a._v(" "),r("p",[a._v("Consumer")]),a._v(" "),r("blockquote",[r("p",[a._v("bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 "),r("br"),a._v("\n--topic streams-wordcount-output "),r("br"),a._v("\n--from-beginning "),r("br"),a._v("\n--formatter kafka.tools.DefaultMessageFormatter "),r("br"),a._v("\n--property print.key=true "),r("br"),a._v("\n--property print.value=true "),r("br"),a._v("\n--property key.deserializer=org.apache.kafka.common.serialization.StringDeserializer "),r("br"),a._v("\n--property value.deserializer=org.apache.kafka.common.serialization.LongDeserializer")])]),a._v(" "),r("h3",{attrs:{id:"_2-2-예제-소스-작성"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-예제-소스-작성"}},[a._v("#")]),a._v(" 2-2. 예제 소스 작성")]),a._v(" "),r("p",[r("img",{attrs:{src:s(638),alt:"stream"}})]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("Properties 객체에 프로퍼티 정보를 넣어준다.\n\nID, 연결한 브로커, key value serdes 설정 등을 해줌\n\nStreamBuilder를 통해 데이터를 받을 topic (streams-plaintext-input) 을 설정해서, KStream 객체를 만들어 준다. (Source Processor 단계)\n\nflatMap, gruopBy 등의 함수를 통해 데이터를 가공해 준다. (Stream Processer 단계)\n\n데이터를 전달해줄 topic (streams-wordcount-output) 을 설정한다. (Sink Processor 단계)\n")])])]),r("p",[a._v("위의 작업 이후에 Topology 객체에 넣고 stream을 시작해 주면 된다.")]),a._v(" "),r("p",[a._v("topology 정보의 로그를 찍어보면 아래와 같다.")]),a._v(" "),r("div",{staticClass:"language-java extra-class"},[r("pre",{pre:!0,attrs:{class:"language-java"}},[r("code",[r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Topologies")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Sub")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("topology"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Source")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" KSTREAM"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("SOURCE"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0000000000")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("topics"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("streams"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("plaintext"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("input"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" KSTREAM"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("FLATMAPVALUES"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0000000001")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Processor")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" KSTREAM"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("FLATMAPVALUES"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0000000001")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("stores"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" KSTREAM"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("KEY"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("SELECT"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0000000002")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v(" KSTREAM"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("SOURCE"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0000000000")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Processor")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" KSTREAM"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("KEY"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("SELECT"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0000000002")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("stores"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" KSTREAM"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("FILTER"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0000000005")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v(" KSTREAM"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("FLATMAPVALUES"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0000000001")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Processor")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" KSTREAM"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("FILTER"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0000000005")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("stores"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" KSTREAM"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("SINK"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0000000004")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v(" KSTREAM"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("KEY"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("SELECT"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0000000002")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Sink")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" KSTREAM"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("SINK"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0000000004")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("topic"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" counts"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("store"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("repartition"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v(" KSTREAM"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("FILTER"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0000000005")]),a._v("\n\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Sub")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("topology"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Source")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" KSTREAM"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("SOURCE"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0000000006")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("topics"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("counts"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("store"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("repartition"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" KSTREAM"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("AGGREGATE"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0000000003")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Processor")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" KSTREAM"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("AGGREGATE"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0000000003")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("stores"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("counts"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("store"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" KTABLE"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("TOSTREAM"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0000000007")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v(" KSTREAM"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("SOURCE"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0000000006")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Processor")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" KTABLE"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("TOSTREAM"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0000000007")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("stores"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" KSTREAM"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("SINK"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0000000008")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v(" KSTREAM"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("AGGREGATE"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0000000003")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Sink")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" KSTREAM"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("SINK"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0000000008")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("topic"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" streams"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("wordcount"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("output"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v(" KTABLE"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("TOSTREAM"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0000000007")]),a._v("\n")])])]),r("p",[a._v("이런식으로 데이터 스트림 처리의 흐름을 확인할 수 있다.")]),a._v(" "),r("h3",{attrs:{id:"_2-2-작동-화면"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-작동-화면"}},[a._v("#")]),a._v(" 2-2. 작동 화면")]),a._v(" "),r("p",[r("img",{attrs:{src:s(639),alt:"stream"}})]),a._v(" "),r("p",[a._v("프로듀서에서 Message Broker 와 Go in action 이란 단어를 넣으면")]),a._v(" "),r("p",[a._v("실행한 프로젝트를 통과해 단어를 쪼개고 갯수를 써서 컨슈머 토픽에서 받아볼 수 있다.")]),a._v(" "),r("p",[r("img",{attrs:{src:s(640),alt:"stream"}})]),a._v(" "),r("p",[a._v("이런식으로 전달되는 것을 확인할 수 있다.")]),a._v(" "),r("p",[a._v("출처 및 참고 :")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://kafka.apache.org/24/documentation/streams/core-concepts#streams_topology",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://kafka.apache.org/24/documentation/streams/core-concepts#streams_topology"),r("OutboundLink")],1),a._v(" "),r("a",{attrs:{href:"https://coding-start.tistory.com/138",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://coding-start.tistory.com/138"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);
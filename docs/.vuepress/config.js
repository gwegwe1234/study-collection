module.exports = {
    theme: 'default-prefers-color-scheme',
    themeConfig: {
      prefersTheme: 'dark',
    },
    title: '끄적끄적 블로그',
    description: '개발 관련 블로그',
    base: '/study-collection/',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      [
        'link',
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons'
        }
      ]
    ],
    plugins: {
      '@vuepress/back-to-top': true,
      '@vuepress/plugin-medium-zoom': {
          selector: 'img'
      },
  },
    themeConfig: {
      nav: [
        {
          text: 'Guide',
          link: '/guide'
        },
        {
          text: 'GitHub',
          link: 'https://github.com/gwegwe1234/'
        }
      ],
      sidebar: [
        {
          title: 'Intro',
          path: '/guide',
          collapsable: true,
        },
        {
          title: 'Book summary',   // required
          // optional, which should be a absolute path.
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1
          children: [
            {
              title: '자바 프로그래밍 면접 이렇게 준비한다',
              sidebarDepth: 0,
              children: [
                {
                  title: '4장 기본 알고리즘 작성하기', // required
                  path: '/book/JPIE/04',
                },
                {
                  title: '5장 자료구조', // required
                  path: '/book/JPIE/05',
                },
                {
                  title: '6장 디자인 패턴', // required
                  path: '/book/JPIE/06',
                },
                {
                  title: '7장 자주 묻는 면접 알고리즘 구현하기', // required
                  path: '/book/JPIE/07',
                },
                {
                  title: '8장 자바 기본', // required
                  path: '/book/JPIE/08',
                },
                {
                  title: '9장 JUnit으로 테스팅하기', // required
                  path: '/book/JPIE/09',
                },
                {
                  title: '10장 자바 가상머신 이해하기', // required
                  path: '/book/JPIE/10',
                },
                {
                  title: '11장 동시성', // required
                  path: '/book/JPIE/11',
                },
                {
                  title: '12장 자바 어플리케이션과 데이터베이스 통합하기', // required
                  path: '/book/JPIE/12',
                },
                {
                  title: '13장 웹 어플리케이션 만들기', // required
                  path: '/book/JPIE/13',
                },
                {
                  title: '14장 HTTP와 REST 이용하기', // required
                  path: '/book/JPIE/14',
                },
                {
                  title: '15장 직렬화', // required
                  path: '/book/JPIE/15',
                },
                {
                  title: '16장 스프링 프레임워크', // required
                  path: '/book/JPIE/16',
                },
                {
                  title: '17장 하이버네이트 사용하기', // required
                  path: '/book/JPIE/17',
                },
              ]
            },

            {
              title: '클린코드',
              sidebarDepth: 0,
              children: [
                {
                  title: '0장 들어가면서', // required
                  path: '/book/clean-code/00',
                },

                {
                  title: '1장 깨끗한 코드', // required
                  path: '/book/clean-code/01',
                },

                {
                  title: '2장 의미있는 이름', // required
                  path: '/book/clean-code/02',
                },

                {
                  title: '3장 함수', // required
                  path: '/book/clean-code/03',
                },

                {
                  title: '4장 주석', // required
                  path: '/book/clean-code/04',
                },

                {
                  title: '5장 포맷팅', // required
                  path: '/book/clean-code/05',
                },

                {
                  title: '6장 객체와 자료구조', // required
                  path: '/book/clean-code/06',
                },

                {
                  title: '7장 오류처리', // required
                  path: '/book/clean-code/07',
                },

                {
                  title: '8장 경계', // required
                  path: '/book/clean-code/08',
                },

                {
                  title: '9장 단위테스트', // required
                  path: '/book/clean-code/09',
                },

                {
                  title: '10장 클래스', // required
                  path: '/book/clean-code/10',
                },

                {
                  title: '11장 시스템', // required
                  path: '/book/clean-code/11',
                },

                {
                  title: '12장 창발성', // required
                  path: '/book/clean-code/12',
                },

                {
                  title: '13장 동시성', // required
                  path: '/book/clean-code/13',
                }
              ]
            },

            {
              title: 'TDD By Example',
              sidebarDepth: 0,
              children: [
                {
                  title: '1장 다중 통화를 지원하는 Money 객체', // required
                  path: '/book/tdd/01',
                },

                {
                  title: '2장 타락한 객체', // required
                  path: '/book/tdd/02',
                },

                {
                  title: '3장 모두를 위한 평등', // required
                  path: '/book/tdd/03',
                },

                {
                  title: '4장 프라이버시', // required
                  path: '/book/tdd/04',
                },

                {
                  title: '5장 솔직히 말하자면', // required
                  path: '/book/tdd/05',
                },

                {
                  title: '6장 돌아온 모두를 위한 평등', // required
                  path: '/book/tdd/06',
                },

                {
                  title: '7장 사과와 오렌지', // required
                  path: '/book/tdd/07',
                },

                {
                  title: '8장 객체 만들기', // required
                  path: '/book/tdd/08',
                },

                {
                  title: '9장 우리가 사는 시간', // required
                  path: '/book/tdd/09',
                },
              ]
            },
          
            {
              title: '스프링 인 액션',
              sidebarDepth: 0,
              children: [
                {
                  title: '1장 스프링 속으로', // required
                  path: '/book/spring-in-action/001',
                },

                {
                  title: '2장 빈 와이어링', // required
                  path: '/book/spring-in-action/002',
                },

                {
                  title: '3장 고급 와이어링', // required
                  path: '/book/spring-in-action/003',
                },

                {
                  title: '4장 애스펙트 지향 스프링', // required
                  path: '/book/spring-in-action/004',
                },

                {
                  title: '5장 스프링 웹 어플리케이션 만들기', // required
                  path: '/book/spring-in-action/005',
                },

                {
                  title: '6장 웹 뷰 렌더링', // required
                  path: '/book/spring-in-action/006',
                },

                {
                  title: '7장 고급 스프링MVC', // required
                  path: '/book/spring-in-action/007',
                },

                {
                  title: '8장 스프링 웹플로로 작업하기', // required
                  path: '/book/spring-in-action/008',
                },

                {
                  title: '9장 웹 어플리케이션 보안', // required
                  path: '/book/spring-in-action/009',
                },

                {
                  title: '10장 스프링과 JDBC를 사용하여 데이터베이스 사용하기', // required
                  path: '/book/spring-in-action/010',
                },

                {
                  title: '11장 객체 관계형 매핑을 통한 데이터 퍼시스팅', // required
                  path: '/book/spring-in-action/011',
                },

                {
                  title: '12장 NoSQL 데이터베이스 사용하기', // required
                  path: '/book/spring-in-action/012',
                },

                {
                  title: '13장 데이터 캐싱하기', // required
                  path: '/book/spring-in-action/013',
                },

                {
                  title: '14장 시큐리티 메소드', // required
                  path: '/book/spring-in-action/014',
                },

                {
                  title: '15장 원격 서비스 사용하기', // required
                  path: '/book/spring-in-action/015',
                },

                {
                  title: '16장 스프링 MVC로 REST API 사용하기', // required
                  path: '/book/spring-in-action/016',
                },

                {
                  title: '17장 스프링 메시징', // required
                  path: '/book/spring-in-action/017',
                },

                {
                  title: '18장 WebSocket과 STOMP를 사용하여 메시징하기', // required
                  path: '/book/spring-in-action/018',
                },

                {
                  title: '19장 이메일 전송을 위해 스프링 설정하기', // required
                  path: '/book/spring-in-action/019',
                },

                {
                  title: '20장 JMX를 이용한 스프링 빈 관리', // required
                  path: '/book/spring-in-action/020',
                },

                {
                  title: '21장 스프링 부트를 사용한 스프링 개발 간소화', // required
                  path: '/book/spring-in-action/021',
                },
              ]
            },

            {
              title: '고 인 액션',
              sidebarDepth: 0,
              children: [
                {
                  title: '1장 Go와의 첫 만남', // required
                  path: '/book/go-in-action/01',
                },

                {
                  title: '2장 Go 간단히 살펴보기', // required
                  path: '/book/go-in-action/02',
                },

                {
                  title: '3장 패키징과 내장 도구들', // required
                  path: '/book/go-in-action/03',
                },

                {
                  title: '4장 배열, 슬라이스, 맵', // required
                  path: '/book/go-in-action/04',
                },

                {
                  title: '5장 Go의 타입 시스템', // required
                  path: '/book/go-in-action/05',
                },

                {
                  title: '6장 동시성', // required
                  path: '/book/go-in-action/06',
                },

                {
                  title: '7장 동시성 패턴', // required
                  path: '/book/go-in-action/07',
                },

                {
                  title: '8장 표준 라이브러리', // required
                  path: '/book/go-in-action/08',
                },

                {
                  title: '9장 테스트와 벤치마킹', // required
                  path: '/book/go-in-action/09',
                },
              ]
            },

            {
              title: 'Go 언어를 활용한 마이크로서비스 개발',
              sidebarDepth: 0,
              children: [
                {
                  title: '1장 마이크로서비스 소개', // required
                  path: '/book/Building-Microservice-With-Go/01',
                },
                {
                  title: '2장 좋은 API 디자인하기', // required
                  path: '/book/Building-Microservice-With-Go/02',
                },
                {
                  title: '4장 테스트', // required
                  path: '/book/Building-Microservice-With-Go/04',
                },
              ]
            },

            {
              title: '마이크로서비스 구축과 운영',
              sidebarDepth: 0,
              children: [
                {
                  title: '1장 마이크로서비스', // required
                  path: '/book/production-ready-microservices/01',
                },
                {
                  title: '6장 모니터링', // required
                  path: '/book/production-ready-microservices/06',
                },
              ]
            },

            {
              title: '카프카 스트림즈 인 액션',
              sidebarDepth: 0,
              children: [
                {
                  title: '1장 카프카 스트림즈에 오신 것을 환영합니다', // required
                  path: '/book/kafka-streams-in-action/01',
                },

                {
                  title: '2장 빠르게 살펴보는 카프카', // required
                  path: '/book/kafka-streams-in-action/02',
                },

                {
                  title: '3장 카프카 스트림즈 개발', // required
                  path: '/book/kafka-streams-in-action/03',
                },

                {
                  title: '4장 스트림과 상태', // required
                  path: '/book/kafka-streams-in-action/04',
                },

                {
                  title: '5장 KTable API', // required
                  path: '/book/kafka-streams-in-action/05',
                },

                {
                  title: '6장 프로세서 API', // required
                  path: '/book/kafka-streams-in-action/06',
                },

                {
                  title: '7장 모니터링과 성능', // required
                  path: '/book/kafka-streams-in-action/07',
                },

                {
                  title: '8장 카프카 스트림즈 어플리케이션 테스트', // required
                  path: '/book/kafka-streams-in-action/08',
                },
              ]
            },

            {
              title: '모던 자바 인 액션',
              sidebarDepth: 0,
              children: [
                {
                  title: '1장 자바 8, 9, 10, 11 : 무슨 일이 일어나고 있는가?', // required
                  path: '/book/modern-java-in-action/01',
                },
                
                {
                  title: '2장 동작 파라미터화 코드 전달하기', // required
                  path: '/book/modern-java-in-action/02',
                },

                {
                  title: '3장 람다 표현식', // required
                  path: '/book/modern-java-in-action/03',
                },

                {
                  title: '4장 스트림 소개', // required
                  path: '/book/modern-java-in-action/04',
                },

                {
                  title: '5장 스트림 활용', // required
                  path: '/book/modern-java-in-action/05',
                },

                {
                  title: '6장 스트림으로 데이터 수집', // required
                  path: '/book/modern-java-in-action/06',
                },

                {
                  title: '7장 병렬 데이터 처리와 성능', // required
                  path: '/book/modern-java-in-action/07',
                },

                {
                  title: '8장 컬렉션 API 개선', // required
                  path: '/book/modern-java-in-action/08',
                },

                {
                  title: '9장 리팩터링, 테스팅, 디버깅', // required
                  path: '/book/modern-java-in-action/09',
                },

                {
                  title: '10장 람다를 이용한 도메인 전용 언어', // required
                  path: '/book/modern-java-in-action/10',
                },

                {
                  title: '11장 null 대신 Optional 클래스', // required
                  path: '/book/modern-java-in-action/11',
                },

                {
                  title: '12장 새로운 냘짜와 시간 API', // required
                  path: '/book/modern-java-in-action/12',
                },

                {
                  title: '13장 디폴트 메소드', // required
                  path: '/book/modern-java-in-action/13',
                },

                {
                  title: '14장 자바 모듈 시스템', // required
                  path: '/book/modern-java-in-action/14',
                },

                {
                  title: '15장 CompletableFuture와 리액티브 프로그래밍 컨셉의 기초', // required
                  path: '/book/modern-java-in-action/15',
                },

                {
                  title: '16장 안정적 비동기 프로그래밍', // required
                  path: '/book/modern-java-in-action/16',
                },

                {
                  title: '17장 리액티브 프로그래밍', // required
                  path: '/book/modern-java-in-action/17',
                },

                {
                  title: '18장 함수형 관점으로 생각하기', // required
                  path: '/book/modern-java-in-action/18',
                },

                {
                  title: '19장 함수형 프로그래밍 기법', // required
                  path: '/book/modern-java-in-action/19',
                },
              ]
            },

            {
              title: '객체지향의 사실과 오해',
              sidebarDepth: 0,
              children: [
                {
                  title: '1장 협력하는 객체들의 공동체', // required
                  path: '/book/oop-true-false/01',
                },

                {
                  title: '2장 이상한 나라의 객체', // required
                  path: '/book/oop-true-false/02',
                },

                {
                  title: '3장 타입과 추상화', // required
                  path: '/book/oop-true-false/03',
                },

                {
                  title: '4장 역할, 책임, 협력', // required
                  path: '/book/oop-true-false/04',
                },

                {
                  title: '5장 책임과 메세지', // required
                  path: '/book/oop-true-false/05',
                },

                {
                  title: '6장 객체 지도', // required
                  path: '/book/oop-true-false/06',
                },

                {
                  title: '7장 함께 모으기', // required
                  path: '/book/oop-true-false/07',
                },
              ]
            },

            {
              title: '뇌를 자극하는 윈도우즈 시스템 프로그래밍',
              sidebarDepth: 0,
              children: [
                {
                  title: '1장 컴퓨터 구조에 대한 첫 번째 이야기', // required
                  path: '/book/windows-system-programming/01',
                },
                {
                  title: '2장 아스키코드 vs 유니코드', // required
                  path: '/book/windows-system-programming/02',
                },
                {
                  title: '3장 64비트 기반 프로그래밍', // required
                  path: '/book/windows-system-programming/03',
                },
                {
                  title: '4장 컴퓨터 구조에 대한 두 번째 이야기', // required
                  path: '/book/windows-system-programming/04',
                },
                {
                  title: '5장 프로세스의 생성과 소멸', // required
                  path: '/book/windows-system-programming/05',
                },
                {
                  title: '6장 커널 오브젝트와 오브젝트 핸들', // required
                  path: '/book/windows-system-programming/06',
                },
              ]
            },

            {
              title: '스프링5를 활용한 리액티브 프로그래밍',
              sidebarDepth: 0,
              children: [
                {
                  title: '1장 왜 리액티브 스프링인가?', // required
                  path: '/book/spring-reactive/01',
                },
                {
                  title: '2장 스프링을 이용한 리액티브 프로그래밍 - 기본 개념', // required
                  path: '/book/spring-reactive/02',
                },
              ]
            },
            {
              title: '코틀린 완벽 가이드',
              sidebarDepth: 0,
              children: [
                {
                  title: '1장 강력하고 실용적인 코틀린', // required
                  path: '/book/perfect-kotlin/01',
                },
                {
                  title: '2장 코틀린 언어 기초', // required
                  path: '/book/perfect-kotlin/02',
                },
                {
                  title: '3장 함수 정의하기', // required
                  path: '/book/perfect-kotlin/03',
                },
                {
                  title: '4장 클래스와 객체 다루기', // required
                  path: '/book/perfect-kotlin/04',
                },
                {
                  title: '5장 고급 함수와 함수형 프로그래밍 활용하기', // required
                  path: '/book/perfect-kotlin/05',
                },
              ]
            }
          ]
        },

        {
          title: 'Tech',   // required
          // optional, which should be a absolute path.
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1
          children: [
            {
              title: 'Programming',
              sidebarDepth: 0,
              children: [
                
                {
                  title: 'Java 공부 정리', // required
                  path: '/programming/Java_summary',
                },

                {
                  title: 'Web 기초지식정리', // required
                  path: '/programming/Web_Basic',
                },

                {
                  title: '마구잡이 스프링정리1', // required
                  path: '/programming/Spring_badSummary1',
                },

                {
                  title: '마구잡이 스프링정리2', // required
                  path: '/programming/Spring_badSummary2',
                },

                {
                  title: 'Reactive Programming', // required
                  path: '/programming/ReactiveProgramming',
                },

                {
                  title: 'Java 예외처리', // required
                  path: '/programming/Java_Exception',
                },

                {
                  title: '스프링 에러페이지 필터', // required
                  path: '/programming/Spring_errorPageFilter',
                },

                {
                  title: '스프링 Exception 처리', // required
                  path: '/programming/Spring_Exception',
                },

                {
                  title: '스프링 필터체인', // required
                  path: '/programming/Spring_Filter_Chain',
                },

                {
                  title: '스프링 httpConnectionPool', // required
                  path: '/programming/Spring_httpConnectionPool',
                },

                {
                  title: 'Webpack 기본개념', // required
                  path: '/programming/Webpack_Basic',
                },

                {
                  title: 'OOP', // required
                  path: '/programming/OOP',
                },

                {
                  title: '객체지향 설계 5원칙 SOLID', // required
                  path: '/programming/Solid',
                },

                {
                  title: 'Kafka Streams', // required
                  path: '/programming/kafka_streams',
                },

                {
                  title: '동기/비동기/블록킹/논블록킹', // required
                  path: '/programming/sync_async_blocking_nonblocking',
                },

                {
                  title: 'gRPC 예제', // required
                  path: '/programming/grpc_sample',
                },

                {
                  title: '개발 종합 정리', // required
                  path: '/programming/total',
                },
              ]
            },

            {
              title: 'Cloud',
              sidebarDepth: 0,
              children: [
                {
                  title: 'Azure 설치', // required
                  path: '/cloud/Azure_azure',
                },

                {
                  title: 'AKS 설치', // required
                  path: '/cloud/Azure_aks',
                },

                {
                  title: 'AKS ACR 연동 설치', // required
                  path: '/cloud/Azure_aks_acr',
                },
              ]
            },

            {
              title: 'Computer Science',
              sidebarDepth: 0,
              children: [
                {
                  title: 'Compile 언어 vs Script 언어', // required
                  path: '/cs/CS_compile_language_scriptlanguage',
                },

                {
                  title: 'Servlet', // required
                  path: '/cs/Servlet',
                },

                {
                  title: 'Git', // required
                  path: '/cs/Git-1',
                },
              ]
            },

            {
              title: 'Devops(?)',
              sidebarDepth: 0,
              children: [
                {
                  title: 'Docker 개념정리', // required
                  path: '/devops/Docker_summary',
                },

                {
                  title: 'Gocd 개념정리', // required
                  path: '/devops/gocd_summary',
                },

                {
                  title: 'Nexus 구성', // required
                  path: '/devops/Nexus3',
                },

                {
                  title: 'Infra - ip', // required
                  path: '/devops/Infra_ip',
                },

                {
                  title: 'Infra - 웹서버', // required
                  path: '/devops/Infra_webserver',
                },

                {
                  title: 'aaS - IaaS, PaaS, SaaS', // required
                  path: '/devops/aaS.md',
                },
              ]
            },

            {
              title: 'Algorithm',
              sidebarDepth: 0,
              children: [
                {
                  title: 'CodePlus 알고리즘 기초 1', // required
                  path: '/algorithm/basic1',
                },

                {
                  title: 'CodePlus 알고리즘 기초 2', // required
                  path: '/algorithm/basic2',
                },
              ]
            },

            {
              title: 'Backend',
              sidebarDepth: 0,
              children: [
                {
                  title: 'Backend Roadmap', // required
                  path: '/backend/backend-roadmap',
                },

                {
                  title: 'Specific',
                  sidebarDepth: 0,
                  children: [
                    {
                      title: 'How does the internet work?', // required
                      path: '/backend/specific/internet-work',
                    },

                    {
                      title: 'What is HTTP?', // required
                      path: '/backend/specific/http',
                    },

                    {
                      title: 'Browsers and how the work?', // required
                      path: '/backend/specific/browser',
                    },

                    {
                      title: 'Basic Terminal Command', // required
                      path: '/backend/specific/basic-terminal-commands',
                    },

                    {
                      title: 'Process Management', // required
                      path: '/backend/specific/process',
                    },

                    {
                      title: 'Thrads and Concurrency', // required
                      path: '/backend/specific/thread',
                    },
                  ]
                },
              ]
            },
          ]
        },

        {
          title: '끄적끄적',   // required
          // optional, which should be a absolute path.
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1
          children: [
            {
              title: 'No Brain',
              sidebarDepth: 0,
              children: [
                {
                  title: '정리?', // required
                  path: '/npbrain/summary',
                },   
                {
                  title: '2023/03/08 - 내 현재 상황에 대한 고민 ', // required
                  path: '/npbrain/2023-03-08',
                },
                {
                  title: '2023/03/15 - 회고 ', // required
                  path: '/npbrain/2023-03-15',
                },
                {
                  title: '2023/08/18 - 5개월 간의 기록 ', // required
                  path: '/npbrain/2023-08-18',
                }
              ]
            },
          ]
        }
      ],
      searchPlaceholder: 'Search...'
    }
  }
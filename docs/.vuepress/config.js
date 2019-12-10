module.exports = {
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
              ]
            },

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
              ]
            },
          ]
        }
      ],
      searchPlaceholder: 'Search...'
    }
  }
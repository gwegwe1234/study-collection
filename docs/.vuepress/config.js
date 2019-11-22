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
                  path: '/book/JPIE/04_기본알고리즘작성하기',
                },
              ]
            },

            {
              title: '클린코드',
              sidebarDepth: 0,
              children: [
                {
                  title: '0장 들어가면서', // required
                  path: '/book/clean-code/00_들어가면서',
                },

                {
                  title: '1장 깨끗한 코드', // required
                  path: '/book/clean-code/01_깨끗한코드',
                },

                {
                  title: '2장 의미있는 이름', // required
                  path: '/book/clean-code/02_의미있는이름',
                },

                {
                  title: '3장 함수', // required
                  path: '/book/clean-code/03_함수',
                },

                {
                  title: '4장 주석', // required
                  path: '/book/clean-code/04_주석',
                },

                {
                  title: '5장 포맷팅', // required
                  path: '/book/clean-code/05_포맷팅',
                },

                {
                  title: '6장 객체와 자료구조', // required
                  path: '/book/clean-code/06_객체와자료구조',
                },

                {
                  title: '7장 오류처리', // required
                  path: '/book/clean-code/07_오류처리',
                },

                {
                  title: '8장 경계', // required
                  path: '/book/clean-code/08_경계',
                },

                {
                  title: '9장 단위테스트', // required
                  path: '/book/clean-code/09_단위테스트',
                }
              ]
            },
          
            {
              title: '스프링 인 액션',
              sidebarDepth: 0,
              children: [
                {
                  title: '1장 스프링 속으로', // required
                  path: '/book/spring-in-action/001_스프링속으로',
                },

                {
                  title: '2장 빈 와이어링', // required
                  path: '/book/spring-in-action/002_빈와이어링',
                },

                {
                  title: '3장 고급 와이어링', // required
                  path: '/book/spring-in-action/003_고급와이어링',
                },

                {
                  title: '4장 애스펙트 지향 스프링', // required
                  path: '/book/spring-in-action/004_애스펙트_지향_스프링',
                },

                {
                  title: '5장 스프링 웹 어플리케이션 만들기', // required
                  path: '/book/spring-in-action/005_스프링_웹_애플리케이션_만들기',
                },

                {
                  title: '6장 웹 뷰 렌더링', // required
                  path: '/book/spring-in-action/006_웹뷰렌더링',
                },

                {
                  title: '7장 고급 스프링MVC', // required
                  path: '/book/spring-in-action/007_고급스프링MVC',
                },

                {
                  title: '8장 스프링 웹플로로 작업하기', // required
                  path: '/book/spring-in-action/008_스프링_웹플로로_작업하기',
                }
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
                  path: '/programming/Java_자바공부정리',
                },

                {
                  title: 'Web 기초지식정리', // required
                  path: '/programming/Web_기초지식정리',
                },

                {
                  title: '마구잡이 스프링정리1', // required
                  path: '/programming/Spring_마구잡이_스프링정리',
                },

                {
                  title: '마구잡이 스프링정리2', // required
                  path: '/programming/Spring_마구잡이_스프링정리2',
                },

                {
                  title: 'Reactive Programming', // required
                  path: '/programming/ReactiveProgramming',
                },

                {
                  title: 'Java 예외처리', // required
                  path: '/programming/Java_예외처리',
                },

                {
                  title: '스프링 에러페이지 필터', // required
                  path: '/programming/Spring_errorPageFilter',
                },

                {
                  title: '스프링 Exception 처리', // required
                  path: '/programming/Spring_Exception처리',
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
                  path: '/programming/Webpack_기본개념',
                },
              ]
            },

            {
              title: 'Cloud',
              sidebarDepth: 0,
              children: [
                {
                  title: 'Azure 설치', // required
                  path: '/cloud/Azure_azure설치',
                },

                {
                  title: 'AKS 설치', // required
                  path: '/cloud/Azure_aks설치',
                },

                {
                  title: 'AKS ACR 연동 설치', // required
                  path: '/cloud/Azure_aks_acr연동설치',
                },
              ]
            },

            {
              title: 'Computer Science',
              sidebarDepth: 0,
              children: [
                {
                  title: 'Compile 언어 vs Script 언어', // required
                  path: '/cs/CS_compile언어_script언어',
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
                  path: '/devops/Docker_개념정리',
                },

                {
                  title: 'Gocd 개념정리', // required
                  path: '/devops/gocd_개념정리',
                },

                {
                  title: 'Nexus 구성', // required
                  path: '/devops/Nexus_구성',
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
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
              title: '자바 프로그래밍 면접',
              sidebarDepth: 0,
              children: [
                {
                  title: '4강 기본 알고리즘 작성하기', // required
                  path: '/book/JPIE/04_기본알고리즘작성하기',
                },
              ]
            }
          
          ]
        },
        {
          title: 'Group 2',
          children: [ /* ... */ ]
        }
      ],
      searchPlaceholder: 'Search...'
    }
  }
import { defaultTheme, defineUserConfig } from 'vuepress'
const { rightAnchorPlugin } = require('vuepress-plugin-right-anchor')

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'xia0hj 的个人空间',
  description: '这是我的第一个 VuePress 站点',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  theme: defaultTheme({
    logo: '/avatars.jpg',
    navbar: [
      { text: 'Home', link: '/' },
      { text: '面试', link: '/interview/' },
      { text: 'My Github', link: 'https://github.com/xia0hj' }
    ],
    sidebar: {
      '/interview': [
        {
          text: 'Vue',
          link: '/interview/vue.md'
        },
        {
          text: 'JavaScript',
          link: '/interview/javascript.md'
        },
        {
          text: 'CSS',
          link: '/interview/css.md'
        },
        {
          text: '计算机网络',
          link: '/interview/network.md'
        },
        {
          text: 'React',
          link: '/interview/react.md'
        },
        {
          text: '前端工具链',
          link: '/interview/toolchain.md'
        },
        {
          text: '后端相关',
          link: '/interview/backend.md'
        },
        {
          text: '职业规划',
          link: '/interview/career.md'
        },
      ]
    }
  }),
  plugins: [
    rightAnchorPlugin({
      showDepth: 1,
    })
  ]
})

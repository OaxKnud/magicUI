import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Magic-UI",
  description: "基于Vue3+TypeScript的组件库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'magic.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

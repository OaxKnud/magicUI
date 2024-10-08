import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import { fileURLToPath, URL } from 'node:url'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Magic-UI",
  description: "基于Vue3+TypeScript的组件库",
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'magic.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/button' }
    ],

    sidebar: [
      {
        text: '基础',
        items: [
          { text: 'Button 按钮', link: '/components/button' },
          { text: 'Container 布局容器', link: '/components/container' },
          { text: 'Icon 图标', link: '/components/icon' },
          { text: 'Link 链接', link: '/components/link' },
          { text: 'Collapse 折叠面板', link: '/components/collapse' },
        ]
      },
      {
        text: '反馈',
        items: [
          { text: 'Message 消息提示', link: '/components/message' },
          { text: 'MessageBox 弹窗', link: '/components/MessageBox' },
          { text: 'Tooltip 文字提示', link: '/components/Tooltip' },
          { text: 'Dropdown 下拉菜单', link: '/components/dropdown' },
          { text: 'Rate 评分', link: '/components/rate' },
          { text: 'Switch 开关', link: '/components/switch' },
          { text: 'Form表单', link: '/components/form' },
        ]
      },
      {
        text: '数据输入',
        items: [
          { text: 'Switch 开关', link: '/components/button' },
          { text: 'Rate 评分', link: '/components/button' },
          { text: 'Input 输入框', link: '/components/button' },
          { text: 'Select 选择框', link: '/components/button' },
          { text: 'Form 表单', link: '/components/button' },
          { text: 'DatePicker 日期选择器', link: '/components/button' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/OaxKnud/magicUI' }
    ]
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
})

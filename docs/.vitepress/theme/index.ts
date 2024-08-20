// 从 VitePress 的默认主题中导入 DefaultTheme
import DefaultTheme from 'vitepress/theme'
import { AntDesignContainer, ElementPlusContainer, NaiveUIContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
// 导入 Font Awesome 图标
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// 自定义样式
import '../../../src/styles/index.css'
import './style.css'
library.add(fas)
//定义主题样式
export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 自定义样式：preview预览
    app.component('demo-preview', ElementPlusContainer)
  }
} 

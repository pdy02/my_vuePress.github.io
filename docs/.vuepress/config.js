// VuePress 站点的基本配置文件
// 支持 TypeScript 配置文件, 可以使用 .vuepress/config.ts 来得到更好的类型提示。
// 可以通过命令行来指定配置文件 `vuepress dev docs --config my-config.js`

import { defineUserConfig } from 'vuepress';
import MyThemeConfig from './theme.js';

export default defineUserConfig({
    lang: 'zh-CN', // zh-CN | en-US
    title: 'DY', // 项目左上角标题
    description: '这是我的第一个 VuePress 站点', // 描述
    head: [['link', { rel: 'icon', href: '/images/hero.png' }]], // 网站图标
    theme: MyThemeConfig, // 主题配置
})
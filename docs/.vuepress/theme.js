// 主题配置
import { defaultTheme } from 'vuepress'
import sidebar from './theme/sidebar.js'

export default defaultTheme({
    // 配置主题
    navbar:[ // 上方导航栏
        {
            text:'主页',
            link:'/'
        },{
            text:'参考',
            children:[
                {
                    text:'js语法',
                    children:[
                        '/jsList/syntax/index.md',
                    ]
                }
            ]
        }
    ],
    logo:'/images/hero.png',
    lastUpdated:true, // 最后更新时间
    sidebarDepth:1, // 侧边栏深度
    sidebar, // 侧边栏对象
})
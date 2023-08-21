// 侧边栏对象
// node环境
// const fs = require('node:fs');
import { getFiles } from '../tool.js'; //自己的工具函数
// const jsListSyntax = getFiles('/jsList/syntax/');

export default {
    '/':[
        {
            text:'指南',
            collapsible: true,
            children:[
                "README.md","/HtmlView.md","CssView.md","JsView.md"
            ]
        }
    ],
    '/jsList/':[
        {
            text:'js语法',
            children:getFiles('/jsList/syntax/')
        }
    ]
}
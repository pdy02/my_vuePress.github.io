import path from 'node:path'
import fs from 'node:fs'


export function getFiles(str = '/jsList/syntax/'){
    const p = path.resolve(process.cwd(),'./docs/jsList/syntax/')
    console.log(p);
    let files = fs.readdirSync(p)
    // 拼接路径
    files = files.map(file => {
        return path.posix.join(str, file)
    })
    return files
}

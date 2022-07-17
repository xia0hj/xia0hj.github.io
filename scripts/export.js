//@ts-check

const fs = require('fs')
const ph = require('path')

const exportDir = ph.resolve(__dirname, '../docs/.vuepress/dist')
const exportFileName = '自己整理的前端面试笔记.md'
const mdPaths = [
  ph.resolve(__dirname, '../docs/interview/javascript.md'),
  ph.resolve(__dirname, '../docs/interview/vue.md'),
  ph.resolve(__dirname, '../docs/interview/css.md'),
  ph.resolve(__dirname, '../docs/interview/network.md'),
  // ph.resolve(__dirname, '../docs/interview/algorithm.md'),
  ph.resolve(__dirname, '../docs/interview/toolchain.md'),
  ph.resolve(__dirname, '../docs/interview/react.md'),
  ph.resolve(__dirname, '../docs/interview/backend.md'),
  ph.resolve(__dirname, '../docs/interview/career.md')
]

if(!fs.existsSync(exportDir)){
  fs.mkdirSync(exportDir)
}
process.chdir(exportDir)
exportInterviewNotes()

function exportInterviewNotes(){
  const writer = fs.createWriteStream(exportFileName, {flags: 'w'})
  mdPaths.forEach((md) => {
    const content = fs.readFileSync(md, 'utf8').replace(/\[\[toc\]\]/, '')
    writer.write('\n', 'utf8')
    writer.write(content, 'utf8')
    console.log(`成功写入文件 ${md}`)
  })
  writer.end()
  console.log(`成功生成 ${exportFileName}`)
}

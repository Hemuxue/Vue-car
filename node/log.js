//读写日志

const fs = require('fs');
const globalConfig = require('./config')
// console.log(globalConfig)
let filePath = __dirname +'/'+ globalConfig.log_path +'/' + globalConfig.log_name;
// console.log(filePath)
//异步写入文件
// fs.writeFile(filePath , 'asdas',function () {
//     console.log('1')
// })

//同步写入文件
// fs.writeFileSync(filePath,'asd')
// // console.log('2')

function log (data) {
    //自带追加写功能
    // fs.appendFile(filePath,data+'\r\b',function () {
    //
    // })
    fs.writeFile(filePath , data+'\r\n',{flag:'a'},function () {
    })
}

module.exports = {
    log: log
}
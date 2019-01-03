const fs = require('fs')
const globalConfig = require('./config')
//读文件夹，输出的是该文件夹里面的文件名
let files = fs.readdirSync(__dirname+'/'+globalConfig.web_path);
//用来收集所有文件的导出
const  controllerSet = [];

//做一个全局的map映射
const pathMap = new Map();

for (let i = 0 ; i < files.length ; i++){
    //导出所有 的文件 ，temp 是path 属性和对应的 属性值
    let temp = require('./'+globalConfig.web_path+'/'+files[i])
    //预定的是：导出的controller 必须要有 path 属性
    if(temp.path) {
        for(let [k,v] of temp.path){
            //不允许重复添加
            if(pathMap.get(k) == null){
                pathMap.set(k,v)
            }else{
                throw new Error('url path异常,url:' + k)
            }
            // controllerSet.push(temp)
        }

    }
}

module.exports = pathMap;
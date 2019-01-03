let fs = require('fs')

let conf = fs.readFileSync(__dirname+"/server.conf").toString().split("\r\n");

const globalConf = {};

//异步读文件
/*这个时候  fs就没有返回值，返回值通过形参data传入，回调，如果读文件后面有相关依赖，
由于js的event Loop 的问题，是会出错的。这种有前后依赖的问题最好是同步读取
* fs.readFile('./server.conf',function(err,data){
*
*
* })
*
* 文件读写参数options 里面的 mode 的8进制数0o666表示的是wen文件访问权限
* 第一个数：文件所有者权限 ，谁创建的文件谁就是文件的所有者
* 第二个数：同组用户的权限
* 第三个数：非同组用户的权限
* */
for(let i = 0 ;i < conf.length ;i++){
    let tempConf = conf[i].split("=");
    if(tempConf.length  = 2){
        globalConf[tempConf[0]] = tempConf[1]
    }else{
        continue
    }
}
//检测静态文件异常的配置
if(globalConf.static_file_type){
    globalConf.static_file_type = globalConf.static_file_type.split("|")
}else{
    throw new Error("配置文件异常，缺少：static_file_type")
}

module.exports = globalConf
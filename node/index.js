//http模块，可以直接解析http请求头，不用再解析字符串
const http = require('http');
//url模块 专门解析url的
const url = require('url');
const globalConf = require('./config');
const fs = require('fs');
//loader 里面放着是所有的url对应的方法，通过map k，v对应。就可以直接找到方法，然后调用
const loader = require('./loader');
const filterSet = require('./filterLoader');
const logRequire = require('./log')


http.createServer(function (request, response) {
    //url.parse(url,true) 多传一个true,会把query 解析成对象
    // console.log(url.parse(request.url,true))
    let pathName = url.parse(request.url).pathname;
    // let params = url.parse(request.url,true).query
    let isStatic = isStaticsRequest(pathName);
    console.log(pathName)
    logRequire.log(pathName)

    //执行所有拦截
    // for(let i = 0 ; i< filterSet.length ;i ++){
    //     let flag = filterSet[i](request,response);
    //     if(!flag){
    //         return;
    //     }
    // }
    if(isStatic){//静态文件
        //加一个try catch 防止读取文件失败，服务直接挂掉
        try {
            let file =  fs.readFileSync(__dirname+'/'+globalConf.page_path + pathName);

            response.writeHead(200);
            response.write(file);
            //必须要加一个response.end() 不然最后一个请求的数据，会一直传输不完成。
            
        }catch (e) {
            response.writeHead(404);
            response.write('<html><body><h1>404NotFount</h1></body></html>');
        }

        response.end()
    }else{//动态数据
        //通过url名，找到对应的方法
        console.log('来东西了')
        if(loader.get(pathName) != null){
            //因为程序再运行中，如果出现错误，服务就直接停掉了。为了防止这种情况，加一层try catch
            try{
                //调用loader加载的所有的Controller 模块。 通过  k,v 执行对应的方法
                loader.get(pathName)(request,response);

            }catch (e) {
                response.writeHead(500);
                response.write('<html><body><h1>404 BadServer</h1></body></html>');
                response.end();
            }
        }else {
            console.log(' 404 inter')
            response.writeHead(404);
            response.write('<html><body><h1>404NotFount</h1></body></html>');
            response.end();
        }
    }
}).listen(globalConf.port)

logRequire.log('服务已启动')
//前端放出去的请求分为几种
/*
* 1.固定的东西，HTML，CSS，JS 这些静态资源
* 2.动态资源， 如当前用户的用户
* */

//nodejs 是运行在一个线程里面的，只要有一个错误，程序立即停掉
function isStaticsRequest(pathName) {

    for(let i = 0 ;i < globalConf.static_file_type.length; i++){
        let temp = globalConf.static_file_type[i];
        /*要判断访问的后缀名，需要看pathName的最后面的后缀，
        如果这个后缀跟所比较的后缀相同时， indexOf 的返回值刚刚好是
        pathName.length - temp,length*/


        //lastIndexOf  从后往前找   endsWith 查看最后有没有这个字符串
        // if(pathName.lastIndexOf(temp) === pathName.length - temp.length){
        //     return true
        // }

        if(pathName.endsWith(temp)){
            return true
        }
    }
    return false
}
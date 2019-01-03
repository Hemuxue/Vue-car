const url = require('url');
const globalConf = require('../config');

function loginFilter(request,response) {
    let pathName = url.parse(request.url).pathname;
    if(pathName == '/login.html' || pathName == '/login' || isStaticsRequest(pathName)){
        return true;
    }
    if(request.headers.cookie){
        let cookies = request.headers.cookie.split(";")
        for(let i = 0 ;i < cookies.length ; i++){
            //左边可能带空格，需要用trim() 去掉空格。
            if(cookies[i].split("=")[0].trim() == 'id'){
                return true
            }
        }
    }
    console.log('拦截')
    response.writeHead(302,{'location':'/login.html'})
    response.end()
    return false;
}
function isStaticsRequest(pathName) {

    for(let i = 0 ;i < globalConf.static_file_type.length; i++){
        let temp = globalConf.static_file_type[i];
        if(temp == '.html'){
            continue;
        }
        if(pathName.endsWith(temp)){
            return true
        }
    }
    return false
}
module.exports = loginFilter
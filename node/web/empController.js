const url = require('url');
let empService = require('../service/empService')

let path = new Map();

// function getData(request, response) {
//     //这个 参数会一层一层的传递到dao层，再拿到数据库回来的操作后，把数据进行转义然后输出到页面上
//     studentService.queryAllStudnet(function (result) {
//         let resArr = [];
//         for(let i = 0 ;i  <result.length ;i++){
//             resArr.push(result[i].name)
//         }
//         response.write(resArr.toString())
//         response.end();
//     });

// }
function login(request,response){

    // let params = url.parse(request.url,true).query

    //post请求放在数据域里面，需要借助  data 事件 。如果数据域里面没有东西，则该事件不会执行
    request.on('data',function (data) {
        let tempArr = JSON.parse( data.toString())
        let empName = tempArr.empName
        let password = tempArr.password;
        console.log(empName,password)
        empService.queryEmpByEmpNameSer(empName,function (result) {
            console.log(result)
            let res = '';
            if(result == null || result.length == 0){
                res = 'fall'
            }else{
                if(result[0].password == password){
                    res = 'ok'
                    response.writeHead(200,{'Set-Cookie':`id=${result[0].id}`})
                }else {
                    res = 'fall'
                }
            }

            response.write(res);
            response.end();
        })
    })

}
// path.set('/getData',getData)
path.set('/login',login)
module.exports  = {
    'path' : path
}
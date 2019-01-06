const url = require('url');
let empService = require('../service/empService')

let path = new Map();


function login(request,response){

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
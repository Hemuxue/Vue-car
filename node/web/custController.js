const url = require('url');
let custService = require('../service/custService')

let path = new Map();

function custRegister(request,response){
    
    request.on('data',function (data) {
        let tempArr = JSON.parse( data.toString())
        let paramsArr = [tempArr.name,tempArr.sex,tempArr.birth,tempArr.address,tempArr.phone,tempArr.createTime]

        console.log(paramsArr)
        custService.insertCustSer(paramsArr,function (result) {
            console.log(result)
            let res = '';
            if(result == null || result.length == 0){
                res = 'fall'
            }else{
                if(result.protocol41){
                    res = 'ok'
                    response.writeHead(200)
                }else {
                    res = 'fall'
                }
            }
            response.write(res);
            response.end();
        })
    })

}

path.set('/custRegister',custRegister)
module.exports  = {
    'path' : path
}
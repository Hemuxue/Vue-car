const url = require('url');
let custService = require('../service/custService')

let path = new Map();

function custRegister(request,response){
    
    request.on('data',function (data) {
        let tempArr = JSON.parse( data.toString())
        let paramsArr = [tempArr.name,tempArr.sex,tempArr.birth,tempArr.address,tempArr.phone,tempArr.createTime]

        custService.insertCustSer(paramsArr,function (result) {
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

function queryAllCust(request,response){
    console.log('inter web')
    custService.queryAllCustSer(function (result) {
        console.log(result)
        let res = '';
        let data = {};
        if(result == null || result.length == 0){
            res = 'fall'
        }else{
            res = JSON.stringify( result)
        }
        response.write(res);
        response.end();
    })

}

function deleCus(request,response){
    
    request.on('data',function (data) {
        console.log('delete')
        let tempArr = JSON.parse( data.toString())
        let phone = tempArr.phone
        custService.deleteByPhoneSer(phone,function (result) {
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

function updateCust(request,response){
    
    request.on('data',function (data) {
        console.log('delete')
        let tempArr = JSON.parse( data.toString())
        let param = [tempArr.cusName,tempArr.sex,tempArr.address,tempArr.phone];
        custService.updataCustSer(param,function (result) {
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
path.set('/allCust',queryAllCust)
path.set('/deleCus',deleCus)
path.set('/update',updateCust)
module.exports  = {
    'path' : path
}
const url = require('url');
let storService = require('../service/storService')
let empService = require('../service/empService')

let path = new Map();

function storRegister(request,response){
    
    request.on('data',function (data) {
        let tempArr = JSON.parse( data.toString())
        let paramsArr = [+tempArr.storeId,tempArr.storeName,tempArr.address,tempArr.phone,tempArr.manager]

        storService.insertStoreSer(paramsArr,function (result) {
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

function queryAllStor(request,response){
    storService.queryAllStoreSer(function (result) {
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

function deleStore(request,response){
    
    request.on('data',function (data) {
        console.log('delete')
        let tempArr = JSON.parse( data.toString())
        let storeName = tempArr.storeName
        storService.deleteByStoreNameSer(storeName,function (result) {
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

function updateStore(request,response){
    
    request.on('data',function (data) {
        console.log('delete')
        let tempArr = JSON.parse( data.toString())
        let param = [tempArr.storeName,tempArr.address,tempArr.phone,tempArr.manager,tempArr.storeId];
        storService.updateStoreSer(param,function (result) {
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


path.set('/storRegister',storRegister)
path.set('/allStore',queryAllStor)
path.set('/deleStore',deleStore)
path.set('/updateStore',updateStore)
module.exports  = {
    'path' : path
}
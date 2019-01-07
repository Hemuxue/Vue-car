let storDao = require('../dao/storeDao')

function insertStoreSer(params,success){
    storDao.insertStore(params,success);
}
function queryAllStoreSer(success){
    storDao.queryAllStor(success)
}

function deleteByStoreNameSer(phone,success){
    storDao.deleteByStoreName(phone,success)
}
function updateStoreSer(params,success){
    storDao.updateStoreByStoreId(params,success)
}

module.exports = {
    'insertStoreSer':insertStoreSer,
    'queryAllStoreSer':queryAllStoreSer,
    'deleteByStoreNameSer':deleteByStoreNameSer,
    'updateStoreSer':updateStoreSer
}
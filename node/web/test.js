let path = new Map();

function getData3(request, response) {

}
function getData4(request,response){

}
path.set('/getData3',getData3)
path.set('/getData4',getData4)
module.exports  = {
    'path' : path
}
import axios from 'axios'

function getLoginCode (config,callback){
    let { method,url }  = config;
    config.method = method || 'get';
    if(!url) throw new Error ('request url is empty')
    axios(config).then((res)=>{
        callback(res)
    })
}
const reqObj = {
    getLoginCode
};


export default reqObj
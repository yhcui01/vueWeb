import axios from 'axios'

function getLoginCode (config,callback){
    let url = '/api/get_code'
    let { method }  = config;
    config.url = url;
    config.method = method || 'get';
    // if(!url) throw new Error ('request url is empty')
    axios(config).then((res)=>{
        callback(res)
    })
}
function getBanner (config,callback){
    let url = '/api/get_banner'
    let { method }  = config;
    config.url = url;
    config.method = method || 'post';
    // if(!url) throw new Error ('request url is empty')
    axios(config).then((res)=>{
        callback(res)
    })
}
function loginEnter (config,callback){
    let url = "/api/user";
    let { method }  = config;
    config.url = url;
    config.method = method || 'post';
    
    // if(!url) throw new Error ('request url is empty')
    axios(config).then((res)=>{
        callback(res)
    })
}

function test (config,callback){
    let url = "/api/test";
    let { method }  = config;
    config.url = url
    config.method = method || 'post';''
    axios(config).then((res)=>{
        callback(res)
    })

}

const reqObj = {
    getLoginCode,
    getBanner,
    loginEnter,
    test
};


export default reqObj
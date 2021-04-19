var request = require("superagent");
var fs = require("fs");
var mainconfig = require("./../Configs/main.json");
var urlconfig = require("./../Configs/urls.json");
var axios = require("axios");
require("dotenv").config();
require("superagent-proxy")(request);

var proxy = process.env.http_proxy || 'http://51.81.196.224:3005';


function OpenOuathClient (api_key, secret_key) {
    return this.VerifyCredentials(api_key, secret_key);
}

OpenOuathClient.prototype.VerifyCredentials = async function(api_key, secret_key) {
    if(!api_key) return new Error("OpenOuath Api Key is required");
    if(!secret_key) return new Error("OpenOuath Secret Key is required");
    let url = `${urlconfig.apiv2}/verify/credentials?akey=${api_key}&skey=${secret_key}`;
    let req = await this.httpRequest("get", url);
    
    if(req.data.status === '401'){
        return new Error("Invalid Credentials")
    } else {
        var session = this;
        return self;
    }

    
}




OpenOuathClient.prototype.httpRequest = function(method, url, data) {
    
    var req = await axios.default({
        method: method,
        url: url,
        data: data,
        
    });

    return req


      
}

OpenOuathClient.prototype.GenerateOuathURL = async function(callback, type) {

    if(type === 'github'){
       let stateID = await srs({length:40});
       let GetRequest = axios.default({
            method: 'GET',
            url: `https://api.openouath.cf/custom/generate/url?callback=${callback}&state=${stateID}`,
            headers: {
                accept: 'application/json'
            }
        });
       

       return `https://ouath.openouath.cf/github/?state=${stateID}`
       
    }

    if(type === 'google'){
        let stateID = await srs({length:40});
       let GetRequest = axios.default({
            method: 'GET',
            url: `https://api.openouath.cf/custom/generate/url?callback=${callback}&state=${stateID}`,
            headers: {
                accept: 'application/json'
            }
        });

       return `https://ouath.openouath.cf/google/?state=${stateID}`
    }

    if(type === 'facebook'){
        let stateID = await srs({length:40});
        let GetRequest = axios.default({
            method: 'GET',
            url: `https://api.openouath.cf/custom/generate/url?callback=${callback}&state=${stateID}`,
            headers: {
                accept: 'application/json'
            }
        });

       return `https://ouath.openouath.cf/facebook/?state=${stateID}`
    }
}

OpenOuathClient.prototype.GetUserInfo = async function(access_token, type) {
    

    if(type === 'github'){
        axios.default({
        method: 'get',
        url: 'https://api.openouath.cf/github/get/user?access_token=' + access_token,

    }).then(async(response) => {
            return response.data;
        });
    }

    if(type === 'google'){
        axios.default({
        method: 'get',
        url: 'https://api.openouath.cf/google/get/user?access_token=' + access_token,

    }).then(async(response) => {
            return response.data;
        });
    }

    if(type === 'facebook'){
        axios.default({
        method: 'get',
        url: 'https://api.openouath.cf/facebook/get/user?access_token=' + access_token,

    }).then(async(response) => {
            return response.data;
        });
    }
}

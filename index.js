let axios = require("axios");
let srs = require("secure-random-string");



exports.GenerateOuathURL = async function(callback, type) {

    if(type === 'github'){
       let stateID = await srs({length:40});
       SendRequest(`https://api.openouath.cf/github/generate/url/custom?callback=${callback}&state=${stateID}`, 'get');

       return `https://ouath.openouath.cf/github/?state=${stateID}`
       
    }

    if(type === 'google'){
        let stateID = await srs({length:40});
       SendRequest(`https://api.openouath.cf/google/generate/url/custom?callback=${callback}&state=${stateID}`, 'get');

       return `https://ouath.openouath.cf/google/?state=${stateID}`
    }

    if(type === 'facebook'){
        let stateID = await srs({length:40});
       SendRequest(`https://api.openouath.cf/facebook/generate/url/custom?callback=${callback}&state=${stateID}`, 'get');

       return `https://ouath.openouath.cf/facebook/?state=${stateID}`
    }
}

exports.GetUserInfo = async function(access_token, type) {
    

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

exports.SendRequest = async(url, type) => {

    if(type === 'get'){
        let GetRequest = axios.default({
            method: 'GET',
            url: url,
            headers: {
                accept: 'application/json'
            }
        });
    } else {
        let PostRequest = axios.default({
            method: 'POST',
            url: url,
            headers: {
                accept: 'application/json'
            }
        });
        
    }
}
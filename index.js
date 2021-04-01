let axios = require("axios");



exports.GenerateOuathURL = async function(callback, type) {

    if(type === 'github'){
        axios.default({
            method: 'get',
            url: 'https://api.openouath.cf/github/generate/url?callback=' + callback

        }).then(async(response) => {
            return response.data.url;
        });
    }

    if(type === 'google'){
        axios.default({
            method: 'get',
            url: 'https://api.openouath.cf/google/generate/url?callback=' + callback
        }).then(async(response) => {
            return response.data.url;
        });
    }

    if(type === 'facebook'){
        axios.default({
            method: 'get',
            url: `https://api.openouath.cf/facebook/generate/url?callback=${callback}`
        }).then(async(response) => {
            return response.data.url;
        });
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
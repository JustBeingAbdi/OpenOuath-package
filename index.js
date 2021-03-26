let axios = require("axios");



exports.GenerateOuathURL = async function(callback, type) {

    if(type === 'github'){
        axios.default({
            method: 'get',
            url: 'api.openauth.cf/github/generate/url?callback=' + callback

        }).then(async(response) => {
            return response.data.url;
        });
    }
}

exports.GetGithubUserInfo = async function(access_token) {
    axios.default({
        method: 'get',
        url: 'api.openauth.cf/get/user?access_token=' + access_token,

    }).then(async(response) => {
        return response.data;
    })
}
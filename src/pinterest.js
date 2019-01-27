var request = require("request");


let options = {
    method: 'GET',
    url: 'https://api.pinterest.com/v1/me/pins/',
    qs: {
        access_token: [
            window.PDK.getSession().accessToken
        ],
        fields: 'link%2Curl%2Cboard%2Ccounts%2Cmedia%2Coriginal_link%2Ccreator'
    },
    headers: {
        'Postman-Token': '9b5f4e04-4a1a-44a5-bb3f-382ee4fe9cdc',
        'cache-control': 'no-cache'
    }
};

let arr = []
request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);

})
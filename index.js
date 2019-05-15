const superagent = require('superagent');
const _ = require('lodash');

const config = {
    app_id: null,
    from: null,
    to: null, 
    message: null, 
    timeout: 5000
}

function create(obj) {

    const url = 'http://kmrvn.api.infobip.com/sms/2/text/single';
    
    obj = Object.assign(config,obj);
    
    let app_id = obj.app_id,
        from = obj.from,
        to = obj.to,
        message = obj.message,
        timeout = obj.timeout;

    if (_.isEmpty(app_id)) {
        throw ("Invalid app id");
    }
    if (_.isEmpty(from)) {
        throw ("Invalid from/sender");
    }
    if (_.isEmpty(to)) {
        throw ("Invalid to number");
    }
    if (_.isEmpty(message)) {
        throw ("Invalid message");
    }

    const headers = {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'authorization': 'App '+app_id
    };

    const data = {from : from, to : to, text : message};

    let response = {};
    return new Promise((resolve, reject) => {
        superagent
            .post(url)
            .send(data) // query string
            .timeout({
                response: timeout,  // Wait 5 seconds for the server to start sending,
                deadline: 60000, // but allow 1 minute for the file to finish loading.
            })
            .set(headers)
            .then((res) => {
                // Do something
                console.log(res);
                const resp = res.body;

                var messageId = resp.messageId;
                
                /*if(code == 200) {
                    response = {'type':'success', 'code':code, 'responce':resp};
                } else {
                    response = {'type':'error', 'code':code, 'responce':resp};
                }*/
                resolve(response);
            })
            .catch(err => reject(err));
    });
}

module.exports = create;
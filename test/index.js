const infobip = require('../index');

const App_ID = '9d1495358977d2a04bb48e0f438e0d4f-561df99e-79ef-4834-8748-6ec8853b3d1f';
const PhoneNumber = '255652003785';
const From = 'L-pesa';
const Message = 'Infobip test sms from Apps';

const obj = {
    app_id: App_ID,
    from: From,
    to: PhoneNumber, 
    message: Message
};

new Promise((resolve, reject) => {
    infobip(obj)
    .then(res => {
        if(res.type == 'error'){
            console.log('error: ', res);
            //return;
            resolve(false);
        } else {
            console.log('success: ',res);
            resolve(true);
        }
    })
    .catch(err => {
        console.log('error: ', err);
        reject(err);
    });
});
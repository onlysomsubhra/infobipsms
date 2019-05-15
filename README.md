# Infobip SMS Gateway

Infobip API Client for Node.js using [Infobip API](https://dev.infobip.com) using APP ID

## Install

```bash
npm install infobipsms --save
```

## Test
```bash
npm test
```

## Basic Usage

```javascript
//import library
const infobip = require('infobipsms');

//get data from database or ...
const App_ID = 'xxx';
const PhoneNumber = '255xxxxxxxxx';
const From = 'xxxx';
const Message = 'Infobip test sms';

const obj = {
    app_id: App_ID,
    from: From,
    to: PhoneNumber, 
    message: Message
};

//send sms
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
```

### Expected success ouput

```
{"messages":[{"to":"255xxxxxxxxx","status":{"groupId":1,"groupName":"PENDING","id":26,"name":"PENDING_ACCEPTED","description":"Message sent to next instance"},"messageId":"1xxx502417369523574"}]}
```
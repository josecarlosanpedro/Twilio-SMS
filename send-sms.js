const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages.list({limit: 20})
               .then(messages => messages.forEach(m => console.log(m)))
               .catch(error => console.log(error, 'error**'));
var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
var authToken = 'your_auth_token';
var Twilio = require('twilio').Twilio;

var client = new Twilio(accountSid, authToken);
var service = client.preview.sync.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');

service.documents('MyFirstDocument').update({
  data: JSON.stringify({ firstName: 'Bob' })
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
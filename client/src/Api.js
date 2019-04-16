const request = require('request');
const server = 'http://127.0.0.1:3001';

exports.postMessage = function(fromUser, text, callback) {
    if (text === '') {
        console.log(`Message is empty. Nothing to post`);
        return;
    }
    console.log(`Message to post ${text} from User ${fromUser}`);

    request.post(
        server + "/message",
        { json: { message: text, from: fromUser } },
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                callback(body);
            }
        }
    ).on('error', (e) => {
            console.error(`Got error: ${e.message}`);
        }
    );
}

exports.getMessageList = function(callback) {
    request.get(server + "/message",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                callback(JSON.parse(body));
            }
        }).on('error', (e) => {
            console.error(`Got error: ${e.message}`);
        });
}

exports.postUser = function(userName, callback) {
    if (userName === '') {
        console.log("user name is empty. nothing to send");
        return;
    }
    request.post(
        server  + "/user",
        { json: { userName:  userName} },
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                callback(body);
            }
        }
    );
}
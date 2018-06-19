const axios = require('axios');
const errors = require('./lib/errors');

const notify = (args) => {
    return new Promise((resolve, reject) => {
        if (!args) {
            reject(errors.MISSING_CONFIGURATION); 
            return;
        }
        if (!args.webhookUrl) {
            reject(errors.MISSING_WEBHOOK_URL);
            return;
        }
        if (!args.data || !args.data.text) {
            reject(errors.MISSING_MESSAGE);
            return;
        }

        return axios.post(args.webhookUrl, args.data)
            .then((response) => {
                resolve(response);
            })
            .catch((e) => {
                reject(e);
            });
    });
}

module.exports = {
    notify
}
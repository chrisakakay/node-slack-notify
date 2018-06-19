import test from 'ava';
const mock = require('mock-require');

mock('axios', { 
    post: () => {
        return new Promise((resolve, reject) => { resolve(); });
    }
});

const s = require('./index');
const e = require('./lib/errors');

test('notify function is exposed', t => {
    t.true(s.notify !== undefined);
});

test('notify function without any parameter', t => {
    return s.notify()
        .then(() => {
            t.fail();
        })
        .catch((error) => {
            t.true(error === e.MISSING_CONFIGURATION);
        });
});

test('notify function without any parameter', t => {
    return s.notify({})
        .then(() => {
            t.fail();
        })
        .catch((error) => {
            t.true(error === e.MISSING_WEBHOOK_URL);
        });
});

test('notify function without message', t => {
    return s.notify({
            webhookUrl: 'https://hooks.slack.com/services/VALIDLOOKINGWEBHOOKTOKEN'
        })
        .then(() => {
            t.fail();
        })
        .catch((error) => {
            t.true(error === e.MISSING_MESSAGE);
        });
});

test('notify function with hook and message', t => {
    return s.notify({
            webhookUrl: 'https://hooks.slack.com/services/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',
            data: {
                text: 'Test message'
            }
        })
        .then(() => {
            t.pass();
        });
});

test('notify function with hook and customized message', t => {
    return s.notify({
            webhookUrl: 'https://hooks.slack.com/services/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',
            data: {
                text: '*bold* `code` _italic_ ~strike~',
                username: "markdownbot",
                mrkdwn: true
            }
        })
        .then(() => {
            t.pass();
        });
});


import test from 'ava';
const mock = require('mock-require');

mock('https', {
    request: (opts, callback) => {
        return {
            write: () => {},
            end: () => {
                callback({ statusCode: 200 });
            }
        }
    }
});

const s = require('./index');

test('notify function is exposed', t => {
    t.true(s.notify !== undefined);
});

test('notify function without any parameter', t => {
    return s.notify()
        .then(() => {
            t.fail();
        })
        .catch((error) => {
            t.true(error === 'ERR: Missing configuration');
        });
});

test('notify function without webhook', t => {
    return s.notify({})
        .then(() => {
            t.fail();
        })
        .catch((error) => {
            t.true(error === 'ERR: Missing webhookUrl');
        });
});

test('notify function without message', t => {
    return s.notify({
            webhookUrl: '/services/VALIDLOOKINGWEBHOOKTOKEN'
        })
        .then(() => {
            t.fail();
        })
        .catch((error) => {
            t.true(error === 'ERR: Missing message');
        });
});

test('notify function with hook and message', t => {
    return s.notify({
            webhookUrl: '/services/VALIDLOOKINGWEBHOOKTOKEN',
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
            webhookUrl: '/services/VALIDLOOKINGWEBHOOKTOKEN',
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


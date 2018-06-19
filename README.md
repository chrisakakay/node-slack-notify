# node-slack-notify

![Badge](https://circleci.com/gh/chrisakakay/node-slack-notify.svg?&style=shield&circle-token=6dd166b15aa0138528147d9d098d3d3ab42a9b8b)

Simple slack notification module (yet an other one)

## Usage

```javascript
import { notify } from 'node-slack-notify';

notify({
  webhookUrl: 'YOUR_OWN_WEBHOOK_URL',
  data: {}
});
```

The `data` property takes the same configuration you find in the docs here: https://api.slack.com/docs/messages

More information on setting up webhooks: https://api.slack.com/incoming-webhooks

Builder for creating your own configuration: https://api.slack.com/docs/messages/builder

Ohh and the `notify()` function is a promise ..

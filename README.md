# node-slack-notify

Simple slack notification module (yet an other one)

## Usage

```javascript
import { notify } from 'node-slack-notify';

notify({
  webhookUrl: 'YOUR_OWN_WEBHOOK_URL', // starts with "/services/.."
  data: {
    text: 'Hello'
  }
});
```

The `data` property takes the same configuration you find in the docs here: https://api.slack.com/docs/messages

More information on setting up webhooks: https://api.slack.com/incoming-webhooks

Builder for creating your own configuration: https://api.slack.com/docs/messages/builder

Ohh and the `notify()` function is a promise ..

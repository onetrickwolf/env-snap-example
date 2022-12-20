# Environment Variable Example Snap

This Snap demonstrates how to compile Snaps with environment variables by modifying the browserify object.

## Example Usage

`PUBLIC_KEY=abc123 SNAP_ENV=dev && mm-snap build`

Can also use a `.env` file

## Code
```js
// snap.config.js

const envify = require('envify/custom');
require('dotenv').config();

module.exports = {
  cliOptions: {
    src: './src/index.ts',
    port: 8080,
  },
  bundlerCustomizer: (bundler) => {
    bundler.transform(
      envify({
        SNAP_ENV: process.env.SNAP_ENV,
        PUBLIC_KEY: process.env.PUBLIC_KEY,
      }),
    );
  },
};
```

```js
// Example usage within snap

return wallet.request({
  method: 'snap_confirm',
  params: [
    {
      prompt: getMessage(origin),
      description:
        'This custom confirmation is just for display purposes.',
      textAreaContent: `SNAP_ENV is ${process.env.SNAP_ENV}, PUBLIC_KEY is ${process.env.PUBLIC_KEY}`,
    },
  ],
});
```

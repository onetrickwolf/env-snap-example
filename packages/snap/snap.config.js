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

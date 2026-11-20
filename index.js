const config = require('config');
const addon = require('./server.js');
const logger = require('./common/logger');

const HOSTNAME = config.get('hostname');
const PORT = Number(process.env.PORT) || Number(config.get('port'));

// Explicit IPv4 binding allows Render's port scanner to reach the service.
addon.listen(PORT, '0.0.0.0', function () {
  logger.debug(`Is production: ${config.get('isProduction')}`);
  logger.info(`Add-on listening on 0.0.0.0:${PORT}`);
  logger.info(`Add-on Repository URL: ${HOSTNAME}/<TOKEN>/manifest.json`);
});

const logger = require('../common/logger');

function errorHandler(err, req, res, next) {
  logger.error(err, {
    description: 'Global error occurred',
    req: req.originalUrl,
  });

  if (res.headersSent) {
    return next(err);
  }

  return res.status(500).json({ error: 'Internal Server Error' });
}

module.exports = errorHandler;

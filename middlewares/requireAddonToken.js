const crypto = require('crypto');

const addonToken = process.env.ADDON_TOKEN;
if (!addonToken || addonToken.length < 32) {
  throw new Error('ADDON_TOKEN must be configured with at least 32 characters');
}

const expected = crypto.createHash('sha256').update(addonToken).digest();

module.exports = function requireAddonToken(req, res, next) {
  const provided = req.params.token;
  if (typeof provided !== 'string') {
    return res.status(403).json({ error: 'Forbidden' });
  }
  const received = crypto.createHash('sha256').update(provided).digest();
  if (!crypto.timingSafeEqual(received, expected)) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  res.set('Cache-Control', 'no-store');
  res.set('Referrer-Policy', 'no-referrer');
  next();
};

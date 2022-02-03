var crypto = require('crypto');

export default function handler(req, res) {
  // generate transaction id
  const transactionId = crypto.randomBytes(20).toString('hex');
  res.status(200).json({ transactionId });
}

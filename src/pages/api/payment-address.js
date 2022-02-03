export default function handler(req, res) {
  // doing something with data from req.body
  // e.g. {"total":{"currency":"SHIB","price":0.11402},"promo":"10% OFF NEXT ORDER"}
  res.status(200).json({ paymentAddress: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa' });
}

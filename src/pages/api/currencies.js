export default function handler(req, res) {
  res.status(200).json([
    { currency: 'BTC', price: 0.00241 },
    { currency: 'ETH', price: 0.01256 },
    { currency: 'SHIB', price: 0.11402 }
  ]);
}

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://lucastravagin.com.br' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://lucastravagin.com.br',
  'process.env.CLIENT_ID': '1VuAgHYhHyGTzimsIlgLoYdQZk4gnJ4Q'
}

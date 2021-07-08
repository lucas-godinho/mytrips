// eslint-disable-next-line @typescript-eslint/no-var-requires
const WithPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = WithPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})

module.exports = {
  reactStrictMode: true
}

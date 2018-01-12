const PROXY_CONFIG = {
  '/api': {
    // target: 'https://man.visionet.cn',
    target: 'http://127.0.0.1:40000',
    secure: false,
    changeOrigin: true,
    // ws: true,
    pathRewrite: {
      '^/api': ''
    }
  }
}

module.exports = PROXY_CONFIG;
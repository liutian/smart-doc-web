const PROXY_CONFIG = {
  '/api': {
    target: "https://man.visionet.cn",
    secure: false,
    changeOrigin: true
    // ws: true,
    // pathRewrite: {
    //   '^/proxy': '/api'
    // }
  }
}

module.exports = PROXY_CONFIG;
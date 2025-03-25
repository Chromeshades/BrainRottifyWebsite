module.exports = {
  apps: [{
    name: 'brain-rottify',
    script: 'index.js',
    watch: true,
    env: {
      NODE_ENV: 'development',
      PORT: 9001,
      API_PREFIX: '/api'
    }
  }]
};
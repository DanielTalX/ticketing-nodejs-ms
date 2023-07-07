module.exports = {
  // file change detection
  webpack: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
};

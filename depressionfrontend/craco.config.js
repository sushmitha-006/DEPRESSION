// craco.config.js
module.exports = {
    devServer: (devServerConfig) => {
      devServerConfig.allowedHosts = ['localhost']; // Ensure this is a non-empty string
      return devServerConfig;
    },
  };
  
module.exports = {
  configureWebpack: {
    devServer: {
      watchOptions: {
        poll: true,
      },
    },
  },
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
};

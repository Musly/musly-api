module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    compact: true,
    presets: [
      '@babel/preset-env',
    ],
  };
};
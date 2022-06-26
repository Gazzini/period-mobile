module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
          'babel-plugin-root-import',
          {
              rootPathSuffix: './src',
              rootPathPrefix: '~/',
          },
      ],
      [
          'module-resolver',
          {
              root: ['./src'],
              extensions: ['.ts', 'tsx'],
          }
      ]
  ]
  };
};

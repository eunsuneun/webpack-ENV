module.exports = function myBabelPrest() {
  return {
    plugins: [
      '@babel/plugin-transform-block-scoping',
      '@babel/plugin-transform-arrow-functions',
      '@babel/plugin-transform-strict-mode',
    ],
  };
};

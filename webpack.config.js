var webpack = require('webpack');
var path = require('path');
var package = require('./package.json');

var isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';
var sourcePath = path.join(__dirname, './src');
var outPath = path.join(__dirname, './build');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: sourcePath,
  entry: {
    app: './main.tsx',
  },
  output: {
    path: outPath,
    filename: isProduction ? '[contenthash].js' : '[contenthash].js',
  },
  target: 'web',
  resolve: {
    preferRelative: true,
    extensions: ['.js', '.ts', '.tsx'],
    mainFields: ['module', 'browser', 'main'],
    alias: {
      app: path.resolve(__dirname, 'src/app/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          !isProduction && {
            loader: 'babel-loader',
            options: { plugins: ['react-hot-loader/babel'] },
          },
          'ts-loader',
        ].filter(Boolean),
      },
      {
        test: /\.(css|scss)$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProduction,
              importLoaders: 1,
              modules: {
                localIdentName: isProduction ? '[hash:base64:5]' : '[local]__[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  require('postcss-import')(),
                  require('postcss-url')(),
                  require('postcss-preset-env')({
                    stage: 2,
                  }),
                  require('postcss-reporter')(),
                  require('postcss-browser-reporter')({
                    disabled: isProduction,
                  }),
                ],
              },
            },
          },
        ],
      },
      { test: /\.html$/, use: 'html-loader' },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
    ],
  },
  optimization: {
    // splitChunks: {
    //   name: '[chunkhash].[fullhash]',
    //   cacheGroups: {
    //     commons: {
    //       chunks: 'initial',
    //       minChunks: 2,
    //     },
    //     vendors: {
    //       test: /[\\/]node_modules[\\/]/,
    //       chunks: 'all',
    //       filename: isProduction ? 'vendor.[contenthash].js' : 'vendor.[fullhash].js',
    //       priority: -10,
    //     },
    //   },
    // },
    runtimeChunk: true,
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false,
    }),
    new CleanWebpackPlugin(),
    this.mode === 'production'
      ? new MiniCssExtractPlugin({
          filename: '[fullhash].css',
        })
      : false,
    new HtmlWebpackPlugin({
      template: 'app/public/index.html',
      minify: {
        minifyJS: true,
        minifyCSS: true,
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
      },
      append: {
        head: `<script src="//cdn.polyfill.io/v3/polyfill.min.js"></script>`,
      },
      meta: {
        title: package.name,
        description: package.description,
        keywords: Array.isArray(package.keywords) ? package.keywords.join(',') : undefined,
      },
    }),
  ].filter(Boolean),
  devServer: {
    // contentBase: sourcePath,
    hot: true,
    // inline: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    // stats: 'minimal'
    // clientLogLevel: 'warning'
  },
  // https://webpack.js.org/configuration/devtool/
  devtool: isProduction ? 'hidden-source-map' : 'eval-cheap-module-source-map',
  node: {
    // workaround for webpack-dev-server issue
    // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
    // fs: 'empty',
    // net: 'empty'
  },
};

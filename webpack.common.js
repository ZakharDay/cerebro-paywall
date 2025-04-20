const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    style_bundle: './src/view/style_bundle.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      // {
      //   test: /\.(sa|sc|c)ss$/i,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         postcssOptions: {
      //           plugins: [['postcss-preset-env']]
      //         }
      //       }
      //     },
      //     'sass-loader'
      //   ]
      // },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    // Landing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/view/index.html',
      filename: './index.html',
      chunks: ['style_bundle']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/view/pages/full.html',
      filename: './pages/full.html',
      chunks: ['style_bundle']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/view/pages/no-scroll.html',
      filename: './pages/no-scroll.html',
      chunks: ['style_bundle']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/view/pages/no-promo.html',
      filename: './pages/no-promo.html',
      chunks: ['style_bundle']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/view/pages/layout.html',
      filename: './pages/layout.html',
      chunks: ['style_bundle']
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/view/partials/O_MenuBar.html'),
        location: 'O_MenuBar',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/view/partials/S_NavigationBar.html'),
        location: 'S_NavigationBar',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/view/partials/S_NoticeBar.html'),
        location: 'S_NoticeBar',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/view/partials/S_SideBar.html'),
        location: 'S_SideBar',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}

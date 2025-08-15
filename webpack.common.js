const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    style_bundle: './src/view/style_bundle.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
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
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin(),

    // Landing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/view/index.html',
      filename: './index.html',
      chunks: ['style_bundle']
    }),

    // Clients & Cabinets
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/view/pages/v2-navigation-cabinet.html',
      filename: './pages/v2-navigation-cabinet.html',
      chunks: ['style_bundle']
    }),

    // Navigation
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/view/pages/navigation-cabinet.html',
      filename: './pages/navigation-cabinet.html',
      chunks: ['style_bundle']
    }),

    // Pay Wall
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/view/pages/paywall-full.html',
      filename: './pages/paywall-full.html',
      chunks: ['style_bundle']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/view/pages/paywall-no-scroll.html',
      filename: './pages/paywall-no-scroll.html',
      chunks: ['style_bundle']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/view/pages/paywall-no-promo.html',
      filename: './pages/paywall-no-promo.html',
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
    ]),

    new HtmlWebpackPartialsPlugin([
      {
        // prettier-ignore
        path: path.join(__dirname, './src/view/partials/T_EntityBarsFolders.html'),
        location: 'T_EntityBarsFolders',
        template_filename: '*',
        priority: 'replace'
      }
    ]),

    new HtmlWebpackPartialsPlugin([
      {
        // prettier-ignore
        path: path.join(__dirname, './src/view/partials/v2_T_EntityBarsFolders.html'),
        location: 'v2_T_EntityBarsFolders',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()]
  },
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify')
    }
  }
}

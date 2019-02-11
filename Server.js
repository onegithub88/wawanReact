import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.dev';

const bundler = webpack(config);

browserSync({
  port:4000,
  ui:{ port:4001 },
  server:{
    baseDir:'src',
    middleware:[
    webpackDevMiddleware(bundler,{
      publicPath:config.output.publicPath,
      noInfo:true,
      quiet:true,
      stats:"minimal"
    }),
    webpackHotMiddleware(bundler)
    ]
  },
  ghostMode:false,
  file :[
      'src/*.html'
  ]
})
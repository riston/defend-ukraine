var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");

var compiler = webpack({
    // configuration
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    }
});
var server = new WebpackDevServer(compiler, {
    // webpack-dev-server options
    contentBase: "/src",
    // or: contentBase: "http://localhost/",

//    hot: true,
    // Enable special support for Hot Module Replacement
    // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
    // Use "webpack/hot/dev-server" as additional module in your entry point

    // webpack-dev-middleware options
    quiet: false,
    noInfo: false,
    lazy: true,
    watchDelay: 300,
    publicPath: "/dist",
    stats: { colors: true }
});
server.listen(8080, "localhost", function() {});
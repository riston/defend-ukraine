module.exports = {
    // context: __dirname + "/src",
    entry: "./src/index.js",
    externals: {
        "pixi": "PIXI",
        "tween": "TWEEN"
    },
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    }
};

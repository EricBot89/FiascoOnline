module.exports = {
    "mode": "development",
    "entry": __dirname + "/client/index.js",
    "output": {
        "path": __dirname+'/public',
        "filename": "bundle.js"
    },
    "module": {
        "rules": [
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"]
            },
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "env",
                            "react"
                        ]
                    }
                }
            }
        ]
    }
}

module.exports = {
    "mode": "development",
    "entry": __dirname + "/comps/index.js",
    "output": {
        "path": __dirname+'/public',
        "filename": "bundle.js"
    },
    "module": {
        "rules": [
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

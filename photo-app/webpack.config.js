// este archivo sale de la documenetacion 
module.exports = {
    mode: 'production', // modo de ejecucion 
    entry: './src/main.ts',  // punto de entrada 
    devtool: 'inline-source-map', 
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'], // tsx o alguna otra 
    },
    output: {
        filename: 'bundle.js', // main.js compilado ahora será bundle.js 
    }
}
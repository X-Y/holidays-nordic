import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'

let pkg = require('./package.json')
let external = Object.keys(pkg.dependencies)

let plugins = [
    babel(babelrc()),
]

export default {
    entry: 'src/holidays-nordic.js',
    plugins: plugins,
    external: external,
    targets: [
        {
            dest: pkg.main,
            format: 'umd',
            moduleName: 'Holidays Checker - Nordic',
            sourceMap: true
        },
        {
            dest: pkg.module,
            format: 'es',
            sourceMap: true
        }
    ]
}

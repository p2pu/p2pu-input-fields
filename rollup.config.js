import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import css from 'rollup-plugin-css-only';
import json from 'rollup-plugin-json';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/build.js',
    format: 'es'
  },
  external: [
    'react',
    'react-dom',
    'prop-types',
    'lodash',
    'axios',
    'jsonp',
    "moment",
    "moment-timezone",
    "rc-time-picker"
  ],
  plugins: [
    resolve({
      extensions: [ '.js', '.jsx' ],
      jsnext: true,
      main: true
    }),
    json(),
    commonjs(),
    babel({
      exclude: [ 'node_modules/**', '**/*.json' ]
    }),
    css({ output: 'dist/build.css' })
  ]
};
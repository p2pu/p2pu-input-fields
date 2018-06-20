import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import { uglify } from "rollup-plugin-uglify";
import css from "rollup-plugin-css-only";
import json from "rollup-plugin-json";

const env = process.env.NODE_ENV;
const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/
};

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/p2pu-input-fields.umd.js",
      name: "p2puInputFields",
      format: "umd",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        "prop-types": "PropTypes",
        lodash: "lodash",
        axios: "axios",
        jsonp: "jsonp",
        moment: "moment",
        "moment-timezone": "moment-timezone",
        "rc-time-picker": "rc-time-picker",
      }
    },
    {
      file: 'dist/p2pu-input-fields.esm.js',
      format: 'es',
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        "prop-types": "PropTypes",
        lodash: "lodash",
        axios: "axios",
        jsonp: "jsonp",
        moment: "moment",
        "moment-timezone": "moment-timezone",
        "rc-time-picker": "rc-time-picker",
      }

    }
  ],
  external: [
    "react",
    "react-dom",
    "prop-types",
    "lodash",
    "axios",
    "jsonp",
    "moment",
    "moment-timezone",
    "rc-time-picker"
  ],
  plugins: [
    resolve({
      extensions: [".js", ".jsx"],
      jsnext: true,
      main: true
    }),
    replace({ "process.env.NODE_ENV": JSON.stringify(env) }),
    json(),
    commonjs(commonjsOptions),
    babel({
      presets: [
        [
          "es2015",
          {
            modules: false
          }
        ]
      ],
      exclude: ["node_modules/**", "**/*.json"],
      plugins: [
        "external-helpers",
        "transform-react-jsx",
        "transform-class-properties"
      ]
    }),
    css({ output: "dist/build.css" }),
  ]
};

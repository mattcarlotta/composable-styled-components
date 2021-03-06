import { resolve } from "path";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import filesize from "rollup-plugin-filesize";
import resolver from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import { localResolver } from "./utils/resolver";
import pkg from "./package.json";

const outputs = [
  { file: "module", format: "esm" },
  { file: "main", format: "umd" },
  { file: "browser", format: "cjs" }
];

export default {
  input: "./lib/index.js",
  output: outputs.map(({ file, format }) => ({
    file: pkg[file],
    name: "composable-styled-components",
    format,
    globals: {
      react: "React",
      "react-is": "reactIs",
      "react-dom": "ReactDOM",
      "styled-components": "styled"
    },
    exports: "named",
    sourcemap: true
  })),
  external: ["react", "react-dom", "styled-components"],
  plugins: [
    babel({
      configFile: resolve(__dirname, "babel.config.js"),
      babelHelpers: "runtime",
      exclude: "node_modules/**"
    }),
    resolver(),
    localResolver(),
    commonjs(),
    terser({
      output: {
        comments: false
      }
    }),
    filesize()
  ]
};

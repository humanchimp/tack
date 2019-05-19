import ts from "@wessberg/rollup-plugin-ts";
import typescript from "typescript";
import multiEntry from "rollup-plugin-multi-entry";
import packageJson from "./package.json";

export default {
  input: "src/*.ts",
  output: [{
    format: 'esm',
    file: packageJson.module,
    sourcemap: true,
  },{
    format: 'cjs',
    file: packageJson.main,
    sourcemap: true,
  }],
  plugins: [
    ts({ typescript }),
    multiEntry(),
  ]
};

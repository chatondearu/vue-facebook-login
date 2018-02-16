// rollup.config.js

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/vue-facbook-login.js',
    format: 'cjs'
  },
  sourcemap: true,
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  watch: {
    include: 'src/**'
  }
};

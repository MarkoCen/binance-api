import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import externals from 'rollup-plugin-node-externals';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'lib/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
    },
    plugins: [
      externals({
        builtins: true,
        deps: true,
        devDeps: true,
        exclude: [],
        include: [],
      }),
      commonjs(),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
            sourceMap: true,
            target: 'ES2015',
          },
          include: ['lib/**/*.ts'],
        },
      }),
      terser({
        mangle: false,
        output: { comments: false },
      }),
    ],
  },
  {
    input: 'lib/index.ts',
    output: {
      file: 'dist/browser.js',
      format: 'umd',
      name: 'BinanceClient',
    },
    plugins: [
      nodePolyfills(),
      resolve({
        browser: true,
        preferBuiltins: false,
      }),
      commonjs(),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
            sourceMap: true,
            target: 'ES5',
          },
          include: ['lib/**/*.ts'],
        },
      }),
      terser({
        mangle: false,
        output: { comments: false },
      }),
    ],
  },
];

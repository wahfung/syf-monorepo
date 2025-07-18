import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { defineConfig } from 'rollup';

export default defineConfig([
  // JavaScript bundle
  {
    input: 'index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        browser: true,
        preferBuiltins: false,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist',
      }),
    ],
    external: ['react', 'react-dom'],
  },
  // CSS bundle
  {
    input: 'styles.css',
    output: {
      file: 'dist/index.css',
    },
    plugins: [
      postcss({
        extract: true,
        minimize: true,
      }),
    ],
  },
]);
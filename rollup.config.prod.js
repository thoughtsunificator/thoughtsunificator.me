import postcss from 'rollup-plugin-postcss';
import svg from 'rollup-plugin-svg';
import { terser } from 'rollup-plugin-terser';
import path from 'path';

export default {
	input: 'assets/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'main',
		file: 'dist/main.bundle.js',
	},
	plugins: [
		svg(),
		postcss({
			extract: path.resolve('dist/main.bundle.css'),
			minimize: true,
		}),
		terser(),
	],
	watch: {
		clearScreen: false,
	}
};

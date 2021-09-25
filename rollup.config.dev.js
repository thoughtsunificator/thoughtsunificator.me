import postcss from 'rollup-plugin-postcss';
import svg from 'rollup-plugin-svg';
import path from 'path';
import serve from "rollup-plugin-serve"
import livereload from "rollup-plugin-livereload"

export default {
	input: 'assets/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'main',
		file: 'dist/main.bundle.js',
	},
	watch: {
		clearScreen: false,
	},
	plugins: [
		svg(),
		postcss({
			extract: path.resolve('dist/main.bundle.css'),
			minimize: false,
		}),
		serve({
			contentBase: 'dist',
			port: 3000
		}),
		livereload({
			watch: "dist",
			verbose: true
		})
	]
};

import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'dist/index.js',
	output: [{
		sourcemap: true,
		format: 'amd',
		name: 'WindowControlUI',
		file: 'dist/amd.js'
	},
	{
		sourcemap: true,
		format: 'cjs',
		name: 'WindowControlUI',
		file: 'dist/cjs.js'
	},
	{
		sourcemap: true,
		format: 'es',
		name: 'WindowControlUI',
		file: 'dist/es.js'
	},
	{
		sourcemap: true,
		format: 'iife',
		name: 'WindowControlUI',
		file: 'dist/iife.js'
	},
	{
		sourcemap: true,
		format: 'umd',
		name: 'WindowControlUI',
		file: 'dist/umd.js'
	},
	{
		sourcemap: true,
		format: 'system',
		name: 'WindowControlUI',
		file: 'dist/system.js'
	}],
	plugins: [
		svelte({
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production,
			},
      emitCss: false,
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte'],
			exportConditions: ['svelte']
		}),
		commonjs(),
		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	]
};
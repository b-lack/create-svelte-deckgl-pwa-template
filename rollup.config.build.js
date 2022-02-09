import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace';


export default {
    input: 'src/index.js',
    output: {
        file: 'docs/build/app.js',
        sourcemap: true
    },
    plugins: [
        svelte({
            emitCss: false,
        }), 
        resolve({
            browser: true
        }),
        commonjs(),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
            preventAssignment: true
        })
    ]
};
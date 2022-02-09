import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'


export default {
    input: 'src/index.js',
    output: {
        file: 'docs/build/app.js'
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
            'process.env.NODE_ENV': JSON.stringify('development'),
            preventAssignment: true
        }),
        livereload(),
        serve({
            openPage: '/docs/',
            open: true,
            port: 10011
        })
    ]
};
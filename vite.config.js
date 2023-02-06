import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import requireTransform from 'vite-plugin-require-transform';
import resolve from '@rollup/plugin-node-resolve';
const replace = require('@rollup/plugin-replace');
import reactIcons from 'vite-plugin-react-icons';

export default {
    plugins : [
        react(),
        reactIcons(),
        replace({
            preventAssignment: true,
            "process.env.NODE_ENV": JSON.stringify("development")
        }),
        resolve(),
        requireTransform({}),
        ssr({prerender: true})
    ],
    resolve : {
        alias: {
            "#root": __dirname
        }
    },
    build : {
        ssr: true,

        lib: {
            entry: 'index.js',
            formats: ['cjs']
        },
        rollupOptions: {
            output: {
                entryFileNames: '[name].cjs'
            }
        }
    }

}

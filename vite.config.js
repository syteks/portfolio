import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

const javascriptDefaultDirectory = '/resources/js';

export default defineConfig({
    server: {
        hmr: {
            host: "localhost",
        },
        port: 3000,
        host: true,
    },
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
            '@': path.resolve(__dirname, javascriptDefaultDirectory),
            '@components': path.resolve(__dirname, javascriptDefaultDirectory + '/components'),
            '@composables': path.resolve(__dirname, javascriptDefaultDirectory + '/composables'),
        },
        extensions: ['.js', '.vue', '.json']
    },
});

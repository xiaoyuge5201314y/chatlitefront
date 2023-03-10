import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

import  {AntdResolve, createStyleImportPlugin} from 'vite-plugin-style-import'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        createStyleImportPlugin({
            resolves: [
                AntdResolve()
            ]
        })
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, './src')
        }
    },
    server: {
        host: true,
        port: 9528
    }
})

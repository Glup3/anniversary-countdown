import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

const manifestForPWA: Partial<VitePWAOptions> = {
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
    manifest: {
        name: 'Annaversary',
        short_name: 'Annaversary',
        description: 'All Annaversaries in one place',
        start_url: '/anniversary-countdown/',
        background_color: '#f9f9f9',
        icons: [
            {
                src: 'pwa-64x64.png',
                sizes: '64x64',
                type: 'image/png',
            },
            {
                src: 'pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: 'pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: 'maskable-icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
    },
    devOptions: {
        enabled: true,
    },
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), VitePWA(manifestForPWA)],
    base: '/anniversary-countdown/',
})

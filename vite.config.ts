/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
    plugins: [react(), nodePolyfills()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/tests/setup.ts',
    },
});

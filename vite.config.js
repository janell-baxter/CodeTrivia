import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({

    plugins: [react()],

    // Change this to match the GitHub repository name
    base: '/CodeTrivia/'

});
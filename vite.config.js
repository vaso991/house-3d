import { defineConfig } from 'vite';

export default defineConfig({
  // Set base path for GitHub Pages deployment
  // Uses the repository name when GITHUB_REPOSITORY is available
  base: process.env.GITHUB_ACTIONS
    ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1] || ''}/`
    : '/',
});

# Hosting

This project is hosted on Cloudflare Pages.

## Why Cloudflare

- Very small setup effort
- Native Git integration (automatic deploy on push)
- Fast global edge delivery
- Good fit for Nuxt deployments

## Deployment Setup

1. Connect the GitHub repository to Cloudflare Pages.
2. Set the production branch (for example: `main`).
3. Configure build settings:
	- Build command: `npm run build`
	- Output directory: `.output/public`
4. Set environment variables in Cloudflare (if needed), including Node 22.

## CI/CD Flow

- Every push to the configured branch triggers a new Cloudflare deployment.
- Pull requests can generate preview deployments.
- The GitHub CI pipeline (lint, test, build) validates code quality before merge.

## Operational Notes

- Hosting effort is intentionally minimal: connect repo, set build command, deploy.
- No custom server maintenance is required.
- Updates are shipped automatically through Git-based deployments.
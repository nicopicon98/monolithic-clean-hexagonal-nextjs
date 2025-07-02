# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 learning project built with TypeScript, TailwindCSS, and React 19. The project demonstrates basic Next.js concepts including App Router, API routes, and server-side rendering. It includes a products feature with a simple Clean Architecture pattern implementation.

## Technology Stack

- **Framework**: Next.js 15.3.4 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: TailwindCSS v4 with PostCSS
- **Runtime**: Node.js with Turbopack (dev mode)
- **Fonts**: Geist Sans and Geist Mono via next/font/google

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Architecture Patterns

### Clean Architecture Implementation
The project follows Clean Architecture principles in the `src/features/` directory:

```
src/features/products/
├── domain/           # Business logic interfaces
├── application/      # Use cases and business rules
└── infrastructure/   # External dependencies (repositories, APIs)
```

### Key Components

- **API Routes**: Located in `src/app/api/` using Next.js App Router
- **Pages**: Server components in `src/app/` directories
- **Features**: Organized by domain in `src/features/`

### Current Implementation Status

The products feature is partially implemented:
- API route returns hardcoded product data
- Use case class exists but isn't connected to the API route
- Repository pattern is scaffolded but empty
- Products page fetches directly from API endpoint

## Path Aliases

- `@/*` maps to `./src/*` (configured in tsconfig.json)

## Development Notes

- The project uses Turbopack in development mode for faster builds
- Server components are used by default with Next.js App Router
- Font optimization is handled automatically with next/font/google
- The development server runs on http://localhost:3000
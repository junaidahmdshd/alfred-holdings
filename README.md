# Alfred Holdings

A modern Next.js 15 application with Tailwind CSS v4, showcasing best practices for building high-quality web applications.

## Technologies

- **Next.js 15** with App Router
- **Tailwind CSS v4** with JIT and custom configuration
- **Headless UI** for accessible UI components
- **TypeScript** for type safety
- **Utility Libraries**:
  - `clsx` for conditional classnames
  - `tailwind-merge` for class merging
  - `class-variance-authority` for component styling patterns

## Project Structure

```
alfred-holdings/
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js App Router
│   ├── components/     # React components
│   │   └── ui/         # Reusable UI components
│   ├── lib/            # Utility functions
│   │   └── utils.ts    # Common utilities
│   ├── styles/         # Global styles
│   └── config/         # Application configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── postcss.config.mjs  # PostCSS configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies
```

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **Modern UI Components** - Button, Container, Heading with consistent styling
- **Responsive Design** - Mobile-first approach with responsive breakpoints
- **Type Safety** - Fully typed components and utilities
- **Developer Experience** - Code formatting with Prettier and linting with ESLint

## Base Components

The project includes several foundational components:

- **Button** - With variants, sizes, and styling options
- **Container** - For consistent layout wrapping
- **Heading** - For typography hierarchy with variants

## Configuration

### Tailwind CSS

Tailwind CSS is configured with JIT and a custom configuration, including:

- Custom color palette
- Animation and transition utilities
- Extended typography options

### ESLint and Prettier

Code quality is maintained with:

- ESLint for code quality
- Prettier for code formatting
- Integration with TypeScript for type checking

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Tailwind CSS](https://tailwindcss.com/docs) - learn about Tailwind CSS.
- [TypeScript](https://www.typescriptlang.org/docs) - learn about TypeScript.

## License

MIT

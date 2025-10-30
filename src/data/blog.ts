export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags: string[]
}

const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'optimizing-bundle-size',
    title: 'Optimizing Frontend Bundle Size with Dynamic Imports',
    date: '2025-03-15',
    excerpt:
      'Learn how to reduce your frontend bundle size by 40% using dynamic imports and code splitting techniques.',
    content: `
# Optimizing Frontend Bundle Size with Dynamic Imports

When building large-scale frontend applications, bundle size can quickly become a performance bottleneck. In this article, I'll share techniques I used to reduce bundle size by implementing dynamic imports and manual chunks.

## The Problem

Large JavaScript bundles lead to:
- Slower initial page loads
- Poor user experience on slower networks
- Wasted bandwidth loading unused code

## The Solution: Dynamic Imports

Dynamic imports allow you to load code only when it's needed:

\`\`\`javascript
// Before: Static import
import HeavyComponent from './HeavyComponent'

// After: Dynamic import
const HeavyComponent = lazy(() => import('./HeavyComponent'))
\`\`\`

## Results

By implementing dynamic imports and manual chunking:
- Reduced initial bundle size by 40%
- Improved Time to Interactive (TTI) by 2.5 seconds
- Better caching strategy for frequently used components

## Key Takeaways

1. Analyze your bundle with tools like webpack-bundle-analyzer
2. Identify large dependencies that can be lazy-loaded
3. Use React.lazy() for component-level code splitting
4. Configure manual chunks for better caching
    `,
    tags: ['Performance', 'React', 'JavaScript'],
  },
  {
    slug: 'code-quality-with-husky',
    title: 'Maintaining Code Quality with Husky and Git Hooks',
    date: '2025-02-28',
    excerpt:
      'Automate code quality checks in your development workflow using Husky and pre-commit hooks.',
    content: `
# Maintaining Code Quality with Husky and Git Hooks

Consistent code quality is essential for team productivity. Here's how I implemented automated quality checks using Husky.

## Why Git Hooks?

Git hooks allow you to run scripts automatically at key points in the git workflow:
- Before commits (pre-commit)
- Before pushes (pre-push)
- After checkouts (post-checkout)

## Setting Up Husky

\`\`\`bash
npm install -D husky
npx husky init
\`\`\`

## Pre-commit Hook Example

\`\`\`bash
#!/bin/sh
npm run lint
npm run format
npm run type-check
\`\`\`

## Benefits

- Catches issues before they reach the repository
- Enforces consistent coding standards
- Reduces code review time
- Prevents broken code from being committed

## Tips

1. Keep hooks fast (under 10 seconds)
2. Use lint-staged for only changed files
3. Document hook requirements for the team
4. Allow skip option for emergencies (--no-verify)
    `,
    tags: ['DevOps', 'Code Quality', 'Git'],
  },
  {
    slug: 'micro-frontend-architecture',
    title: 'Migrating from Monolith to Micro-Frontend Architecture',
    date: '2025-01-20',
    excerpt:
      'A practical guide to decoupling a monolithic frontend application into a micro-frontend architecture.',
    content: `
# Migrating from Monolith to Micro-Frontend Architecture

Migrating a monolithic application to micro-frontends can be challenging. Here's what I learned from successfully implementing this at scale.

## The Challenge

Our monolithic application had:
- Long build times (15+ minutes)
- Difficult to scale development teams
- High deployment risk
- Tight coupling between features

## The Approach

### 1. Identify Boundaries

We identified natural boundaries in our application:
- User management
- Dashboard and analytics
- Settings and configuration
- Core business features

### 2. Choose the Right Framework

We used Module Federation with Webpack 5:

\`\`\`javascript
// webpack.config.js
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './Dashboard': './src/Dashboard',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
}
\`\`\`

### 3. Implement Gradually

- Started with one module
- Created a shared component library
- Established communication patterns
- Rolled out team by team

## Results

- Build time reduced by 70%
- Teams can deploy independently
- Faster feature development
- Better code isolation

## Lessons Learned

1. Communication between micro-frontends is critical
2. Shared dependencies need careful management
3. Testing becomes more complex
4. DevOps setup requires more initial effort
5. Documentation is essential for team onboarding
    `,
    tags: ['Architecture', 'Micro-Frontend', 'Engineering'],
  },
]

export default BLOG_POSTS

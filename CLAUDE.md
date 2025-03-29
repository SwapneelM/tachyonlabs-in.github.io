# CLAUDE.md - Agentic Coding Assistant Guidelines

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build project (TypeScript + Vite)
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Code Style
- **Imports**: Use path aliases (`@/components/*`) with organized imports
- **Components**: Follow React functional component pattern with explicit typing
- **Styling**: Use Tailwind via `cn()` utility for className composition
- **TypeScript**: Strong typing required; avoid `any`; use explicit interfaces
- **Naming**: PascalCase for components/types, camelCase for functions/variables
- **Error Handling**: Use try/catch for async operations
- **Component Structure**: Props interface -> forwardRef component -> export

## Architecture
- UI components in `src/components/ui/`
- Page sections in `src/components/`
- Utilities in `src/lib/`
- Assets in `src/assets/`
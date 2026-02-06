# CLAUDE.md - Scrabble Project Guide

## Project Overview

Angular 21 Scrabble board game application with drag-and-drop letter tile mechanics. Built with TypeScript, Angular CDK, and standalone components.

## Quick Commands

```bash
npm start        # Dev server at http://localhost:4200
npm run build    # Production build to dist/scrabble/
npm test         # Unit tests (Vitest)
npm run watch    # Dev build with watch mode
```

## Project Structure

```
src/
  app/
    board/                  # BoardComponent - main game logic & UI
      board.component.ts    # Game board, letter bag, easel, drag-and-drop
      board.component.html  # 21x21 grid template with CDK drop lists (@for syntax)
      board.component.scss  # Board and cell layout styles
      board.component.spec.ts
    easels/                 # EaselsComponent - placeholder (unused)
      easels.component.ts
      easels.component.html
      easels.component.scss
      easels.component.spec.ts
    app.component.ts        # Root standalone component (selector: app-root)
    app.config.ts           # Application config (providers: animations)
    letter.ts               # Letter model: { letter: string, value: number }
    cell.ts                 # Cell model: { letter: Letter[] }
  styles.scss               # Global styles
  main.ts                   # bootstrapApplication entry point
  index.html                # HTML shell
public/                     # Static assets (favicon, etc.)
```

## Architecture

- **Framework:** Angular 21 with Angular CLI 21
- **Components:** Standalone (no NgModules) with `imports` array on `@Component`
- **Drag-and-drop:** Angular CDK `DragDropModule` (`cdkDrag`, `cdkDropList`)
- **Templates:** Modern control flow (`@for`, `@if`) instead of `*ngFor`/`*ngIf`
- **Styling:** SCSS, component-scoped
- **State management:** Component-local state (no NgRx or services)
- **Bootstrap:** `bootstrapApplication()` with `ApplicationConfig`

### Key Models

- **`Letter`** (`src/app/letter.ts`) - A tile with `letter` (string) and `value` (number)
- **`Cell`** (`src/app/cell.ts`) - A board cell containing `letter: Letter[]`

### Core Component: BoardComponent

`src/app/board/board.component.ts` contains all game logic:
- `grid: Cell[]` - 441 cells (21x21 board)
- `easels: Letter[]` - Player's 7 letter tiles
- `letterBag: Letter[]` - Full Scrabble letter distribution (French scoring)
- `bagFiller()` - Populates letter bag with correct letter counts and values
- `generateCells()` - Creates the 441-cell grid
- `generateEaselLetter()` - Draws 7 random letters for the player
- `drop(event)` - Handles CDK drag-and-drop between board and easel

## Code Conventions

### TypeScript / Angular

- **Single quotes** for strings (enforced by Prettier config in package.json)
- **2-space indentation** (enforced by .editorconfig)
- **Max line length:** 140 characters (Prettier)
- **Strict TypeScript:** `strict: true` in tsconfig.json
- **Standalone components:** All components use `imports` array, no NgModules
- **Component selector prefix:** `app-` in kebab-case (e.g., `app-board`)
- **JSDoc comments** on public methods (use `@param` for parameters)
- **Component generation:** Use `ng generate component <name>` (creates SCSS by default)

### File Naming

- Components: `<name>.component.ts`, `<name>.component.html`, `<name>.component.scss`
- Models/Classes: `<name>.ts` (plain TypeScript classes in `src/app/`)
- Tests: `<name>.spec.ts` (co-located with source files)
- Config: `app.config.ts` for application-level providers

### Styling

- SCSS with component-scoped styles
- Flexbox-based layouts
- Viewport-relative units (`vh`, `vw`) for game board sizing

## Testing

- **Framework:** Vitest 4 (built-in via `@angular/build:unit-test`)
- **Pattern:** Angular TestBed with standalone component imports
- **Run:** `npm test`
- Tests are co-located with source as `*.spec.ts` files
- Components are imported directly in tests (no module declarations needed)

### Test example pattern

```typescript
beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [MyComponent]  // standalone component
  }).compileComponents();
});
```

## Dependencies

Key runtime dependencies:
- `@angular/core` ^21.1.0
- `@angular/cdk` ^21.1.0 (drag-and-drop)
- `rxjs` ~7.8.0
- `tslib` ^2.3.0

Key dev dependencies:
- `@angular/build` ^21.1.3 (build system)
- `@angular/cli` ^21.1.3
- `typescript` ~5.9.2
- `vitest` ^4.0.8

## Build Configuration

- **Output:** `dist/scrabble/`
- **Builder:** `@angular/build:application`
- **Production:** Optimization, output hashing
- **Bundle budgets:** 500kB warning / 1MB error (initial), 4kB/8kB (component styles)
- **Target:** ES2022

# CLAUDE.md - Scrabble Project Guide

## Project Overview

Angular 8 Scrabble board game application with drag-and-drop letter tile mechanics. Built with TypeScript, Angular Material, and Angular CDK.

## Quick Commands

```bash
npm start        # Dev server at http://localhost:4200
npm run build    # Build to dist/scrabble/
npm test         # Unit tests (Karma + Jasmine, requires Chrome)
npm run lint     # TSLint with Codelyzer rules
npm run e2e      # End-to-end tests (Protractor)
```

## Project Structure

```
src/
  app/
    board/                  # BoardComponent - main game logic & UI
      board.component.ts    # Game board, letter bag, easel, drag-and-drop
      board.component.html  # 21x21 grid template with CDK drop lists
      board.component.scss  # Board and cell layout styles
      board.component.spec.ts
    easels/                 # EaselsComponent - placeholder (unused)
      easels.component.ts
      easels.component.html
      easels.component.scss
      easels.component.spec.ts
    app.component.ts        # Root component (selector: app-root)
    app.module.ts           # Root module (imports DragDropModule)
    app-routing.module.ts   # Routing (currently empty)
    letter.ts               # Letter model: { letter: string, value: number }
    cell.ts                 # Cell model: { letter: Letter[] }
  environments/             # Angular environment configs
  assets/                   # Static assets
  styles.scss               # Global styles
e2e/                        # Protractor end-to-end tests
```

## Architecture

- **Framework:** Angular 8.2.14 with Angular CLI 8.3.19
- **UI Library:** Angular Material 8.2.3 (deeppurple-amber theme)
- **Drag-and-drop:** Angular CDK `DragDropModule` (`cdkDrag`, `cdkDropList`)
- **Styling:** SCSS, component-scoped
- **State management:** Component-local state (no NgRx or services)

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

- **Single quotes** for strings (enforced by TSLint)
- **2-space indentation** (enforced by .editorconfig)
- **Max line length:** 140 characters
- **Component selector prefix:** `app-` in kebab-case (e.g., `app-board`)
- **Directive selector prefix:** `app` in camelCase
- **Member ordering:** static fields, instance fields, static methods, instance methods
- **No console** except `console.log` and `console.error`
- **JSDoc comments** on public methods (use `@param` for parameters)
- **Component generation:** Use `ng generate component <name>` (creates SCSS by default)

### File Naming

- Components: `<name>.component.ts`, `<name>.component.html`, `<name>.component.scss`
- Models/Classes: `<name>.ts` (plain TypeScript classes in `src/app/`)
- Tests: `<name>.spec.ts` (co-located with source files)
- E2E tests: `<name>.e2e-spec.ts` (in `e2e/src/`)

### Styling

- SCSS with component-scoped styles
- Flexbox-based layouts
- Viewport-relative units (`vh`, `vw`) for game board sizing
- Angular Material prebuilt theme: `deeppurple-amber`

## Testing

- **Framework:** Jasmine 3.4 with Karma 4.1
- **Browser:** Chrome
- **Pattern:** Angular TestBed with `ComponentFixture`
- **Coverage output:** `./coverage/scrabble/` (HTML + LCOV)
- Tests are co-located with source as `*.spec.ts` files
- Each component has a basic "should create" test; expand from there

## Dependencies

Key runtime dependencies:
- `@angular/core` ~8.2.14
- `@angular/material` ^8.2.3
- `@angular/cdk` ~8.2.3 (drag-and-drop)
- `rxjs` ~6.4.0
- `hammerjs` ^2.0.8 (touch gestures)

## Build Configuration

- **Output:** `dist/scrabble/`
- **Production:** AOT compilation, optimization, output hashing
- **Bundle budgets:** 2MB warning / 5MB error (initial), 6KB/10KB (component styles)
- **Target:** ES2015
- **Browser support:** last 2 versions, >0.5% market share (no IE 9-11)

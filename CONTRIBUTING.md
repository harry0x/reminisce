# Contributing to Reminisce.

Thanks for your interest in improving Reminisce! Bug reports, new film stocks, UI polish, and docs fixes are all welcome.

By participating, you agree to follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Ways to contribute

- **Report a bug**: [open a bug report](https://github.com/harry0x/reminisce/issues/new?template=bug_report.yml)
- **Suggest a feature**: [open a feature request](https://github.com/harry0x/reminisce/issues/new?template=feature_request.yml)
- **Pick up an issue**: look for issues labeled `good first issue` or `help wanted`
- **Improve the docs**: typos and clarifications are always appreciated

For anything bigger than a small fix, please open an issue first so we can agree on the approach before you spend time on it.

## Development setup

**Requirements:** Node.js 20+ (the version in [`.nvmrc`](.nvmrc) is what CI uses) and npm.

```bash
# 1. Fork the repo on GitHub, then clone your fork
git clone https://github.com/<your-username>/reminisce.git
cd reminisce

# 2. Install dependencies
npm install

# 3. Start the dev server at http://localhost:3000
npm run dev
```

## Scripts

| Command                | What it does                                     |
| ---------------------- | ------------------------------------------------ |
| `npm run dev`          | Start the Vite dev server                        |
| `npm run build`        | Production build into `dist/`                    |
| `npm run preview`      | Preview the production build                     |
| `npm run lint`         | Run ESLint                                       |
| `npm run lint:fix`     | Run ESLint and auto-fix what it can              |
| `npm run format`       | Format all files with Prettier                   |
| `npm run format:check` | Check formatting without writing                 |
| `npm run typecheck`    | Type-check with TypeScript                       |
| `npm run check`        | Run lint, format check, typecheck and build (CI) |

**Run `npm run check` before opening a PR.** CI runs the same checks and must pass before merging.

## Project layout

```
components/
  PhotoCard.tsx   # The rendered print (frame, image, caption, metadata)
  Sidebar.tsx     # All editing controls
App.tsx           # App state, undo/redo, upload, EXIF, export
constants.ts      # Film stocks, papers, aspect ratios, frames
types.ts          # Shared TypeScript types
index.css         # Global styles and frame effects
```

### Adding a film stock

Film stocks are CSS filter presets. Add an entry to `FILM_STOCKS` in [`constants.ts`](constants.ts):

```ts
{
  id: 'gold200',
  name: 'Gold 200',
  cssFilter: 'sepia(0.25) saturate(1.3) contrast(1.05) brightness(1.05)',
  description: 'Sunny, nostalgic warmth',
},
```

Papers (`PAPERS`), aspect ratios (`ASPECT_RATIOS`) and frames (`FRAMES`) live in the same file. Please include a before/after screenshot in your PR.

## Code style

- **Formatting** is handled by Prettier. Run `npm run format` and don't hand-format.
- **Linting** uses ESLint with TypeScript and React Hooks rules.
- Use TypeScript types; avoid `any`.
- Style with Tailwind utility classes, matching the existing components.
- Keep components focused. If a file grows a lot, consider splitting it.

## Commit messages

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add Kodak Gold 200 film stock
fix: correct polaroid chin height on 16:9
docs: clarify setup steps
style: format sidebar
refactor: extract slider component
chore: bump dependencies
```

## Pull request process

1. Create a branch from `main`: `git checkout -b feat/gold-200-stock`
2. Make your changes and commit them.
3. Run `npm run check`.
4. Push to your fork and open a PR against `main`.
5. Fill in the PR template, including screenshots for visual changes.
6. A maintainer will review it. Please respond to feedback; once approved and CI is green, it'll be merged.

## Testing your change

There's no automated test suite yet (contributions welcome!). Before submitting, please check manually:

- Upload a photo (both portrait and landscape)
- Switch film stocks, frames, papers and aspect ratios
- **Save** and **Copy** still produce a correct image
- Undo / redo still work
- The layout works at mobile width

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

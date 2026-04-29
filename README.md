# Portfolio Web Portal

Repository for github pages
https://gsmrana.github.io

Built with **Vite + React + TypeScript + Tailwind CSS**, with a fixed top navigation, dark-mode toggle, and a single-page scrolling layout.

## Tech Stack

- Vite 5 + React 18 + TypeScript (strict)
- Tailwind CSS 3 (dark-mode via `class` strategy)
- `lucide-react` for UI icons, `react-icons` for tech-brand icons
- No backend — contact form opens the user's email client via `mailto:`
- Coding stats use public image widgets (no API keys)

## Local Development

```powershell
npm install
npm run dev
```

The dev server runs on http://localhost:5173

## Build & Preview

```powershell
npm run build
npm run preview
```

## Editing Content

All site content lives in plain TypeScript files under `src/data/`:

| File | Section |
| --- | --- |
| `profile.ts` | Name, title, summary, contact, socials, hero stats |
| `skills.ts` | Categorized skill chips (icons via `react-icons`) |
| `experience.ts` | Companies + roles + bullet points |
| `projects.ts` | Project cards |
| `opensource.ts` | Open-source / side-project cards |
| `publications.ts` | Research papers |
| `education.ts` | Degrees |
| `awards.ts` | Awards & patents |

Replace `public/profile.svg` with a personal photo (`public/profile.jpg`/`.png`) and update `profile.profileImage` in `src/data/profile.ts`. The resume PDF lives at `public/*_resume.pdf`.

## Deployment — GitHub Pages

1. Use default github pages repo `https://<username>.github.io` and by set `base` in [vite.config.ts](vite.config.ts) to `/`.
or
Create a GitHub repo named **`Portfolio-Webportal`** (or rename the `base` in [vite.config.ts](vite.config.ts) and the workflow to match a different repo name).
2. Push this project to the `main` branch.
3. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
4. The workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds and publishes `dist/` automatically on every push.

The live site will be at `https://<username>.github.io`.
or
The live site will be at `https://<username>.github.io/Portfolio-Webportal/`.

### Manual deploy (alternative)

```powershell
npm run deploy
```

This uses `gh-pages` to push `dist/` to a `gh-pages` branch.

## Project Structure

```
src/
  components/
    sections/        # Hero, Skills, Experience, Projects, ...
    navbar.tsx
    footer.tsx
    theme-provider.tsx
    theme-toggle.tsx
    section-header.tsx
  data/              # All editable content
  lib/utils.ts
  App.tsx
  main.tsx
  index.css
public/
  resume.pdf
  profile.svg
  favicon.svg
  .nojekyll
```

## License

Personal portfolio — content © Sultan Mahmud Rana. Code structure available for reference.

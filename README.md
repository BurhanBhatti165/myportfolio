<div align="center">
	<h1>Burhan Bhatti – Developer Portfolio</h1>
	<p>A modern, configurable personal developer portfolio built with React, SCSS, and Lottie animations.</p>
	<p>
		<a href="https://github.com/BurhanBhatti165/myportfolio/actions">
			<img alt="CI Status" src="https://github.com/BurhanBhatti165/myportfolio/actions/workflows/ci.yml/badge.svg" />
		</a>
	</p>
	<p>
		<a href="https://burhanbhatti165.github.io/myportfolio/">Live Site</a>
		·
		<a href="https://github.com/BurhanBhatti165/myportfolio/issues">Report Bug</a>
		·
		<a href="https://github.com/BurhanBhatti165/myportfolio/issues">Request Feature</a>
	</p>
</div>

---

## ✨ Features

- Central content configuration via `src/portfolio.js`
- Dark / Light theme with persistence (localStorage) + data-theme groundwork
- Splash screen & section Lottie animation support
- Responsive section-based layout (Skills, Projects, Education, Experience, Achievements, Blogs, etc.)
- Lazy loading of below-the-fold sections (code-splitting)
- Accessibility improvements (semantic buttons, aria labels)
- SCSS theming & global color control (`_globalColor.scss`)
- GitHub Actions CI (test + build + deploy) & GitHub Pages ready
- Modular link security utilities (`src/utils/links.js`)

## 🗂 Structure

```
src/
	App.js                # Root app entry
	index.js              # React bootstrap
	portfolio.js          # All editable portfolio content
	containers/           # Section-level components
	components/           # Reusable UI pieces (cards, buttons, etc.)
	assets/               # Images, fonts, lottie animations
	contexts/StyleContext # Theme context
	hooks/useLocalStorage # Persisted state helper
```

## 🚀 Getting Started

### Prerequisites
- Node.js >= 16 (Recommended LTS)
- npm (bundled with Node) or yarn

### Install
```bash
npm install
```

### Run Dev Server
```bash
npm start
```
Opens: `http://localhost:3000`

### Build Production
```bash
npm run build
```
Artifacts output to `build/`.

### Deploy (GitHub Pages)
Two paths are available:

1. Automated (recommended): Push to `main` and GitHub Actions builds & publishes to `gh-pages`.
2. Manual fallback:
```bash
npm run deploy
```

Requirements:
- `homepage` in `package.json` set to `https://<username>.github.io/myportfolio/`.
- Pages settings: Source = `gh-pages` branch (auto after first deploy).
- Workflow file: `.github/workflows/ci.yml` present.

## 🧩 Customization
Edit `src/portfolio.js` to change:
- Name, greeting, summary
- Social links
- Skills & software skills icons
- Education / Work Experience
- Projects & Achievements
- Blogs, Talks, Podcast
- Resume visibility

Update theme colors in `src/_globalColor.scss`.

Add / replace animations in `src/assets/lottie/` and import in `portfolio.js`.

## 🌓 Theming
Theme preference stored in `localStorage` (`isDark`). A context (`StyleContext`) provides `isDark` + `changeTheme()`. Components read this to toggle classes. (Roadmap: migrate to CSS variables and `data-theme` attribute.)

## 🧪 Testing
Jest + React Testing Library + `@testing-library/jest-dom` are configured.

Key patterns:
- Use `screen.getByText` / `getByRole` for queries.
- Prefer user-centric assertions (text, role, label) over implementation details.
- Avoid snapshot tests for dynamic sections unless necessary.

Run all tests:
```bash
npm test
```
Run a single test file:
```bash
npm test -- App.test.js
```
Watch mode (interactive by default) can be exited with `q`.

## 🔐 Environment Variables
If needed, duplicate `env.example` to `.env` and adjust values (none critical by default).

## 🛡 Security / Best Practices
Implemented:
- `rel="noopener noreferrer"` on external links (centralized in `utils/links.js`).
- Replaced interactive spans/divs with semantic buttons (cards & controls).
- Pinned React version + resolved legacy peer & ajv compatibility.

Pending / Next:
- Audit remaining dependencies for size & maintenance status (`react-reveal`).
- Add CSP & security headers (via reverse proxy or static hosting config if migrated off Pages).
- Add automated Lighthouse CI performance & accessibility gating.

## 📦 Dependencies (Key)
- react / react-dom
- lottie-react
- react-easy-emoji
- sass

## 🗺 Roadmap
- [x] Upgrade to React 18 & modern root API
- [x] Replace Enzyme with React Testing Library
- [x] Lazy load below-the-fold sections
- [x] Add accessibility improvements (semantic elements, aria labels)
- [x] Add GitHub Actions CI (test + build + deploy)
- [x] Improve responsive behavior for cards & typography
- [ ] Introduce full CSS variable theme system (replace remaining hard-coded colors)
- [ ] Add JSON-LD structured data for SEO
- [ ] Optimize images / add responsive `<picture>` & WebP/AVIF sources
- [ ] Implement sitemap.xml & robots.txt tuning
- [ ] Replace unmaintained `react-reveal` (Framer Motion or React Spring)
- [ ] Add performance budgets & Lighthouse CI assertions

## 🤝 Contributing
1. Fork repository
2. Create feature branch: `git checkout -b feat/amazing-thing`
3. Commit changes: `git commit -m "feat: add amazing thing"`
4. Push branch: `git push origin feat/amazing-thing`
5. Open Pull Request

## 📝 License
Distributed under the MIT License. See `LICENSE` for details.

## 🙏 Acknowledgments
- Inspired by popular developer portfolio templates
- Icons from Icons8 / Font Awesome

---
Feel free to adapt and make it your own. Contributions welcome!

---

## 🔄 Recent Changes (Upgrade Summary)

Date: 2025-09-15

- Upgraded React & ReactDOM to 18.x (createRoot API)
- Replaced Enzyme with React Testing Library + jest-dom
- Added lazy loading (React.lazy + Suspense) for below-the-fold sections
- Added centralized external link utilities with security attributes
- Improved accessibility (buttons instead of spans; aria labels)
- Added minimal theming refactor with `data-theme` attribute
- Added GitHub Actions CI (install, test, build, deploy to gh-pages)
- Introduced ESLint configuration with hooks rules
- Populated README with full documentation
- Added link helper utility file `src/utils/links.js`

Planned next steps: CSS variables for theme, structured data, image optimization, TypeScript migration.

## 📱 Responsive Design Notes

Recent improvements:
- Added breakpoint system (`src/styles/_breakpoints.scss`).
- Introduced layout wrapper (`.layout-boundary`) for consistent horizontal padding.
- Adjusted achievement card grid to collapse to single column on small screens.
- Made achievement images and containers scale down at xs/sm widths.
- Blog cards now auto-height on small devices (were fixed at 200px).
- Added fluid typography for blog titles with `clamp()`.
- Fixed skills section horizontal overflow on narrow devices (reduced large desktop paddings, removed fixed min-widths, added mobile gap + width:100% overrides, narrow <400px tuning).

Utility classes:
- `.layout-boundary` constrains content to a max width.
- `.stack-sm` flips flex layouts to column below 768px.
- `.hide-sm` hides elements under 480px.

Further suggested (not yet applied):
- Normalize vertical spacing rhythm across sections.
- Leverage CSS variables for spacing + font scale.
- Add responsive image sources (`<picture>` / `srcset`).
- Audit each section for potential horizontal scroll on very small devices.

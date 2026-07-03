# Farand Mahazalfaa — Portfolio

A single-page portfolio built with [Astro](https://astro.build). Ships static HTML with
no client-side JavaScript framework; the only interactive bits (the Narapangan
chart tooltip and the scroll-reveal animation) are small vanilla scripts.

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
```

```bash
npm run build      # outputs static site to dist/
npm run preview    # preview the production build locally
```

## Optional: raise the GitHub API rate limit

The Projects section fetches live star counts and "last updated" dates from
the GitHub API **at build time** (not in the visitor's browser). Unauthenticated
requests are capped at 60/hour, shared across whatever else is on your network,
which repeated builds can burn through fast.

To raise that to 5,000/hour:

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate a new token with **no scopes selected** (public repo data doesn't need any)
3. Locally: copy `.env.example` to `.env` and paste the token in
4. On Vercel: Project Settings → Environment Variables → add `GITHUB_TOKEN`

If no token is set, or GitHub is unreachable, the build still succeeds, the
star count and "updated" badge just won't show for that project.

## Deploying on Vercel

1. Push this repo to GitHub
2. [vercel.com/new](https://vercel.com/new) → import the repo
3. Vercel auto-detects Astro, no config needed
4. (Optional) add the `GITHUB_TOKEN` env var as described above

## Editing content

All real content lives in `src/data/`, not scattered across components:

| File | What it controls |
|---|---|
| `src/data/experience.ts` | Work experience + organization/leadership entries |
| `src/data/projects.ts` | GitHub project cards (name, description, tech stack tags) |
| `src/data/narapanganResults.ts` | The model-comparison numbers behind the Narapangan chart |

To add a new GitHub project card, add an entry to `src/data/projects.ts`. Its
star count and "updated" badge will be fetched automatically at the next build.

To add a new tech-stack icon, check if [simple-icons](https://simpleicons.org)
has it, then add it to the `iconMap` in `src/components/TechIcon.astro`. Anything
not in that map falls back to a generic grid icon rather than guessing at a logo.

## Adding the Narapangan screenshot

`src/components/ProjectsSection.astro` currently renders a placeholder block
where the dashboard screenshot goes. Drop your image in `public/images/` and
swap the placeholder `<div class="flagship-media">...</div>` for:

```astro
<div class="flagship-media">
  <img src="/images/narapangan-dashboard.jpg" alt="Narapangan dashboard" />
</div>
```

## Contact form setup

The contact form posts to Formspree. It won't actually send anything until you:

1. Sign up at [formspree.io](https://formspree.io) (free tier: 50 submissions/month)
2. Create a form, copy its ID
3. Paste it into `FORMSPREE_ID` at the top of `src/components/Contact.astro`

Until you do that, submitting the form shows an inline message telling the
visitor it's not wired up yet, rather than silently losing their message.

## Adding your organization logos

Each entry in `src/data/experience.ts` has a `logo` field pointing to a file
under `public/images/logos/`. The filenames are already set up for you,
just drop matching files in that folder:

| Organization | Expected file |
|---|---|
| EON Reality | `public/images/logos/eon-reality.png` |
| Telkom University (Language Center) | `public/images/logos/telkom-university.png` |
| PT. Breezelabs Cipta Utama | `public/images/logos/breezelabs.png` |
| SRE Telkom University | `public/images/logos/sre.png` |
| IEEE Telkom University | `public/images/logos/ieee.png` |

Until a file exists at that path, the entry shows auto-generated initials
instead (no broken image icons, it checks whether the file loads first).

Adding a new experience or leadership entry later: add an object to the
array in `src/data/experience.ts` with a `logo` field pointing to wherever
you put the file. PNG, JPG, or SVG all work. Roughly square, at least 88x88px
so it looks sharp, is a safe bet.

## Adding your own tech-stack icons (Tableau, Vertex AI, SQL, Excel, Power BI, Canva)

These six aren't in the icon library the site uses (see note below), so
`src/components/TechIcon.astro` is already set up to look for your own files
in `public/images/icons/`:

| Tool | Expected file |
|---|---|
| Tableau | `public/images/icons/tableau.svg` |
| Vertex AI | `public/images/icons/vertex-ai.svg` |
| SQL | `public/images/icons/sql.svg` |
| Excel | `public/images/icons/excel.svg` |
| Power BI | `public/images/icons/power-bi.svg` |
| Canva | `public/images/icons/canva.svg` |

Download an SVG from Wikimedia Commons or Freepik, rename it to match the
table above, drop it in that folder. That's it, no code changes. Until the
file exists, that icon shows a text badge (Tb, VA, SQL, Ex, BI, Cv) instead.

**On color**: your downloaded SVGs will render in their original brand
colors, not the site's monochrome palette. That's normal for logos and
usually looks fine at small size. If you want a specific icon to match the
grayscale/accent palette instead, open the SVG in a text editor and replace
every `fill="#xxxxxx"` (or `fill="rgb(...)"`) with `fill="currentColor"`,
then remove any hardcoded background `<rect>`. Works well for simple
single-color icons, not worth the effort for detailed multi-color ones.

**Why these six are missing from the library**: this project uses the
`simple-icons` npm package for verified brand logos. As of the installed
version, it doesn't ship LinkedIn, Excel, Tableau, Power BI, Canva, or any
Adobe product icon (likely removed after trademark disputes, this has
happened to that library before). Rather than hand-draw a guess at those
logos, the site uses text monograms as an honest fallback until you supply
the real file yourself.

## Other new pieces

- **Accent color**: one color token (`--accent`, a warm rust) used sparingly on
  buttons, links on hover, the typewriter cursor, and the custom mouse cursor's
  hover state. Defined once in `src/styles/global.css`, change it there.
- **Custom cursor**: a dot + lagging outline ring, desktop only (disabled on
  touch devices and for anyone with reduced-motion preferences). Lives in
  `src/components/Cursor.astro`.
- **Org/company logos**: see "Adding your organization logos" above.
- **Typewriter effect**: the hero name types itself out on load. Skips straight
  to the full name if the visitor has `prefers-reduced-motion` enabled.

## A note on the chart data

The Narapangan chart plots the model-comparison table (MAE, MAPE, directional
accuracy for NBEATSx, NHITS, SARIMAX, LSTM, Prophet) since those are the only
numbers legible from the capstone poster. It does not plot the week-by-week
price forecast shown in the poster's laptop mockup, those data points aren't
available. If you export the real forecast series later, add it to
`src/data/narapanganResults.ts` and extend the chart rather than guessing at
values.

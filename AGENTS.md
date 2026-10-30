# AGENTS.md

Personal portfolio site. Single Next.js 14 (App Router) app, no tests, no CI, no backend.

## Commands

```bash
npm ci              # node_modules is NOT checked in
npm run dev         # http://localhost:3000
npm run lint        # next lint
npm run build       # the real verification step (runs typecheck too)
```

`package.json` has **no `typecheck` script and no test runner**. To typecheck alone use `npx tsc --noEmit`. Treat **lint + build** as the gate before calling work done. There is one known pre-existing lint warning (`no-img-element` in `LanguageButton.tsx` for the flag `<img>`); it is not a regression, don't chase it.

## Routing: every page lives under `/<lang>`

`/en` and `/es` are the only real URLs. There is no `app/page.tsx` and no root `app/layout.tsx`.

- `src/app/[lang]/layout.tsx` is the **root layout** — it owns `<html>`, `<body>`, `next/font`, and site `metadata`. Adding `html`/`body` anywhere else is an error.
- `src/middleware.ts` redirects anything without a valid locale prefix to the default language (`/` → `/en`, `/about` → `/en/about`). Unknown segments are treated as a path, not a locale.
- `src/lang.ts` owns `LANGUAGES`, `DEFAULT_LANGUAGE`, `isLanguage`, and `getLocalizedPath`. **Adding a language means editing this file** (the enum) plus `generateStaticParams` picks it up automatically.

### Gotcha: middleware must live in `src/`, not the repo root

This project uses a `src` directory, so Next.js only discovers middleware at `src/middleware.ts`. A root-level `middleware.ts` **builds fine and silently never runs** — `/` just 404s. If redirects stop working, check this first. Confirm the build actually reports `ƒ Middleware`.

The matcher deliberately skips `/_next`, `/api`, and anything with a file extension so `favicon.ico`, `site.webmanifest`, and `browserconfig.xml` in `public/` are served untouched.

## Language handling

- The active language is **decided on the server** from the `[lang]` segment and passed into `LanguageProvider` by the layout. It is correct on the first paint — do not reintroduce client-side language state or `localStorage`; there is none.
- `useLanguage()` returns `{ language }` and is the only way components read the language. There is deliberately **no `setLanguage`** — switching language is a navigation (`LanguageButton` calls `router.push(getLocalizedPath(pathname, next))`), which is what keeps the URL shareable.
- `useLanguage` throws outside a provider. This works because the context default is `undefined`; don't reintroduce a default object, it silently defeats the guard.

## Content lives in two places

- `src/lang.json` — all UI copy, keyed `en` / `es` at the top level. Its shape is typed in `src/lang.ts`; adding a section means extending the `LangContent` type **and** both `en` and `es` branches.
- Per-component `constants.ts` — the data records (`PROJECTS`, `SKILLS`, `EXPERIENCE`, `NAV_OPTIONS`, `PICTURES`). Localized fields there are `Record<Languages, string>`, not a lookup into `lang.json`. Don't move these into `lang.json`.

Editing content is the most common task here; it should never require touching JSX.

## Assets must be registered

`src/assets/img/index.ts` and `src/assets/svg/index.ts` are manual barrels. A new image or SVG is invisible to the app until imported and exported there. SVG icons are rendered two different ways — inline `<img>` for flags, and `src/components/SVGIcon` (CSS `mask-image`, therefore monochrome) for stars/copy/dropdown glyphs. Don't swap a flag to `SVGIcon`; it loses its colors.

## Components

- One folder per section under `src/app/components/<Section>/`, each with its own `index.ts` re-exporting the component as default plus a `constants.ts`. Follow this.
- `src/components/` holds shared primitives only (`SectionLayout`, `TitleText`, `SVGIcon`).
- Section anchors come from `SectionIds` in `src/app/enum.ts`; nav labels from `HeaderSections` in `src/lang.ts`. Adding a section means touching `SectionIds`, `HeaderSections`, `lang.json` (both locales), `NAV_OPTIONS`, and `page.tsx`.
- Animations are framer-motion with scroll reveals (`whileInView`, `viewport={{ once: true }}`). Most components are effectively client components because `src/app/[lang]/page.tsx` is `"use client"` — the `"use client"` directives scattered on individual components are inconsistent and effectively decorative. Don't restructure around server components.

## Other verified quirks

- `HEADER_HEIGHT = 47.53` in `src/app/components/Header/constants.ts` is a hand-tuned pixel value the mobile menu pads itself by. Changing header layout means re-measuring it.
- `html { user-select: none }` and `scroll-behavior: smooth` are set globally in `globals.css`.
- No environment variables are used anywhere; there is no `.env` requirement for local dev or deploy.
- `date-fns` is used for date formatting in `JobExperience`; `ExperienceType.endDate` of `new Date()` means "current".
- Deploys are Vercel auto-deploys from `main`. Commit directly to `main` with a short imperative, sentence-case message ("Add new work experience", "Fix title size"); no PR flow.

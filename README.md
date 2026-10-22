# Kule Korner

A personal blog built with TinaCMS and Next.js. Posts and pages are edited in the browser at `/admin` and saved as Markdown and MDX files in this repo.

## Stack

- Next.js 14 (App Router), React 18 and TypeScript
- TinaCMS 3, with content stored as files in this repo and TinaCloud as the hosted content API
- Plain CSS in `app/globals.css`

## Run it locally

Install and start the dev server:

```bash
pnpm install
pnpm dev
```

The site is at http://localhost:3000 and the editor is at http://localhost:3000/admin.

| Script | What it does |
|---|---|
| `pnpm dev` | Runs `tinacms dev` with `next dev`. |
| `pnpm build` | Runs `tinacms build`, then `next build`. Needs the environment variables below. |
| `pnpm build-local` | The same build against local content, with indexing and cloud checks skipped. |
| `pnpm start` | Runs `tinacms build`, then `next start`. |
| `pnpm lint` | Runs `next lint`. |

## Environment variables

Copy `.env.example` to `.env` and fill in the values from the project at https://app.tina.io.

- `NEXT_PUBLIC_TINA_CLIENT_ID`
- `TINA_TOKEN`
- `NEXT_PUBLIC_TINA_BRANCH`: the branch Tina reads content from. When unset, `tina/config.js` falls back to `NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF`, then to `HEAD` (set by Netlify).

## Layout

- `content/page/`: pages as MDX. `home.mdx` is served at `/`.
- `content/post/`: blog posts as Markdown, served at `/posts/<filename>`.
- `app/`: the Next.js routes, the layout and the styles.
- `tina/`: the TinaCMS config and the `page` and `post` collections. `tina/tina-lock.json` is generated and committed, so commit the updated copy after a schema change.
- `public/uploads/`: media uploaded through Tina.

## CI

`.github/workflows/pr-open.yml` runs `pnpm build` on every pull request, using the repo secrets `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN` and the PR branch as the Tina branch. Dependabot checks the `tinacms` and `@tinacms/*` packages daily.

The repo does not record where the site is deployed. It has no Vercel or Netlify config file.

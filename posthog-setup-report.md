# PostHog post-wizard report

The wizard has completed a PostHog integration for this Astro (SSG) portfolio site. A reusable `PostHog` component was created and wired into the root layout so analytics load on every page. Three custom events were instrumented to track the highest-value visitor actions: contact form conversions, project link engagement, and video content plays. Environment variables are used for all credentials — no tokens are hardcoded.

## Events instrumented

| Event name | Description | File |
|---|---|---|
| `contact_form_submitted` | Fired when a visitor submits the contact form. | `src/pages/contact.astro` |
| `project_link_clicked` | Fired when a visitor clicks an App Store, Play Store, Web, or GitHub link on a project card. Properties: `project_name`, `link_type`. | `src/components/ProjectShowcase.astro` |
| `video_played` | Fired when a visitor clicks to play a YouTube Short in the video carousel. Properties: `video_title`, `video_id`. | `src/components/ShortsCarousel.astro` |

## Files created or modified

- **Created** `src/components/posthog.astro` — PostHog web snippet with `is:inline` and `define:vars` for env-var injection
- **Modified** `src/layouts/BaseLayout.astro` — imports and renders `<PostHog />` in `<head>`
- **Modified** `src/pages/contact.astro` — captures `contact_form_submitted` on form submit
- **Modified** `src/components/ProjectShowcase.astro` — captures `project_link_clicked` with project name and link type via delegated event listener
- **Modified** `src/components/ShortsCarousel.astro` — captures `video_played` with video title and ID on click-to-play
- **Created** `.env` — `PUBLIC_POSTHOG_PROJECT_TOKEN` and `PUBLIC_POSTHOG_HOST`

## Next steps

We've built a dashboard and four insights to track visitor behavior based on the events just instrumented:

- [Analytics basics (wizard) dashboard](https://us.posthog.com/project/509611/dashboard/1838183)
- [Contact form submissions](https://us.posthog.com/project/509611/insights/yiBDo4HH)
- [Project link clicks by type](https://us.posthog.com/project/509611/insights/Cud1QCgl)
- [Project clicks by project name](https://us.posthog.com/project/509611/insights/A6Ov2JWO)
- [Video plays](https://us.posthog.com/project/509611/insights/i7oTIfSs)

## Verify before merging

- [ ] Run a full production build (`npm run build`) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `PUBLIC_POSTHOG_PROJECT_TOKEN` and `PUBLIC_POSTHOG_HOST` to `.env.example` and any team onboarding scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-astro-static/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

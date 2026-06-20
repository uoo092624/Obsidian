# Codex Course Knowledge Base Rules

## Mission

Maintain this repository as a course-oriented Codex knowledge base. The goal is to turn raw Codex materials into reusable Chinese classroom assets: lesson notes, demo scripts, exercises, image references, PPT/Marp outlines, PDF-ready handouts, and troubleshooting guides.

## Boundaries

- Treat `raw/` as immutable source material. Read it, cite it, but do not edit, rename, or delete files inside it.
- Maintain generated knowledge in `wiki/`.
- Keep `attachments/` as the local visual asset pool. Do not delete or rename assets unless explicitly asked.
- Prefer adding new wiki pages or clearly marked updates over overwriting existing synthesis.
- For any Feishu/Lark document edits, do not directly overwrite or delete original text; mark changes with purple text color and strikethrough.

## Source Of Truth

- Use OpenAI official Codex documentation as the authority for current product behavior, configuration, permissions, skills, plugins, MCP, automations, hooks, and surface names.
- Use `raw/` as collected teaching material and practical examples.
- Mark claims as `official`, `raw-derived`, `experience`, or `needs-verification` when product behavior may have changed.

## Wiki Workflow

- For Ingest: create or update a source page, update related concept/feature/workflow/lesson pages, update `wiki/index.md`, and append to `wiki/log.md`.
- For Query: answer from `wiki/index.md` and relevant pages first; if the answer is reusable, file it back into `wiki/`.
- For Lint: report contradictions, stale claims, missing citations, orphan pages, weak lesson/demo links, and unresolved review items.
- For Output: generate classroom-ready artifacts under `wiki/outputs/` or a clearly named subfolder.

## Course Style

- Write in clear Chinese for classroom delivery.
- Every lesson should include learning goals, prerequisites, live demo, practice task, validation standard, common pitfalls, and source links.
- Every demo should include setup, instructor script, exact prompt, expected result, recovery path, and screenshot needs.
- Avoid turning the wiki into a pile of summaries. Prefer connected concept pages, feature pages, workflow pages, and lesson pages.

## Verification

- Do not treat screenshots, pricing, model names, or UI locations as permanent facts.
- Add `verified_at` when a page depends on current product behavior.
- Put uncertain or conflicting claims into `wiki/review_queue.md` instead of silently resolving them.

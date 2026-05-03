# Portfolio App Ideas — GitHub Pages (https://codingtarun.github.io/PlayJS/)

## The constraint

GitHub Pages is **static-only**. No Node server, no Postgres, no `process.env` secrets. To build "real" apps you need to either:

1. Stay fully client-side (Web Workers, IndexedDB, WASM, localStorage)
2. Use third-party APIs as the backend (Supabase free tier, Firebase, PlanetScale, Cloudflare Workers, GitHub API itself)
3. Deploy backend separately (Render / Fly.io / Railway / Cloudflare free tier) and call it from the static frontend

Each app idea below notes which strategy it uses.

## The recommended anchor: PlayJS as a Living Portfolio

This is the play I'd push hardest if I were coaching you.

**Concept**: Don't build *one* portfolio site that says "look at my skills". Turn https://codingtarun.github.io/PlayJS/ into a **single-domain hub** where:

- The homepage is a **skill tree** — each node is a topic (closures, hooks, Postgres indexes, etc.) with a status (learning / shipped / mastered) and a link to proof.
- Each `day_N` exercise becomes a **deployed sub-route** at `/day/N` with a runnable demo + source link + 2-paragraph "what I learned".
- 4–6 **anchor projects** (the bigger ones from the roadmap) live at `/apps/<slug>` with their own polished UI.
- A `/blog` section with short writeups — even 4 posts is enough to signal depth.

**Why this beats a normal portfolio**:
- Every commit ships to a public, browsable URL — recruiters see velocity, not just a static résumé.
- The skill tree is a *recruiter answer key* — they can verify each claim in one click.
- It naturally accumulates over six months. By Week 26 you have 25+ deployed mini-apps + 4 anchor projects + a blog. That's a one-of-one portfolio.
- It's also useful to *you* during interviews — you can pull up a specific demo on a screen-share.
- The same domain works for freelance customers: "see my live demo gallery at …" is a stronger pitch than a Behance-style brag site.

**Tech**: Vite + React + Tailwind + react-router (HashRouter for GitHub Pages, or BrowserRouter with the 404.html SPA-fallback hack). Source-link integration via the GitHub API (free, no key needed for public repos).

This is what I'd ship by **end of Week 8** as v0 and keep growing for the rest of the six months.

## Standalone app ideas (pick 1–2 as anchors *inside* the hub)

Ranked by interviewer / customer impression vs effort.

### 1. JS Visualizer Suite — "see how the engine actually runs your code"

**What**: Animated, interactive visualizations of the things JS interviewers love asking about — event loop, closures, prototype chain, hoisting, `this` binding.

**Why it lands**:
- Hiring managers physically see you understand what most candidates only memorize.
- You will *learn the topics deeply* by building it (the best forcing function).
- Niche enough that yours can rank on Google for "javascript closure visualizer".
- Existing reference: JavaScript Visualizer 9000 (Tyler McGinnis) — yours can be more comprehensive.

**Stack**: Pure client-side. React + Tailwind + framer-motion for animation. AST parsing via `acorn` (npm). Optionally embed Monaco editor for live input.

**Effort**: ~3 weekends for v1 (event loop only). Grows from there.

**Customer angle**: useful as a teaching tool — could attract students / juniors as users, give you real traffic numbers to put on resume.

### 2. DSA Pattern Visualizer

**What**: Each of the 14 standard interview patterns (sliding window, two pointers, BFS, DFS, DP tabulation, etc.) as an animated, step-controlled demo. User picks a problem, watches the algorithm walk the input.

**Why it lands**:
- Directly proves DSA depth — the exact thing recruiters question for full-stack JS hires.
- Recruiters share it (it's useful to *them*) → organic distribution.
- Built around the same problems you'll be solving in the roadmap, so building it doubles as DSA prep.

**Stack**: React + Tailwind + d3 (or just SVG by hand). All client-side.

**Effort**: ~1 week per pattern. Don't build all 14 — pick the 5 most-asked, ship them well.

### 3. Mock Interview Trainer — "Pramp for one"

**What**: Daily LeetCode-style problem with timer, in-browser editor (Monaco), in-browser code execution via Web Worker, and a personal stats dashboard (streak, problems solved by topic, time-to-solve trend).

**Why it lands**:
- Solves a real problem you have — eat your own dog food during Phase 6.
- Shows you can ship a non-trivial frontend with editor integration, code sandboxing, persistence (IndexedDB), data viz.
- You can publish it as an indie product and get actual users from r/leetcode.

**Stack**: React + Tailwind + Monaco editor + Web Worker for sandboxed eval + IndexedDB (Dexie). Problems sourced from a static JSON file you curate.

**Effort**: 2–3 weeks for a polished v1.

### 4. Component Lab — production-ready Tailwind components, source included

**What**: A live gallery of headless + Tailwind components you build (autocomplete, command palette, virtualized table, drag-and-drop kanban, inline editor, toast, modal manager, etc.). Each with a live preview, a code tab, and a "why I built it this way" note.

**Why it lands**:
- Frontend skill on display in the most legible form.
- Customers (freelance) can buy access or copy. Could even gate behind paid (gumroad), revenue is a strong resume signal.
- Each component is also a proof point in your skill tree.

**Stack**: React + Tailwind + Radix primitives (or pure-headless of your own). Static.

**Effort**: 1 component per week → 20+ by month 6.

### 5. Splitwise-clone, fully working

**What**: A real Splitwise alternative. Multi-user expense splitting, settle-up algorithm, group history, CSV export.

**Why it lands**:
- It's a **canonical system design interview question** ("Design Splitwise") — having actually *built* it is a flex.
- Real users — share with your friend group, you'll get a few. Real users → real bugs → real war stories for behavioral.

**Stack**: React + Tailwind frontend on GitHub Pages. Backend on Render free tier (Express + Postgres) — you'll need this for Phase 4 anyway. Auth via Google OAuth.

**Effort**: 4–6 weeks. This *is* your Phase-4 anchor project (Week 15–18 in ROADMAP.md).

### 6. Freelance-magnet utilities (customer-facing)

If you specifically want to attract paying customers (not just recruiters), build small, high-utility tools that solve one annoying problem:

| Idea | Why customers pay / share |
|---|---|
| **Invoice generator + PDF export** | Freelancers need this. Charge ₹299 for premium templates. |
| **Resume builder with live ATS preview** | Job-seeker traffic is huge in India. Monetize via templates / Razorpay. |
| **GST calculator + invoice for Indian freelancers** | Niche, ranks on Google, real B2B intent. |
| **Markdown-to-anything (PDF, slides, blog)** | Devs share these. |
| **Tab cleaner / bookmark organizer (PWA)** | Indie-hacker classic, easy to ship. |

These are **bad anchor projects for recruiters** (too small) but **excellent traffic + customer signals**. Ship 2–3 in your spare time alongside the main anchor.

### 7. AI-augmented learning companion (high-risk, high-reward)

**What**: Paste any JS code → get a step-through explanation, complexity analysis, and "what this would be in PHP/Laravel" comparison. Powered by Claude / OpenAI API key the user supplies (BYOK pattern — keeps it free for you to host).

**Why it lands**:
- AI literacy is now a hiring signal in 2026.
- Solves a real problem for *people like you* — devs switching languages.
- BYOK pattern means zero infra cost to you, and it's the right architecture choice (interviewers will appreciate it).

**Stack**: React + Tailwind + Anthropic / OpenAI client SDK called from browser with user-provided key (stored in localStorage). All client-side.

**Effort**: 2 weeks for a polished v1.

**Risk**: AI tools are a crowded space — yours has to be clearly differentiated by the "Laravel → JS translator" angle.

## My recommendation in one sentence

**Build the Living Portfolio hub (anchor concept) by Week 8, put the JS Visualizer Suite (#1) and Splitwise clone (#5) inside it as the two flagship apps, and ship 2–3 freelance-magnet utilities (#6) as side bets for traffic and revenue signals.** That portfolio walks into a 25 LPA loop and starts the conversation with you ahead.

## What *not* to build

Skip these — they signal junior:

- Tutorial clones (Netflix, Spotify, Twitter clone) — interviewers see hundreds of these
- Yet another to-do app, weather app, calculator
- "MERN stack" boilerplate apps that look like every other GitHub repo
- Anything you finish in a weekend without learning something new
- Projects that aren't deployed — undeployed code does not exist as far as recruiters are concerned

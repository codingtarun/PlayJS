# Skill-Gap Analysis — 25 LPA Full-Stack JS (Recruiter / Senior Engineer Perspective)

Reading this as if I were the hiring manager doing your loop. The role we're hiring for: **SDE-2, full-stack, Node + React + TypeScript**, ~25 LPA fixed (likely 28–32 LPA total comp with stock + variable) at a product-based company in India. This is what we look for in 2026.

## What the bar looks like at 25 LPA

A candidate at this band can, in a 4-round loop, do all of the following:

1. **DSA round (60 min)** — solve one medium and one medium-hard with optimal time/space, talk through trade-offs, write code that compiles first try.
2. **Machine coding round (90 min)** — build a working feature from scratch (e.g., "build an autocomplete with debounce, abort, and caching") with clean separation of concerns and at least one test.
3. **System design / HLD (60 min)** — design a moderately complex system end-to-end (e.g., "design Splitwise"), argue trade-offs on storage, consistency, scaling.
4. **Behavioral / depth (45–60 min)** — talk about the hardest production bug you debugged, explain *why* you chose a tool, push back constructively on a hypothetical decision.

You will get rejected at most product cos if any one of these is weak. The order matters too: most companies front-load DSA — fail it and you don't see the design round.

## What your Laravel background gives you for free

Don't undersell these — bring them up in interviews:

| Asset | How to frame it |
|---|---|
| Backend YOE | "I have N years writing production backend code in Laravel." Counts as backend YOE; recruiters care about time spent shipping, not the language. |
| HTTP / REST mental model | You already know status codes, idempotency, middleware, validation, sessions vs tokens. Express will feel like Laravel with explicit wiring. |
| ORM intuition | Eloquent → Prisma transfers cleanly. You already know N+1, eager loading, transactions. |
| Auth flows | Bcrypt, sessions, password resets, CSRF — all the same shape in Node. |
| Production debugging | Logs, error tracking, prod incidents — narrative gold for behavioral round. |
| Database design | Schema modeling, indexes, migrations — language-agnostic skill. |

**Net**: you are not a junior. You are a backend engineer learning a new stack. Frame yourself that way.

## Gaps interviewers will probe (ranked by frequency)

### 1. Async / event-loop reasoning (probed in 90% of JS rounds)

The single biggest mental shift from PHP to Node. Expect questions like:

- "What does this code print?" (with `setTimeout`, `Promise.resolve()`, `process.nextTick`, `await`)
- "How is the Node event loop different from the browser's?"
- "What's the difference between `Promise.all` and `Promise.allSettled`?"
- "Why does this `await` inside a loop perform badly?"

**How to close it**: Week 3 of the roadmap is dedicated to this. Practice tracing execution by hand on 20 snippets. The Lydia Hallie "JS event loop" visualization videos are gold.

### 2. DSA (gating filter, 100% of product cos)

PHP day-to-day work doesn't build this. Without 200–300 problems under your belt you will fail the first round.

**What's enough**:
- 200+ LeetCode (60 easy, 110 medium, 30 hard)
- Solve a fresh medium in 25–30 min
- Recognize the 14 standard patterns instantly
- Can dry-run code on whiteboard without an editor

**Red flag for interviewers**: candidate writes correct code but can't explain the time/space complexity. Always state Big-O before and after optimizing.

### 3. React internals (every frontend round)

Knowing how to use hooks ≠ understanding React. Expect:

- "Why does this `useEffect` run twice in dev?"
- "When should you use `useMemo`? When is it harmful?"
- "Walk me through reconciliation."
- "What's the difference between controlled and uncontrolled inputs, and when would you choose uncontrolled?"
- "How does `key` actually work? What happens if you use index as key?"
- "How do React 19 transitions / `use` / server components change things?"

**How to close it**: Phase 2 (weeks 12–17 in the recalibrated 12-month plan). The Kent C. Dodds "Advanced React Patterns" course material (free articles) plus reading react.dev's "Escape Hatches" + "Reference" sections cold.

### 4. System design (separates SDE-1 from SDE-2)

For 25 LPA you need at least working HLD intuition. You don't need to be world-class — you need to:

- Walk through requirements clarification
- Sketch architecture: clients → LB → API → DB + cache + queue
- Talk concretely about one bottleneck and how to scale past it
- Know when to use Redis vs Postgres vs Mongo vs Elasticsearch (and *why*)

**Common 25-LPA-bar questions**:
- Design URL shortener (warmup)
- Design rate limiter (token bucket vs sliding window)
- Design WhatsApp / chat
- Design Splitwise
- Design Zomato live order tracking
- Design Razorpay-style payment gateway

**How to close it**: Phase 5. Don't over-prep — 8–10 problems done deeply beats 30 done shallowly.

### 5. TypeScript fluency (table stakes)

Most product cos write TS, not JS. You don't need to be a type-system wizard, but you need:

- Generics in component props and API responses
- Discriminated unions for state machines / API responses
- `as const`, `satisfies`, `keyof`, `typeof`
- No `any` reflexes — reach for `unknown` instead

**Red flag**: candidate uses `any` to "make TS shut up". Instant downgrade in seniority assessment.

### 6. Testing (mid-strength differentiator)

Most candidates can't write a meaningful test. If you can, you stand out.

- Unit: Vitest + React Testing Library (test behavior, not implementation)
- Integration: API tests against a real test DB (don't mock Prisma)
- E2E: one Playwright happy-path per critical flow

You will be asked: "How would you test this component?" Have a real answer.

### 7. Build tooling, deploys, observability (separates senior from mid)

- Vite vs webpack vs Turbopack — when does each matter?
- Docker multi-stage builds, image size
- CI/CD: actually setting it up, not just clicking buttons in Vercel
- Logging (structured, not console.log), metrics, traces — at least conceptually

### 8. Soft / behavioral signals

For 25 LPA we hire for:

- **Ownership**: "I noticed X was broken so I fixed it" stories
- **Pushback**: a time you disagreed with a decision and how you handled it
- **Trade-off thinking**: nothing is "best practice", everything is "depends on Y"
- **Failure stories**: an outage or bug you caused — what you learned

Memorize 6 STAR stories from your Laravel work. They are interview currency.

## Red flags interviewers actively look for

If any of these appear, you drop a band (offer goes from 25 → 18 LPA, or rejected):

- Talks in vague generalities ("I optimized performance" — without numbers, tools, or before/after)
- Can't explain *why* a chosen tool, only that it's "popular" or "better"
- Writes code without stating assumptions or asking clarifying questions
- Uses `any` in TS or skips error handling and waves it off
- Shows projects that are "follow the tutorial" clones — to-do app, weather app, Netflix clone
- Can't dry-run their own code
- Says "I'd Google it" for fundamentals (closures, event loop, indexing)
- LinkedIn says "fullstack developer" but GitHub has 3 commits in 6 months

**The portfolio test**: a recruiter spends 30 seconds on your GitHub. If your top repos are tutorial clones with no commits in months, the resume goes in the no pile. The PlayJS strategy in PORTFOLIO-APP-IDEAS.md is designed to avoid this.

## Portfolio bar at 25 LPA

You need **at minimum**:

1. **One anchor project** — non-trivial (≥ 2k LOC), deployed, publicly accessible, real users or at least real-feeling. README explains the architecture decisions, not just "how to run". Has a 2-min Loom demo.
2. **One open-source contribution** — a real PR merged into a real OSS project. Doesn't have to be huge; "fixed a docs typo" doesn't count, but "fixed a bug in `react-hook-form` validation" does.
3. **A consistent green commit graph** — recruiters look at this as a proxy for "do they actually code".
4. **A blog or written artifact** — even 4–5 posts. Writing about what you built signals seniority. Hashnode/Dev.to/personal blog all fine.

**Bonus that lands offers**: a project that has *users*. Even 50 real users beats a polished demo with zero. Anything ranking on Google for a niche query is a strong signal.

## Salary calibration (Bangalore / Hyderabad / NCR, 2026)

Rough bands for full-stack JS at product cos:

| YOE | Band | Range (fixed CTC) | Notes |
|---|---|---|---|
| 0–1 | SDE-1 / Junior | 8–14 LPA | Entry, even FAANG India |
| 2–3 | SDE-1 strong | 14–22 LPA | Mid product cos top out here |
| 3–5 | SDE-2 | **22–35 LPA** | **Your target band** |
| 5–8 | SDE-3 / Senior | 35–60 LPA | Requires leadership signal |

**Your situation**: you have N years of Laravel experience but switching stacks. Most companies will treat the new-stack experience as "0 YOE Node" in level fitment unless you negotiate hard with strong DSA + system design + a real anchor project. **Lead with backend YOE, demonstrate JS depth through the interview, and let the project carry seniority signal.**

To target 25 LPA fixed:
- Apply for SDE-2 roles (don't downgrade to SDE-1 self-perception)
- Ask for 28–30 LPA in your first conversation (offers come 10–15% below ask)
- Have at least 2 competing offers in week 26 — single-offer negotiation rarely moves >10%

## What to do *this week* (Week 1)

1. Read this entire doc once more.
2. Bookmark the resources from ROADMAP.md and install: Node LTS, pnpm, VS Code with TS + ESLint extensions, sign up for LeetCode and NeetCode.
3. Write down 3 STAR stories from your Laravel work — the hardest bug, the biggest feature you owned, the worst incident. Save them to a file.
4. Pick the top 3 candidate companies you'd most want to work at and write down what they're known for technically (system design problems they ask, tech blog posts, any leaked interview formats from Glassdoor/LeetCode discuss).
5. Begin Week 1 of ROADMAP.md.

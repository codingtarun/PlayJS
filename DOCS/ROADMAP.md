# 12-Month Roadmap — Laravel → Full-Stack JS (25 LPA Target, 2h/day)

**Start**: 2026-05-03 · **Interview window opens**: 2027-03-14 (Week 46) · **Target offer**: 2027-04-30 · **Daily commitment**: ~2 hours/day average (working professional)

## Why 12 months, not 6

At 2 h/day × 7 days = **14 h/week**, this plan accumulates ~700 study hours over 12 months — about what's needed to take a working backend dev from zero JS to a 25 LPA-ready candidate at product cos (DSA + system design + 2 anchor projects + interview prep).

The original 6-month plan assumed 5 h/day = ~900 hours. Cutting daily time by 60% but keeping the timeline would mean either (a) skipping DSA or system design — both gating filters at product cos — or (b) showing up to interviews half-prepared and getting downleveled to SDE-1 (14–18 LPA).

**Two honest options if 12 months feels too long**:
- **Option A (recommended, this doc)**: 12 months at 2 h/day → 25 LPA target intact.
- **Option B**: Stick to 6 months, target SDE-1 / 14–18 LPA, then continue grinding for another 6–12 months to reach SDE-2 / 25 LPA.

If you can boost weekends to 4–5 h each, you'll finish ~2 months ahead of schedule. Plan for the floor, get rewarded for going over.

## The four parallel tracks (compressed for 2h/day)

You will run these **simultaneously**, not sequentially. Stopping DSA for two months to "finish React" is the most common failure mode.

| Track | Daily share | Daily minutes | Why |
|---|---|---|---|
| **Skills** (JS → React → Node) | 50% | ~60 min | The actual job skills |
| **DSA** (LeetCode) | 35% | ~45 min | Gating filter at every product co |
| **Project / reading** | 15% | ~15 min | Compounding portfolio + system-design intuition |

Project work is hard to fit into 15 min/day on weekdays. **Save bigger project chunks for the weekend** — even 2–3 hours one weekend day per week is a huge multiplier. The week-by-week plan assumes ~10 weekday hours + ~4 weekend hours = ~14 h/week.

**Weekly DSA quota**: 4 problems/week (was 8 in the original). Pick mediums — 2 mediums beat 5 easies for interview prep.

## Phase overview

| Phase | Weeks | Dates | Focus |
|---|---|---|---|
| 1. JS foundations | 1–9 | May 3 – Jul 4, 2026 | Modern JS, TS basics, HTML/CSS/Tailwind, DSA: arrays/strings/hashing |
| 2. React + advanced JS | 10–19 | Jul 5 – Sep 12, 2026 | React, hooks, state mgmt, perf, DSA: linked lists/recursion/stacks/trees |
| 3. Node + databases | 20–29 | Sep 13 – Nov 21, 2026 | Node, Express, Postgres, Prisma, REST, auth, DSA: trees/BFS/DFS |
| 4. Full-stack + anchor v1 | 30–37 | Nov 22, 2026 – Jan 16, 2027 | Auth, Redis, Docker, websockets, **anchor project v1**, DSA: graphs/sliding window |
| 5. System design + anchor v2 | 38–45 | Jan 17 – Mar 13, 2027 | HLD, caching, queues, testing, **anchor project v2**, DSA: DP/greedy |
| 6. Interview sprint | 46–52 | Mar 14 – May 1, 2027 | Mock interviews, revise, apply, polish portfolio |

## Phase 1 — JS foundations (Weeks 1–9, May 3 – Jul 4, 2026)

**Weeks 1–2 (May 3–16) — JS core + closures**
- Variables, scope, hoisting, `var`/`let`/`const`, strict mode, functions (first-class, arrow vs regular, IIFE)
- Closures (deep — module pattern, currying, memoization)
- Resource: Akshay Saini's *Namaste JavaScript* episodes 1–10
- DSA (8 total): two-sum, valid anagram, contains duplicate, group anagrams, top-K frequent, valid palindrome, longest substring without repeating, contains duplicate II
- Weekend: convert one of your `day_*` exercises to ES6+ idioms; deploy to GitHub Pages

**Weeks 3–4 (May 17–30) — `this`, prototypes, classes**
- `this` binding rules, call/apply/bind, prototype chain, ES6 classes, inheritance
- Laravel anchor: prototypes ≈ Eloquent magic methods feel; closures ≈ PHP `use ()` but lexical
- DSA (8): longest consecutive, product of array except self, encode/decode strings, valid sudoku, container with most water, 3-sum, isomorphic strings, find all anagrams in string

**Weeks 5–6 (May 31 – Jun 13) — Async JS**
- Callbacks → Promises → async/await → generators
- `Promise.all` / `allSettled` / `race` / `any`, error handling, AbortController
- Build: a "fetch with retry + timeout + abort" utility from scratch
- DSA (8): merge two sorted lists, reverse linked list, linked list cycle, reorder list, remove Nth from end, copy list with random pointer, **LRU cache**, add two numbers

**Weeks 7–8 (Jun 14–27) — Event loop + modern toolchain**
- Event loop, call stack, microtask vs macrotask queue (the #1 JS interview topic)
- Trace 20 snippets by hand: `setTimeout` + `Promise.resolve()` + `process.nextTick` + `await` mixes
- ES modules, Vite, npm/pnpm, semver, source maps
- DSA (8): valid parentheses, min stack, evaluate RPN, generate parentheses, daily temperatures, car fleet, largest rectangle in histogram, simplify path

**Week 9 (Jun 28 – Jul 4) — Tailwind + TS basics**
- Tailwind v4: utility-first, responsive, dark mode, the new `@theme` directive
- TS: types, interfaces, generics basics, unions, narrowing
- Weekend: a portfolio landing page in Tailwind, deploy to https://codingtarun.github.io/PlayJS/
- DSA (4): merge intervals, insert interval, non-overlapping intervals, meeting rooms

**End-of-phase checkpoint**: explain the event loop on a whiteboard, write a debounce/throttle from scratch, ship a Tailwind landing page.

## Phase 2 — React + advanced JS (Weeks 10–19, Jul 5 – Sep 12, 2026)

**Weeks 10–11 (Jul 5–18) — React fundamentals**
- JSX, components, props, controlled inputs, lists/keys, conditional rendering
- `useState`, `useEffect`, dep arrays, cleanup
- Resource: react.dev tutorial — *all* of it including "Thinking in React"
- Project: rebuild your old "Mapify" exercise (was on `day_22`) in React
- DSA (8): binary search, search in rotated sorted array, find min in rotated sorted, search 2D matrix, koko eating bananas, find first/last position, time-based key-value store, single element in sorted array

**Weeks 12–13 (Jul 19 – Aug 1) — Hooks deep**
- `useRef`, `useMemo`, `useCallback` — and when *not* to use them
- Context API, lifting state, composition vs prop-drilling
- Build 5 custom hooks from scratch: `useDebounce`, `useFetch`, `useLocalStorage`, `useOnClickOutside`, `useMediaQuery`
- DSA (8): invert binary tree, max depth, balanced binary tree, same tree, subtree of another, lowest common ancestor BST, level order traversal, right side view

**Weeks 14–15 (Aug 2–15) — State + forms + routing**
- Zustand (simpler than Redux Toolkit, increasingly preferred); know Redux Toolkit conceptually for interviews
- React Hook Form + Zod for validation
- React Router v7 (data routers, loaders, actions)
- Project: a multi-page Tailwind dashboard with routing + form validation (this becomes a portfolio piece)
- DSA (8): validate BST, kth smallest in BST, construct tree from preorder/inorder, binary tree max path sum, serialize/deserialize tree, count good nodes, diameter of binary tree, flatten tree

**Weeks 16–17 (Aug 16–29) — React performance + patterns**
- React 19 features: `use`, server components conceptually, transitions
- `React.memo`, virtualization (react-window), code-splitting (lazy/Suspense)
- Render-prop, compound components, headless components (study Radix / Headless UI sources)
- Project: take Week 14–15's dashboard, virtualize a 10k-row table without jank
- DSA (8): subsets, combinations, permutations, combination sum, word search, palindrome partitioning, letter combinations of phone number, N-queens

**Weeks 18–19 (Aug 30 – Sep 12) — Testing + TS in React**
- Vitest + React Testing Library — test the dashboard you built
- One Playwright E2E test for the happy path
- TS: discriminated unions, conditional types, `as const`, template literal types, generics in React props
- Convert one full project to strict TS
- DSA (8): number of islands, max area of island, clone graph, pacific atlantic, surrounded regions, course schedule I & II, redundant connection

**End-of-phase checkpoint**: build a typed, tested, performant React app with routing and state without consulting tutorials. **Pick your anchor portfolio project this week** (see PORTFOLIO-APP-IDEAS.md).

## Phase 3 — Node + databases (Weeks 20–29, Sep 13 – Nov 21, 2026)

**Weeks 20–21 (Sep 13–26) — Node fundamentals**
- Node event loop (libuv, phases) — *different* from browser event loop, interview favorite
- Modules (CJS vs ESM), `package.json` deeply, npm/pnpm workspaces
- File I/O, streams (the thing PHP devs find most foreign), buffers, EventEmitter
- Build: a CLI tool that streams a large file and counts something
- DSA (8): word ladder, alien dictionary, longest increasing path in matrix, min cost to connect all points, network delay time, swim in rising water, cheapest flights within K stops, reconstruct itinerary

**Weeks 22–23 (Sep 27 – Oct 10) — Express + REST**
- Express: routing, middleware, error handling — frame as "Laravel routes/middleware but explicit"
- REST design: resources, status codes, idempotency, pagination, versioning
- Validation (Zod), error envelopes, request logging (pino)
- Project: REST API for the dashboard from Weeks 14–15
- DSA (8): climbing stairs, min cost climbing stairs, house robber I & II, longest palindromic substring, palindromic substrings, decode ways, coin change

**Weeks 24–25 (Oct 11–24) — Postgres + Prisma**
- SQL refresh: joins, indexes, EXPLAIN, transactions, isolation levels
- Prisma schema, migrations, relations, transactions — anchor as "Eloquent for TS"
- N+1 queries, connection pooling
- Project: replace the in-memory store from Weeks 22–23 with Postgres + Prisma
- DSA (8): longest increasing subsequence, longest common subsequence, edit distance, distinct subsequences, regex matching, interleaving string, max product subarray, target sum

**Weeks 26–27 (Oct 25 – Nov 7) — Auth + security**
- JWT vs sessions, refresh tokens, rotation, revocation
- OAuth 2.0 + OIDC flows, "Login with Google" implemented from scratch
- OWASP top 10 in Node context: SQLi (Prisma helps), XSS, CSRF, SSRF, insecure deserialization, rate limiting
- Argon2/bcrypt, password reset flow done right
- DSA (8): maximum subarray, jump game I & II, gas station, hand of straights, merge triplets to form target, partition labels, valid parenthesis string, candy

**Weeks 28–29 (Nov 8–21) — Real-time + caching**
- WebSockets (raw `ws`, then Socket.IO), use cases vs SSE vs polling
- Redis: caching strategies (cache-aside, write-through), rate-limit, pub/sub, simple queue
- BullMQ for background jobs
- Project: add a real-time feature + Redis caching to the Weeks 24–25 API
- DSA (8): single number I/II/III, number of 1 bits, counting bits, reverse bits, missing number, sum of two integers, reverse integer, divide two integers

**End-of-phase checkpoint**: typed full-stack app (React + Express + Postgres + Redis + auth) deployable end-to-end.

## Phase 4 — Full-stack + anchor v1 (Weeks 30–37, Nov 22, 2026 – Jan 16, 2027)

**Weeks 30–31 (Nov 22 – Dec 5) — Anchor design + scaffold**
- Pick anchor from PORTFOLIO-APP-IDEAS.md
- Design doc: requirements, ER diagram, API contract, component tree
- Scaffold both ends, deploy CI for the frontend (GitHub Pages) and backend (Render / Fly.io free tier)
- DSA (8): rotate image, spiral matrix, set matrix zeroes, happy number, plus one, pow(x,n), multiply strings, detect squares

**Weeks 32–33 (Dec 6–19) — Anchor: ship the killer feature**
- End-to-end implementation of the most distinctive feature
- Add one E2E Playwright test that proves the happy path
- Add error tracking (Sentry free tier) and basic structured logging
- DSA (8): reverse linked list II, rotate list, partition list, sort list, merge K sorted lists, swap nodes in pairs, reverse nodes in K group, design linked list

**Weeks 34–35 (Dec 20 – Jan 2) — Docker + CI/CD** (lighter weeks — holidays; expect lower output)
- Dockerfile + docker-compose for local dev (Postgres + Redis + app)
- Multi-stage builds, image size optimization
- GitHub Actions: test → build → deploy on merge to `main`
- Add Docker setup to anchor project
- DSA (6): kth largest element, find K closest, top-K frequent words, kth largest stream, design Twitter, task scheduler

**Weeks 36–37 (Jan 3–16) — Observability + polish**
- Logging (pino + Better Stack free tier), metrics (Prometheus concepts), traces (OpenTelemetry basics)
- Performance: Lighthouse, bundle analyzer, lazy-load images, font optimization
- Anchor v1 = "shippable to a stranger"
- DSA (8): meeting rooms I & II, non-overlapping intervals, insert interval, employee free time, minimum interval to include each query, video stitching, car pooling, my calendar I & II

## Phase 5 — System design + anchor v2 (Weeks 38–45, Jan 17 – Mar 13, 2027)

**Weeks 38–39 (Jan 17–30) — HLD fundamentals**
- Scalability axes (vertical/horizontal), load balancers, CDN, sharding, replication
- CAP theorem, consistency models (you'll be asked about this)
- Resource: ByteByteGo's *System Design Interview Vol 1* + Gaurav Sen's YouTube series
- Practice problem: "Design a URL shortener" — write a 2-page doc
- DSA (8): word break I & II, partition equal subset, ones and zeroes, last stone weight II, profitable schemes, tallest billboard, paint house, paint house II

**Weeks 40–41 (Jan 31 – Feb 13) — HLD problems + microservices**
- Design: rate limiter, news feed, chat (WhatsApp-lite), notification system — each as a 1-hour timed exercise → 1-page doc → compare to canonical solution
- When (and when not) to split services; sync (REST/gRPC) vs async (Kafka/RabbitMQ)
- Saga pattern, outbox pattern, idempotency keys
- Build: split one feature of anchor project into a worker service via BullMQ
- DSA (8): max sum of 3 non-overlapping subarrays, smallest range covering K lists, sliding window maximum, sliding window median, longest substring with at most K distinct, fruit into baskets, max consecutive ones III, minimum window substring

**Weeks 42–43 (Feb 14–27) — DBs at depth + advanced testing**
- Postgres: indexes (B-tree vs GIN/GiST), `EXPLAIN ANALYZE`, partitioning, vacuuming
- When to reach for Mongo / Redis / Elasticsearch — and when *not* to
- Contract testing, load testing (k6), chaos basics
- DSA (8): trapping rain water (now do it), sliding puzzle, shortest path in binary matrix, walls and gates, rotting oranges, 01 matrix, shortest bridge, as far from land as possible

**Weeks 44–45 (Feb 28 – Mar 13) — Anchor v2 + polish**
- Bring anchor project to v2 — this is what you'll demo in interviews
- Add one HLD pattern slice (e.g., a real cache layer with metrics, or a real worker queue)
- Record a 2-min Loom demo, write a 500-word "architecture decisions" README section
- DSA (8): design HashMap, design HashSet, design hit counter, design phone directory, design log rate limiter, design tic-tac-toe, design snake game, design parking lot

## Phase 6 — Interview sprint (Weeks 46–52, Mar 14 – May 1, 2027)

**Weeks 46–47 (Mar 14–27) — DSA revision + patterns**
- Re-solve 50 problems you struggled with first time, blind
- Master the 14 standard patterns (sliding window, two pointers, fast/slow, merge intervals, cyclic sort, in-place reversal, BFS, DFS, two heaps, subsets, modified BS, top-K, K-way merge, topological sort)
- Resource: Striver's SDE sheet revision + NeetCode 150
- 2 mock interviews (Pramp / Interviewing.io free credits)

**Weeks 48–49 (Mar 28 – Apr 10) — Mocks + portfolio polish**
- 6 mocks total: 3 DSA, 2 system design, 1 React/JS deep-dive
- Record yourself, watch back, fix verbal patterns ("um", silence, jumping to code)
- Polish portfolio README, the Loom demo, write a "what I built and learned" LinkedIn post
- Update LinkedIn headline + about section

**Weeks 50–51 (Apr 11–24) — Apply + behavioral**
- Target list: Razorpay, CRED, Postman, Atlassian India, Zeta, PhonePe, Flipkart, Microsoft IDC, Meesho, Swiggy, Zomato/Eternal — apply to all
- STAR-format stories: pick 6 from your Laravel + project work
- Referrals > cold apply: post in r/developersIndia, ask in employee referral threads on LinkedIn
- Keep DSA warm: 3 problems/day, no new topics

**Week 52 (Apr 25 – May 1) — Interview window opens**
- Front-load: take recruiter screens immediately, schedule loops 1 week out
- Don't take competing offers in week 1 — let pipelines mature for negotiation leverage
- Negotiation prep: know your number (25 LPA = ~30 LPA target ask, since offers come in below ask)

## Daily routine template (2 h on a weekday)

| Block | Time | Activity |
|---|---|---|
| Morning (before work, if possible) | 45 min | DSA — 1 problem, attempt for 25 min, then read solution + understand pattern |
| Evening | 60 min | Skills (current week's topic) — watch / read 20 min, code 40 min |
| Wind-down | 15 min | Read (system design primer / DDIA / blog post) |

**Weekend (the multiplier)** — block 3–4 hours one day for project work. This is when you actually ship code that ends up on your portfolio. Without weekend project time, the anchor project will not get done in this timeline.

## Weekly review ritual (every Sunday, 20 min)

1. DSA: how many problems? Which patterns weak?
2. Skills: did I ship a working artifact this week, or just consume content?
3. Project: any commits / deploys this week? (At least 1/week non-negotiable.)
4. Recalibrate: am I behind? What gets cut next week to catch up?

## Resources (curated, no fluff)

**JS deep**
- *Namaste JavaScript* (Akshay Saini) — free YouTube, perfect for Indian interviews
- *You Don't Know JS Yet* (Kyle Simpson, free on GitHub) — for after Namaste
- MDN docs — bookmark, use it like a dictionary

**React**
- react.dev — the only tutorial you need to start
- Kent C. Dodds blog (epicreact.dev) — patterns and testing
- Josh W. Comeau blog — animations, CSS-in-React

**Node**
- nodejs.org official guides
- Matteo Collina's talks on streams + perf
- *Node.js Design Patterns* (Casciaro & Mammino, 3rd ed.)

**DSA**
- NeetCode 150 + NeetCode roadmap (free, video solutions)
- Striver's SDE Sheet (takeUforward.org) — Indian-market gold standard
- LeetCode premium for company-tagged questions (worth it in Phase 6 only)

**System design**
- *System Design Interview Vol 1 & 2* — Alex Xu (ByteByteGo)
- *Designing Data-Intensive Applications* — Kleppmann (slow, deep, the bible — read across Phases 4 + 5)
- Gaurav Sen YouTube — solid Indian-context examples

**Interview prep**
- Pramp.com — free peer mocks
- excalidraw.com — your system-design whiteboard
- exponent / interviewing.io — paid mocks if budget allows in Phase 6

## What to cut if you fall further behind

- **Don't cut**: DSA (1 problem/day non-negotiable, even if just review), the anchor project, Sunday review.
- **Cut first**: TypeScript advanced types (defer to Phase 4), microservices week (you can fake this with one worker service), the second HLD problem set.
- **Never cut by skipping**: skip topics openly and write down "deferred to month X". Pretending you covered it is how interviews go badly.

## Catch-up rules

- Falling 1 week behind: do 1 extra hour on Saturday for 4 weeks to recover.
- Falling 1 month behind: re-plan, don't push deadline. Cut microservices week + cut Phase 5 to 6 weeks (skip half of HLD problems).
- Falling 2 months behind: be honest with yourself — either find more daily time or extend the deadline. Showing up to interviews underprepared wastes the year.

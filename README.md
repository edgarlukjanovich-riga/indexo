# INDEXO Test Portal

A small authenticated portal built with Next.js, React, TypeScript and Bootstrap 5.

## Features

- Login with a personal code (format `XXXXXX-XXXXX`, numbers only)
- Session persistence via `localStorage`
- Posts dashboard fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)
- Paginated post cards with URL-based page state (`?page=N`)
- Side drawer with full post details
- Fully responsive UI using Bootstrap 5

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

## Authentication

No real authentication API is used. The valid personal code is predefined in `src/lib/const.ts`:

```
231090-14115
```

The session is stored in `localStorage` and persists across page reloads.

## Scripts

| Script           | Description               |
| ---------------- | ------------------------- |
| `npm run dev`    | Start development server  |
| `npm run build`  | Build for production      |
| `npm start`      | Start production server   |
| `npm run lint`   | Run ESLint                |
| `npm run format` | Run Prettier on all files |
| `npm test`       | Run Jest unit tests       |

## Project Structure

```
src/
├── app/
│   ├── dashboard/
│   │   └── page.tsx          # Dashboard route
│   ├── layout.tsx             # Root layout, Bootstrap + Redux Provider
│   ├── page.tsx               # Login route
│   └── styles.css             # Global styles
├── components/
│   ├── common/
│   │   ├── EmptyState.tsx     # Reusable empty state message
│   │   ├── ErrorAlert.tsx     # Reusable error alert
│   │   ├── Pagination.tsx     # Pagination with prev/next and page buttons
│   │   └── Spinner.tsx        # Loading spinner
│   ├── dashboard/
│   │   ├── PostCard.tsx       # Single post card with preview
│   │   └── PostList.tsx       # Posts grid with loading/error/empty states
│   ├── drawer/
│   │   ├── Drawer.tsx         # Generic reusable slide-in drawer
│   │   ├── PostDetail.tsx     # Full post content inside drawer
│   │   └── PostDrawer.tsx     # Wires Drawer + PostDetail together
│   ├── login/
│   │   └── LoginCard.tsx      # Login form card
│   ├── nav/
│   │   └── NavHeader.tsx      # Top navigation bar
│   └── StoreProvider.tsx      # Redux Provider wrapper
├── hooks/
│   └── useAuthGuard.ts        # Redirects unauthenticated users to /
├── lib/
│   ├── auth.ts                # login / logout / isAuthenticated
│   ├── const.ts               # All app constants and messages
│   ├── types.ts               # TypeScript types (Post)
│   └── utils.ts               # ensureDot, stripNonDigits, formatPersonalCode
├── store/
│   ├── api/
│   │   └── postsApi.ts        # RTK Query API slice (getPosts, getPost)
│   └── store.ts               # Redux store with rootReducer and AppDispatch
└── __tests__/
    ├── auth.test.ts
    ├── const.test.ts
    ├── components.common.test.tsx
    ├── components.drawer.test.tsx
    ├── components.nav.login.test.tsx
    ├── components.pagination.test.tsx
    ├── components.postcard.test.tsx
    ├── store.test.ts
    ├── useAuthGuard.test.ts
    └── utils.test.ts
```

## Tech Stack

| Technology            | Purpose                         |
| --------------------- | ------------------------------- |
| Next.js 14            | React framework with App Router |
| React 18              | UI library                      |
| TypeScript            | Type safety                     |
| Bootstrap 5           | Responsive UI components        |
| Redux Toolkit         | State management                |
| RTK Query             | Data fetching and caching       |
| Jest                  | Unit testing                    |
| React Testing Library | Component testing               |
| ESLint                | Linting                         |
| Prettier              | Code formatting                 |

## Tests

69 tests across 10 suites:

| File                             | Coverage                                                             |
| -------------------------------- | -------------------------------------------------------------------- |
| `auth.test.ts`                   | `login`, `logout`, `isAuthenticated` with localStorage               |
| `const.test.ts`                  | `PERSONAL_CODE_REGEX` format validation, `MESSAGES` completeness     |
| `utils.test.ts`                  | `ensureDot`, `stripNonDigits`, `formatPersonalCode`                  |
| `store.test.ts`                  | Store structure, `postsApi` endpoints and `reducerPath`              |
| `useAuthGuard.test.ts`           | Redirect when unauthenticated, no redirect when authenticated        |
| `components.common.test.tsx`     | `EmptyState`, `ErrorAlert`, `Spinner` snapshots + rendering          |
| `components.pagination.test.tsx` | Pagination snapshot, prev/next visibility, page change, active state |
| `components.nav.login.test.tsx`  | `NavHeader` and `LoginCard` snapshots, interactions, error display   |
| `components.postcard.test.tsx`   | `PostCard` snapshot, click handler, ellipsis vs dot logic            |
| `components.drawer.test.tsx`     | `Drawer` snapshots, backdrop visibility, close interactions          |

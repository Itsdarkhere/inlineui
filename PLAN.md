# InlineUI — Project Plan

## Concept
A component showcase site where the visual style comes entirely from `.md` prompt files. Users toggle between styles, see components transform, and can download or purchase the prompts to use with AI tools.

---

## Tech Stack

- **Framework**: React Router 7 (Remix v2 merged into RR, React + SSR)
- **Bundler**: Vite
- **Styling**: Tailwind CSS v4
- **Primitives**: Radix UI + cmdk (unstyled accessible components)
- **Auth**: Custom (sessions + OAuth, built in-house)
- **Database**: Aiven PostgreSQL
- **Payments**: Stripe (Connect for designer payouts)
- **Hosting**: Render
- **Storage**: S3 or Aiven for Redis/cache if needed

---

## Requirements

### Core Site
- ~20 component "harnesses" (structural, minimal styling)
- Style toggle in top-right (switches active .md file)
- Components re-render based on selected style
- Clean, typographically beautiful docs-like design
- Mobile responsive

### Style System
- Each `.md` file = one complete aesthetic
- Free vs paid distinction visible in toggle
- Preview any style before purchase
- Download .md file on purchase/free grab

### User System
- Sign up / log in (OAuth preferred)
- User profile page
- "My Styles" — purchased + submitted styles
- Designer profile (public page showing their styles)

### Submission Flow
- Authenticated users can submit .md files
- Preview their style against the harness components
- Set price (free or $X)
- Pending review before going live (optional v1 skip)

### Payments
- Stripe Connect or similar for payouts to designers
- Platform takes X% cut
- Simple checkout flow
- Receipt / download link post-purchase

---

## Components (18 Harnesses)

See COMPONENTS.md for full descriptions.

1. Button
2. Card
3. Typography
4. Form
5. Table
6. Alert
7. Dialog
8. Dropdown Menu
9. Tabs
10. Command Palette
11. Toast
12. Navigation Bar
13. Pricing Card
14. Badge
15. Accordion
16. Pagination
17. Hero Section
18. Footer

---

## .md File Structure (TBD)

Each prompt file should describe:
- Overall aesthetic philosophy
- Color approach
- Typography choices
- Spacing/density preferences
- Border/radius/shadow treatment
- Animation/transition style
- Component-specific notes

---

## Phases

### Phase 1 — MVP
- Static site with 3 bundled .md styles
- Style toggle works
- No auth, no payments
- "Coming soon" for submissions

### Phase 2 — Auth + Submissions
- User accounts
- Submit your own .md
- Free styles only

### Phase 3 — Payments
- Paid styles
- Designer payouts
- Public designer profiles

---

## Open Questions

- Exact .md format / schema?
- Review process for submissions?
- Pricing model (flat fee vs revenue share %)?
- Do we need a CLI for local use?

# InlineUI — Components

18 components chosen specifically to reveal style differences. Each one has enough visual surface to show what makes an aesthetic unique.

---

## 1. Button
The most important element. Shows color, typography, borders, shadows, radius, and hover/active states. Display all variants: primary, secondary, outline, ghost, destructive. Multiple sizes.

## 2. Card
Large surface area. Reveals spacing philosophy, shadow treatment, border approach, and radius choices. Use for a generic content card with header, body, footer.

## 3. Typography
Not a component — a composition. Show h1 through h4, body text, small text, links, inline code, blockquotes, and lists. This is where the font soul lives.

## 4. Form
Complete form composition: labels, text inputs, a select, a textarea, validation error states, helper text, and submit button. Shows how a style handles real UI work.

## 5. Table
Data density test. Headers, rows, optional striping, borders or borderless, cell padding. How does the style handle information-heavy UI?

## 6. Alert
Color system showcase. Four variants: info, success, warning, error. Shows icon treatment, typography in context, and how the style uses color to communicate.

## 7. Dialog
Overlay treatment. Backdrop styling, the modal itself, close button, title, body content, action buttons. Animation in/out is part of the personality.
**Primitive**: `@radix-ui/react-dialog`

## 8. Dropdown Menu
Floating UI test. Shadow, border, radius on the floating panel. Hover states on items, separators, icons. Keyboard focus visible.
**Primitive**: `@radix-ui/react-dropdown-menu`

## 9. Tabs
Active vs inactive states. Underline style, pill style, or enclosed panels? Shows how the style handles navigation and state indication.
**Primitive**: `@radix-ui/react-tabs`

## 10. Command Palette
The power-user piece. Search input, result list, keyboard shortcut hints, grouping, selection state. Complex enough to show sophistication or lack of it.
**Primitive**: `cmdk`

## 11. Toast
Ephemeral notifications. Positioning, enter/exit animation, close button, icon, color variants. Small but shows personality in motion.
**Primitive**: `@radix-ui/react-toast`

## 12. Navigation Bar
Layout sensibility. Logo area, nav links, right-side actions (search, avatar, button). How does the style handle horizontal composition?

## 13. Pricing Card
Marketing component. Shows hierarchy — plan name, price, feature list, CTA button. How does the style handle emphasis and selling?

## 14. Badge
Small accent element. Multiple colors/variants. Shows the secondary palette and how tiny elements are treated. Inline with text and standalone.

## 15. Accordion
Expand/collapse sections. Chevron or plus/minus icons, open/closed states, smooth height animation. Shows motion philosophy.
**Primitive**: `@radix-ui/react-accordion`

## 16. Pagination
Navigation pattern. Current page emphasis, disabled states, previous/next buttons. Number-based and simple prev/next variations.

## 17. Hero Section
Big visual statement. Large heading, subheading, one or two CTA buttons, maybe a background treatment. Shows typographic scale and confidence.

## 18. Footer
The boring but necessary bit. Multi-column links, logo, copyright, maybe social icons. How does the style handle low-priority but essential UI?

---

## Selection Criteria

These 18 were chosen because they reveal:
- **Color application** — alerts, badges, buttons
- **Typography choices** — prose, hero, headings
- **Spacing philosophy** — cards, forms, tables
- **Shadow and depth** — cards, dropdowns, modals
- **Border treatment** — tables, inputs, cards
- **Radius choices** — buttons, cards, badges
- **Density** — tables, forms, nav
- **Motion personality** — accordion, toast, dialog

If two `.md` style files look the same across all 18, they're not different enough to both exist.

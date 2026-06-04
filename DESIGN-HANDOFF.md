# c19bc222-bce9-4d6b-94db-f005cfd049da implementation handoff

This archive is the source of truth for turning the design into production code. Start from `index.html`, then preserve the visual system, responsive behavior, and interactions found in the exported files.

## Implementation target
- Build production UI from the exported design, not a loose reinterpretation.
- Preserve typography scale, spacing rhythm, color tokens, border radii, shadows, motion timing, and component states.
- Replace static placeholders only when the target app has real data or functional equivalents.
- Keep generated product UI free of Open Design chrome, preview labels, or design-process annotations.
- Treat this handoff as a visual contract: if implementation choices conflict, match the exported pixels and behavior first, then refactor internals.

## Source map
- Primary entry: `index.html`
- HTML screens detected: 58
- Stylesheets detected: 0
- Script/component files detected: 1
- Supporting assets detected: 31

## Responsive contract
Validate the implementation across this 2025–2026 viewport matrix:
- Mobile compact: 360×800
- Mobile standard: 390×844
- Mobile large: 430×932
- Foldable / small tablet: 600×960
- Tablet portrait: 820×1180
- Tablet landscape: 1024×768
- Laptop: 1366×768
- Desktop: 1440×900
- Wide desktop: 1920×1080

For responsive web exports, treat these as a modern breakpoint system for one adaptive web experience, not three fixed screenshots. Do not split responsive web into unrelated native app screens unless the project explicitly includes native targets. Use semantic layout thresholds, fluid `clamp()` type/spacing, and container queries where component width matters more than viewport width. Preserve any CSS media queries, container queries, fluid `clamp()` scales, and layout changes already present in the exported files.

## Design fidelity contract
- Extract reusable tokens before writing components: background, surface, foreground, muted text, border, accent, radius, shadow, spacing, type scale, and motion duration/easing.
- Map product screens, in-app modules/components, optional landing page, and optional OS widget surfaces before coding. Keep these surfaces separate in the target architecture.
- Match layout geometry: max-widths, gutters, grid columns, card proportions, sticky/fixed elements, and viewport-specific navigation.
- Preserve real copy, labels, and data shown in the export. Do not replace specific text with generic marketing filler.
- Preserve interactive affordances: hover, focus, pressed, disabled, loading, validation, copy/share, tab/accordion, modal/sheet, and keyboard states where present.
- Preserve accessibility semantics when converting: headings stay hierarchical, controls remain buttons/links/inputs, focus states stay visible.
- Do not keep prototype-only annotations, frame labels, or Open Design chrome in the production UI.

## CJX-ready UX contract
- Use `DESIGN-MANIFEST.json` as the machine-readable map for screens, app modules, OS widgets, landing pages, tokens, interactions, and viewport checks.
- Screen-file-first: when multiple user-facing surfaces exist, implement each HTML screen as its own route/file. Treat `index.html` as a launcher/overview when the manifest marks it that way, not as a combined final UI.
- If `landing.html`, app screens, platform screens, or OS widget files exist, preserve those boundaries in the target app instead of merging them into one page.
- A single self-contained `index.html` is acceptable only when the export truly contains one user-facing screen and its CSS/JS are structured enough to extract tokens, components, states, and behavior.
- If separate `css/` or `js/` files exist, treat them as source of truth for token/component/interactions before porting to React, Vue, SwiftUI, Compose, or another target stack.
- In-app modules/components are product UI blocks inside the app. OS widgets are home-screen/lock-screen/quick-access surfaces outside the app. Do not merge those concepts.

## Color and brand contract
- Use the exported design tokens and product/domain context as the color source of truth.
- Do not introduce warm beige / cream / peach / pink / orange-brown background washes unless they are already explicit brand/reference colors in the export.
- No obvious token stylesheet was detected; sample colors from the entry file and convert them into named tokens before coding.

## Implementation sequence for AI coding tools
1. Open `index.html` and `DESIGN-MANIFEST.json`; identify every screen file, launcher/overview file, app module, and interaction before coding.
2. If multiple HTML screens exist, map them to separate routes/surfaces first; do not merge `landing.html`, product app screens, platform screens, or OS widgets into one route.
3. Extract a token table from CSS/root styles and inline styles before building framework components.
4. Build product screens and domain-specific in-app modules from largest layout regions down to controls; avoid starting with isolated atoms that lose spatial intent.
5. Port responsive behavior across the modern viewport matrix and test each semantic breakpoint before cleanup.
6. Port interactions and states, then replace static placeholders only with real app data or functional equivalents.
7. Keep optional landing page and OS widget surfaces as separate surfaces if present.
8. Compare final screenshots against the export at 360×800, 390×844, 430×932, 820×1180, 1024×768, 1366×768, 1440×900, and 1920×1080 before declaring done.

## Entry points
- `architecture.html`
- `details/architecture-a-slab-splitter.html`
- `details/architecture-apply-room-finish.html`
- `details/architecture-areafromrooms.html`
- `details/architecture-auto-numbering.html`
- `details/architecture-boundary-finish.html`
- `details/architecture-createareaplan.html`
- `details/architecture-excel-to-fin-type.html`
- `details/architecture-export-to-excel.html`
- `details/architecture-finish-type.html`
- `details/architecture-import-from-excel.html`
- `details/architecture-join-fin-door.html`
- `details/architecture-linked-line.html`
- `details/architecture-room-schedule.html`
- `details/sheet-general-ceilingtolinkedslabhatch.html`
- `details/sheet-general-copy-view.html`
- `details/sheet-general-create-sheet.html`
- `details/sheet-general-crop-view.html`
- `details/sheet-general-fam-type-transfer.html`
- `details/sheet-general-grid-flip.html`
- `details/sheet-general-purge-dwg.html`
- `details/sheet-general-selctsimilar.html`
- `details/sheet-general-seldup.html`
- `details/sheet-general-super-jj.html`
- `details/sheet-general-super-uj.html`
- `details/sheet-general-sync-sheet-elements.html`
- `details/structure-beam-slab.html`
- `details/structure-beamsys-slab.html`
- `details/structure-col-mark-aligned.html`
- `details/structure-col-splitter.html`
- `details/structure-column-slab.html`
- `details/structure-copy-door-famver.html`
- `details/structure-csv-list-to-beam.html`
- `details/structure-flatten-beam.html`
- `details/structure-frame-unjoin.html`
- `details/structure-merge-slab.html`
- `details/structure-place-lb.html`
- `details/structure-reset-bsys.html`
- `details/structure-s-slab-splitter.html`
- `details/structure-sl-creator.html`
- `details/structure-slab-down.html`
- `details/structure-slab-mark-center.html`
- `details/structure-slab-to-sl.html`
- `details/structure-topping.html`
- `details/structure-wall-slab.html`
- `details/structure-wall-splitter.html`
- `dh-standard-docs-final-stats-fix.html`
- `dh-standard-docs-final-update-2-2-2.html`
- `dh-standard-docs-final-update-2-2.html`
- `dh-standard-docs-final-update-2.html`
- `dh-standard-docs-final-update.html`
- `dh-standard-docs-media-update.html`
- `dh-standard-docs-update.html`
- `dh-standard-pyrevit-docs-final.html`
- `dh-standard-pyrevit-docs.html`
- `index.html`
- `sheet-general.html`
- `structure.html`

## Styles
- None detected

## Scripts/components
- `generate-site.js`

## Assets and supporting files
- `media/architecture-apply-room-finish.gif`
- `media/architecture-auto-numbering.gif`
- `media/architecture-boundary-finish.gif`
- `media/architecture-boundary-finish.mp4`
- `media/architecture-excel-to-fin-type.gif`
- `media/architecture-export-to-excel.gif`
- `media/architecture-finish-type.gif`
- `media/architecture-finish-type.mp4`
- `media/architecture-join-fin-door.gif`
- `media/architecture-join-fin-door.mp4`
- `media/architecture-linked-line.gif`
- `media/architecture-linked-line.mp4`
- `media/architecture-room-schedule.gif`
- `media/structure-col-splitter.gif`
- `media/structure-copy-door-famver.gif`
- `media/structure-copy-door-famver.mp4`
- `media/structure-merge-slab.gif`
- `media/structure-s-slab-splitter.gif`
- `media/structure-sl-creator.gif`
- `media/structure-slab-to-sl.gif`
- `media/structure-wall-splitter.gif`
- `mpw63n3s-image.png`
- `mpw6466d-image.png`
- `mpw64i1z-image.png`
- `mpw8qh7y-drawing-2026-06-02T06-12-38-433Z.png`
- `mpwb3ty0-drawing-2026-06-02T07-19-00-684Z.png`
- `mpwb4s2z-drawing-2026-06-02T07-19-44-934Z.png`
- `mpypz8em-image.png`
- `mpyqhqmg-drawing-2026-06-04T00-05-16-162Z.png`
- `mpyt0k1m-drawing-2026-06-04T01-15-53-332Z.png`
- `site-summary.json`

## Coding checklist for AI tools
1. Inspect `index.html` and `DESIGN-MANIFEST.json` first and identify reusable components before coding.
2. Implement each user-facing screen file as its own route/surface; keep launcher, landing, app, platform, and OS widget files separate.
3. Extract design tokens into the target stack: colors, type scale, spacing, radius, shadows, and motion.
4. Implement layout with real 2025–2026 responsive breakpoints, fluid type/spacing, and container-query-aware component behavior; test with no horizontal overflow.
5. Preserve interactive controls, hover/focus/pressed states, form behavior, validation, and copy actions where present.
6. Implement domain-specific in-app modules with real states; do not flatten them into generic cards.
7. Keep landing page, product screens, and OS widget/quick-access surfaces separate when present.
8. Confirm the production result visually matches the exported design before refactoring internals.
9. Reject implementation shortcuts that flatten the design into generic cards, generic gradients, placeholder stats, or framework-default typography.
10. If a detail is ambiguous, keep the exported HTML/CSS/JS behavior rather than inventing a new pattern.

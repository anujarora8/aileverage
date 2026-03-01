

## Update Website Copy

The new content defines 5 distinct sections, but the current site only has 3 content components (Hero, About, EngagementModel). Two new section components are needed to accommodate all the content. All design, layout, colors, spacing, animations, and structural patterns will be preserved exactly.

### Section Mapping

| # | New Content | Component |
|---|------------|-----------|
| 1 | Hero: "I help software companies..." | `Hero.tsx` (update text only) |
| 2 | "The Problem" | `About.tsx` (update text, keep id="about") |
| 3 | "The Credential" | **New** `Credential.tsx` (same layout pattern as About) |
| 4 | "Focused. Senior. Hands-on." with bullets | **New** `Services.tsx` (same section pattern, add bullet list) |
| 5 | "Who It's For" + CTA buttons | `EngagementModel.tsx` (update text, keep buttons) |

### Changes by File

**`src/components/Hero.tsx`** -- Update headline and subheadline text only.

**`src/components/About.tsx`** -- Replace heading with "The Problem" and body with the new copy about agentic AI transformation.

**`src/components/Credential.tsx`** (new) -- New section following the same design pattern as About.tsx (same classes, spacing, divider). Contains "The Credential" heading, the Ada paragraph, and the closing line "That's not consulting. That's operational memory."

**`src/components/Services.tsx`** (new) -- New section following the same pattern. Contains "Focused. Senior. Hands-on." heading, intro paragraph, and three bullet points (Talent, Operating Model, Vendor & Tech) styled consistently with the site's typography.

**`src/components/EngagementModel.tsx`** -- Replace heading with "Who It's For", update body text, change closing line to "Limited engagements for 2026." Keep CTA buttons exactly as-is.

**`src/pages/Index.tsx`** -- Add Credential and Services components between About and EngagementModel.

### Technical Notes

- New components reuse the exact same Tailwind classes and section structure as existing components (same `py-24`, `container`, `max-w-3xl mx-auto`, `font-display`, `text-muted-foreground`, etc.)
- Bullet list in Services will use a simple `ul` with consistent text styling
- No changes to fonts, colors, spacing, animations, Header, Footer, or button styling


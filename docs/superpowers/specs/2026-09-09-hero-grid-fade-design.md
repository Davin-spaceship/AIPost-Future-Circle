# Page grid fade design

## Goal

Make one continuous page background grid fade vertically from visible at the top to fully transparent at the bottom.

## Scope

- Keep the grid as a single fixed decorative layer behind the entire page, rather than a Hero-only layer.
- Apply a top-to-bottom CSS mask to that layer: full opacity at the viewport top, reduced opacity through the middle, and transparent at the lower page area.
- Remove the duplicate Hero-only grid layer so there is no visible seam at the Hero boundary.
- Do not change Hero content, the lime glow layer, layout, or interaction behaviour.

## Verification

At desktop and mobile widths, the grid remains clearly visible behind the top of the page and fades away smoothly through the FAQ content, without a seam at the Hero boundary; text remains fully legible.

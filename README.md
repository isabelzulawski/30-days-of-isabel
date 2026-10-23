# 30 days of isabel

An explorable sketchbook for October 23–November 21, 2026, with Isabel’s own handwriting font, drawings, and daily entries.

## Run locally

From this directory run `python3 -m http.server 8000`, then open http://localhost:8000. No build or dependencies are required.

## Saved entry

The exported Day 1 “digital portfolio” entry and its original photo are included in `entries/`. `entries.js` loads these as initial content. Existing browser edits take precedence. Future edits and uploads stay in that browser until exported; they do not automatically sync to GitHub. Use the notebook menu’s **export entries** control for backups.

## Files

- `index.html`: site layout, styles, and interactions
- `assets/`: original hand-drawn vector assets
- `fonts/`: Isabel Hand TTF and web font
- `entries/entries.json`: saved entry snapshot
- `entries.js`: browser-ready version of the snapshot

Live site: https://thirty-days-isabel-field.calmpixie5.chatgpt.site/

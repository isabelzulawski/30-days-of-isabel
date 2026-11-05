# 30 days of isabel

An explorable sketchbook for October 23–November 21, 2026, with Isabel’s own handwriting font, drawings, and daily entries.

## Run locally

From this directory run `python3 -m http.server 8000`, then open http://localhost:8000. No build or dependencies are required.

## Saved entry

The exported Day 1 “digital portfolio” and Day 2 “isabel.fm” entries and their original screenshots are included in `entries/`. `entries.js` loads these as initial content. Existing browser edits take precedence. Future edits and uploads stay in that browser until exported; they do not automatically sync to GitHub. Use the notebook menu’s **export entries** control for backups.

## Files

- `index.html`: site layout, styles, and interactions
- `assets/`: original hand-drawn vector assets
- `fonts/`: Isabel Hand TTF and web font
- `entries/entries.json`: saved entry snapshot
- `entries.js`: browser-ready version of the snapshot

Live site: https://thirty-days-isabel-field.calmpixie5.chatgpt.site/

## Day 2 — isabel.fm

Day 2 documents the pink Spotify-connected player, with the supplied screenshot and project link. Its source is in `day-02-player/`.

Player: https://isabel-day-two-pink-player.calmpixie5.chatgpt.site/

The player requires your own Spotify developer app and sign-in. A GitHub Pages copy needs its exact callback URL registered in that app before connecting. No Spotify tokens or secrets are included.

## Day 3 — cymatics

A minimal black-and-white Chladni-inspired pattern explorer with tone playback, frequency controls, moving particles, and PNG export. Frequency mapping and grain movement are illustrative. Source: `day-03-cymatics/`.

Public project: https://day-03-cymatics-iz.calmpixie5.chatgpt.site/ (no ChatGPT login required).

## Day 4 — pomodoro timer

The October 26 entry includes Isabel’s descriptions and the timer screenshot. Source and the supplied illustrations are in `day-04-pomodoro/`.

## Day 5 — to do wheel

The October 27 entry includes Isabel’s descriptions, a screenshot, and the original task wheel. Source: `day-05-to-do-wheel/`.

Public project: https://isabel-one-little-thing.calmpixie5.chatgpt.site/

## Day 6 — digital bedroom

The October 28 entry includes Isabel’s descriptions and the published bedroom screenshot. Source and room artwork: `day-06-digital-bedroom/`.

Public project: https://isabel-digital-bedroom.isabel-zulawski.chatgpt.site/

## Day 7 — pixelate

The October 29 entry includes Isabel’s descriptions and a screenshot. Source and bundled sample artwork: `day-07-pixelate/`. Photos are processed in the browser and exported as PNG files.

Project: https://isabel-pixelate.isabel-zulawski.chatgpt.site/

## IC fabrication walkthrough

Source: `day-08-chip-fabrication/`. A visual walkthrough with manual navigation, a black background, and a technical monospace interface. The October 30 entry includes Isabel’s descriptions, a screenshot, and the public project link.

## Day 9 — imagined portraits

The October 31 entry contains two AI-generated portraits based on nonphysical descriptions. Full-size images are in `entries/` and the gallery is in `day-09-imagined-portraits/`. The appearances are invented, not accurate likenesses.

## Day 10 — neural networks

The November 1 entry contains Isabel’s descriptions, the screenshot, and the walkthrough link. Source and numerical gradient checks: `day-10-neural-network/`. Run `node check-math.cjs` from that folder.

## Day 11 — austin scrapbook

A six-spread travel scrapbook of Isabel’s UT Austin trip, with eleven supplied photographs, handwritten captions, page navigation, and a full-size photo viewer. Source and photos: `day-11-austin-scrapbook/`. Open its `index.html` directly or serve the repository locally.

## Day 12 — sick day

The November 3 entry includes Isabel’s descriptions and a screenshot. Source: `day-12-sick-day/`. A complete pixel-art adventure through a rainy NYC neighborhood, with clinic, pharmacy, grocery, home tasks, an entirely fictional email, and a bedtime ending. Open `index.html` to play. All artwork and bitmap lettering are drawn in JavaScript without dependencies or network requests.

## Day 13 — pixel art

A pixel drawing studio with two canvas sizes, palettes, custom colors, pencil, fill, eraser, undo/redo, and transparent PNG export. Source: `day-13-pixel-art/`. Open `index.html` directly to draw; the last drawing saves in the current browser.

## Day 14 — paper practice

The November 5 entry documents a study tool for the X-Codec paper, with six lessons, written recall, two sets of five short-response practice questions, reference answers, and self-assessment rubrics. Source and the supplied paper: `day-14-codec-study/`. Answers stay in the current browser and are not committed.

Public project: https://isabel-codec-study.isabel-zulawski.chatgpt.site/

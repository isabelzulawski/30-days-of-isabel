# Pixel art

A small pixel-art studio with a 16 x 16 or 32 x 32 canvas, pencil, connected-area fill, eraser, undo/redo, grid toggle, soft/autumn/Game Boy palettes, custom colors, and transparent PNG downloads. Draw with a mouse, trackpad, or touch. Fast pointer strokes fill skipped cells with an integer line algorithm.

Open `dist/index.html` directly or serve `dist/`. Keyboard: Tab to the canvas, arrow keys move, Space draws, P selects pencil, F fill, E eraser. Command/Control Z undoes; Shift Command/Control Z redoes.

Canvas resizing scales existing artwork using nearest-neighbor sampling and can be undone. Clear is also undoable. The last drawing is saved only in this browser's localStorage when available. If local storage is unavailable, PNG export still works. Downloads are 512 x 512 PNGs with transparent empty pixels and no editing grid. No external dependencies, keys, accounts, or network services are used by the app.

`pixels.js` contains the drawing model; `studio.js` handles UI, pointer input, rendering, local saving, and PNG export. The abandoned map and soundscape are retained locally in `archive/`.

Verification: model assertions for gap-free strokes, undo/redo, resize preservation and undo, and flood-fill boundaries; JavaScript syntax checks; browser-tested keyboard drawing, fill, size changes, undo, pointer input, PNG download event and filename. Browser reported no JavaScript errors.

# Sick Day

An original, dependency-free pixel-art adventure made for Day 12 of Isabel's 30 days project. Open `dist/index.html` directly, or run `python3 -m http.server 8782 --directory dist`.

## Play

Click the dialogue box to continue. Click objects and doors to interact and walk. The current goal appears above the five-slot inventory. QUESTS opens the checklist. OFF toggles optional synthesized sound. Keyboard users can Tab between the same game actions; Enter or Space advances dialogue.

Visit urgent care, exchange the prescription at the pharmacy, collect soup and tea, and return home. Make soup and tea, click medicine in the bag, then open the laptop. Select the doctor's note from the bag, click the attachment area, and send the fictional email. Complete every task to go to bed. Play Again starts fresh. Progress lasts for the current page session only.

## Art and behavior

All storefronts, interiors, sprites, inventory objects, and lettering are drawn in JavaScript on a fixed 512 x 336 canvas. The supplied pharmacy reference informed the palette and architecture. There are no external assets, libraries, keys, services, real email actions, or network requests. Reduced-motion preferences stop walking bobs and rainfall movement.

## Verification

- `node --check dist/game.js`
- Browser playthrough: wake up, thermometer, street, clinic, prescription, pharmacy, soup and tea, return home, soup, tea, medicine, select note, attach note, send, bed, ending, restart.
- Confirmed pharmacy-before-clinic and send-without-attachment hints.
- Checked all five scenes and the ending visually; browser reported no JavaScript errors.

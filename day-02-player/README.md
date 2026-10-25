# isabel.fm — day 02

A pink chrome Spotify remote with a current-track display, queue, volume, repeat, and local heart bookmarks.

Live player: https://isabel-day-two-pink-player.calmpixie5.chatgpt.site/

Click **connect spotify** to authorize your account. The public Client ID is configured in `app.js`. No client secret is required or included; authentication uses Authorization Code with PKCE, and tokens stay in this browser’s sessionStorage. Spotify developer-mode account restrictions still apply.

Playback controls operate on an already active Spotify device. The animated bars are decorative. Demo mode plays original synthesized loops.

To run locally, serve this folder with `python3 -m http.server 8000`. Spotify sign-in requires registering that exact redirect URL in the developer app; a GitHub Pages deployment likewise needs its own registered redirect URL.

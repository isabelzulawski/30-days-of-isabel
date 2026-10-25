# isabel.fm — day 02
A buildless pink chrome music player and queue. Open `dist/` through an HTTP server, or use its private hosted Site.

## Spotify setup
Create a Web API application in https://developer.spotify.com/dashboard using your Spotify Premium account. Register the exact redirect URI displayed in the player's connect screen. Enter its **Client ID**, never its Client Secret. Authentication uses Authorization Code with PKCE. Tokens stay in sessionStorage on this browser and never enter the project or its source repository.

The player is a remote for an active Spotify device, not an audio-streaming client. Playback, seeking, volume, and repeat depend on Spotify API access and the active device. The queue is read-only. Polling backs off on Spotify rate limits. Live authentication needs a configured developer app and has not been tested with a real account yet.

The demo plays an original synthesized loop through Web Audio. Animated bars are decorative. The queue displays upcoming Spotify songs; hearts are local bookmarks.

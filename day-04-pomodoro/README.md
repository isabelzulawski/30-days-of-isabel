# Day 4 — pomodoro timer

Live timer: https://isabel-pumpkin-pomodoro.calmpixie5.chatgpt.site/

A minimal timer with a different supplied illustration for focus, short rest, and long rest. Default durations are 25 / 5 / 15 minutes, with a long rest after four completed focus rounds. Settings change durations and optional automatic transitions. Start, pause, reset, and skip are available; skipped sessions do not count.

Timer state saves in localStorage. A running deadline survives reloads and background-tab throttling. Completion chimes require a browser that permits audio playback.

Serve this directory with `python3 -m http.server 8000`. Run timer checks with `node test-timer.mjs`.

The supplied reference illustrations are included as provided by Isabel; no ownership or redistribution license is implied.

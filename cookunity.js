// ==UserScript==
// @name         CookUnity 15s Change Detector (Strict 5s Delay)
// @namespace    http://tampermonkey.net/
// @version      8.1
// @description  Reloads CookUnity every 15s. Waits exactly 5s post-load before comparing content. Resets completely on manual reload. Ignores AudioEye accessibility links.
// @author       You
// @match        https://subscription.cookunity.com/unitypass-hub
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    const RELOAD_INTERVAL = 15000; // 15 seconds
    const LOAD_BUFFER = 5000;       // 5 seconds strict wait time for rendering
    const SOUND_URL = 'https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg';

    // Extracts clean visible text and filters out dynamic AudioEye accessibility elements
    function getPageSnapshot() {
        if (!document.body) return "";
        let text = document.body.innerText;

        // Remove AudioEye skip link text to prevent false alarms
        text = text.replace(/Skip To Main Content/gi, '');

        return text.replace(/\s+/g, ' ').trim();
    }

    // Initialize audio
    const audio = new Audio(SOUND_URL);
    audio.loop = true;
    audio.volume = 1.0;

    // Check if alarm was already triggered during this automated session
    if (sessionStorage.getItem("cu_alarm_triggered") === "true") {
        audio.play().catch(e => console.error("Audio playback failed. Check browser autoplay permissions.", e));
        return; // Halt reload loop completely
    }

    // Wait exactly 5 seconds for all elements, dynamic text, and graphics to fully render
    setTimeout(() => {
        const currentSnapshot = getPageSnapshot();
        const previousSnapshot = sessionStorage.getItem("cu_last_snapshot");

        // Initial run setup (first time opening page or after a manual refresh)
        if (previousSnapshot === null) {
            sessionStorage.setItem("cu_last_snapshot", currentSnapshot);
            setTimeout(() => { window.location.replace(window.location.href); }, RELOAD_INTERVAL);
            return;
        }

        // Compare post-reload state to pre-reload state
        if (previousSnapshot !== currentSnapshot) {
            // Set session trigger status to stop future automated reloads
            sessionStorage.setItem("cu_alarm_triggered", "true");

            // Fire alarm immediately
            audio.play().catch(e => console.error("Audio playback failed.", e));

            // Generate change snippets for the alert box
            const oldWords = previousSnapshot.split(' ');
            const newWords = currentSnapshot.split(' ');
            const added = newWords.filter(w => !oldWords.includes(w)).slice(0, 10).join(' ');
            const removed = oldWords.filter(w => !oldWords.includes(w)).slice(0, 10).join(' ');

            let diff = "Page content altered.\n\n";
            if (added) diff += `Added: "${added}..." \n`;
            if (removed) diff += `Removed: "${removed}..."`;

            alert(`⚠️ COOKUNITY CHANGE DETECTED! ⚠️\n\n${diff}`);
        } else {
            // No changes found: update baseline snapshot and queue next reload sequence
            sessionStorage.setItem("cu_last_snapshot", currentSnapshot);
            setTimeout(() => {
                window.location.replace(window.location.href);
            }, RELOAD_INTERVAL);
        }
    }, LOAD_BUFFER);
})();

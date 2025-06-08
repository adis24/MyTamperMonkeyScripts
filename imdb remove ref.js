// ==UserScript==
// @name         imdb remove ref
// @namespace    http://tampermonkey.net/
// @version      2025-06-08
// @description  try to take over the world!
// @author       You
// @match        https://www.imdb.com/title/*/?ref_=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=imdb.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.location.href = window.location.href.split("?")[0]
})();

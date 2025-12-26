// ==UserScript==
// @name         instacart image enlarger
// @namespace    http://tampermonkey.net/
// @version      2025-12-25
// @description  try to take over the world!
// @author       You
// @match        https://www.instacart.com/assets/domains/product-image/file/large_*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instacart.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.location.href = window.location.href.split("large_")[0] + window.location.href.split("large_")[1]
})();

// ==UserScript==
// @name         IMDB first link click
// @version     2
// @author      Aditya Shrivastava
// @description Just open the first damn link
// @include https://www.imdb.com/find/?s=all&q=*
// @include https://www.imdb.com/find?s=all&q=*
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByClassName("ipc-metadata-list-summary-item")[0].getElementsByTagName("a")[0].click();

})();

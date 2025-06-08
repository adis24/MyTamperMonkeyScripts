// ==UserScript==
// @name         IMDB first link click
// @version     2
// @author      Aditya Shrivastava
// @description Just open the first damn link
// @include https://www.imdb.com/find/?s=all&q=*
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByClassName("find-title-result")[0].getElementsByTagName("a")[0].click();

})();

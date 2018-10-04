// ==UserScript==
// @name        Damn You Google!
// @version     1
// @author      Aditya Shrivastava
// @description Too much security is bad
// @include https://accounts.google.com/DisplayUnlockCaptcha
// @include https://accounts.google.com/DisplayUnlockCaptcha/
// ==/UserScript==

(function() {
    'use strict';
    var cont = document.getElementById("submitChallenge");
    if (cont === null) {
        setTimeout(reload, 30000);
    } else {
        cont.click();
    }

    function reload() {
        window.location.href = 'https://accounts.google.com/DisplayUnlockCaptcha';
    }

})();

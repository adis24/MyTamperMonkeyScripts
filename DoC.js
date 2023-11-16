javascript: (function() {
    setInterval(function() {
        if (document.getElementById("wpdiscuzHasMoreComments").getAttribute("data-is_show_load_more") === '1') {
            document.getElementsByClassName("wpd-load-more-submit")[0].click()
        }
    }, 1000)
})();

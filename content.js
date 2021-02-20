(function() {
    if (document.getElementsByClassName("base_AccessLogo")[0] === null) {
        return
    } else if (document.title.indexOf("Approve") > -1) {
        document.getElementsByClassName("Button Button-is-block Button-is-juicy Approve")[0].click();
    } else if (document.title.indexOf("Success ・ Cloudflare Access") > -1) {

        chrome.runtime.sendMessage({
            "close": true
        });
    }

})();

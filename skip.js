const observer = new MutationObserver((mutations, obs) => {
    // Check for ad-showing div
    const adShowing = document.querySelector("div.ad-showing");
    if (adShowing) {
        const video = document.getElementsByTagName("video")[0];
        if (video) {
            video.muted = true;
            video.playbackRate = 10;
        }
    }
});
  
observer.observe(document, {
    childList: true,
    subtree: true
});

const observer = new MutationObserver((mutations, obs) => {
    // Check for ad-showing div
    const adShowing = document.querySelector("div.ad-showing");
    if (adShowing) {
        const video = document.getElementsByTagName("video")[0];
        if (video) {
        video.playbackRate = 10;
        video.muted = true;
        }
    }
});
  
observer.observe(document, {
    childList: true,
    subtree: true
});
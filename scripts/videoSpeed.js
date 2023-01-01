console.log("BOOOOST")

async function setPlaybackSpeed() {
    let settings = await browser.storage.local.get({"videoPlaybackSpeedInput": 100})
    console.log(settings["videoPlaybackSpeedInput"])
    if (settings["videoPlaybackSpeedInput"] != 100) {
        let video = document.getElementById('video-player')
        video.playbackRate = settings["videoPlaybackSpeedInput"]/100
    }
}

setInterval(setPlaybackSpeed, 200)
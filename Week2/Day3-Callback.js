function playVideo(afterPlay1, afterPlay2) {

    console.log("Play the YouTube video");

    afterPlay1();
    afterPlay2();
}

function saveHistory() {
    console.log("Video saved in history");
}

function showRelatedVideos() {
    console.log("Show related videos");
}

playVideo(saveHistory, showRelatedVideos);

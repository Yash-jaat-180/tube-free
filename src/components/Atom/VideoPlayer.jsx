import React, { useEffect, useRef } from 'react'
import videojs from 'video.js';
import "video.js/dist/video-js.css"

//TODO - When completed try to console some values and understood it very well
function VideoPlayer(props) {
    const videoRef = useRef(null);
    const playerRef = useRef(null);
    const { options, onReady } = props;

    useEffect(() => {
        if (!playerRef.current) {
            const videoElement = document.createElement("video-js");

            videoElement.classList.add("vjs-big-play-centered");
            videoRef.current.appendChild(videoElement);

            const player = (playerRef.current = videojs(videoElement, options, () => {
                videojs.log("player is reade");
                onReady && onReady(player);
            }));
        } else {
            const player = playerRef.current;

            player.autoplay(options.autoplay);
            player.src(options.sources);
        }
    }, [options, videoRef]);
    // Dispose the Video.js player when the functional component unmounts
    useEffect(() => {
        const player = playerRef.current

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        }
    }, [playerRef])
    return (
        <div data-vjs-player className="size-full">
            <div ref={videoRef} />
        </div>
    )
}

export default VideoPlayer

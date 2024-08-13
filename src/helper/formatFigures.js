export function formatTimestamp(timestamp) {
    const now = new Date();
    const createdAt = new Date(timestamp);

    const diffInSeconds = Math.floor((now - createdAt) / 1000);

    if (diffInSeconds < 60) {
        return "just now";
    } else if (diffInSeconds < 3600) {
        return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    } else if (diffInSeconds < 86400) {
        return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    } else if (diffInSeconds < 604800) {
        return `${Math.floor(diffInSeconds / 86400)} days ago`;
    } else if (diffInSeconds < 2592000) {
        return `${Math.floor(diffInSeconds / 604800)} weeks ago`;
    } else {
        return `${Math.floor(diffInSeconds / 2592000)} months ago`;
    }
}

export function formatVideoDuration(duration){
    let totalSeconds = Math.floor(duration);

    let seconds = totalSeconds % 60 < 9 ? "0" + (totalSeconds % 60) : totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);
    let hours = Math.floor(minutes / 60);

    if(hours > 0){
        return `${hours}:${minutes}:${seconds}`;
    }else{
        return `${minutes}:${seconds}`;
    }
}

//TODO: Format date 


//TODO: Format subscription

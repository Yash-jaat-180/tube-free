import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLikedVideos } from '../app/Slice/likeSlice';
import VideoList from '../components/Video/VideoList';
import GuestComponent from '../components/GuestPages/GuestComponent';
import { icons } from '../assets/icons';

function LikedVideos() {
    const [isLoading, setIsLoading] = useState(true);
    const [videos, setVideos] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLikedVideos()).then((res) => {
            setVideos(res.payload);
            setIsLoading(false);
        });
    }, []);

    const isHistoryEmpty = !isLoading && videos?.length < 1;

    return (
        <>
            {!isHistoryEmpty && <VideoList videos={videos} loading={isLoading} />}
            {isHistoryEmpty && (
                <GuestComponent
                    title="Empty Liked Video"
                    subtitle="You have no previously Liked Videos."
                    icon={<span className="p-5">{icons.Like}</span>}
                    guest={false}
                />
            )}
        </>
    )
}

export default LikedVideos

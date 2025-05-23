import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VideoGrid from '../components/Video/VideoGrid'
import { emptyPagingVideosData, getAllVideosByOptions } from '../app/Slice/paginationSlice';

function FeedVideos() {
    const dispatch = useDispatch();

    const { loading } = useSelector(({ pagingVideos }) => pagingVideos)
    const { videos } = useSelector(({ pagingVideos }) => pagingVideos.data)
    const { pagingInfo } = useSelector(({ pagingVideos }) => pagingVideos.data)

    const sectionRef = useRef();
    const fetchedPageRef = useRef();
    const pagingInfoRef = useRef(pagingInfo);

    pagingInfoRef.current = pagingInfo;

    useEffect(() => {
        fetchedPageRef.current = new Set();

        sectionRef.current = document.getElementById("scrollable_results_screen");
        sectionRef.current?.scrollTo({ top: 0, behavior: "smooth" });

        let fetchAllVideosPromise = dispatch(getAllVideosByOptions({ page: 1, limit: 15 }));

        fetchAllVideosPromise.then(() => {
            fetchedPageRef.current.add(1);
        });
        sectionRef.current?.addEventListener("scroll", handleScroll);

        return () => {
            sectionRef.current?.removeEventListener("scroll", handleScroll);
            fetchedPageRef.current.clear();
            dispatch(emptyPagingVideosData());
            fetchAllVideosPromise.abort();
            sectionRef.current?.scrollTo({top: 0, behavior: "smooth"});
        }
    }, [])

    //TODO: When project complete learn how the handleScroll works
    const handleScroll = () => {
        const section = sectionRef.current;
        const scrollHeight = section.scrollHeight;
        const scrollValue = section.clientHeight + section.scrollTop;

        if (scrollValue + 5 > scrollHeight) {
            const currentPagingInfo = pagingInfo.current;
            if (currentPagingInfo?.hasNextPage && !fetchedPageRef.current?.has(currentPagingInfo.nextPage)) {
                fetchedPageRef.current.add(currentPagingInfo.nextPage);
                dispatch(getAllVideosByOptions({ page: `${currentPagingInfo.nextPage}`, limit: 15 }));
            }
        }
    }
    return (
        <VideoGrid
        videos = {videos}
        loading = {loading && !fetchedPageRef.current.has(1)}
        fetching= {loading && videos?.length > 0}
        />
    )
}

export default FeedVideos

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearWatchHistory, watchHistory } from "../app/Slice/authSlice";
import { icons } from "../assets/Icons";
import VideoList from "../components/Video/VideoList";
import GuestComponent from "../components/GuestPages/GuestComponent";

function History() {
    const dispatch = useDispatch();

    const { userData, loading } = useSelector(({ auth }) => auth);

    useEffect(() => {
        dispatch(watchHistory());
    }, []);

    const deleteWatchHistory = () => {
        dispatch(clearWatchHistory());
    };

    const videos = useSelector(({ auth }) => auth.userData.watchHistory);

    const isHistoryEmpty = !loading && videos?.length < 1;

    return (
        <>
            <section className="w-full">
                {!isHistoryEmpty && !loading && (
                    <div className="flex items-center justify-center py-2">
                        <button
                            onClick={deleteWatchHistory}
                            className="mt-4 rounded inline-flex items-center gap-x-2 bg-[#ae7aff] hover:bg-[#ae7aff]/95 border border-transparent hover:border-dotted hover:border-white px-3 py-2 font-semibold text-black"
                        >
                            <span className="h-5">{icons.delete}</span>
                            Clear History
                        </button>
                    </div>
                )}
                <ul className="w-full flex flex-col gap-4">
                    {!isHistoryEmpty && <VideoList videos={videos} loading={loading} />}
                    {isHistoryEmpty && (
                        <GuestComponent
                            title="Empty Video History"
                            subtitle="You have no previously saved history."
                            icon={icons.History}
                            guest={false}
                        />
                    )}
                </ul>
            </section>
        </>
    );
}

export default History;
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { emptyVideosState } from '../app/Slice/videoSlice';
import { toast } from 'react-toastify';

function VideoDetail() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { videoId } = useParams();
    const loginPopupDialog = useRef();
    const playerRef = useRef();

    const { status: authStatus } = useSelector(({ auth }) => auth);
    const { loading, status, data: video } = useSelector(({ video }) => video)

    const {
        loading: playlistLoading,
        status: playlistStatus,
        data: playlists,
    } = useSelector((state) => state.playlist);

    useEffect(() => {
        if (!videoId) return;
        dispatch(getVideo(videoId))
        // dispatch(updateView(videoId));
        return () => dispatch(emptyVideosState());
    }, [videoId, navigate])

    function handlePlaylistVideo(playlistId, status) {
        if (!playlistId && !status) return;

        if (status) dispatch(addVideoToPlaylist({ playlistId, videoId }));
        else dispatch(removeVideoFromPlaylist({ playlistId, videoId }));
    }

    function handleCreateNewPlaylist(eventObject) {
        eventObject.preventDefault();
        const name = eventObject.target.name.value;

        if (!name.trim()) return toast.error("Please enter the playlist name");

        dispatch(createPlaylist({ data: { name } })).then((res) => {
            if (res.meta.requestStatus === "fulfilled") {
                dispatch(addVideoToPlaylist({ playlistId: res.payload?._id, videoId }));
            }
        })
    }

    function handleSavePlaylist() {
        if (authStatus) {
            dispatch(getCurrentPlaylist(videoId));
        } else {
            loginPopupDialog.current?.open();
        }
    }

    if (loading) {
        return (
            <section className="w-full pb-[70px] sm:pb-0">
                {/* sm:ml-[70px] */}
                <div className="flex w-full flex-wrap gap-4 p-4 lg:flex-nowrap">
                    <div className="col-span-12 w-full">
                        {/* video */}
                        <div className="relative mb-4 w-full pt-[56%]">
                            <div className="absolute inset-0">
                                <div className="size-full bg-slate-100/10 rounded animate-pulse"></div>
                            </div>
                        </div>

                        {/* video, Playlist, Like and owner data */}
                        <div
                            className="group mb-4 w-full rounded-lg border p-4 duration-200 hover:bg-white/5 focus:bg-white/5"
                            role="button"
                            tabIndex="0"
                        >
                            <div className="flex flex-wrap gap-y-2">
                                {/* video metadata */}
                                <div className="w-full md:w-1/2 lg:w-full xl:w-1/2">
                                    <h1 className=" w-full h-9 text-transparent bg-slate-100/10 rounded animate-pulse"></h1>
                                    <h1 className=" w-1/2 h-5 mt-3 text-transparent bg-slate-100/10 rounded animate-pulse"></h1>
                                </div>
                                {/* Like and playlist component */}
                                <div className="w-full md:w-1/2 lg:w-full xl:w-1/2">
                                    <div className="flex items-center justify-between gap-x-4 md:justify-end lg:justify-between xl:justify-end">
                                        <div className="relative block">
                                            <div className="peer flex w-32 h-10 items-center gap-x-2 px-4 py-1.5 text-transparent bg-slate-100/10 rounded animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* owner metadata */}
                            <UserProfile />
                            <hr className="my-4 border-white" />
                        </div>

                        {/* comments */}
                        <Comments videoId={video?._id} ownerAvatar={video?.owner?.avatar} />
                    </div>

                    {/* side video suggegtions */}
                    <div className="col-span-12 flex w-full shrink-0 flex-col gap-3 lg:w-[350px] xl:w-[400px]">
                        <div className="w-full gap-x-2 border pr-2 md:flex">
                            <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
                                <div className="w-full pt-[56%]">
                                    <div className="absolute inset-0">
                                        <div className="bg-slate-100/10 rounded animate-pulse h-full w-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                                <div className="h-12 w-12 shrink-0 md:hidden">
                                    <div className="bg-slate-100/10 animate-pulse h-full w-full rounded-full"></div>
                                </div>
                                <div className="w-full pt-1 md:pt-0">
                                    <h6 className="mb-1 mt-2 text-sm w-full h-5 rounded font-semibold bg-slate-100/10 animate-pulse text-transparent"></h6>
                                    <p className="mb-0.5 mt-2 w-2/3 rounded h-4 text-sm bg-slate-100/10 animate-pulse text-transparent"></p>
                                    <p className="mb-0.5 mt-2 w-1/2 rounded h-4 text-sm bg-slate-100/10 animate-pulse text-transparent"></p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full gap-x-2 border pr-2 md:flex">
                            <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
                                <div className="w-full pt-[56%]">
                                    <div className="absolute inset-0">
                                        <div className="bg-slate-100/10 rounded animate-pulse h-full w-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                                <div className="h-12 w-12 shrink-0 md:hidden">
                                    <div className="bg-slate-100/10 animate-pulse h-full w-full rounded-full"></div>
                                </div>
                                <div className="w-full pt-1 md:pt-0">
                                    <h6 className="mb-1 mt-2 text-sm w-full h-5 rounded font-semibold bg-slate-100/10 animate-pulse text-transparent"></h6>
                                    <p className="mb-0.5 mt-2 w-2/3 rounded h-4 text-sm bg-slate-100/10 animate-pulse text-transparent"></p>
                                    <p className="mb-0.5 mt-2 w-1/2 rounded h-4 text-sm bg-slate-100/10 animate-pulse text-transparent"></p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full gap-x-2 border pr-2 md:flex">
                            <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
                                <div className="w-full pt-[56%]">
                                    <div className="absolute inset-0">
                                        <div className="bg-slate-100/10 rounded animate-pulse h-full w-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                                <div className="h-12 w-12 shrink-0 md:hidden">
                                    <div className="bg-slate-100/10 animate-pulse h-full w-full rounded-full"></div>
                                </div>
                                <div className="w-full pt-1 md:pt-0">
                                    <h6 className="mb-1 mt-2 text-sm w-full h-5 rounded font-semibold bg-slate-100/10 animate-pulse text-transparent"></h6>
                                    <p className="mb-0.5 mt-2 w-2/3 rounded h-4 text-sm bg-slate-100/10 animate-pulse text-transparent"></p>
                                    <p className="mb-0.5 mt-2 w-1/2 rounded h-4 text-sm bg-slate-100/10 animate-pulse text-transparent"></p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full gap-x-2 border pr-2 md:flex">
                            <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
                                <div className="w-full pt-[56%]">
                                    <div className="absolute inset-0">
                                        <div className="bg-slate-100/10 rounded animate-pulse h-full w-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                                <div className="h-12 w-12 shrink-0 md:hidden">
                                    <div className="bg-slate-100/10 animate-pulse h-full w-full rounded-full"></div>
                                </div>
                                <div className="w-full pt-1 md:pt-0">
                                    <h6 className="mb-1 mt-2 text-sm w-full h-5 rounded font-semibold bg-slate-100/10 animate-pulse text-transparent"></h6>
                                    <p className="mb-0.5 mt-2 w-2/3 rounded h-4 text-sm bg-slate-100/10 animate-pulse text-transparent"></p>
                                    <p className="mb-0.5 mt-2 w-1/2 rounded h-4 text-sm bg-slate-100/10 animate-pulse text-transparent"></p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full gap-x-2 border pr-2 md:flex">
                            <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
                                <div className="w-full pt-[56%]">
                                    <div className="absolute inset-0">
                                        <div className="bg-slate-100/10 rounded animate-pulse h-full w-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                                <div className="h-12 w-12 shrink-0 md:hidden">
                                    <div className="bg-slate-100/10 animate-pulse h-full w-full rounded-full"></div>
                                </div>
                                <div className="w-full pt-1 md:pt-0">
                                    <h6 className="mb-1 mt-2 text-sm w-full h-5 rounded font-semibold bg-slate-100/10 animate-pulse text-transparent"></h6>
                                    <p className="mb-0.5 mt-2 w-2/3 rounded h-4 text-sm bg-slate-100/10 animate-pulse text-transparent"></p>
                                    <p className="mb-0.5 mt-2 w-1/2 rounded h-4 text-sm bg-slate-100/10 animate-pulse text-transparent"></p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full gap-x-2 border pr-2 md:flex">
                            <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
                                <div className="w-full pt-[56%]">
                                    <div className="absolute inset-0">
                                        <div className="bg-slate-100/10 rounded animate-pulse h-full w-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                                <div className="h-12 w-12 shrink-0 md:hidden">
                                    <div className="bg-slate-100/10 animate-pulse h-full w-full rounded-full"></div>
                                </div>
                                <div className="w-full pt-1 md:pt-0">
                                    <h6 className="mb-1 mt-2 text-sm w-full h-5 rounded font-semibold bg-slate-100/10 animate-pulse text-transparent"></h6>
                                    <p className="mb-0.5 mt-2 w-2/3 rounded h-4 text-sm bg-slate-100/10 animate-pulse text-transparent"></p>
                                    <p className="mb-0.5 mt-2 w-1/2 rounded h-4 text-sm bg-slate-100/10 animate-pulse text-transparent"></p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full gap-x-2 border pr-2 md:flex">
                            <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
                                <div className="w-full pt-[56%]">
                                    <div className="absolute inset-0">
                                        <div className="bg-slate-100/10 rounded animate-pulse h-full w-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                                <div className="h-12 w-12 shrink-0 md:hidden">
                                    <div className="bg-slate-100/10 animate-pulse h-full w-full rounded-full"></div>
                                </div>
                                <div className="w-full pt-1 md:pt-0">
                                    <h6 className="mb-1 mt-2 text-sm w-full h-5 rounded font-semibold bg-slate-100/10 animate-pulse text-transparent"></h6>
                                    <p className="mb-0.5 mt-2 w-2/3 rounded h-4 text-sm bg-slate-100/10 animate-pulse text-transparent"></p>
                                    <p className="mb-0.5 mt-2 w-1/2 rounded h-4 text-sm bg-slate-100/10 animate-pulse text-transparent"></p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full gap-x-2 border pr-2 md:flex">
                            <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
                                <div className="w-full pt-[56%]">
                                    <div className="absolute inset-0">
                                        <div className="bg-slate-100/10 rounded animate-pulse h-full w-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                                <div className="h-12 w-12 shrink-0 md:hidden">
                                    <div className="bg-slate-100/10 animate-pulse h-full w-full rounded-full"></div>
                                </div>
                                <div className="w-full pt-1 md:pt-0">
                                    <h6 className="mb-1 mt-2 text-sm w-full h-5 rounded font-semibold bg-slate-100/10 animate-pulse text-transparent"></h6>
                                    <p className="mb-0.5 mt-2 w-2/3 rounded h-4 text-sm bg-slate-100/10 animate-pulse text-transparent"></p>
                                    <p className="mb-0.5 mt-2 w-1/2 rounded h-4 text-sm bg-slate-100/10 animate-pulse text-transparent"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (!status || video)
        return <div className="flex w-full h-screen flex-col gap-y-4 px-16 py-4 rounded bg-slate-100/10 animate-pulse"></div>

    const videoPlayerOptions = {
        controls: true,
        responsive: true,
        fluid: true,
        sources: [
            {
                src: video?.videoFile,
                type: "video/mp4",
            }
        ]
    }

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle layer events here for example: 
        player.on("waiting", () => {
            videojs.log("player is waiting");
        })
    }

}

export default VideoDetail

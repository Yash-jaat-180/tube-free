import React from "react";
import { useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getUserChannalProfile } from '../app/Slice/userSlice';
import ChannelProfileAtom from '../components/Atom/ChannelProfileAtom';

function Channel({ owner = false }) {
    const [profile, setProfile] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { username } = useParams();
    const logedInUsername = useSelector((state) => state.auth.userData?.username);

    useEffect(() => {
        if (!owner && logedInUsername === username) navigate(`/channel/${logedInUsername}`);
        if (!username) return;
        dispatch(getUserChannalProfile(username)).then((res) => {
            setProfile(res.payload);
        })
        console.log("profile is : ", profile);
    }, [username, logedInUsername]);

    const tabList = [
        { name: "Videos", route: "" },
        { name: "Playlists", route: "playlists" },
        { name: "Tweets", route: "tweets" },
        { name: "Subscribed", route: "subscribed" },
        { name: "About", route: "about" },
    ]
    return profile ? (
        <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
            {/* Cover Image */}
            <div className="relative min-h-[150px] w-full pt-[16.28%]">
                <div className="absolute inset-0 overflow-hidden">
                    <img src={profile?.coverImage} alt={profile?.username} />
                </div>
            </div>

            <div className="px-4 pb-4">
                {/* Channel Metadata */}
                <ChannelProfileAtom profile={profile} owner={owner} />
                {/* Tab List */}
                <ul className="no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px]">
                    {tabList?.map((item) => (
                        <li className="w-full">
                            <NavLink
                                to={item.route}
                                end
                                className={({ isActive }) =>
                                    `${isActive
                                        ? " bg-white/90 border-[#ae7aff] text-black rounded-t"
                                        : "text-[#ae7aff] "
                                    } w-full text-center flex justify-center border-b-2  px-3 py-1.5`
                                }
                            >
                                <span className=" inline-block mx-auto ">{item.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <Outlet />
            </div>
        </section>
    ) : (
        <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
            {/* Cover Image Skeleton */}
            <div className="relative min-h-[150px] w-full pt-[16.28%] bg-slate-100/10 animate-pulse">
                <div className="absolute inset-0 overflow-hidden"></div>
            </div>

            <div className="px-4 pb-4">
                {/* Channel Metadata Skeleton */}
                <div className="flex flex-wrap gap-4 pb-4 pt-6">
                    <div className="relative -mt-12 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full bg-slate-100/10 animate-pulse"></div>
                    <div className="mr-auto inline-block">
                        <div className="h-5 w-32 bg-slate-100/10 rounded animate-pulse"></div>
                        <div className="mt-2 h-3 w-24 bg-slate-100/10 rounded animate-pulse"></div>
                        <div className="mt-2 h-3 w-40 bg-slate-100/10 rounded animate-pulse"></div>
                    </div>
                    <div className="inline-block">
                        <div className="inline-flex min-w-[145px] justify-end">
                            <div className="h-10 w-32 bg-slate-100/10 rounded animate-pulse"></div>
                        </div>
                    </div>
                </div>

                {/* List Options Skeleton */}
                <ul className="no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px]">
                    <li className="w-full">
                        <div className="h-10 w-full bg-slate-100/10 rounded animate-pulse"></div>
                    </li>
                    <li className="w-full">
                        <div className="h-10 w-full bg-slate-100/10 rounded animate-pulse"></div>
                    </li>
                    <li className="w-full">
                        <div className="h-10 w-full bg-slate-100/10 rounded animate-pulse"></div>
                    </li>
                    <li className="w-full">
                        <div className="h-10 w-full bg-slate-100/10 rounded animate-pulse"></div>
                    </li>
                    <li className="w-full">
                        <div className="h-10 w-full bg-slate-100/10 rounded animate-pulse"></div>
                    </li>
                </ul>

                {/* Outlet Skeleton */}
                <div className="h-64 w-full bg-slate-100/10 rounded animate-pulse"></div>
            </div>
        </section>
    )
}

export default Channel

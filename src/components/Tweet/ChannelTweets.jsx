import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { createTweet, getTweet } from '../../app/Slice/tweetSlice';
import { toast } from 'react-toastify';
import TweetAtom from './TweetAtom';
import MyChannelEmptyTweet from './MyChannelEmptyTweet';
import EmptyTweet from './EmptyTweet';

function ChannelTweets({ owner = false }) {
    const dispatch = useDispatch();
    let { username } = useParams();

    const { data, status } = useSelector(({ tweet }) => tweet);
    let userId = useSelector(({ user }) => user.userData?._id);
    const { status: authStatus, userData: currentUser } = useSelector(({ auth }) => auth);

    const [localTweets, setLocalTweets] = useState(null);
    const { register, handleSubmit, reset, setFocus } = useForm();

    useEffect(() => {
        if (owner) {
            userId = currentUser?._id;
        }
        if (!userId) return;
        dispatch(getTweet(userId)).then((res) => {
            if (res.meta.requestStatus == "fulfilled") setLocalTweets(res.payload);
        });
    }, [username, userId, authStatus]);

    function addTweet(data) {
        if (!data.tweet.trim()) {
            toast.error("Content is required");
            setFocus("tweet");
            return;
        } else if (data.tweet.trim()?.length < 10) {
            toast.error("Minimum 10 characters are required");
            setFocus("tweet");
            return;
        } else if (data.tweet.trim()?.length > 500) {
            toast.error("Maximum 500 characters are allowed");
            setFocus("tweet");
            return;
        }
        console.log(data);
        dispatch(createTweet({ data })).then(() => {
            getTweet(currentUser?._id);
            reset();
        })
    }
    if (!localTweets) {
        return (
            <section className="w-full py-1 px-3 pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
                <div className="mt-2 border pb-2 text-transparent bg-slate-100/10 rounded animate-pulse">
                    <div className="mb-2 h-12 w-full resize-none border-none px-3 pt-2"></div>

                    <div className="flex items-center justify-end gap-x-3 px-3">
                        <div className="w-20 h-10 bg-slate-100/20 rounded animate-pulse"></div>
                    </div>
                </div>
                <hr className=" border-[#ae7aff]/0 animate-pulse my-2" />
                <div className=" px-1">
                    <div className="flex justify-between ">
                        {/* comment content */}
                        <span className="flex w-full gap-x-4 ">
                            {/* avatar */}
                            <div className="mt-2 h-12 w-12 shrink-0 ">
                                <div className="h-full w-full rounded-full border-white bg-slate-100/10 animate-pulse"></div>
                            </div>
                            {/* Content */}
                            <div className="block w-full">
                                <div className="flex items-center">
                                    <span className="bg-slate-100/10 rounded animate-pulse w-44 h-6 mr-1"></span>
                                    <span className="bg-slate-100/10 rounded animate-pulse w-16 h-6"></span>
                                </div>
                                <div className="bg-slate-100/10 rounded animate-pulse w-32 mt-1 h-4"></div>
                                <p className="my-1 text-[14px]">
                                    <div className="text-transparent h-6 bg-slate-100/10 rounded animate-pulse w-[50%] outline-none border-b-[1px] border-transparent"></div>
                                </p>
                            </div>
                        </span>
                    </div>
                    <hr className="my-2 border-slate-100/50 animate-pulse" />
                </div>{" "}
                <div className=" px-1">
                    <div className="flex justify-between ">
                        {/* comment content */}
                        <span className="flex w-full gap-x-4 ">
                            {/* avatar */}
                            <div className="mt-2 h-12 w-12 shrink-0 ">
                                <div className="h-full w-full rounded-full border-white bg-slate-100/10 animate-pulse"></div>
                            </div>
                            {/* Content */}
                            <div className="block w-full">
                                <div className="flex items-center">
                                    <span className="bg-slate-100/10 rounded animate-pulse w-44 h-6 mr-1"></span>
                                    <span className="bg-slate-100/10 rounded animate-pulse w-16 h-6"></span>
                                </div>
                                <div className="bg-slate-100/10 rounded animate-pulse w-32 mt-1 h-4"></div>
                                <p className="my-1 text-[14px]">
                                    <div className="text-transparent h-6 bg-slate-100/10 rounded animate-pulse w-[50%] outline-none border-b-[1px] border-transparent"></div>
                                </p>
                            </div>
                        </span>
                    </div>
                    <hr className="my-2 border-slate-100/50 animate-pulse" />
                </div>{" "}
                <div className=" px-1">
                    <div className="flex justify-between ">
                        {/* comment content */}
                        <span className="flex w-full gap-x-4 ">
                            {/* avatar */}
                            <div className="mt-2 h-12 w-12 shrink-0 ">
                                <div className="h-full w-full rounded-full border-white bg-slate-100/10 animate-pulse"></div>
                            </div>
                            {/* Content */}
                            <div className="block w-full">
                                <div className="flex items-center">
                                    <span className="bg-slate-100/10 rounded animate-pulse w-44 h-6 mr-1"></span>
                                    <span className="bg-slate-100/10 rounded animate-pulse w-16 h-6"></span>
                                </div>
                                <div className="bg-slate-100/10 rounded animate-pulse w-32 mt-1 h-4"></div>
                                <p className="my-1 text-[14px]">
                                    <div className="text-transparent h-6 bg-slate-100/10 rounded animate-pulse w-[50%] outline-none border-b-[1px] border-transparent"></div>
                                </p>
                            </div>
                        </span>
                    </div>
                    <hr className="my-2 border-slate-100/50 animate-pulse" />
                </div>{" "}
                <div className=" px-1">
                    <div className="flex justify-between ">
                        {/* comment content */}
                        <span className="flex w-full gap-x-4 ">
                            {/* avatar */}
                            <div className="mt-2 h-12 w-12 shrink-0 ">
                                <div className="h-full w-full rounded-full border-white bg-slate-100/10 animate-pulse"></div>
                            </div>
                            {/* Content */}
                            <div className="block w-full">
                                <div className="flex items-center">
                                    <span className="bg-slate-100/10 rounded animate-pulse w-44 h-6 mr-1"></span>
                                    <span className="bg-slate-100/10 rounded animate-pulse w-16 h-6"></span>
                                </div>
                                <div className="bg-slate-100/10 rounded animate-pulse w-32 mt-1 h-4"></div>
                                <p className="my-1 text-[14px]">
                                    <div className="text-transparent h-6 bg-slate-100/10 rounded animate-pulse w-[50%] outline-none border-b-[1px] border-transparent"></div>
                                </p>
                            </div>
                        </span>
                    </div>
                    <hr className="my-2 border-slate-100/50 animate-pulse" />
                </div>{" "}
                <div className=" px-1">
                    <div className="flex justify-between ">
                        {/* comment content */}
                        <span className="flex w-full gap-x-4 ">
                            {/* avatar */}
                            <div className="mt-2 h-12 w-12 shrink-0 ">
                                <div className="h-full w-full rounded-full border-white bg-slate-100/10 animate-pulse"></div>
                            </div>
                            {/* Content */}
                            <div className="block w-full">
                                <div className="flex items-center">
                                    <span className="bg-slate-100/10 rounded animate-pulse w-44 h-6 mr-1"></span>
                                    <span className="bg-slate-100/10 rounded animate-pulse w-16 h-6"></span>
                                </div>
                                <div className="bg-slate-100/10 rounded animate-pulse w-32 mt-1 h-4"></div>
                                <p className="my-1 text-[14px]">
                                    <div className="text-transparent h-6 bg-slate-100/10 rounded animate-pulse w-[50%] outline-none border-b-[1px] border-transparent"></div>
                                </p>
                            </div>
                        </span>
                    </div>
                    <hr className="my-2 border-slate-100/50 animate-pulse" />
                </div>{" "}
                <div className=" px-1">
                    <div className="flex justify-between ">
                        {/* comment content */}
                        <span className="flex w-full gap-x-4 ">
                            {/* avatar */}
                            <div className="mt-2 h-12 w-12 shrink-0 ">
                                <div className="h-full w-full rounded-full border-white bg-slate-100/10 animate-pulse"></div>
                            </div>
                            {/* Content */}
                            <div className="block w-full">
                                <div className="flex items-center">
                                    <span className="bg-slate-100/10 rounded animate-pulse w-44 h-6 mr-1"></span>
                                    <span className="bg-slate-100/10 rounded animate-pulse w-16 h-6"></span>
                                </div>
                                <div className="bg-slate-100/10 rounded animate-pulse w-32 mt-1 h-4"></div>
                                <p className="my-1 text-[14px]">
                                    <div className="text-transparent h-6 bg-slate-100/10 rounded animate-pulse w-[50%] outline-none border-b-[1px] border-transparent"></div>
                                </p>
                            </div>
                        </span>
                    </div>
                    <hr className="my-2 border-slate-100/50 animate-pulse" />
                </div>{" "}
                <div className=" px-1">
                    <div className="flex justify-between ">
                        {/* comment content */}
                        <span className="flex w-full gap-x-4 ">
                            {/* avatar */}
                            <div className="mt-2 h-12 w-12 shrink-0 ">
                                <div className="h-full w-full rounded-full border-white bg-slate-100/10 animate-pulse"></div>
                            </div>
                            {/* Content */}
                            <div className="block w-full">
                                <div className="flex items-center">
                                    <span className="bg-slate-100/10 rounded animate-pulse w-44 h-6 mr-1"></span>
                                    <span className="bg-slate-100/10 rounded animate-pulse w-16 h-6"></span>
                                </div>
                                <div className="bg-slate-100/10 rounded animate-pulse w-32 mt-1 h-4"></div>
                                <p className="my-1 text-[14px]">
                                    <div className="text-transparent h-6 bg-slate-100/10 rounded animate-pulse w-[50%] outline-none border-b-[1px] border-transparent"></div>
                                </p>
                            </div>
                        </span>
                    </div>
                    <hr className="my-2 border-slate-100/50 animate-pulse" />
                </div>
                <div className=" px-1">
                    <div className="flex justify-between ">
                        {/* comment content */}
                        <span className="flex w-full gap-x-4 ">
                            {/* avatar */}
                            <div className="mt-2 h-12 w-12 shrink-0 ">
                                <div className="h-full w-full rounded-full border-white bg-slate-100/10 animate-pulse"></div>
                            </div>
                            {/* Content */}
                            <div className="block w-full">
                                <div className="flex items-center">
                                    <span className="bg-slate-100/10 rounded animate-pulse w-44 h-6 mr-1"></span>
                                    <span className="bg-slate-100/10 rounded animate-pulse w-16 h-6"></span>
                                </div>
                                <div className="bg-slate-100/10 rounded animate-pulse w-32 mt-1 h-4"></div>
                                <p className="my-1 text-[14px]">
                                    <div className="text-transparent h-6 bg-slate-100/10 rounded animate-pulse w-[50%] outline-none border-b-[1px] border-transparent"></div>
                                </p>
                            </div>
                        </span>
                    </div>
                    <hr className="my-2 border-slate-100/50 animate-pulse" />
                </div>
            </section>
        );
    }

    let tweets = data || localTweets;

    if (!status && !tweets) {
        return (
            <div className="flex w-full h-screen flex-col gap-y-4 px-16 py-4 rounded bg-slate-100/10 animate-pulse"></div>
        );
    }

    return (
        <>
            {owner && (
                <form onSubmit={handleSubmit(addTweet)} className="mt-2 border pb-2">
                    <textarea
                        {...register("tweet")}
                        className="mb-2 h-10 w-full resize-none border-none bg-transparent px-3 pt-2 outline-none"
                        placeholder="Write a tweet"
                    ></textarea>

                    <div className="flex items-center justify-end gap-x-3 px-3">
                        {/* Emoji button */}
                        <button type="button" className="inline-block h-5 w-5 hover:text-[#ae7aff]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                ></path>
                            </svg>
                        </button>
                        {/* Cancel button */}
                        <button
                            type="button"
                            onClick={() => reset()}
                            className="py-1 rounded-xl px-3 hover:text-black hover:bg-slate-500"
                        >
                            cancel
                        </button>
                        {/* send button */}
                        <button type="submit" className="bg-[#ae7aff] px-3 py-2 font-semibold text-black">
                            Send
                        </button>
                    </div>
                </form>
            )}
            {tweets?.length > 0 ? (
                <ul className="py-4">
                    {tweets.map((tweet) => (
                        <TweetAtom key={tweet._id} tweet={tweet} owner={owner} />
                    ))}
                </ul>
            ) : owner ? (
                <MyChannelEmptyTweet />
            ) : (
                <EmptyTweet />
            )}
        </>
    )
}

export default ChannelTweets

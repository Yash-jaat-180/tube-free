import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteTweet, updateTweet } from "../../app/Slice/tweetSlice";
import { Link } from "react-router-dom";
import { formatTimestamp } from "../../helper/formatFigures";
import LikeComponent from "../Atom/LikeComponent";
import Button from "../Atom/Button";


function TweetAtom({ tweet, owner, authStatus }) {
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState(tweet?.content);
    const dispatch = useDispatch();
    const inputRef = useRef();

    useEffect(() => {
        if (isEditing) inputRef.current.focus();
    }, [isEditing]);

    function handleCancel() {
        setIsEditing(false);
        setContent(tweet.content);
    }

    function handleEditing() {
        setIsEditing(true);
    }

    function handleUpdate() {
        if (!content.trim()) {
            toast.warning("Please enter some message");
            return;
        } else if (content.trim()?.length < 10) {
            toast.error("Minimum 10 characters are required");
            return;
        } else if (content.trim()?.length > 500) {
            toast.error("Maximum 500 characters are allowed");
            return;
        }
        dispatch(updateTweet({ tweetId: tweet._id, data: { tweet: content } }))
        setIsEditing(false);
    }

    function handleDelete() {
        dispatch(deleteTweet({ tweetId: tweet._id }));
    }

    return (
        <>
            <li className="flex gap-3 relative border-b border-gray-700 py-4 last:border-b-transparent">
                <div className="h-14 w-14 shrink-0">
                    <Link to={`${owner ? "" : "/user/" + tweet.owner?.username}`}>
                        <img
                            src={tweet.owner?.avatar}
                            alt={tweet.owner?.username}
                            className="h-full w-full rounded-full"
                        />
                    </Link>
                </div>
                <div className="w-full ">
                    <h4 className="mb-1 flex items-center gap-x-2">
                        <span className="font-semibold">
                            <Link to={`${owner ? "" : "/user/" + tweet.owner?.username}`}>
                                {tweet.owner?.fullName}
                            </Link>
                        </span>

                        <span className="inline-block text-sm text-gray-400">
                            {formatTimestamp(tweet.createdAt)}
                        </span>
                    </h4>
                    <p className="mb-2">
                        {!isEditing && <span>{content}</span>}
                        {isEditing && (
                            <input
                                ref={inputRef}
                                type="text"
                                name="tweet"
                                onChange={(e) => setContent(e.target.value)}
                                disabled={!owner || !isEditing}
                                className=" w-full bg-transparent outline-none border-b-[1px] border-transparent enabled:border-[#ae7aff] focus:border-[#ae7aff]"
                                value={content}
                            />
                        )}
                    </p>
                    <LikeComponent
                        tweetId={tweet._id}
                        isLiked={tweet.isLiked}
                        totalLikes={tweet.totalLikes}
                        isDisLiked={tweet.isDisLiked}
                        totalDisLikes={tweet.totalDisLikes}
                        authStatus={authStatus}
                    />
                </div>
                {/* Tweet controls - Only Owner */}
                {owner && (
                    <form className="absolute bottom-2 right-2 flex size-fit items-end">
                        <span className="flex justify-end">
                            {/* Delete and Cancel button */}
                            <Button
                                type="button"
                                onClick={() => {
                                    isEditing ? handleCancel() : handleDelete();
                                }}
                                className={` rounded-3xl pt-0 bg-transparent hover:border hover:border-b-white disabled:cursor-not-allowed text-white text-sm font-semibold px-1 pb-1 mr-2 ${isEditing ? "hover:bg-gray-700" : "hover:bg-red-400 hover:text-black "
                                    }`}
                            >
                                {isEditing ? "Cancel" : "Delete"}
                            </Button>

                            {/* Edit & Update Button */}
                            <Button
                                type="button"
                                onClick={() => {
                                    isEditing ? handleUpdate() : handleEditing();
                                }}
                                disabled={isEditing ? tweet.content === content || !content.trim() : false}
                                className="rounded-3xl pt-0 bg-[#ae7aff] disabled:bg-gray-800 disabled:text-white disabled:cursor-not-allowed hover:bg-[#b48ef1] text-sm text-black font-semibold border border-b-white px-2 pb-1"
                            >
                                {isEditing ? "Update" : "Edit"}
                            </Button>
                        </span>
                    </form>
                )}
            </li>
        </>
    );
}

export default TweetAtom;
import React, { useEffect, useRef, useState } from 'react'
import { formatTimestamp } from '../../helper/formatFigures'
import LikeComponent from '../Atom/LikeComponent'
import Button from '../Atom/Button';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteComment, getVideoComments, updateComment } from '../../app/Slice/commentSlice';

function CommentAtom({ comment, videoId, ownerAvatar = "" }) {
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState(comment?.content);
    const dispatch = useDispatch();
    const inputRef = useRef();

    console.log(comment);
    useEffect(() => {
        if(isEditing) inputRef.current.focus();
    }, [isEditing])

    function handleCancel(){
        setIsEditing(false);
        setContent(comment.content);
    }
    function handleEditing(){
        setIsEditing(true);
    }
    function handleUpdate(){
        if(!content.trim()){
            toast.warning("please enter some message");
            return;
        }
        dispatch(updateComment({commentId: comment._id, data: { content}}));
        setIsEditing(false);
    }

    function handleDelete(){
        dispatch(deleteComment( {commentId: comment._id })).then(() => {
            dispatch(getVideoComments(videoId));
        })
    }
    return (
        <div className="flex justify-between">
            <span className="flex w-full gap-x-4 ">
                <div className="mt-2 h-11 w-11 shrink-0 border-white">
                    <Link to={`/user/${comment.owner?.username}`}>
                        <img
                            src={comment.owner?.avatar}
                            alt={comment.owner?.username}
                            className="h-full w-full rounded-full"
                        />
                    </Link>
                </div>
                {/* Content  */}
                <div className="block w-full">
                    <p className="flex items-center text-gray-200 text-xs">
                        {comment.owner?.fullName} · {" "}
                        <span className="text-xs">{formatTimestamp(comment.createdAt)}</span>
                    </p>
                    <p className="text-xs text-gray-200">
                        <Link to={`/user/${comment.owner?.username}`}>@{comment.owner?.username}</Link>
                    </p>
                    <p className="my-1 text-[14px]">
                        <input
                            ref={inputRef}
                            type="text"
                            name="content"
                            onChange={(e) => setContent(e.target.value)}
                            disabled={!comment.isOwner || !isEditing}
                            className=" w-[70%] bg-transparent outline-none border-b-[1px] border-transparent enabled:border-[#ae7aff] focus:border-[#ae7aff]"
                            value={content}
                        />
                    </p>
                    {/* <LikesComponent commentId={comment._id} /> */}
                    <div className='flex justify-between'>
                    <span
                        className={`flex items-center overflow-hidden rounded-lg max-w-fit h-fit text-xs relative`}
                    >
                        <LikeComponent
                            commentId={comment._id}
                            isLiked={comment.isLiked}
                            totalLikes={comment.likesCount}
                            isDisLiked={comment.isDisLiked}
                            totalDisLikes={comment.disLikesCount}
                        />
                        {/* likedby owner */}
                        {comment.isLikedByVideoOwner && (
                            <div className="w-fit border border-transparent hover:border-slate-300 rounded-lg ml-[3px] flex items-center justify-center">
                                <Link to={`/watch/${videoId}`}>
                                    <img
                                        src={ownerAvatar}
                                        alt={ownerAvatar}
                                        className=" h-[22px] w-[22px] rounded-lg"
                                    />
                                    <span className={`inline-block w-3 absolute bottom-0 right-0`}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="red"
                                            stroke="black"
                                            strokeWidth="1"
                                            aria-hidden="true"
                                        >
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        )}
                    </span>
                    {comment.isOwner && (
                        <form className="flex items-end">
                            <span className=" flex justify-end">
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
                                    disabled={isEditing ? comment.content === content || !content.trim() : false}
                                    className="rounded-3xl pt-0 bg-[#ae7aff] disabled:bg-gray-800 disabled:text-white disabled:cursor-not-allowed hover:bg-[#b48ef1] text-sm text-black font-semibold border border-b-white px-2 pb-1"
                                >
                                    {isEditing ? "Update" : "Edit"}
                                </Button>
                            </span>
                        </form>
                    )}
                    </div>
                </div>
            </span>
        </div>
    )
}

export default CommentAtom

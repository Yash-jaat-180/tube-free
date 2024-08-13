import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function AddComment() {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const loginPopupDialog = useRef();

    const {status: authStatus} = useSelector(({ auth }) => auth);
    const {status, data} = useSelector((state) => state.comment);
    return (
        <div>
            <div class="block">
                <h6 class="mb-4 font-semibold text-white p-2">573 Comments</h6>
                <form className='flex w-full rounded-lg bg-transparent border py-2 px-2'>
                    <input
                        type="text"
                        class="w-full rounded-lg border-none  bg-transparent px-2 py-1 placeholder-white focus:outline-none text-white"
                        placeholder="Add a Comment" />
                    <button className="rounded-3xl hover:border hover:border-b-white disabled:cursor-not-allowed hover:bg-gray-700 text-white text-sm font-semibold px-2 pb-1 mr-2">cancel</button>
                    <button
                        type="submit"
                        className="rounded-3xl bg-[#ae7aff] disabled:bg-gray-800 hover:bg-[#b48ef1] text-sm text-black font-semibold border border-b-white px-2 pb-1"
                    >
                        Comment
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddComment

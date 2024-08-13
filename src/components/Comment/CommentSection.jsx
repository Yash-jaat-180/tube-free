import React from 'react'
import AddComment from './AddComment'
import CommentList from './CommentList'

function CommentSection() {
    return (
        <div
            class="fixed inset-x-0 top-full z-[60] h-[calc(100%-69px)] overflow-auto rounded-lg border bg-[#121212] p-4 duration-200 hover:top-[67px] peer-focus:top-[67px] sm:static sm:h-auto sm:max-h-[500px] lg:max-h-none">
                <AddComment/>
                <CommentList/>
            </div>
    )
}

export default CommentSection

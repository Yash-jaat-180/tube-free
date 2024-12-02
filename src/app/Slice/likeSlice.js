import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosInstance } from "../../helper/axious.helper"
import { toast } from "react-toastify";
import { parseErrorMessage } from "../../helper/parseErrMsg.helper";
import { parse } from "postcss";

const initialState = {
    loading: false,
    status: false,
    data: null,
}

export const getLikedVideos = createAsyncThunk("like/getLikedVideos", async () => {
    try {
        const response = await axiosInstance.get(`/likes/videos`);
        return response.data.data;
    } catch (error) {
        toast.error(parseErrorMessage(error.response.data));
        console.log(error);
    }
})

export const toggleCommentLike = createAsyncThunk("/like/toggleComment", async ({ commentId }) => {
    try {
        const response = await axiosInstance.post(`/likes/toggle/c/${commentId}`);
        return response.data.data;
    } catch (error) {
        toast.error(parseErrorMessage(error.response.data));
        console.log(error);
    }
})

export const toggleTweetLike = createAsyncThunk("like/toggleTweetLike", async (tweetId) => {
    try {
        const response = await axiosInstance.post(`/likes/t/${tweetId}`);
        return response.data.data;
    } catch (error) {
        toast.error(parseErrorMessage(error.response.data));
        console.log(error);
    }
})

export const toggleVideoLike = createAsyncThunk("like/toggleVideoLike", async (videoId) => {
    try {
        const response = await axiosInstance.post(`/likes/v/${videoId}`);
        return response.data.data;

    } catch (error) {
        toast.error(parseErrorMessage(error.response.data));
        console.log(error);
    }
})

export const toggleLike = createAsyncThunk("like/toggleLike", async ({ qs, toggleLike }) => {
    try {
        const response = await axiosInstance.post(`/likes?toggleLike=${toggleLike}&${qs}`);
        toast.success(response.data.message);
        return response.data.data;
    } catch (error) {
        toast.error(parseErrorMessage(error.response.message));
        console.log(error);
    }
});

const likeSlice = createSlice({
    name: "like",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getLikedVideos.pending, (state) => {
            state.loading = true;
            state.data = null;
        });
        builder.addCase(getLikedVideos.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.status = true;
        });
        builder.addCase(getLikedVideos.rejected, (state) => {
            state.loading = false;
            state.status = false;
        });
        // toggle like
        builder.addCase(toggleLike.pending, (state) => {
            state.loading = true;
            state.data = null;
        });
        builder.addCase(toggleLike.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.status = true;
        });
        builder.addCase(toggleLike.rejected, (state) => {
            state.loading = false;
            state.status = false;
        });
        // toggle comment like
        builder.addCase(toggleCommentLike.pending, (state) => {
            state.loading = true;
            state.data = null;
        });
        builder.addCase(toggleCommentLike.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.status = true;
        });
        builder.addCase(toggleCommentLike.rejected, (state) => {
            state.loading = false;
            state.status = false;
        });
        // toggle TweetLike
        builder.addCase(toggleTweetLike.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(toggleTweetLike.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.status = true;
        });
        builder.addCase(toggleTweetLike.rejected, (state) => {
            state.loading = false;
            state.status = false;
        });
        // toggle VideoLike
        builder.addCase(toggleVideoLike.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(toggleVideoLike.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.status = true;
        });
        builder.addCase(toggleVideoLike.rejected, (state) => {
            state.loading = false;
            state.status = false;
        });
    }
})

export default likeSlice.reducer;
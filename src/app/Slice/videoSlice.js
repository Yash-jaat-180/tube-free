import { createAsyncThunk, createSlice, isAction } from "@reduxjs/toolkit"
import { axiosInstance } from "../../helper/axious.helper";
import { toast } from "react-toastify";
import parseErrorMessage from "../../helper/parseErrMsg.helper"

const initialState = {
    loading: false,
    status: false,
    data: null,
}

export const publishVideo = createAsyncThunk("video/publishVideo", async ({ data }, { signal }) => {
    const formData = new FormData();
    for (const key in data) formData.append(key, data[key]);

    formData.append("thumbnail", data.thumbnail[0]);
    formData.append("videoFile", data.videoFile[0]);

    const controller = new AbortController();
    signal.addEventListener("abort", () => {
        controller.abort();
    });

    try {
        const response = await axiosInstance.post(`/videos`, formData, {
            signal: controller.signal,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        toast.success(response.data.message);
        return response.data.data;
    } catch (error) {
        if (axiosInstance.isCancel(error)) {
            toast.error("Video Upload cancelled");
        } else {
            toast.error(parseErrorMessage(error.response.data));
            throw error;
        }
        console.log("Video Upload cancelled");
        throw error;
    }
});

export const getVideo = createAsyncThunk("video/getVideo", async (videoId) => {
    try {
        const response = await axiosInstance.get(`videos/${videoId}`);

        return response.data.data;
    } catch (error) {
        toast.error(parseErrorMessage(error.response.data));
        console.log(error);
        throw error;
    }
})

export const updateVideo = createAsyncThunk("video/updateVideo", async ({ videoId, data }) => {
    const formData = new FormData();

    for (const key in data) formData.append("key", data[key]);

    if (data.thumbnail) formData.append("thumbnail", data.thumbnail[0]);

    try {
        const response = await axiosInstance.patch(`/videos/${videoId}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
        toast.success(response.data.message);
    } catch (error) {
        toast.error(parseErrorMessage(error.response.data));
        console.log(error);
        throw error;
    }
});

export const deleteVideo = createAsyncThunk("video/deleteVideo", async (videoId) => {
    try {
        const response = await axiosInstance.delete(`/videos/${videoId}`);
        toast.success(response.data.message);
    } catch (error) {
        toast.error(parseErrorMessage(error.response.data));
        console.log(error);
        throw error;
    }
});

export const updateView = createAsyncThunk("video/updateView", async (videoId) => {
    try {
        const response = await axiosInstance.patch(`/videos/view/${videoId}`);
    } catch (error) {
        toast.error(parseErrorMessage(error.response.data));
        console.log(error);
        throw error;
    }
});

export const getAllVideos = createAsyncThunk("video/getAllVideos", async (userId) => {
    try {
        const response = await axiosInstance.get(`/videos?userId=${userId}`);
        //toast.success(response.data.message);
        return response.data.data;
    } catch (error) {
        toast.error(parseErrorMessage(error.response.data));
        console.log(error);
        throw error;
    }
});

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        emptyVideosState: (state, action) => {
            console.log("state.data: ", state.data);
            state.data = null;
            console.log("state.data: ", state.data);
        }
    },
    // Publish Video
    extraReducers: (builder) => {
        builder.addCase(publishVideo.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(publishVideo.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.status = true;
        });
        builder.addCase(publishVideo.rejected, (state) => {
            state.loading = false;
            state.status = false;
        });

        // Get Video
        builder.addCase(getVideo.pending, (state) => {
            state.loading = true;
            state.data = null;
        });
        builder.addCase(getVideo.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.status = true;
        });
        builder.addCase(getVideo.rejected, (state) => {
            state.loading = false;
            state.status = false;
        });

        // delete Video
        builder.addCase(deleteVideo.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteVideo.fulfilled, (state, action) => {
            state.loading = false;
            // state.data = null;
            state.status = true;
        });
        builder.addCase(deleteVideo.rejected, (state) => {
            state.loading = false;
            state.status = false;
        });

        //update Video
        builder.addCase(updateVideo.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateVideo.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.status = true;
        });
        builder.addCase(updateVideo.rejected, (state) => {
            state.loading = false;
            state.status = false;
        });
    }
})

export default videoSlice.reducer;
export const { emptyVideosState } = videoSlice.actions

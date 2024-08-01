import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosInstance } from "../../helper/axious.helper";
import { toast } from "react-toastify";
import { builders } from "prettier/doc.js";

const initialState = {
    loading: false,
    status: false,
    data: {videos: [], pagingInfo: {}},
}

export const getAllVideosByOptions = createAsyncThunk("pagingVideos/getAllVideosByOption", async ({...queryData}, {signal}) => {
    try {
        // Structure Query
        const queryString = "?" + Object.entries(queryData)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join("&");
    
        const controller = new AbortController();
        signal.addEventListener("abort", () => controller.abort())
    
        const response = await axiosInstance.get(`/videos/all/option${queryString}`, {signal: controller.signal});
    
        return response.data.data;
    } catch (error) {
        toast.error(error.response.data);
        console.log(error);
        throw error;
    }
});


const paginationSlice = createSlice({
    name: "pagingVideos",
    initialState,
    reducers: {
        emptyPagingVideosData: (state, action) => {
            state.data = {videos: [], pagingInfo: {}};
        },
    },
    extraReducers: (builder) => {
        // Get all videos by option
        builder.addCase(getAllVideosByOptions.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllVideosByOptions.fulfilled, (state, action) => {
            state.loading = false;
            const {videos, pagingInfo} = action.payload;
            state.data.videos = action.meta.arg.page == 1 ? videos : [...state.data.videos, ...videos];
            state.data.pagingInfo = pagingInfo;
            state.status = true;
        });

        builder.addCase(getAllVideosByOptions.rejected, (state) => {
            state.loading = false;
            state.status = false;
        })
    }
});

export default paginationSlice.reducer;
export const { emptyPagingVideosData } = paginationSlice.actions;
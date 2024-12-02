import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosInstance } from "../../helper/axious.helper"
import { toast } from "react-toastify";
import { parseErrorMessage } from "../../helper/parseErrMsg.helper";

const initialState = {
    loading: false,
    status: false,
    data: {},
}

export const getChannalStats = createAsyncThunk("dashboard/getChannalStats", async () => {
    try {
        const response = await axiosInstance.get('/dashboard/stats');
        return response.data.data;
    } catch (error) {
        toast.error(parseErrorMessage(error.response.data));
        console.log(error);
        throw error;
    }
})

export const getChannalVideos = createAsyncThunk("dashboard/getChannalVideos", async () => {
    try {
        const response = await axiosInstance.get('/dashboard/videos');
        toast.success(response.data.message);
        return response.data.data;
    } catch (error) {
        toast.error(parseErrorMessage(error.response.data));
        console.log(error);
        throw error;
    }
})

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getChannalStats.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getChannalStats.fulfilled, (state, action) => {
            state.loading = false;
            state.data.channelStates = action.payload;
            state.status = true;
        });
        builder.addCase(getChannalStats.rejected, (state) => {
            state.loading = false;
            state.status = false;
        });

        // get ChannalVideos
        builder.addCase(getChannalVideos.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getChannalVideos.fulfilled, (state, action) => {
            state.loading = false;
            state.data.channelVideos = action.payload;
            state.status = true;
        });
        builder.addCase(getChannalVideos.rejected, (state) => {
            state.loading = false;
            state.status = false;
        });

    }
})

export default dashboardSlice.reducer;
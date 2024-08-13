import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../helper/axious.helper";
import { toast } from "react-toastify";
import { parseErrorMessage } from "../helper/parseErrMsg.helper";

const initialState = {
    loading: false,
    status: false,
    data: null,
}

export const toggleSubscription = createAsyncThunk(
    "subscription/toggleSubscription",
    async (channelId) => {
        try {
            const response = await axiosInstance.patch(`/subscriptions/c/${channelId}`);
            toast.success(response.data.message);
            return response.data.data;
        } catch (error) {
            toast.error(parseErrorMessage(error.response.data));
            console.log(error);
        }
    }
);

export const getChannelSubscribers = createAsyncThunk(
    "subscription/getChannelSubscribers",
    async (channelId) => {
        try {
            const response = await axiosInstance.get(`/subscriptions/c/${channelId}`);
            //toast.success(response.data.message);
            return response.data.data;
        } catch (error) {
            toast.error(parseErrorMessage(error.response.data));
            console.log(error);
        }
    }
);

export const getSubscribedChannels = createAsyncThunk(
    "subscription/getSubscribedChannels",
    async (subscriberId) => {
        try {
            const response = await axiosInstance.get(`/subscriptions/u/users/${subscriberId}`);
            //toast.success(response.data.message);
            return response.data.data;
        } catch (error) {
            toast.error(parseErrorMessage(error.response.data));
            console.log(error);
        }
    }
);

const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState,
    extraReducers: (builder) => {
        // toggle subscription
        builder.addCase(toggleSubscription.pending, (state) => {
            // state.loading = true;
        });
        builder.addCase(toggleSubscription.fulfilled, (state, action) => {
            // state.loading = false;
            // state.data = action.payload;
            // state.status = true;
        });
        builder.addCase(toggleSubscription.rejected, (state) => {
            // state.loading = false;
            // state.status = false;
        });

        // get Channel Subscribers
        builder.addCase(getChannelSubscribers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getChannelSubscribers.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.status = true;
        });
        builder.addCase(getChannelSubscribers.rejected, (state) => {
            state.loading = false;
            state.status = false;
        });
        // get Subscribed Channels
        builder.addCase(getSubscribedChannels.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getSubscribedChannels.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.status = true;
        });
        builder.addCase(getSubscribedChannels.rejected, (state) => {
            state.loading = false;
            state.status = false;
        });
    }
})

export default subscriptionSlice.reducer;
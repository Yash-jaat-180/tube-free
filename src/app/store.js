import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slice/userSlice";
import authSlice from "./Slice/authSlice";
import paginationSlice from "./Slice/paginationSlice";
import commentSlice from "./Slice/commentSlice";
import dashboardSlice from "./Slice/dashboardSlice";
import healthSlice from "./Slice/healthSlice";
import likeSlice from "./Slice/likeSlice";
import playlistSlice from "./Slice/playlistSlice";
import subscriptionSlice from "./subscriptionSlice";
import tweetSlice from "./Slice/tweetSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        auth: authSlice,
        pagingVideos: paginationSlice,
        comment: commentSlice,
        dashboard: dashboardSlice,
        heathCheck: healthSlice,
        like: likeSlice,
        playlist: playlistSlice,
        subscription: subscriptionSlice,
        tweet: tweetSlice,
    }
})

export default store
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slice/userSlice";
import authSlice from "./Slice/authSlice";
import paginationSlice from "./Slice/paginationSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        auth: authSlice,
        pagingVideos: paginationSlice,
    }
})

export default store
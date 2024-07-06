import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slice/userSlice";
import authSlice from "./Slice/authSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        auth: authSlice
    }
})

export default store
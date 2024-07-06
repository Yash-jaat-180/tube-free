import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helper/axious.helper";
import { toast, ToastContainer } from "react-toastify";
import { parseErrorMessage } from "../../helper/parseErrMsg.helper";

const initialState = {
    status: false,
    userData: null,
    loading: false
}

export const login = createAsyncThunk('auth/login', async (data) => {
    try {
        const response = await axiosInstance.post('/users/login', data)
        toast.success(response.data.message + "🤩")
        console.log(response.data.data)
        return response.data.data.user
    } catch (error) {
        console.log(error.message)
        toast.error(error.message || parseErrorMessage(error.response.data))
    }
})

export const logout = createAsyncThunk('/auth/logout', async () => {
    try {
        const response = await axiosInstance.post('/users/logout');
        toast.success(response.data.message)
        console.log(response.data)
    } catch (error) {
        toast.error(error.message)
    }
})


const authSlice = createSlice({
    name: "auth",
    initialState,
    // For login
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true
            state.userData = {}
            state.status = false
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false
            state.userData = action.payload
            state.status = true
        })
        builder.addCase(login.rejected, (state) => {
            state.loading = false
            state.status = false
        })
    },

    // For logout
    extraReducers: (builder) => {
        builder.addCase(logout.pending, (state) => {
            state.loading = true
        }),
        builder.addCase(logout.fulfilled, (state, action) => {
            state.loading = false
            state.userData = action.payload
            state.status = false
        }),
        builder.addCase(logout.rejected, (state) =>{
            state.loading = true
        })
    }
})

export default authSlice.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosInstance } from "../../helper/axious.helper.js"
import { toast } from "react-toastify"
import { parseErrorMessage } from "../../helper/parseErrMsg.helper.js"


const initialState = { loading: false, status: false, userData: null }

export const register = createAsyncThunk('user/register', async (data) => {
    try {
        const formData = new FormData();

        for (const key in data) {
            formData.append(key, data[key])
        }
        formData.append('avatar', data.avatar[0])

        if (data.coverImage) {
            formData.append('coverImage', data.coverImage[0])
        }

        console.log(formData.avatar)
        const response = await axiosInstance.post('/users/register', formData)
        if (!response) {
            console.log("Data not registered")
        }
        console.log(response)
        toast.success("Account created successfully")
        return response.data.data
    } catch (error) {
        toast.error(error.response.data.message || parseErrorMessage(error.response.data))
        console.log(error)
    }
})

export const getUserChannalProfile = createAsyncThunk('user/channalProfile', async (username) => {
    try {
        const response = await axiosInstance.get(`/users/c/${username}`);
        toast.success(response.data.data.message)
        return response.data.data
    } catch (error) {
        toast.error(parseErrorMessage(error.response.data));
    }
})

export const getAboutChannel = createAsyncThunk("user/getAboutChannel", async (username) => {
    try {
        const response = await axiosInstance.get(`/about/user/${username}`);
        //toast.success(response.data.message);
        return response.data.data;
    } catch (error) {
        toast.error(parseErrorMessage(error.response.data));
        console.log(error);
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState,

    // register 
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.loading = true
            state.status = false
            state.data = {}
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.loading = false
            state.status = true
            state.data = action.payload
        })
        builder.addCase(register.rejected, (state) => {
            state.loading = false
            state.status = false
        })
    },
    // get User channal Profile


    extraReducers: (builder) => {
        builder.addCase(getUserChannalProfile.pending, (state) => {
            state.loading = true
            state.status = false
            state.userData = null
        })
        builder.addCase(getUserChannalProfile.fulfilled, (state, action) => {
            state.loading = false
            state.status = true
            state.userData = action.payload
        })
        builder.addCase(getUserChannalProfile.rejected, (state) => {
            state.loading = false
            state.status = false
        })
    }
})

export default userSlice.reducer
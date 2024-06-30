import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosInstance } from "../../helper/axious.helper.js"
import { toast } from "react-toastify"
import { parseErrorMessage } from "../../helper/parseErrMsg.helper.js"


const initialState = {loading: false, status: false, userData: null}

export const register = createAsyncThunk('user/register', async (data) => {
    try {
        const formData = new FormData()
    
        for( const key in data ){
            formData.append(key, data[key])
        }
        formData.append('avatar', data.avatar[0])
        
        if(data.coverImage){
            formData.append('avatar', data.avatar[0])
        }

        const response = await axiosInstance.post('/users/register', formData)
        if(!response){
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

const userSlice = createSlice({
    name: 'user',
    initialState,
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
    }
})

export default userSlice.reducer
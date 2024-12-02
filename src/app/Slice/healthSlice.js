import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { axiosInstance } from "../../helper/axious.helper"
import { toast } from "react-toastify"

const initialState = {
    loading: false,
    status: false,
}

export const healthCheck = createAsyncThunk("health/healthCheck", async () => {
    try {
        const response = await axiosInstance.get(`/healthcheck`);
        return response.data.data;
    } catch (error) {
        toast.error("Oops? Our server is Sick... ");
        console.log(error, "Oops our server is Suff... ");
    }
});

const healthSlice = createSlice({
    name: "health",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(healthCheck.pending, (state) => {
            state.loading = true;
            state.status = false;
        });
        builder.addCase(healthCheck.fulfilled, (state) => {
            state.loading = false;
            state.status = true;
        });
        builder.addCase(healthCheck.rejected, (state) => {
            state.loading = false;
            state.status = false;
        });
    }
})

export default healthSlice.reducer;
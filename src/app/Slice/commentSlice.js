import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosInstance } from "../../helper/axious.helper"
import { toast } from "react-toastify";
import { parseErrorMessage } from "../../helper/parseErrMsg.helper";

const initialState = {
    loading: false,
    data: null,
    status: false,
}

//TODO - Write the write controller for the getVideoComments function
export const getVideoComments = createAsyncThunk("comment/getVideoComments", async (videoId) => {
    try {
        const response = await axiosInstance.get(`/comments/${videoId}`);
        return response.data.data;
    } catch (error) {
        toast.error(parseErrorMessage(error.response.data));
        console.log(error);
        throw error;
    }
});

export const addComment = createAsyncThunk("comment/addComment", async ({ videoId, content }) => {
    try {
        const response = await axiosInstance.post(`/comments/${videoId}`, { content });
        return response.data.data;
    } catch (error) {
        toast.error(parseErrorMessage(error.response.data));
        console.log(error);
        throw error;
    }
})

export const deleteComment = createAsyncThunk("comment/deleteComment", async ({ commentId }) => {
    try {
        const response = await axiosInstance.delete(`/comments/c/${commentId}`);
        toast.success(response.data.data);
        return response.data.data;
    } catch (error) {
        toast.error(parseErrorMessage(error.response.data));
        console.log(error);
        throw error;
    }
})

export const updateComment = createAsyncThunk("comment/updateComment", async ({ commentId, data }) => {
    try {
        const response = await axiosInstance.patch(`/comments/c/${commentId}`, data);

        toast.success(response.data.message);
        return response.data.data;
    } catch (error) {
        toast.error(parseErrorMessage(error.response.data));
        console.log(error);
        throw error;
    }

})

const commentSlice = createSlice({
    name: "comment",
    initialState,
    extraReducers: (builder) => {
        //get Video comments
        builder.addCase(getVideoComments.pending, (state) => {
            state.loading = true;
            state.data = [];
        });
        builder.addCase(getVideoComments.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.status = true;
        })
        builder.addCase(getVideoComments.rejected, (state) => {
            state.loading = false;
            state.status = false;
        })

        // addComments
        builder.addCase(addComment.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addComment.fulfilled, (state, action) => {
            state.loading = false;
            state.data.unshift(action.payload);
            state.status = true;
        });
        builder.addCase(addComment.rejected, (state) => {
            state.loading = false;
            state.status = false;
        });

        // update comment
        builder.addCase(updateComment.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateComment.fulfilled, (state, action) => {
            state.loading = false;
            // state.data = action.payload;
            state.status = true;
        });
        builder.addCase(updateComment.rejected, (state) => {
            state.loading = false;
            state.status = false;
        });
        builder.addCase(deleteComment.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteComment.fulfilled, (state, action) => {
            state.loading = false;
            // state.data = action.payload;
            state.status = true;
        });
        builder.addCase(deleteComment.rejected, (state) => {
            state.loading = false;
            state.status = false;
        });
    }
})

export default commentSlice.reducer;
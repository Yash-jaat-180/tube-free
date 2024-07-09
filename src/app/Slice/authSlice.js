import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

export const getCurrentUser = createAsyncThunk('auth/getCurrentUser', async () => {
    try {
        const response = await axiosInstance.get('users/current-user');
        return response.data.data;
    } catch (error) {
        console.error("Backend error :: GEt CURRENT_USER", error)
    }
})

export const changePassword = createAsyncThunk('auth/changePassword', async (data) => {
    try {
        const response = await axiosInstance.post('/users/change-password', data, {
            headers: {
                "Content-Type": "application/json",
            }
        });
        toast.success(response.data.message)
        return response.data.data;
    } catch (error) {
        toast.error(parseErrorMessage(error.response.data))
        throw error;
    }

})

export const upadateProfile = createAsyncThunk("auth/upadate-profile", async (data) => {
    try {
        const response = await axiosInstance.patch('/users/update-account', data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        toast.success(response.data.message)
        return response.data.data;
    } catch (error) {
        toast.error(parseErrorMessage(error.response.data));
        throw error;
    }
})

export const uploadAvatar = createAsyncThunk("auth/upload-avatar", async ({ data }) => {
    try {
        const response = await axiosInstance.patch('/users/avatar', data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        toast.success(response.data.message)
        return response.data.data;
    } catch (error) {
        toast.error(parseErrorMessage(error.response.data))
        console.log(error)
        throw error
    }
})

export const uploadCoverImage = createAsyncThunk("auth/upload-coverImage", async ({ data }) => {
    try {
        const response = await axiosInstance.patch('/users/cover-image', data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        toast.success(response.data.message)
        return response.data.data;
    } catch (error) {
        toast.error(parseErrorMessage(error.response.data))
        console.log(error)
        throw error
    }
})

export const watchHistory = createAsyncThunk("auth/watch-history", async () => {
    try {
        const response = await axiosInstance.get('/users/history');
        return response.data.data;
    } catch (error) {
        toast.error(parseErrorMessage(error.response.data))
        console.log(error)
        throw error
    }
})

export const userPlaylists = createAsyncThunk("auth/user-playlists", async (userId) => {
    try {
        const response = await axiosInstance.get(`/playlists/user/${userId}`);
        return response.data.data;
    } catch (error) {
        toast.error(parseErrorMessage(error.response.data))
        console.log(error);
        throw error;
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

        // For logout
        builder.addCase(logout.pending, (state) => {
            state.loading = true
        })
        builder.addCase(logout.fulfilled, (state, action) => {
            state.loading = false
            state.userData = action.payload
            state.status = false
        })
        builder.addCase(logout.rejected, (state) => {
            state.loading = true
        })

        // GET CURRENT_USER

        builder.addCase(getCurrentUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getCurrentUser.fulfilled, (state, action) => {
            state.loading = false
            state.status = true
            state.userData = action.payload
        })
        builder.addCase(getCurrentUser.rejected, (state) => {
            state.loading = false
            state.status = false
            state.userData = null
        })

        // change Password 
        builder.addCase(changePassword.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(changePassword.fulfilled, (state) => {
            state.loading = false;
            // state.status = true;
        });
        builder.addCase(changePassword.rejected, (state) => {
            state.loading = false;
        });

        // update Profile
        builder.addCase(upadateProfile.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(upadateProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.userData = action.payload;
            // state.status = true;
        });
        builder.addCase(upadateProfile.rejected, (state) => {
            state.loading = false;
        });

        // upadate coverImage
        builder.addCase(uploadAvatar.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(uploadAvatar.fulfilled, (state, action) => {
            state.loading = false;
            state.userData = action.payload;
        });
        builder.addCase(uploadAvatar.rejected, (state) => {
            state.loading = false;
        });

        // update coverImage
        builder.addCase(uploadCoverImage.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(uploadCoverImage.fulfilled, (state, action) => {
            state.loading = false;
            state.userData = action.payload;
        });
        builder.addCase(uploadCoverImage.rejected, (state) => {
            state.loading = false;
        });
        // get Watch History 
        builder.addCase(watchHistory.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(watchHistory.fulfilled, (state, action) => {
            state.loading = false;
            state.userData.watchHistory = action.payload;
        });
        builder.addCase(watchHistory.rejected, (state) => {
            state.loading = false;
        });

        //get Playlists
        builder.addCase(userPlaylists.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(userPlaylists.fulfilled, (state, action) => {
            state.loading = false;
            state.userData.userPlaylists = action.payload;
        });
        builder.addCase(userPlaylists.rejected, (state) => {
            state.loading = false;
        });
    }

})

export default authSlice.reducer
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import auth from '../../../utils/firebase.config';

const initialState = {
    name: '',
    email: '',
    isLoading: true,
    isError: false,
    error: '',
}

export const createUser = createAsyncThunk(
    'userSlice/createUser',
    async ({ name, email, password }) => {
        const data = await createUserWithEmailAndPassword(auth, email, password )
        await updateProfile(auth.currentUser, {
            displayName: name
        })
        console.log(data);
        return {
            name: data.user.displayName,
            email: data.user.email
        };
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true
            state.name = ''
            state.email = ''
            state.isError = false
            state.error = ''
        }).addCase(createUser.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.name = payload.name
            state.email = payload.email
            state.isError = false
            state.error = ''
        }).addCase(createUser.rejected, (state, { error }) => {
            state.isLoading = false
            state.name = ''
            state.email = ''
            state.isError = true
            state.error = error.message
        })
    }
})

export default userSlice.reducer;
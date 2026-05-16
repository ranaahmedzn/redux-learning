import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        name: 'Mir Hussain',
        email: 'mirhussain@example.com',
    }
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {}
})

export default userSlice.reducer;
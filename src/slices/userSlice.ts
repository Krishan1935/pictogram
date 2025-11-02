import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    user: object | null,
    loading: boolean
}

const initialState: UserState ={
    user: null,
    loading: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const {setUser, setLoading} = userSlice.actions;
export default userSlice.reducer;
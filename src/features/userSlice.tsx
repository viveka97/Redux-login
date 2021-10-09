import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name:"user",
    initialState: {
        user:null
    },

    reducers:{
        login:(state,action) => {
            state.user = action.payload;
             
        },
    },
});

export const {login} = userSlice.actions;

export const selectUser = (state: { user: { user: any; }; }) => state.user.user;

export default userSlice.reducer;

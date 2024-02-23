import { createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
    name: "signin",
    initialState: {
        checkSignIn: false,
        email: "",
    },
    reducers: {
        SignUp(state, action)
        {
            state.checkSignIn = action.payload;
        },
        EmailSignUp(state, action)
        {
            state.email = action.payload;
        }
        
    }
})
export const { SignUp,EmailSignUp } = signInSlice.actions;
export default signInSlice.reducer;
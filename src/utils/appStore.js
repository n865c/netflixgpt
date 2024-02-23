import signInSlice from "./signInSlice";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const appStore = configureStore({
    reducer: {
        signIncheck: signInSlice,
        user:userSlice,
    }
})
export default  appStore;
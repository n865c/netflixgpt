import signInSlice from "./signInSlice";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";

const appStore = configureStore({
    reducer: {
        signIncheck: signInSlice,
        user:userSlice,
        movie:movieSlice,
    }
})
export default  appStore;
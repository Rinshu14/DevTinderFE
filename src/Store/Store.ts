import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slices/User"
import {logger} from "./Middleware/logger"


export const store = configureStore({
    reducer: {
        User: UserSlice
    },

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(logger)
    },

})



export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
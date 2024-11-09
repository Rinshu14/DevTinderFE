import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slices/User"
import { logger } from "./Middleware/logger"
import FeedSlice from "./Slices/Feed"
import ConnectionRequest from "./Slices/ConnectionsRequest"
import ConnectionsSlice from "./Slices/Connections"


export const store = configureStore({
    reducer: {
        User: UserSlice,
        Feed: FeedSlice,
        PendingConnectionRequest: ConnectionRequest,
        Connections: ConnectionsSlice
    },

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(logger)
    },

})



export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
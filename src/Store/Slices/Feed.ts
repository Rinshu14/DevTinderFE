import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { getFeed } from "../../Services/FeedAsync"
import { reviewUser } from "../../Services/RequestsAsync";
import { FeedUser } from "../../Types/User";



interface Feed {
    feed: FeedUser[]
    loading: boolean
    error: string
}
const initialState: Feed = {
    feed: [],
    loading: false,
    error: '',
};
let FeedSlice = createSlice({
    name: "Feed",
    initialState,
    reducers: {
        addFeed(state) {
            console.log("in feed  " + state)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getFeed.pending, (state) => {
           // console.log("in pending")
            state.loading = true;
        })
        builder.addCase(getFeed.fulfilled, (state: Feed, action: PayloadAction<{ data: FeedUser[], message: string }>) => {
           // console.log(action.payload.data)
            state.feed = action.payload.data
            state.loading = false;
            state.error = ""
        })
        builder.addCase(reviewUser.pending, (state: any, action: any) => {
            console.log("in pending")
        })
        builder.addCase(reviewUser.fulfilled, (state: any, action: PayloadAction<string>) => {
            state.feed = state.feed.filter((item: FeedUser) => item._id !== action.payload)
        })
        builder.addCase(reviewUser.rejected, (state: any, action: any) => {
            console.log("in rejected")
        })

    }



})

export const { addFeed } = FeedSlice.actions

export default FeedSlice.reducer


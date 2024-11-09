import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const getFeed = createAsyncThunk("feed/feed", async (_, thunkAPI) => {

    try {

        let data = await axios.get(`${import.meta.env.VITE_BASEAPIURL}${import.meta.env.VITE_FEEDURL}`, { withCredentials: true })
        return data.data
    }
    catch (err) {
        return thunkAPI.rejectWithValue(err)
    }
})
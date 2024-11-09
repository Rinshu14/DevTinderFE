import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { reject } from "../Utils/Constants";

type data = {
    status: string
    userId: string
}

export const reviewUser = createAsyncThunk("feed/reviewUser", async (data: data, thunkAPI) => {
    try {
        console.log("in review user")
        let res = await axios.post(`${import.meta.env.VITE_BASEAPIURL}${import.meta.env.VITE_REQUESTSEND}${data.status}/${data.userId}`, {}, { withCredentials: true })
       
       console.log(res.data.data.toUserId)
        return res.data.data.toUserId
    }
    catch (err) {
        thunkAPI.rejectWithValue("something went wrong")
    }
},)
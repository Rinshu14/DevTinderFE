import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

type reviewConnectionRequestData = {
    status: string
    reqId: string
}

export const fetchConnectionRequest = createAsyncThunk("connectionRequest/fecthPendingRequest", async (_, thunkAPI) => {
    try {
        let res = await axios.get(`${import.meta.env.VITE_BASEAPIURL}${import.meta.env.VITE_FETCHPENDINGURL}`, { withCredentials: true })
        return res.data
    }
    catch (err) {
        thunkAPI.rejectWithValue(err.message)
    }
})

export const reviewConnectionRequest = createAsyncThunk("connectionRequest/AcceptRequest", async (data: reviewConnectionRequestData, thunkAPI) => {
    try {
        let res = await axios.post(`${import.meta.env.VITE_BASEAPIURL}${import.meta.env.VITE_REVIEWREQUEST}${data.status}/${data.reqId}`, {}, { withCredentials: true })
        console.log(res.data.updatedRequest._id)
        return res.data.updatedRequest._id
    }
    catch (err) {
        thunkAPI.rejectWithValue(err.message)
    }
})

export const fetchConnections = createAsyncThunk("connectionRequest/fecthConnections", async (_, thunkAPI) => {
    try {

      
        let res = await axios.get(`${import.meta.env.VITE_BASEAPIURL}${import.meta.env.VITE_CONNECTIONS}`, { withCredentials: true })
        
      console.log(res.data)
        return res.data.data
    }
    catch (err) {
        thunkAPI.rejectWithValue(err.message)
    }
})
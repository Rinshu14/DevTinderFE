

import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const loginRequest = createAsyncThunk("users/loginStatus", async (data: string, thunkAPI) => {
    try {
        const response = await axios.post("http://localhost:3000/login",
            { emailId: "Akshay@gh.co", password: "Akshay@12" },
            { withCredentials: true })
        return response.data
    }
    catch (err: any) {
        console.log(err)
        const errorMessage = err.response?.data || "Login failed";
        return thunkAPI.rejectWithValue(errorMessage);
    }
})

export default loginRequest

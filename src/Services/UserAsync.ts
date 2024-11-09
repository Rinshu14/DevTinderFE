import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { getThemeFromLocalStorage } from "../Utils/LocalStorage"
import {User} from "../Types/User"
// type User = {
//     userId: string,
//     firstName: string,
//     lastName: string,
//     emailId: string,
//     age?: number
//     gender?: string
//     skills?: string[]
//     theme?: string
//     photo?: string
//     about?: string
// }

type loginRequest = {
    emailId: string,
    password: string
}
export const loginRequest = createAsyncThunk("users/loginStatus", async (data: loginRequest, thunkAPI) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BASEAPIURL}${import.meta.env.VITE_LOGINURL}`,
            data,
            { withCredentials: true })
        return response.data
    }
    catch (err: any) {

        const errorMessage = err.response?.data || "Login failed";
        return thunkAPI.rejectWithValue(errorMessage);
    }
})

export const profileView = createAsyncThunk("users/profileView", async (_, thunkAPI) => {
    try {

        const response = await axios.get(`${import.meta.env.VITE_BASEAPIURL}${import.meta.env.VITE_PROFILEVIEW}`, { withCredentials: true })
        return response.data
    }
    catch (err: any) {



        if (err.status == 401) return thunkAPI.rejectWithValue("user not logged in")

        const errorMessage = err.response?.data || "something Went wrong"
        return thunkAPI.rejectWithValue(errorMessage);
    }

})

export const profileUpdate = createAsyncThunk("users/profileUpdate", async (userData: User, thunkAPI) => {
    try {
        let response = await axios.patch(`${import.meta.env.VITE_BASEAPIURL}${import.meta.env.VITE_PROFILEUPDATE}`, userData, { withCredentials: true })
        console.log(response)
        return response.data
    }
    catch (err: any) {
        
        return thunkAPI.rejectWithValue(err.message);
    }

})

export const logoutRequest = createAsyncThunk("users/logoutRequest", async (userId: string, thunkAPI) => {
    try {
        let theme = getThemeFromLocalStorage(userId)
        console.log(theme)
        const response = await axios.post(`${import.meta.env.VITE_BASEAPIURL}${import.meta.env.VITE_LOGOUTURL}`, { theme }, { withCredentials: true })
        return response.data
    }
    catch (err: any) {
        const errorMessage = err.response?.data || "something Went wrong"
        return thunkAPI.rejectWithValue(errorMessage);
    }
})





import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

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

export const profileView=createAsyncThunk ("users/profileView",async (thunkAPI)=>{
    try{

      const response=await axios.get(`${import.meta.env.VITE_BASEAPIURL}${import.meta.env.VITE_PROFILEVIEW}`,{withCredentials:true})
       return response.data
    }
    catch(err:any)
    {

        console.log(err.status)

        if(err.status==401) return thunkAPI.rejectWithValue("user not logged in")

        const errorMessage=err.response?.data || "something Went wrong"
        return thunkAPI.rejectWithValue(errorMessage);
    }

})






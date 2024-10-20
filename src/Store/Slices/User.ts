import { loginRequest, profileView } from "../../Services/UserAsync"
import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
type User = {
    firstName: string,
    lastName: string,
    email: string,
    age?: number
    gender?: string
    skills?: string[]
    theme?: string
}
interface UserState {
    user: User
    loading: boolean
    error: string
    isLoggedIn: boolean

}

export const UserSlice = createSlice({
    name: "User",
    initialState: {} as UserState,
    reducers: {
        setUser: (state: UserState, action: PayloadAction<User>) => {
            state.user = action.payload
            return state
        },
        setTheme:(state:UserState,action:PayloadAction<string>)=>{

            state.user.theme=action.payload
            
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginRequest.pending, (state) => {
            state.loading = true
            state.error = ""

        })
        builder.addCase(loginRequest.fulfilled, (state, action: PayloadAction<{ data: User, message: string }>) => {

            state.loading = false
            state.error = ""
            state.isLoggedIn = true
            state.user = action.payload.data
            return state
        })
        builder.addCase(loginRequest.rejected, (state, action: any) => {
            state.loading = false
            state.error = action.payload
        })
        builder.addCase(profileView.pending, (state) => {
        
            state.loading = true;
            state.error = ""

        })
        builder.addCase(profileView.fulfilled, (state, action: PayloadAction<{ data: User, message: string }>) => {
            state.loading = false
            state.isLoggedIn = true

           
            state.user = action.payload.data
        })
        builder.addCase(profileView.rejected, (state, action: any) => {
            state.loading = true;
            state.error = action.payload
        })
    },


})
export const { setUser,setTheme } = UserSlice.actions
export default UserSlice.reducer


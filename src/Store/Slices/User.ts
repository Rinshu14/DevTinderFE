import loginRequest from "../../Types/InputBoxPropsTypes"
import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"

type User = {
    firstName: string,
    lastName: string,
    email: string,
    age?: number
    gender?: string
    skills?: string[]
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
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginRequest.pending, (state) => {
            state.loading = true
            state.error = ""
        })
        builder.addCase(loginRequest.fulfilled, (state, action: PayloadAction<{ data: User, message: string }>) => {
            console.log("from fullfilled")
            console.log(action.payload)
            state.loading = false
            state.error = ""
            state.user = action.payload.data

            return state

        })
        builder.addCase(loginRequest.rejected, (state, action) => {

            state.loading = false
            state.error = action.payload
        })
    }
})
export const { setUser } = UserSlice.actions
export default UserSlice.reducer


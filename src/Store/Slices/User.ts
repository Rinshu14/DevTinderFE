import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type User={
    isLoggedIn: boolean
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
  
}

export const UserSlice = createSlice({
    name: "User",
    initialState: {} as UserState,
    reducers: {
        setUser: (state: UserState, action: PayloadAction<User>) => {
        
            state.user = action.payload
            return state
        }
    }
})
export const {setUser}=UserSlice.actions
export default UserSlice.reducer


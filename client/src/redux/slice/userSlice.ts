import { IUser } from '@/constants/commonType';
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    user: IUser;
}

const initialState: AuthState = {
    user: {
        address: '',
        createdAt: "",
        updatedAt: "",
        email: "",
        id: "",
        name: "",
        password: "",
        role: "",
    }
}
export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.user = action.payload
        },
        userLoggedOut: (state) => {
            state.user = {
                address: '',
                createdAt: "",
                updatedAt: "",
                email: "",
                id: "",
                name: "",
                password: "",
                role: "",
            }
        }
    },
})

export const { userLoggedIn, userLoggedOut } = authSlice.actions
export default authSlice.reducer
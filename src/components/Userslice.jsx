import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', name: 'danil', email: 'ama@gmail.com' },
    { id: '2', name: 'deva', email: "dev@gmail.com" }
  ]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers : {
        addUser : (state,action) => {
            state.push(action.payload)
            console.log(action)
        },
        editUser : (state,action) => {
            const {id,name,email} =  action.payload;
            const existingUser = state.find(user => user.id === id)
            if(existingUser){
                existingUser.name =  name;
                existingUser.email = email;
            }
        },
        deleteUser : (state,action) => {
            const {id} = action.payload;
            const existingUser = state.find(user => user.id === id)
            if(existingUser){
                return state.filter(user=> user.id !== id)
            }
        }
    }
})


export const {addUser} = userSlice.actions
export const {editUser, deleteUser} = userSlice.actions
export default userSlice.reducer;
import {createSlice} from '@reduxjs/toolkit'


export const counterSlice = createSlice({
    name: 'mouseTracker',
    initialState: {
        value: -1,
        name: "",
        reloadValue: 0
    },
    reducers:{
        trackMouseDown: (state)=>{
            state.value = 1
        },
        trackMouseUp: (state) =>{
            state.value = 0
        },
        trackMouseReset: (state)=>{
            state.value = -1
        },
        trackElementExp: (state)=>{
            state.name = "Experience"

        },
        trackElementEdu: (state) =>{
            state.name = "Education"
        },
        trackElementAbt: (state)=>{
            state.name = "About"
        },
        trackElementContact: (state)=>{
            state.name = "Contact"
        },
        trackElementReset: (state)=>{
            state.name = ""
        },
        selectName: (state)=>{
            return state.name
        },
        trackReloads: (state)=>{
            state.reloadValue += 1
        },
        resetReloads: (state) =>{
            state.reloadValue = 0
        },
        viewReloads: (state)=>{
            return state.reloadValue
        }

    }
})

export const {viewReloads,trackReloads,resetReloads,selectName, trackMouseDown, trackMouseUp, trackMouseReset, trackElementAbt, trackElementContact,trackElementExp,trackElementEdu, trackElementReset} = counterSlice.actions

export default counterSlice.reducer
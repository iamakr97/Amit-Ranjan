import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    project: null
}

const projectModalSlice = createSlice({
    name: "projectModal",
    initialState,
    reducers: {
        setProjectModalData: (state, actions) => {
            state.project = actions.payload;
        },
        clearProjectModalData: (state, actions) => {
            state.project = null;
        }
    }
})

export const { setProjectModalData, clearProjectModalData } = projectModalSlice.actions;
export default projectModalSlice.reducer;
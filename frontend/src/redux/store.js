import { configureStore } from '@reduxjs/toolkit';
import ProjectModalSlice from './ProjectModalSlice';

export const store = configureStore({
    reducer: {
        projectModal: ProjectModalSlice
    }
})
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    output: null,
    loading: false,
};

const outputSlice = createSlice({
    name: "output",
    initialState,
    reducers: {
        outputStart: (state) => {
            state.loading = true;
        },
        outputSuccess: (state, action) => {
            state.loading = false;
            state.output = action.payload;
        },
        outputFailure: (state) => {
            state.loading = false;
        },
        outputClear : (state) => {
            state.output = null;
        },
    },
});

export const { outputStart, outputSuccess, outputFailure,outputClear } = outputSlice.actions;

export default outputSlice.reducer;


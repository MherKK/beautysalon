import { createSlice } from "@reduxjs/toolkit";


export const stylistSlice = createSlice({
    name: "stylists",
    initialState: [],
    reducers: {
        setInitialState: (state, action) => {
            return state = action.payload.state
        },
        editStylist: (state, action) => {

            return state.map((styler) => {
                if (styler.id === action.payload.id) {
                    return action.payload.styler;
                } else {
                    return styler
                }
            })

        },

    }
})






export default stylistSlice.reducer;
export const { setInitialState, editStylist } = stylistSlice.actions
export const ourTeamList = (state) => state.stylists;
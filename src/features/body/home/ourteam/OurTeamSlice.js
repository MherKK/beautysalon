import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"


export const stylistSlice = createSlice({
    name: "stylists",
    initialState: [],
    reducers: {
        setInitialState: (state, action) => {
            return state = action.payload.state
        },
        editStylist: (state, action) => {
            axios.post("http://localhost:3306/stylists/update-stylist",
                {
                    styler: action.payload.styler
                })
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
import { createSlice } from "@reduxjs/toolkit";
import { dataRef } from "../../../../firebase";


export const stylistSlice = createSlice({
    name: "stylists",
    initialState: [],
    reducers: {
        //inserting data in our redux initial state
        setInitialState: (state, action) => {
            return state = action.payload.state
        },
        // adding styler in the database

        addStylist: (state, action) => {
            let styler = action.payload.styler;
            dataRef.ref('Stylers/' + (styler.name + styler.lastName)).set(styler)
            return [...state, styler]
        },

        // editing the data of the styler in the database
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
export const { setInitialState, addStylist, editStylist } = stylistSlice.actions
export const ourTeamList = (state) => state.stylists;
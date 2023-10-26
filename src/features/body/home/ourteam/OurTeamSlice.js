import { createSlice } from "@reduxjs/toolkit";
import { ourTeam } from "./ourTeam.js";





export const stylistSlice = createSlice({
    name: "stylists",
    initialState: ourTeam,
    reducers: {


    }
})






export default stylistSlice.reducer;
export const ourTeamList = (state) => state.stylists;

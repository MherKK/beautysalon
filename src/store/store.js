import { configureStore } from "@reduxjs/toolkit";
import stylistsReducer from "../features/body/home/ourteam/OurTeamSlice";




const store = configureStore({
    reducer: {
        stylists: stylistsReducer,
    },
});

export default store;


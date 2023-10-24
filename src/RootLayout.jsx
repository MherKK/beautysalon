import { Outlet } from "react-router-dom";
import Header from "./features/header/Header";
import Footer from "./features/footer/Footer";



export default function RootLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
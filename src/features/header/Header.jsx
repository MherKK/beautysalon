import { Link, useMatch, useResolvedPath } from "react-router-dom"; import "./header.css"
import { useEffect, useRef, useState } from "react";
import tab from "../../assets/tab-white.png"

export default function Header() {

    const [showTab, setShowTab] = useState(false);
    const ulRef = useRef("");
    useEffect(() => {
        let hadnler = (e) => {
            if (ulRef.current.contains(e.target)) {
                setShowTab(false)
            }
        }
        document.addEventListener("click", hadnler)
        return () => {
            document.removeEventListener("click", hadnler);
        }
    }, [])

    return (
        <nav className="nav-container">

            <div onClick={(e) => {
                e.preventDefault();
                setShowTab(!showTab)
            }}
                className="nav-tab-btn">
                <img src={tab} />
            </div>
            <div className="logo-button"><Link onClick={() => {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
            }} to="/">H A Z E</Link></div>


            <div
                ref={ulRef}
                className={showTab === false ? "desktop-tab-links two" : "desktop-tab-links active2"}
            >
                <ul className={showTab === false ? "desktop-tab-links" : "desktop-tab-links active"}>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/stylists">Stylists</CustomLink>
                    <CustomLink to="/services/styling">Services</CustomLink>
                    <CustomLink to="/products">Products</CustomLink>
                    <CustomLink to="/appointments/HairStylers">Appointments</CustomLink>
                    <CustomLink to='/contact'>Contact</CustomLink>
                </ul>
            </div>

        </nav>
    )
}





function CustomLink({ to, children, props }) {
    const resolvedPath = useResolvedPath(to).pathname;
    console.log();
    const isActive = useMatch({ path: resolvedPath, end: true });
    return (
        <li className={isActive ? 'active' : ""}>
            <Link to={to} onClick={() => {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
            }} {...props}>
                {children}
            </Link>
        </li>
    );
}

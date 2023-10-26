//import { useState } from "react";
//import EditStylist from "./EditStylist";
import { Link } from "react-router-dom";



export default function Styler({ member }) {

    return (
        <div className="each-member-container" key={member.id}>
            <div>
                <div>
                    <img src={member.image} />
                </div>

                <div>
                    <h3 style={{ marginBottom: 0 }}>{member.name} {member.lastName}</h3>
                    <h5 style={{ margin: 10 }}>Role: {member.role}</h5>
                    <Link onClick={() => {
                        document.body.scrollTop = 0
                        document.documentElement.scrollTop = 0
                    }}
                        to={`/stylists/` + member.name + '-' + member.lastName}
                    >About {member.name}
                    </Link>
                </div>
            </div>
        </div >
    )
}


//const [display, setDisplay] = useState(false);
// const stylerInfo = {
//     name: member.name,
//     lastName: member.lastName,
//     role: member.role,
//     image: member.image,
//     smallDescription: member.smallDescription,
//     Description: member.Description
// }
// const [styler, setStyler] = useState(stylerInfo);


{/* {user === 'admin' && window.location.pathname == '/stylists' &&
                <button
                    className="edit-button"
                    onClick={(e) => {
                        setDisplay(!display)
                    }}
                >Edit Styler
                </button>
            } */
}

{/* {display === true &&
                <EditStylist
                    display={display}
                    setStyler={setStyler}
                    styler={styler}
                    team={team}
                    setTeam={setTeam}
                    setDisplay={setDisplay}
                    member={member}
                />} */
}

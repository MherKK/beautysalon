import { useState } from "react";
import { Link } from "react-router-dom";
import AddStylist from "./AddStylist";

export default function Styler({ member, team, setTeam, user }) {

    const [display, setDisplay] = useState(false);
    const stylerInfo = {
        id: member.id,
        name: member.name,
        lastName: member.lastName,
        role: member.role,
        image: member.image,
        smallDesc: member.smallDesc,
        description: member.description
    }
    const [styler, setStyler] = useState(stylerInfo);

    return (
        <div className="each-member-container" key={member.id}>

            {user === 'admin' && window.location.pathname == '/stylists' &&
                <button
                    className="edit-button"
                    onClick={(e) => {
                        setDisplay(!display)

                    }}
                >Edit Styler
                </button>
            }


            <div>
                <div>
                    <img src={member.image} />
                </div>

                <div>
                    <h3>{member.name} {member.lastName}</h3>
                    <h5>Role: {member.role}</h5>
                    <Link onClick={() => {
                        document.body.scrollTop = 0
                        document.documentElement.scrollTop = 0
                    }}
                        to={`/stylists/` + member.id}
                    >About {member.name}
                    </Link>
                </div>
            </div>

            {display === true && <AddStylist
                display={display}
                setStyler={setStyler}
                styler={styler}
                team={team}
                setTeam={setTeam}
                setDisplay={setDisplay}
                member={member}
            />}

        </div >
    )
}
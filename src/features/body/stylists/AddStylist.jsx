import { useDispatch } from "react-redux";
import { editStylist } from "../home/ourteam/OurTeamSlice";
import "./addEditStylist.css"
export default function AddStylist({ display, setStyler, styler, team, setTeam, setDisplay, member }) {
    const dispatch = useDispatch();
    return (
        <div className="edit-add-styler-container">
            <div className="edit-styler-container">
                <button onClick={() => {
                    setDisplay(!display);
                    document.body.style.overflowY = "visible"
                    setStyler(member)
                }
                }>Cancel</button>
                <div style={{ marginTop: '20px' }}>
                    <label>Edit Name:</label>
                    <input type="text" value={styler.name} onChange={(e) => setStyler({ ...styler, name: e.target.value })} />
                </div>
                <div>
                    <label>Edit Last Name:</label>
                    <input value={styler.lastName} onChange={(e) => setStyler({ ...styler, lastName: e.target.value })} type="text" />
                </div>
                <div>
                    <label>Edit Role:</label>
                    <select value={styler.role} onChange={(e) => {
                        setStyler({ ...styler, role: e.target.value })
                    }}>
                        <option value="Hair Colorist" >Hair Colorist</option>
                        <option value='Hair Brusher'>Hair Brusher</option>
                        <option value="Make Up">Make Up</option>
                    </select>
                </div>

                <div>
                    <label>Edit Small Description</label>
                    <textarea value={styler.smallDesc} onChange={(e) => setStyler({ ...styler, smallDesc: e.target.value })} />
                </div>

                <div>
                    <label>Edit Big Description</label>
                    <textarea value={styler.description} onChange={(e) => setStyler({ ...styler, description: e.target.value })} />
                </div>

                <span>
                    <label>Change Image:</label>
                    <input type="file" onChange={(e) => {

                        let reader = new FileReader();
                        reader.readAsDataURL(e.target.files[0]);
                        reader.onload = () => {
                            setStyler({ ...styler, image: reader.result })
                        }

                    }} />
                </span>

                <span>
                    <button onClick={() => {
                        setDisplay(!display)
                        dispatch(editStylist({
                            id: member.id,
                            styler: styler
                        }))

                    }}>Update Styler</button>
                    <button onClick={() => {
                        setTeam(team.filter(id => id.id !== member.id))
                        setDisplay(!display)

                    }}>Delete Styler</button>
                </span>

            </div>
        </div>
    )
}
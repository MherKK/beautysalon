// import { useDispatch } from "react-redux";
// import "./addEditStylist.css"

// export default function EditStylist({ display, setStyler, styler, team, setTeam, setDisplay, member }) {
//     const dispatch = useDispatch();
//     return (
//         <div className="edit-add-styler-container">
//             <div className="edit-styler-container">
//                 <button className="cancel-edit_button" onClick={() => {
//                     setDisplay(!display);
//                     setStyler(member)
//                 }
//                 }>Cancel</button>
//                 <div id="edit-top_part">
//                     <div className="parent">
//                         <label>Edit Name:</label>
//                         <input className="child" type="text" value={styler.name} onChange={(e) => setStyler({ ...styler, name: e.target.value })} />
//                     </div>
//                     <div>
//                         <label>Edit Last Name:</label>
//                         <input value={styler.lastName} onChange={(e) => setStyler({ ...styler, lastName: e.target.value })} type="text" />
//                     </div>
//                     <div>
//                         <label>Edit Role:</label>
//                         <select value={styler.role} onChange={(e) => {
//                             setStyler({ ...styler, role: e.target.value })
//                         }}>
//                             <option value="Hair Colorist" >Hair Colorist</option>
//                             <option value='Hair Brusher'>Hair Brusher</option>
//                             <option value="Make Up">Make Up</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div>
//                     <label>Edit Small Description</label>
//                     <textarea maxLength={170} value={styler.smallDescription} onChange={(e) => setStyler({ ...styler, smallDescription: e.target.value })} />
//                 </div>

//                 <div>
//                     <label>Edit Big Description</label>
//                     <textarea value={styler.Description} onChange={(e) => setStyler({ ...styler, Description: e.target.value })} />
//                 </div>

//                 <span>
//                     <label>Change Image:</label>
//                     <input type="file" onChange={(e) => {

//                         let reader = new FileReader();
//                         reader.readAsDataURL(e.target.files[0]);
//                         reader.onload = () => {
//                             setStyler({ ...styler, image: reader.result })
//                         }

//                     }} />
//                 </span>

//                 <span>
//                     <button onClick={() => {
//                         setDisplay(!display)



//                     }}>Update Styler</button>
//                     <button onClick={() => {
//                         setTeam(team.filter(id => id.id !== member.id))
//                         setDisplay(!display)

//                     }}>Delete Styler</button>
//                 </span>

//             </div>
//         </div>
//     )
// }
// import { useDispatch } from "react-redux";
// import "./addEditStylist.css"
// import { useState } from "react";
// import { addStylist } from "../home/ourteam/OurTeamSlice";

// export default function AddStylist({ display, setDisplay }) {

//     const dispatch = useDispatch();
//     const stylerInfo = {
//         name: '',
//         lastName: '',
//         role: 'Hair Colorist',
//         image: '',
//         smallDescription: '',
//         Description: ''
//     }
//     const [error, setError] = useState(false);
//     const [styler, setStyler] = useState(stylerInfo);

//     return (
//         <div className="edit-add-styler-container">
//             <div className="edit-styler-container">
//                 <button className="cancel-edit_button" onClick={() => {
//                     setDisplay(!display);
//                     setStyler(stylerInfo)
//                 }
//                 }>Cancel</button>
//                 <div id="edit-top_part">
//                     <div className="parent">
//                         <label>Name:</label>
//                         <input className="child" type="text" value={styler.name} onChange={(e) => setStyler({ ...styler, name: e.target.value })} />
//                     </div>
//                     <div>
//                         <label>Last Name:</label>
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
//                     <label>Small Description</label>
//                     <textarea maxLength={170} value={styler.smallDescription} onChange={(e) => setStyler({ ...styler, smallDescription: e.target.value })} />
//                 </div>

//                 <div>
//                     <label>Big Description</label>
//                     <textarea value={styler.Description} onChange={(e) => setStyler({ ...styler, Description: e.target.value })} />
//                 </div>

//                 <span>
//                     <label>Image:</label>
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

//                         if (styler.name && styler.lastName && styler.Description && styler.image && styler.role && styler.smallDescription !== '') {
//                             setDisplay(!display)
//                             dispatch(addStylist({
//                                 styler: styler
//                             }))
//                         } else {
//                             setError(true)
//                         }
//                     }}>Add Styler</button>

//                 </span>
//                 {error === false ? ' ' : <p style={{ color: 'red' }}>All the fields are required</p>}
//             </div>
//         </div>
//     )
// }
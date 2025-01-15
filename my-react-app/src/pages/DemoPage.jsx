// import React from "react";
// import { useDispatch, useSelector } from "react-redux"
// // import { changeName } from "../store/action"

// export default function DemoPage() {
//     // untuk panggil state di redux
//     const userName = useSelector(state => state.nameUser)

//     // untuk kirim action ke reducer
//     const dispatch = useDispatch()

//     const handleChangeName = (data) => {
//         dispatch(changeName(data))
//     }


//     return(
//         <>
//             <h1>This is Demo Page {userName}</h1>
//             <button onClick={() => handleChangeName("Febri")}>Ganti Nama</button>
//         </>
//     )
// }
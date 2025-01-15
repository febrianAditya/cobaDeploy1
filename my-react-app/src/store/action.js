

// export const changeName = (payload) => {
//     return {
//         type: "CHANGE_USER",
//         payload
//     };
// }


// export const hitDataUser = (dataResponse) => {
//     console.log(dataResponse, "===> ini baru sampai action");
    
//     return async(dispatch) => {
//         dispatch(
//             {
//                 type: "SET_DATA_USER",
//                 payload: dataResponse
//             }
//         )
//     }
// }


// export const hitDetailData = (id) => {
//     console.log("id ==> ", id);
    
//     return async(dispatch) => {
//         try {
//             const res = await fetch("https://jsonplaceholder.typicode.com/users/"+id)
//             const data = await res.json()
//             // console.log(data, "===> FINAL DATA");
//             dispatch({
//                 type: "SET_DATA_DETAIL",
//                 payload: data
//             })
            
//         } catch (error) {
//             console.log(error, "===> INI ERRORNYA GUYS");     
//         }   
//     }
// }


export const rubahNamaStatGlobal = (dataUserParam) => {
    return {
        type: "CHANGE_NAME",
        payload: dataUserParam
    }
}

export const getDataUser = () => {
    const senData = async (dispatch) => {
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/users")
            const result = await data.json()

            dispatch({
                type: "GET_ALL_DATA",
                payload: result
            })

        } catch (error) {
            console.log(error);            
        }
    }

    return senData
}


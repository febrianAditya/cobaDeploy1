Terminologi di redux


1. State,  menyimpan data di aplikasi
2. action, action untuk memanggil function reducers
3. reducer, untuk merubah state
4. dispatch, untuk mengirim action ke store


Step:
1. Install react-redux redux
2. Buat folder store
    2a. buat file "index.js"
    2b. buat file "action.js"
3. define redux di file "index.js"
    3a. import createStore
    3b. bikin initalState
    3c. biki function reducer
        3c1. default jangan lupa return initialState
    3d. jangan lupa di export
4. define action di file "action.js"
5. implemntasikan di react
    5a. import Provider dari react-redux di main.jsx
    5b. import store yang sudah dibuat di folder store ke main.jsx
    5c. setelah kita import tambahin Provider, kita mengapit component App dengan Provider


step:
1. install redux-thunk
2. import {thunk} from "redux-thunk"
3. tmbahim applyMiddlware di import redux
4. createStor tambah applyMiddleware(thunk)
5. bikin action yang asynchronous (jangan salah taruh async)




State ini sifatnya temporary, jika di reload/refresh dia akan hilang statenya

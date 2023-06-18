import counterSlice from "@/app/counter/counterSlice"
import { configureStore } from "@reduxjs/toolkit"

// create store
const store = configureStore({
    reducer : {
        counter: counterSlice
    },
    devTools : true
})

// export store
export default store
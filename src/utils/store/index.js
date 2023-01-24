const { createSlice, configureStore } = require("@reduxjs/toolkit");


const userSlice = createSlice({
	name:"user",
	initialState:{
        searchUser:"",
        page:1,
        perPage:10,
    },
	reducers:{        
        onPageHandler:(state,action)=>{
            state.page = action.payload
        }

    }
}
)


export const userSliceActions = userSlice.actions;

const store = configureStore({
    reducer:{
    user: userSlice.reducer,
}
})


export default store;
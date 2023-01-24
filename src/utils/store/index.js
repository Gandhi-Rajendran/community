const { createSlice, configureStore } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "user",
  initialState: {
    page: 1,
    perPage: 10,
    totalPages: 0,
  },
  reducers: {
    onPageCountHandler: (state, action) => {
      state.page = action.payload;
    },
    onTotalCountHandler: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const userSliceActions = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;

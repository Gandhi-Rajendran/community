const { createSlice, configureStore } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "user",
  initialState: {
    page: 1,
    perPage: 10,
    totalPageCount: 0,
    pages: {},
  },
  reducers: {
    pageCountHandler: (state, action) => {
      state.page = action.payload;
    },
    totalPageCountHandler: (state, action) => {
      state.totalPageCount = action.payload;
    },
    setPageData: (state, action) => {
      const { page, data } = action.payload;
      state.pages[page] = data;
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

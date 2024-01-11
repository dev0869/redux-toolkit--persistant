import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userdata: [],
};
export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    getUser: (state, action) => {
      state.userdata = action.payload;
    },
  },
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: "",
  reducers: {
    setCurrentUser: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export default currentUserSlice.reducer;
export const { setCurrentUser } = currentUserSlice.actions;

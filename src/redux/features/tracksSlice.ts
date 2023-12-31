import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const tracksSlice = createSlice({
  name: "currentDisplayedTracks",
  initialState: [],
  reducers: {
    setCurrentDisplayedTracks: (state, action: PayloadAction<[]>) => {
      return (state = action.payload);
    },
  },
});
export const { setCurrentDisplayedTracks } = tracksSlice.actions;
export default tracksSlice.reducer;

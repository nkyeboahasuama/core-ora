import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const tracksSlice = createSlice({
  name: "tracks",
  initialState: [],
  reducers: {
    setTracks: (state, action: PayloadAction<[]>) => {
      console.log("tracks");
      return (state = action.payload);
    },
  },
});
export const { setTracks } = tracksSlice.actions;
export default tracksSlice.reducer;

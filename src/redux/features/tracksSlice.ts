import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const tracksSlice = createSlice({
  name: "tracks",
  initialState: [],
  reducers: {
    setTracks: (state, action: PayloadAction<[]>) => {
      return (state = action.payload);
    },
  },
});
export const { setTracks } = tracksSlice.actions;
export default tracksSlice.reducer;

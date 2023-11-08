import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const playlistsSlice = createSlice({
  name: "playlists",
  initialState: [],
  reducers: {
    setPlaylists: (state, action: PayloadAction<any>) => {
      state = action.payload;
      console.log("playlists");
      return state;
    },
  },
});

export const { setPlaylists } = playlistsSlice.actions;
export default playlistsSlice.reducer;
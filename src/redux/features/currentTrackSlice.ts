import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITrack } from "../../grooves-player/types";

interface IInitialState {
  recentlyPlayed: ITrack | null;
  playing: boolean;
}

const initialState: IInitialState = {
  recentlyPlayed: null,
  playing: false,
};

const currentTrackSlice = createSlice({
  name: "currentTrack",
  initialState: initialState,
  reducers: {
    setPlaying: (state = initialState, action: PayloadAction<boolean>) => {
      if (action.payload === true) {
        state.playing = true;
      } else {
        state.playing = false;
      }
    },

    setPlayingNowTrack: (
      state = initialState,
      action: PayloadAction<ITrack>
    ) => {
      state.recentlyPlayed = action.payload;
      state.playing = true;
      return state;
    },
  },
});

export const { setPlaying, setPlayingNowTrack } = currentTrackSlice.actions;
export default currentTrackSlice.reducer;

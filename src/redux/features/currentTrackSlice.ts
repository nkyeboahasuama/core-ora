import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITrack } from "../../grooves-player/types";

interface IInitialState {
  recentlyPlayed: ITrack[];
  playing: boolean;
}

const initialState: IInitialState = {
  recentlyPlayed: [],
  playing: false,
};

const currentTrackSlice = createSlice({
  name: "currentTrack",
  initialState: initialState,
  reducers: {
    setRecentPlayedTrack: (
      state = initialState,
      action: PayloadAction<ITrack>
    ) => {
      state.recentlyPlayed.forEach((track) => {
        track.playing = false;
      });
      if (state.recentlyPlayed.length >= 5) {
        state.recentlyPlayed.pop();
      }
      const existingTrack = state.recentlyPlayed.findIndex(
        (track) => track.id === action.payload.id
      );

      if (existingTrack !== -1) {
        const updatedTrack = {
          ...state.recentlyPlayed[existingTrack],
          playing: true,
        };
        state.recentlyPlayed.splice(existingTrack, 1);
        state.recentlyPlayed.unshift(updatedTrack);
      } else {
        const newTrack = { ...action.payload, playing: true };
        state.recentlyPlayed.unshift(newTrack);
      }
    },

    setPlaying: (state = initialState, action: PayloadAction<boolean>) => {
      if (action.payload === true) {
        state.playing = true;
      } else {
        state.playing = false;
      }
    },
  },
});

export const { setRecentPlayedTrack, setPlaying } = currentTrackSlice.actions;
export default currentTrackSlice.reducer;

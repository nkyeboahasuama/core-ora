import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITrack } from "../../grooves-player/types";

type IToogleTrackPlay = "play" | "pause";

interface ICurrentTrack {
  isPlaying: boolean;
  track: ITrack | null;
}

const initialState: ICurrentTrack = {
  isPlaying: false,
  track: null,
};

const currentTrackSlice = createSlice({
  name: "currentTrack",
  initialState: initialState,
  reducers: {
    setCurrentTrack: (state = initialState, action: PayloadAction<ITrack>) => {
      state.track = action.payload;
      console.log(action);
      return state;
    },

    toogleTrackPlay: (
      state = initialState,
      action: PayloadAction<IToogleTrackPlay>
    ) => {
      if (action.payload === "play") {
        state.isPlaying = true;
      } else if (action.payload === "pause") {
        state.isPlaying = false;
      }
      console.log(action.payload);

      return state;
    },
  },
});

export const { setCurrentTrack, toogleTrackPlay } = currentTrackSlice.actions;
export default currentTrackSlice.reducer;

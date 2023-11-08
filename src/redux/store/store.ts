import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "../features/tracksSlice";
import playlistsReducer from "../features/playlistsSlice";

const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    playlists: playlistsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

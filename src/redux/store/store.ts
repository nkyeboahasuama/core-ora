import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "../features/tracksSlice";
import playlistsReducer from "../features/playlistsSlice";
import currentUserReducer from "../features/currentUserSlice";

const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    playlists: playlistsReducer,
    currentUser: currentUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

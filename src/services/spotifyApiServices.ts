import { setPlaylists } from "../redux/features/playlistsSlice";
import { setTracks } from "../redux/features/tracksSlice";
import { AppDispatch } from "../redux/store/store";

class SpotifyApiService {
  private accessToken: string | null;
  constructor() {
    this.accessToken = localStorage.getItem("access_token");
  }

  async getUserTopTracks(dispatch: AppDispatch) {
    try {
      const response = await fetch("https://api.spotify.com/v1/me/top/tracks", {
        headers: {
          Authorization: "Bearer " + this.accessToken,
        },
      });
      const data = await response.json();
      dispatch(setTracks(data.items));
      console.log(data.items);
    } catch (error) {
      console.error(error);
    }
  }

  async getUserPlaylists(dispatch: AppDispatch) {
    try {
      const response = await fetch(
        "https://api.spotify.com/v1/me/playlists?limit=3",
        {
          headers: {
            Authorization: "Bearer " + this.accessToken,
          },
        }
      );
      const data = await response.json();
      dispatch(setPlaylists(data.items));
      console.log(data.items);
    } catch (error) {
      console.error(error);
    }
  }

  async getPlaylistTracks(playlist: any) {
    console.log("yie");
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlist.id}/tracks`,
      {
        headers: {
          Authorization: "Bearer " + this.accessToken,
        },
      }
    );
    const data = await response.json();
    // setPlaylistTracks(data.items);
  }
}
export const spotifyApiService = new SpotifyApiService();

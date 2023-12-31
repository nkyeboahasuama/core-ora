import { ITrack } from "../grooves-player/types";
import { setPlaylists } from "../redux/features/playlistsSlice";
import { setCurrentDisplayedTracks } from "../redux/features/tracksSlice";
import { AppDispatch } from "../redux/store/store";

class SpotifyApiService {
  private get accessToken(): string | null {
    return localStorage.getItem("accessToken");
  }

  private async fetchData(url: string) {
    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer " + this.accessToken,
      },
    });

    if (!response.ok) {
      throw new Error(`Could not fetch data, ${response.status}`);
    }
    return response.json();
  }

  async getUserTopTracks(dispatch: AppDispatch) {
    try {
      const data = await this.fetchData(
        "https://api.spotify.com/v1/me/top/tracks"
      );
      dispatch(setCurrentDisplayedTracks(data.items));
    } catch (error) {
      console.error(error);
    }
  }

  async getUserPlaylists(dispatch: AppDispatch) {
    try {
      const data = await this.fetchData(
        "https://api.spotify.com/v1/me/playlists?limit=3"
      );
      dispatch(setPlaylists(data.items));
    } catch (error) {
      console.error(error);
    }
  }

  async getPlaylistTracks(playlist: any, dispatch: AppDispatch) {
    try {
      const data = await this.fetchData(
        `https://api.spotify.com/v1/playlists/${playlist.id}/tracks`
      );
      const filteredData = data.items.map((item: any) => item.track);
      dispatch(setCurrentDisplayedTracks(filteredData));
    } catch (error) {
      console.log(error);
    }
  }

  async getProfile() {
    try {
      const data = await this.fetchData("https://api.spotify.com/v1/me");
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
export const spotifyApiService = new SpotifyApiService();

import { setPlaylists } from "../redux/features/playlistsSlice";
import { setTracks } from "../redux/features/tracksSlice";
import { AppDispatch } from "../redux/store/store";

class SpotifyApiService {
  private get accessToken(): string | null {
    return localStorage.getItem("accessToken");
  }

  private async fetchData(url: string) {
    console.log(this.accessToken);
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
      dispatch(setTracks(data.items));
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

  async getPlaylistTracks(playlist: any) {
    try {
      const data = await this.fetchData(
        `https://api.spotify.com/v1/playlists/${playlist.id}/tracks`
      );
      return data.items;
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

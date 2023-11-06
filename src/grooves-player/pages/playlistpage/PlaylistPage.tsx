import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../layout/header/Header";

import {
  HeaderOne,
  HeaderThree,
  Normal,
} from "../../shared/atoms/Typography.styled";
import {
  PlaylistHeaderWrapper,
  PlaylistImage,
  PlaylistPageWrapper,
} from "./PlaylistPage.styles";

import SongContainer from "../../shared/songContainer/SongContainer";
import { ProfileDetails } from "../profilepage/ProfilePage.styles";

const PlaylistPage = ({ playlists }: { playlists: [] }) => {
  const [playlist, setPlaylist] = useState<any | null>(null);
  const [playlistTracks, setPlaylistTracks] = useState<[]>([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  let accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    if (id) {
      const playlistRes = playlists[parseInt(id)];
      setPlaylist(playlistRes);
      getPlaylistTracks(playlistRes);
    }
  }, [id]);

  async function getPlaylistTracks(playlist: any) {
    setLoading(true);
    console.log("yie");
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlist.id}/tracks`,
      {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }
    );
    const data = await response.json();
    setLoading(false);
    setPlaylistTracks(data.items);
  }

  return (
    <PlaylistPageWrapper>
      <Header />

      <PlaylistHeaderWrapper>
        {playlist && <PlaylistImage src={playlist.images[1].url} />}
        <ProfileDetails>
          <HeaderThree>Playlist</HeaderThree>
          <HeaderOne style={{ fontSize: "50px" }}>
            {playlist ? `${playlist.name}` : ""}
          </HeaderOne>
          <span>
            {playlist && (
              <>
                <Normal>{playlist.tracks.total} songs</Normal>
                <Normal style={{ fontStyle: "italic" }}>
                  {playlist && playlist.description}
                </Normal>
              </>
            )}
          </span>
        </ProfileDetails>
      </PlaylistHeaderWrapper>

      {loading ? (
        <HeaderOne>Loading...</HeaderOne>
      ) : (
        <>
          {playlistTracks &&
            playlistTracks.map((song: any, idx: number) => (
              <SongContainer song={song.track} key={idx} />
            ))}
        </>
      )}
    </PlaylistPageWrapper>
  );
};

export default PlaylistPage;

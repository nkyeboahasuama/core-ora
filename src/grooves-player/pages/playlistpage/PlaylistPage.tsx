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
import { spotifyApiService } from "../../../services/spotifyApiServices";
import { useAppSelector } from "../../../redux/hooks/hooks";

const PlaylistPage = () => {
  const [playlist, setPlaylist] = useState<any | null>(null);
  const [playlistTracks, setPlaylistTracks] = useState<[]>([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const playlists = useAppSelector((state) => state.playlists);

  useEffect(() => {
    const fetchPlaylistTracks = async () => {
      if (id) {
        const playlistResponse = playlists[parseInt(id)];
        setPlaylist(playlistResponse);
        setLoading(true);

        try {
          const data = await spotifyApiService.getPlaylistTracks(
            playlistResponse
          );
          setPlaylistTracks(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPlaylistTracks();
  }, [id, playlists]);

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
